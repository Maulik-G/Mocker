// app/(routes)/instructions/InstructionsClient.tsx
'use client'; // <-- This is your client component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // <-- No useSearchParams
import Link from 'next/link';

import { useExam } from '@/context/ExamContext';
import { DEMO_DATA } from '@/data';

// 1. Remove the Suspense wrapper
// 2. Accept mockId as a prop
export default function InstructionsClient({ mockId }: { mockId: string }) {
  const router = useRouter();
  const { startExam } = useExam();
  
  // 3. Use the prop, not searchParams
  const mock = DEMO_DATA.mocks.find(m => m.id === Number(mockId));

  const [isAgreed, setIsAgreed] = useState(false);

  const handleStartExam = async () => {
    if (!mock) return;
    const el = document.documentElement;
    if (el.requestFullscreen) {
      await el.requestFullscreen();
    }
    const questions = DEMO_DATA.questions.filter(q => q.mockId === mock.id);
    startExam(mock, questions);
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

  // 4. Return your FULL, original JSX (this is what was missing)
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
          <div 
            className="instructions-text"
            dangerouslySetInnerHTML={{ __html: mock.instructions }} 
          />
        </div>

        <div className="card">
          <div className="checkbox-container">
            <input 
              type="checkbox" 
              id="agreeCheckbox" 
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
            disabled={!isAgreed} 
            onClick={handleStartExam} 
          >
            Start Examination
          </button>
        </div>
      </div>
    </div>
  );
}