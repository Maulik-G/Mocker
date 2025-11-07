// app/(main)/review/[resultId]/page.tsx
import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

// --- Helper Component for MCQ Options ---
function McqOption({ text, isSelected, isCorrect }: { text: string, isSelected: boolean, isCorrect: boolean }) {
  let style: React.CSSProperties = {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '0.5rem',
  };

  if (isCorrect) {
    style.backgroundColor = '#d1fae5'; // Green for correct
    style.borderColor = '#10b981';
  } else if (isSelected) {
    style.backgroundColor = '#fee2e2'; // Red for user's wrong answer
    style.borderColor = '#ef4444';
  }

  return <div style={style}>{text}</div>;
}

// --- Helper Component for Text/Numeric Answers ---
function TextAnswer({ userAnswer, correctAnswer, isCorrect }: { userAnswer: string | null, correctAnswer: string, isCorrect: boolean }) {
  const userAnswerStyle: React.CSSProperties = {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '0.5rem',
    backgroundColor: isCorrect ? '#d1fae5' : '#fee2e2',
    borderColor: isCorrect ? '#10b981' : '#ef4444',
  };

  const correctAnswerStyle: React.CSSProperties = {
    padding: '0.75rem',
    border: '1px solid #10b981',
    borderRadius: '5px',
    marginBottom: '0.5rem',
    backgroundColor: '#d1fae5',
  };

  return (
    <div>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>Your Answer:</p>
      <div style={userAnswerStyle}>
        {userAnswer || "(No answer)"}
      </div>
      
      {!isCorrect && (
        <>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>Correct Answer:</p>
          <div style={correctAnswerStyle}>
            {correctAnswer}
          </div>
        </>
      )}
    </div>
  );
}


// --- Main Page Component ---
export default async function ReviewPage({ params }: { params: { resultId: string } }) {
  const { userId } = await auth();
  const { resultId } = params;

  if (!userId) {
    return <div>Not logged in</div>;
  }

  const result = await prisma.examResult.findFirst({
    where: {
      id: resultId,
      userId: userId,
    }
  });

  if (!result) {
    notFound();
  }

  const questionResults = result.questionResults as any[];

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Analysis for: {result.mockTitle}</h1>
      
      {/* --- Summary --- */}
      <div style={{
        display: 'flex', 
        gap: '2rem', 
        padding: '1.5rem', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div><strong>Score:</strong> {result.totalScore} / {result.maxScore} ({result.percentage.toFixed(1)}%)</div>
        <div><strong>Correct:</strong> {result.correctCount}</div>
        <div><strong>Wrong:</strong> {result.wrongCount}</div>
        <div><strong>Unattempted:</strong> {result.unattemptedCount}</div>
      </div>

      {/* --- Question by Question Review --- */}
      <div className="question-review-list">
        {questionResults.map((qr, index) => {
          const question = qr.question;
          const userAnswer = qr.userAnswer;
          const correctAnswer = question.correctAnswer;
          const isCorrect = qr.isCorrect;

          return (
            <div key={question.id} style={{
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              padding: '1.5rem', 
              marginBottom: '1.5rem'
            }}>
              
              <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Question {index + 1}</span>
                {isCorrect ? (
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓ Correct</span>
                ) : (userAnswer ? (
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✗ Incorrect</span>
                ) : (
                  <span style={{ color: '#6b7280', fontWeight: 'bold' }}>− Unattempted</span>
                ))}
              </h3>
              
              <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{question.text}</p>
              
              {/* --- THIS IS THE FIX ---
                Check the question type before rendering options
              */}
              <div className="options-list" style={{ marginTop: '1rem' }}>
                {(question.type === 'MCQ_SINGLE' || question.type === 'MCQ_MULTI') && question.options && (
                  question.options.map((option: string, i: number) => {
                    const optionCode = String.fromCharCode(65 + i); // A, B, C, D
                    const optionText = `${optionCode}. ${option}`;
                    
                    // For multi-select, answers are arrays
                    const isSelected = Array.isArray(userAnswer) 
                      ? userAnswer.includes(optionCode) 
                      : userAnswer === optionCode;
                    
                    const isCorrectOption = Array.isArray(correctAnswer)
                      ? correctAnswer.includes(optionCode)
                      : correctAnswer === optionCode;

                    return (
                      <McqOption
                        key={i}
                        text={optionText}
                        isCorrect={isCorrectOption}
                        isSelected={isSelected}
                      />
                    );
                  })
                )}

                {(question.type === 'FILL_BLANK' || question.type === 'NUMERIC') && (
                  <TextAnswer
                    userAnswer={userAnswer}
                    correctAnswer={correctAnswer}
                    isCorrect={isCorrect}
                  />
                )}
                
                {/* Add other types like TRUE_FALSE here if needed */}
                
              </div>
              {/* --- END OF FIX --- */}

              {/* Explanation (only show if it exists) */}
              {question.explanation && (
                <div className="explanation" style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#f3f4f6',
                  borderLeft: '4px solid #007bff',
                  color: '#333'
                }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Explanation:</strong>
                  {question.explanation}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}