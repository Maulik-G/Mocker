// app/exam/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useExam } from '@/context/ExamContext'; // Import our hook
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Main Exam Page Component
export default function ExamPage() {
  const { examState, jumpToQuestion, navigateQuestion, clearResponse, toggleMarkForReview, answerQuestion } = useExam();
  const router = useRouter();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false); // <-- Add this
  const { currentExam, questions, currentQuestionIndex, userAnswers, questionStates } = examState;

  // Redirect if exam hasn't been started
  useEffect(() => {
    if (!currentExam) {
      router.replace('/mocks'); // Go back to mocks if no exam is active
    }
  }, [currentExam, router]);

  if (!currentExam) {
    return <div>Loading exam...</div>; // Or a loading spinner
  }
    // const currentQuestion = questions[currentQuestionIndex];
    
  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div className="container" style={{padding: "2rem"}}>
        <h1>Error</h1>
        <p>Could not load questions for this exam. Please go back.</p>
        <Link href="/mocks">Back to Mocks</Link>
      </div>
    );
  }

  const total = questions.length;
  const state = questionStates[currentQuestionIndex];
  const isMarked = state === 'marked' || state === 'answered-marked';

  return (
    <div className="exam-container">
      {/* 1. The Sidebar (Palette) */}
      <div className="exam-sidebar">
        <h3 style={{ marginBottom: '1rem' }}>Question Palette</h3>
        <PaletteLegend />
        <div className="question-palette">
          {questions.map((q, index) => (
            <button
              key={index}
              className={`palette-btn ${questionStates[index]} ${index === currentQuestionIndex ? 'active' : ''}`}
              onClick={() => jumpToQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 2. The Main Content */}
      <div className="exam-main">
        <div className="exam-header">
          <div>
            <h2 style={{ margin: 0 }}>{currentExam.title}</h2>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
              Section: {currentQuestion.section}
            </p>
          </div>
          
          {/* Timer Component */}
          <ExamTimer />
          
          <button className="btn btn-danger" onClick={() => setIsSubmitModalOpen(true)}>
            Submit Test
            </button>
        </div>

        <div className="exam-content">
          <div style={{ marginBottom: '1rem', color: 'var(--gray-600)' }}>
            <strong>Question {currentQuestionIndex + 1} of {total}</strong> |
            Marks: +{currentQuestion.marks} |
            Negative: {currentQuestion.negativeMarks}
          </div>

          <div className="question-text">{currentQuestion.text}</div>

          {/* Question Input Component */}
          <QuestionInput 
            question={currentQuestion}
            answer={userAnswers[currentQuestion.id]}
            onAnswer={(answer) => answerQuestion(currentQuestion.id, answer)}
          />
        </div>

        {/* 3. The Controls */}
        <div className="exam-controls">
          <div className="control-left">
            <button className="btn btn-outline" onClick={clearResponse}>
              Clear Response
            </button>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                id="markForReview"
                checked={isMarked}
                onChange={toggleMarkForReview}
              />
              <span>Mark for Review</span>
            </label>
          </div>
          
          <div className="control-right">
            <button
              className="btn btn-outline"
              disabled={currentQuestionIndex === 0}
              onClick={() => navigateQuestion(-1)}
            >
              ← Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigateQuestion(1)} // 'Save & Next' just navigates
              disabled={currentQuestionIndex === total - 1}
            >
              Save &amp; Next →
            </button>
          </div>
        </div>
      </div>
      {isSubmitModalOpen && (
        <SubmitModal 
            onClose={() => setIsSubmitModalOpen(false)} 
        />
        )}
    </div>
  );
}

// --- Sub-Component: Timer ---
// (Replaces your updateTimerDisplay and startTimer logic)
// --- Sub-Component: Timer (Simplified) ---
function ExamTimer() {
  const { examState } = useExam();
  const { timeRemaining } = examState;

  // Format the time
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Determine timer class
  let timerClass = 'timer';
  if (timeRemaining < 300) timerClass = 'timer danger';
  else if (timeRemaining < 600) timerClass = 'timer warning';

  return <div id="examTimer" className={timerClass}>{timeStr}</div>;
}

// --- Sub-Component: Submit Modal ---
function SubmitModal({ onClose }: { onClose: () => void }) {
  const { examState, submitExam } = useExam();
  const router = useRouter();

  // Get stats (this replaces your calculation logic in showSubmitModal)
  const { userAnswers, questions, questionStates } = examState;
  const total = questions.length;

  const answered = Object.values(userAnswers).filter(answer => 
    answer !== undefined && answer !== '' && (!Array.isArray(answer) || answer.length > 0)
  ).length;

  const unanswered = total - answered;

  const marked = Object.values(questionStates).filter(s => 
    s === 'marked' || s === 'answered-marked'
  ).length;

  const handleConfirmSubmit = () => {
    submitExam(); // Call the context function
    onClose(); // Close the modal
    router.push('/results'); // Navigate to results page
  };

  return (
    <div className="modal-overlay" id="submitModal">
      <div className="modal">
        <h3>⚠️ Submit Examination?</h3>
        <div className="modal-content">
          <p style={{ marginBottom: '1rem' }}>Are you sure you want to submit? This action cannot be undone.</p>
          <div style={{ background: 'var(--gray-50)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <p><strong>Answered:</strong> {answered} / {total}</p>
            <p><strong>Marked for Review:</strong> {marked}</p>
            <p><strong>Unanswered:</strong> {unanswered}</p>
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn btn-danger" onClick={handleConfirmSubmit}>Submit Exam</button>
        </div>
      </div>
    </div>
  );
}

// --- Sub-Component: Question Input ---
// (Replaces your renderQuestionInput function)
function QuestionInput({ question, answer, onAnswer }: { question: any, answer: any, onAnswer: (answer: any) => void }) {
  
  switch(question.type) {
    case 'MCQ_SINGLE':
      return (
        <div className="options-container">
          {question.options.map((option: string, index: number) => {
            const optionCode = String.fromCharCode(65 + index); // A, B, C
            const isSelected = answer === optionCode;
            return (
              <div 
                key={optionCode} 
                className={`option ${isSelected ? 'selected' : ''}`} 
                onClick={() => onAnswer(optionCode)}
              >
                <input 
                  type="radio" 
                  name={question.id} 
                  value={optionCode}
                  checked={isSelected} 
                  readOnly 
                />
                <span><strong>{optionCode}.</strong> {option}</span>
              </div>
            );
          })}
        </div>
      );

    case 'MCQ_MULTI':
      const selectedOptions = answer || [];
      
      const toggleMulti = (optionCode: string) => {
        const currentAnswer = selectedOptions;
        let newAnswer;
        if (currentAnswer.includes(optionCode)) {
          newAnswer = currentAnswer.filter((o: string) => o !== optionCode);
        } else {
          newAnswer = [...currentAnswer, optionCode].sort();
        }
        onAnswer(newAnswer);
      };

      return (
        <div className="options-container">
          {question.options.map((option: string, index: number) => {
            const optionCode = String.fromCharCode(65 + index);
            const isSelected = selectedOptions.includes(optionCode);
            return (
              <div 
                key={optionCode} 
                className={`option ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleMulti(optionCode)}
              >
                <input 
                  type="checkbox" 
                  value={optionCode}
                  checked={isSelected}
                  readOnly
                />
                <span><strong>{optionCode}.</strong> {option}</span>
              </div>
            );
          })}
        </div>
      );

    case 'FILL_BLANK':
      return (
        <input 
          type="text" 
          className="input-answer"
          value={answer || ''}
          placeholder="Type your answer here..."
          onChange={(e) => onAnswer(e.target.value)} 
        />
      );

    case 'NUMERIC':
      return (
        <input 
          type="number" 
          className="input-answer"
          value={answer || ''}
          placeholder="Enter numerical answer"
          onChange={(e) => onAnswer(e.target.value)}
          step="any"
        />
      );

    // ... add other cases like TRUE_FALSE
      
    default:
      return <div>Question type not supported.</div>;
  }
}

// --- Sub-Component: Legend ---
function PaletteLegend() {
  return (
    <div className="palette-legend">
      <div className="legend-item">
        <div className="legend-box" style={{ background: 'var(--not-visited)' }}></div>
        <span>Not Visited</span>
      </div>
      <div className="legend-item">
        <div className="legend-box" style={{ background: 'var(--not-answered)' }}></div>
        <span>Not Answered</span>
      </div>
      <div className="legend-item">
        <div className="legend-box" style={{ background: 'var(--answered)' }}></div>
        <span>Answered</span>
      </div>
      <div className="legend-item">
        <div className="legend-box" style={{ background: 'var(--marked)' }}></div>
        <span>Marked for Review</span>
      </div>
      <div className="legend-item">
        <div className="legend-box" style={{ background: 'var(--answered-marked)' }}></div>
        <span>Answered & Marked</span>
      </div>
      
    </div>
  );
}