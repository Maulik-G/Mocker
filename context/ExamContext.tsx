// context/ExamContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

// --- Define your types ---
type MockType = any;
type QuestionType = any;
type ResultsType = any; // You can define this more strictly later

interface ExamState {
  currentExam: MockType | null;
  questions: QuestionType[];
  startTime: number | null;
  userAnswers: { [key:string]: any };
  questionStates: { [key: number]: string };
  currentQuestionIndex: number;
  timeRemaining: number;
  isSubmitted: boolean;
  results: ResultsType | null;
}

interface ExamContextType {
  examState: ExamState;
  startExam: (mock: MockType, questions: QuestionType[]) => void;
  answerQuestion: (questionId: string, answer: any) => void;
  jumpToQuestion: (index: number) => void;
  navigateQuestion: (direction: number) => void;
  toggleMarkForReview: () => void;
  clearResponse: () => void;
  submitExam: () => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

const initialState: ExamState = {
  currentExam: null,
  questions: [],
  startTime: null,
  userAnswers: {},
  questionStates: {},
  currentQuestionIndex: 0,
  timeRemaining: 0,
  isSubmitted: false,
  results: null,
};

export function ExamProvider({ children }: { children: ReactNode }) {
  const [examState, setExamState] = useState(initialState);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    if (examState.currentExam && !examState.isSubmitted) {
      timerIntervalRef.current = setInterval(() => {
        setExamState(prev => {
          if (prev.timeRemaining <= 1) {
            clearInterval(timerIntervalRef.current!);
            // Handle auto-submit
            // We'll just set the state; a useEffect on the exam page can redirect
            return { 
              ...prev, 
              timeRemaining: 0, 
              isSubmitted: true,
              results: calculateResults({ ...prev, timeRemaining: 0 }) // Calculate results on auto-submit
            };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [examState.currentExam, examState.isSubmitted]);

  // --- PRIVATE HELPER (replaces your updateQuestionState) ---
  const getUpdatedQuestionState = (
    index: number,
    userAnswers: { [key:string]: any },
    questions: QuestionType[],
    currentStates: { [key: number]: string }
  ): string => {
    const question = questions[index];
    if (!question) return currentStates[index];
    
    const answer = userAnswers[question.id];
    const hasAnswer = answer !== undefined && 
                      answer !== '' && 
                      (!Array.isArray(answer) || answer.length > 0);
    
    const currentState = currentStates[index];
    // Check if it's marked (don't want to lose this)
    const isMarked = currentState === 'marked' || currentState === 'answered-marked';

    if (hasAnswer && isMarked) return 'answered-marked';
    if (hasAnswer) return 'answered';
    if (isMarked) return 'marked';
    return 'not-answered'; // Visited but no answer
  };

  // --- Helper function (your calculateResults, adapted for context) ---
  const calculateResults = (state: ExamState): ResultsType => {
    const { currentExam, userAnswers, questions, timeRemaining } = state;
    if (!currentExam) return null;

    let totalScore = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    
    const questionResults = questions.map((question: QuestionType) => {
      const userAnswer = userAnswers[question.id];
      
      if (userAnswer === undefined || userAnswer === '' || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
        unattemptedCount++;
        return { question, userAnswer: null, isCorrect: false, marksAwarded: 0 };
      }
      
      let isCorrect = false;
      
      // --- THIS IS YOUR FULL LOGIC ---
      switch(question.type) {
        case 'MCQ_SINGLE':
        case 'TRUE_FALSE':
          isCorrect = userAnswer === question.correctAnswer;
          break;
          
        case 'MCQ_MULTI':
          const correctArray = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
          const userArray = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
          isCorrect = JSON.stringify(correctArray.sort()) === JSON.stringify(userArray.sort());
          break;
          
        case 'FILL_BLANK':
          const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
          isCorrect = correctAnswers.some((ans: string) => 
            ans.toLowerCase().trim() === String(userAnswer).toLowerCase().trim()
          );
          break;
          
        case 'NUMERIC':
          isCorrect = parseFloat(userAnswer) === parseFloat(question.correctAnswer);
          break;
        
        default:
          isCorrect = false;
      }
      // --- END OF YOUR LOGIC ---

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
    const timeTaken = (currentExam.durationMin * 60) - timeRemaining;
    
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
      mock: currentExam
    };
  };


  // --- CONTEXT FUNCTIONS ---

  const startExam = (mock: MockType, questions: QuestionType[]) => {
    const initialStates: { [key: number]: string } = {};
    questions.forEach((q, index) => {
      initialStates[index] = 'not-visited';
    });
    if (initialStates[0]) {
      initialStates[0] = 'not-answered';
    }

    setExamState({
      ...initialState, // Reset state
      currentExam: mock,
      questions: questions,
      startTime: Date.now(),
      questionStates: initialStates,
      timeRemaining: mock.durationMin * 60, // Set timer
      isSubmitted: false,
    });
  };

  // Replaces selectOption, toggleMultiOption, updateFillBlank, etc.
  const answerQuestion = (questionId: string, answer: any) => {
    setExamState(prev => {
      const newAnswers = { ...prev.userAnswers, [questionId]: answer };
      const newStates = { ...prev.questionStates };

      // Update the state for the current question
      newStates[prev.currentQuestionIndex] = getUpdatedQuestionState(
        prev.currentQuestionIndex,
        newAnswers,
        prev.questions,
        newStates
      );

      return {
        ...prev,
        userAnswers: newAnswers,
        questionStates: newStates,
      };
    });
  };

  // Replaces your clearResponse
  const clearResponse = () => {
    setExamState(prev => {
      const currentQuestion = prev.questions[prev.currentQuestionIndex];
      if (!currentQuestion) return prev;
      
      const newAnswers = { ...prev.userAnswers };
      delete newAnswers[currentQuestion.id]; // Remove the answer

      const newStates = { ...prev.questionStates };
      newStates[prev.currentQuestionIndex] = getUpdatedQuestionState(
        prev.currentQuestionIndex,
        newAnswers,
        prev.questions,
        newStates
      );

      return { ...prev, userAnswers: newAnswers, questionStates: newStates };
    });
  };

  // Replaces your toggleMarkForReview
  const toggleMarkForReview = () => {
    setExamState(prev => {
      const newStates = { ...prev.questionStates };
      const currentIndex = prev.currentQuestionIndex;
      const currentState = newStates[currentIndex];

      if (currentState === 'answered' || currentState === 'not-answered') {
        newStates[currentIndex] = currentState === 'answered' ? 'answered-marked' : 'marked';
      } else if (currentState === 'answered-marked' || currentState === 'marked') {
        newStates[currentIndex] = currentState === 'answered-marked' ? 'answered' : 'not-answered';
      }

      return { ...prev, questionStates: newStates };
    });
  };

  // Replaces your jumpToQuestion
  const jumpToQuestion = (index: number) => {
    if (index < 0 || index >= examState.questions.length || index === examState.currentQuestionIndex) return;
    
    setExamState(prev => {
      const newStates = { ...prev.questionStates };
      if (newStates[index] === 'not-visited') {
        newStates[index] = 'not-answered'; // Mark as visited
      }
      return { ...prev, currentQuestionIndex: index, questionStates: newStates };
    });
  };

  // Replaces your navigateQuestion and saveAndNext
  const navigateQuestion = (direction: number) => {
    const newIndex = examState.currentQuestionIndex + direction;
    jumpToQuestion(newIndex); // Use jumpToQuestion logic
  };
  
  // --- New Submit Function (replaces your submitExam) ---
  const submitExam = () => {
    // Stop the timer
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    // Calculate results and update state
    setExamState(prev => {
      const results = calculateResults(prev);
      return {
        ...prev,
        isSubmitted: true,
        results: results,
      };
    });
  };

  const value = {
    examState,
    startExam,
    answerQuestion,
    jumpToQuestion,
    navigateQuestion,
    toggleMarkForReview,
    clearResponse,
    submitExam,
  };

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
}

export function useExam() {
  const context = useContext(ExamContext);
  if (context === undefined) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
}