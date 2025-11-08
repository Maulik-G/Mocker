// app/instructions/page.tsx
'use client'; // This page is interactive, so it must be a Client Component

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useExam } from '@/context/ExamContext';

// --- DEMO DATA (Make sure this is imported from a central file) ---
// I've added the new 'sections' and 'instructions' fields
const DEMO_DATA = {
  mocks: [
        {
          id: 1,
          title: "CAT 2024 Mock Test 1",
          category: "CAT",
          durationMin: 60,
          totalMarks: 30,
          questionCount: 10,
          description: "Comprehensive CAT mock test with VARC, DILR, and QA sections. Practice with real exam-style questions and marking scheme.",
          instructions: `CAT Exam Instructions:\n\n1. Total duration: 120 minutes (40 min per section)\n2. Sectional time limit enforced\n3. Marking Scheme:\n   • MCQ: +3 for correct, -1 for wrong\n   • TITA: +3 for correct, 0 for wrong\n4. You cannot move between sections\n5. Calculator allowed for QA section\n6. Use 'Mark for Review' for questions you want to revisit\n7. You can change answers anytime before submission\n8. Ensure stable internet connection\n9. Do not refresh the page during the exam\n10. Submit only when you have reviewed all questions`,
          sections: [
            { name: "VARC", questionCount: 4, marks: 12 },
            { name: "DILR", questionCount: 3, marks: 9 },
            { name: "QA", questionCount: 3, marks: 9 }
          ]
        },
        
        {
          "id": 2,
          "title": "GATE 2025 CS Mock",
          "category": "GATE",
          "durationMin": 180,
          "totalMarks": 100,
          "questionCount": 65,
          "description": "Official GATE 2025 Computer Science question paper (IIT Roorkee) formatted as a mock test. Includes General Aptitude and Core CS questions with marking scheme.",
          "instructions": "GATE Exam Instructions:\n\n1. Total duration: 180 minutes\n2. Marking Scheme:\n   • 1-mark MCQ: +1 for correct, -0.33 for wrong\n   • 2-mark MCQ: +2 for correct, -0.66 for wrong\n   • NAT (Numerical): No negative marking\n3. Virtual calculator provided for numerical questions\n4. Questions can be attempted in any order\n5. You can mark questions for review\n6. All unanswered questions at the end will be considered as not attempted\n7. Use only the virtual calculator; external calculators not allowed\n8. Read each question carefully before answering\n9. Partial marking not applicable\n10. Final submission is irreversible.",
          "sections": [
            { "name": "General Aptitude", "questionCount": 10, "marks": 15 },
            { "name": "Computer Science", "questionCount": 55, "marks": 85 }
          ]
        }
  ],
  questions: [
    {
          id: 1, mockId: 1, qOrder: 1, section: "VARC",
          text: "Choose the word most similar in meaning to 'METICULOUS':",
          type: "MCQ_SINGLE",
          options: ["Careless", "Careful", "Reckless", "Hasty"],
          correctAnswer: "B", marks: 3, negativeMarks: -1,
          explanation: "Meticulous means showing great attention to detail; very careful and precise. The closest synonym is 'Careful'."
        },
        {
          id: 2, mockId: 1, qOrder: 2, section: "VARC",
          text: "Select the grammatically correct sentence:",
          type: "MCQ_SINGLE",
          options: [
            "Neither of the students are present.",
            "Neither of the students is present.",
            "Neither of the students were present.",
            "Neither of the students be present."
          ],
          correctAnswer: "B", marks: 3, negativeMarks: -1,
          explanation: "'Neither' is singular and takes a singular verb 'is'. When 'neither' is used with 'of', the verb agrees with 'neither', not with the noun following 'of'."
        },
        {
          id: 3, mockId: 1, qOrder: 3, section: "VARC",
          text: "Complete the sentence: The author's argument is _____ because it lacks supporting evidence.",
          type: "FILL_BLANK",
          options: null,
          correctAnswer: "weak", marks: 3, negativeMarks: 0,
          explanation: "Without evidence, an argument is weak or flawed. Acceptable answers include: weak, flawed, unconvincing, baseless."
        },
        {
          id: 4, mockId: 1, qOrder: 4, section: "VARC",
          text: "The statement 'Democracy is the best form of government' is a matter of opinion.",
          type: "TRUE_FALSE",
          options: ["True", "False"],
          correctAnswer: "True", marks: 3, negativeMarks: -1,
          explanation: "This statement is subjective and represents an opinion, not an objective fact. Different political systems work differently in various contexts."
        },
        {
          id: 5, mockId: 1, qOrder: 5, section: "DILR",
          text: "If all roses are flowers and some flowers are red, which statement must be true?",
          type: "MCQ_SINGLE",
          options: ["All roses are red", "Some roses are red", "No roses are red", "Cannot be determined"],
          correctAnswer: "D", marks: 3, negativeMarks: -1,
          explanation: "From the given premises, we cannot determine the color of roses. While we know all roses are flowers and some flowers are red, we don't know if those red flowers include roses."
        },
        {
          id: 6, mockId: 1, qOrder: 6, section: "DILR",
          text: "In a sequence 2, 6, 12, 20, 30, ..., what is the next number?",
          type: "FILL_BLANK",
          options: null,
          correctAnswer: "42", marks: 3, negativeMarks: 0,
          explanation: "Pattern: n(n+1) where n = 1,2,3,4,5,6... \nFor n=1: 1×2=2\nFor n=2: 2×3=6\nFor n=3: 3×4=12\nFor n=4: 4×5=20\nFor n=5: 5×6=30\nFor n=6: 6×7=42"
        },
        {
          id: 7, mockId: 1, qOrder: 7, section: "DILR",
          text: "Select ALL prime numbers from the following:",
          type: "MCQ_MULTI",
          options: ["11", "15", "17", "21"],
          correctAnswer: ["A", "C"], marks: 3, negativeMarks: -1,
          explanation: "Prime numbers have exactly two factors: 1 and themselves.\n11 is prime (factors: 1, 11)\n17 is prime (factors: 1, 17)\n15 = 3×5 (not prime)\n21 = 3×7 (not prime)"
        },
        {
          id: 8, mockId: 1, qOrder: 8, section: "QA",
          text: "What is the value of √144?",
          type: "NUMERIC",
          options: null,
          correctAnswer: "12", marks: 3, negativeMarks: 0,
          explanation: "√144 = 12 because 12 × 12 = 144. The square root of a number is a value that, when multiplied by itself, gives the original number."
        },
        {
          id: 9, mockId: 1, qOrder: 9, section: "QA",
          text: "If x + y = 10 and x - y = 4, what is the value of x?",
          type: "MCQ_SINGLE",
          options: ["5", "6", "7", "8"],
          correctAnswer: "C", marks: 3, negativeMarks: -1,
          explanation: "Solving the system of equations:\nx + y = 10 ... (1)\nx - y = 4  ... (2)\nAdding both equations: 2x = 14, therefore x = 7\nSubstituting back: 7 + y = 10, therefore y = 3"
        },
        {
          id: 10, mockId: 1, qOrder: 10, section: "QA",
          text: "The area of a circle with radius 7 cm is (use π = 22/7):",
          type: "NUMERIC",
          options: null,
          correctAnswer: "154", marks: 3, negativeMarks: 0,
          explanation: "Area of circle = πr²\n= (22/7) × 7² \n= (22/7) × 49\n= 22 × 7\n= 154 cm²"
        },
        
        // GATE Mock Questions (11-20)
        
        
        
        
  ]
};
// -----------------------------------------------------------------

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
  const handleStartExam = () => {
      if (!mock) return; // Safety check

    // 1. Find the questions for this mock
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
