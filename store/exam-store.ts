import { create } from 'zustand';
import { saveExamResultAction } from '@/app/actions/saveResults';

export type MockType = any;
export type QuestionType = any;
export type ResultsType = any;

interface ExamState {
  currentExam: MockType | null;
  questions: QuestionType[];
  startTime: number | null;
  userAnswers: { [key: string]: any };
  questionStates: { [key: number]: string };
  currentQuestionIndex: number;
  timeRemaining: number;
  isSubmitted: boolean;
  results: ResultsType | null;

  startExam: (mock: MockType, questions: QuestionType[]) => void;
  answerQuestion: (questionId: string, answer: string | string[]) => void;
  jumpToQuestion: (index: number) => void;
  navigateQuestion: (direction: number) => void;
  toggleMarkForReview: () => void;
  clearResponse: () => void;
  submitExam: () => Promise<void>;
  tickTimer: () => void;
}

const getUpdatedQuestionState = (
  index: number,
  userAnswers: { [key: string]: any },
  questions: QuestionType[],
  currentStates: { [key: number]: string }
): string => {
  const question = questions[index];
  if (!question) return currentStates[index];

  const answer = userAnswers[question.id];
  const hasAnswer =
    answer !== undefined && answer !== '' && (!Array.isArray(answer) || answer.length > 0);

  const currentState = currentStates[index];
  const isMarked = currentState === 'marked' || currentState === 'answered-marked';

  if (hasAnswer && isMarked) return 'answered-marked';
  if (hasAnswer) return 'answered';
  if (isMarked) return 'marked';
  return 'not-answered';
};

const calculateResults = (
  currentExam: MockType,
  userAnswers: { [key: string]: any },
  questions: QuestionType[],
  timeRemaining: number
): ResultsType => {
  if (!currentExam) return null;

  let totalScore = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  const questionResults = questions.map((question: QuestionType) => {
    const userAnswer = userAnswers[question.id];

    if (
      userAnswer === undefined ||
      userAnswer === '' ||
      (Array.isArray(userAnswer) && userAnswer.length === 0)
    ) {
      unattemptedCount++;
      return { question, userAnswer: null, isCorrect: false, marksAwarded: 0 };
    }

    let isCorrect = false;

    switch (question.type) {
      case 'MCQ_SINGLE':
      case 'TRUE_FALSE':
        isCorrect = userAnswer === question.correctAnswer;
        break;

      case 'MCQ_MULTI':
        const correctArray = Array.isArray(question.correctAnswer)
          ? question.correctAnswer
          : [question.correctAnswer];
        const userArray = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
        isCorrect = JSON.stringify(correctArray.sort()) === JSON.stringify(userArray.sort());
        break;

      case 'FILL_BLANK':
        const correctAnswers = Array.isArray(question.correctAnswer)
          ? question.correctAnswer
          : [question.correctAnswer];
        isCorrect = correctAnswers.some(
          (ans: string) =>
            ans.toLowerCase().trim() === String(userAnswer).toLowerCase().trim()
        );
        break;

      case 'NUMERIC':
        isCorrect = parseFloat(userAnswer) === parseFloat(question.correctAnswer);
        break;

      default:
        isCorrect = false;
    }

    const marksAwarded = isCorrect ? question.marks : question.negativeMarks;
    totalScore += marksAwarded;
    if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
    }
    return { question, userAnswer, isCorrect, marksAwarded };
  });

  const attemptedCount = correctCount + wrongCount;
  const accuracy = attemptedCount > 0 ? (correctCount / attemptedCount) * 100 : 0;
  const percentage = (totalScore / currentExam.totalMarks) * 100;
  const timeTaken = currentExam.durationMin * 60 - timeRemaining;

  return {
    totalScore,
    maxScore: currentExam.totalMarks,
    percentage,
    correctCount,
    wrongCount,
    unattemptedCount,
    accuracy,
    timeTaken,
    questionResults,
    mock: currentExam,
  };
};

export const useExamStore = create<ExamState>((set, get) => ({
  currentExam: null,
  questions: [],
  startTime: null,
  userAnswers: {},
  questionStates: {},
  currentQuestionIndex: 0,
  timeRemaining: 0,
  isSubmitted: false,
  results: null,

  startExam: (mock, questions) => {
    const initialStates: { [key: number]: string } = {};
    questions.forEach((q, index) => {
      initialStates[index] = 'not-visited';
    });
    if (initialStates[0]) {
      initialStates[0] = 'not-answered';
    }

    set({
      currentExam: mock,
      questions,
      startTime: Date.now(),
      questionStates: initialStates,
      timeRemaining: mock.durationMin * 60,
      isSubmitted: false,
      userAnswers: {},
      currentQuestionIndex: 0,
      results: null,
    });
  },

  answerQuestion: (questionId, answer) => {
    const { userAnswers, questions, questionStates, currentQuestionIndex } = get();
    const newAnswers = { ...userAnswers, [questionId]: answer };
    const newStates = { ...questionStates };

    newStates[currentQuestionIndex] = getUpdatedQuestionState(
      currentQuestionIndex,
      newAnswers,
      questions,
      newStates
    );

    set({
      userAnswers: newAnswers,
      questionStates: newStates,
    });
  },

  clearResponse: () => {
    const { userAnswers, questions, questionStates, currentQuestionIndex } = get();
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const newAnswers = { ...userAnswers };
    delete newAnswers[currentQuestion.id];

    const newStates = { ...questionStates };
    newStates[currentQuestionIndex] = getUpdatedQuestionState(
      currentQuestionIndex,
      newAnswers,
      questions,
      newStates
    );

    set({ userAnswers: newAnswers, questionStates: newStates });
  },

  toggleMarkForReview: () => {
    const { questionStates, currentQuestionIndex } = get();
    const newStates = { ...questionStates };
    const currentState = newStates[currentQuestionIndex];

    if (currentState === 'answered' || currentState === 'not-answered') {
      newStates[currentQuestionIndex] =
        currentState === 'answered' ? 'answered-marked' : 'marked';
    } else if (currentState === 'answered-marked' || currentState === 'marked') {
      newStates[currentQuestionIndex] =
        currentState === 'answered-marked' ? 'answered' : 'not-answered';
    }

    set({ questionStates: newStates });
  },

  jumpToQuestion: (index) => {
    const { questions, currentQuestionIndex, questionStates } = get();
    if (index < 0 || index >= questions.length || index === currentQuestionIndex) return;

    const newStates = { ...questionStates };
    if (newStates[index] === 'not-visited') {
      newStates[index] = 'not-answered';
    }
    set({ currentQuestionIndex: index, questionStates: newStates });
  },

  navigateQuestion: (direction) => {
    const { currentQuestionIndex } = get();
    get().jumpToQuestion(currentQuestionIndex + direction);
  },

  submitExam: async () => {
    const { currentExam, userAnswers, questions, timeRemaining } = get();
    if (!currentExam) return;

    const results = calculateResults(currentExam, userAnswers, questions, timeRemaining);

    if (results) {
      try {
        await saveExamResultAction(results);
      } catch (err: any) {
        console.error('Failed to save results:', err.message);
      }
    }

    set({
      isSubmitted: true,
      results,
    });
  },

  tickTimer: () => {
    const { timeRemaining, currentExam, userAnswers, questions } = get();
    if (timeRemaining <= 1) {
      const results = calculateResults(currentExam!, userAnswers, questions, 0);
      if (results) {
        saveExamResultAction(results).catch((err) => {
          console.error('Failed to auto-save results:', err.message);
        });
      }
      set({ timeRemaining: 0, isSubmitted: true, results });
    } else {
      set({ timeRemaining: timeRemaining - 1 });
    }
  },
}));
