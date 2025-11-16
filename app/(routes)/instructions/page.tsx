// app/instructions/page.tsx
'use client'; // This page is interactive, so it must be a Client Component

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useExam } from '@/context/ExamContext';

import { DEMO_DATA } from '@/data';

// This component wraps the main page to allow use of useSearchParams

export default function InstructionsPageSuspenseWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InstructionsPage />
    </Suspense>
  );
}

function InstructionsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { startExam } = useExam();
  
  // Find the selected mock from the URL parameter
  const mockId = searchParams.get('mockId');
  const mock = DEMO_DATA.mocks.find(m => m.id === Number(mockId));

  // Your 'toggleStartButton' logic is now handled with React State
  const [isAgreed, setIsAgreed] = useState(false);

  // This replaces your 'startExam' function
  const handleStartExam = async () => {
      if (!mock) return; // Safety check

    // 1. Find the questions for this mock
    const el = document.documentElement;
    if( el.requestFullscreen) {
      await el.requestFullscreen();
    }
    const questions = DEMO_DATA.questions.filter(q => q.mockId === mock.id);

    startExam(mock, questions);
    // 3. Navigate to the exam page
    router.push('/exam');
  };

  if (!mock) {
    return (
      <div className="container">
        <h1>Mock not found</h1>
        <Link href="/mocks">Go back to mocks</Link>
      </div>
    );
  }

  // This is your 'renderInstructions' HTML, converted to JSX
  return (
    <div className="container instructions-page">
      <h1 style={{ marginBottom: '0.5rem' }}>{mock.title}</h1>
      <span 
        className={`badge badge-${mock.category.toLowerCase()}`} 
        style={{ display: 'inline-block', marginBottom: '2rem' }}
      >
        {mock.category}
      </span>

      <div className="instructions-grid">
        <div className="card">
          <h3>📋 Mock Details</h3>
          <table className="details-table">
            <tbody>
              <tr>
                <td>Duration</td>
                <td>{mock.durationMin} minutes</td>
              </tr>
              {/* ... other rows ... */}
              <tr>
                <td>Sections</td>
                <td>{mock.sections.length}</td>
              </tr>
            </tbody>
          </table>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            Section Breakdown:
          </h4>
          <table className="details-table">
            <tbody>
              {mock.sections.map(section => (
                // Add a 'key' prop
                <tr key={section.name}> 
                  <td>{section.name}</td>
                  <td>{section.questionCount} questions</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>📖 Instructions</h3>
          {/* This securely renders HTML instructions */}
          <div 
            className="instructions-text"
            dangerouslySetInnerHTML={{ __html: mock.instructions }} 
          />
        </div>
      </div>

      <div className="card">
        <div className="checkbox-container">
          <input 
            type="checkbox" 
            id="agreeCheckbox" 
            // 4. Update state on change
            onChange={(e) => setIsAgreed(e.target.checked)} 
          />
          <label htmlFor="agreeCheckbox" style={{ fontWeight: 600, cursor: 'pointer' }}>
            I have read and understood all the instructions. I am ready to begin...
          </label>
        </div>
        <button 
          id="startExamBtn" 
          className="btn btn-primary btn-lg" 
          style={{ width: '100%' }}
          // 5. Button is disabled based on state
          disabled={!isAgreed} 
          // 6. Call the new handleStartExam function
          onClick={handleStartExam} 
        >
          Start Examination
        </button>
      </div>
    </div>
  );
}
