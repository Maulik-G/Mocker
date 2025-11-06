// 1. Add 'use client' because this component is interactive (uses state)
'use client';

// 2. Import the tools you need
import { useState } from 'react';
import Link from 'next/link';

// 3. Define your data (same as your DEMO_DATA)
const DEMO_DATA = {
  mocks: [
    { id: 1, title: "CAT Mock 1", category: "CAT", description: "Full-length CAT mock", durationMin: 60, questionCount: 66, totalMarks: 198 },
    { id: 2, title: "GATE CS Mock 1", category: "GATE", description: "Computer Science mock", durationMin: 180, questionCount: 65, totalMarks: 100 },
    { id: 3, title: "Custom JS Quiz", category: "CUSTOM", description: "Quick JavaScript quiz", durationMin: 30, questionCount: 20, totalMarks: 20 },
    { id: 4, title: "CAT Mock 2", category: "CAT", description: "Second full-length CAT mock", durationMin: 120, questionCount: 66, totalMarks: 198 },
  ]
};

// 4. Create your component (this replaces your 'renderMockListing' function)
export default function MockListingPage() {
  
  // 5. Use 'useState' to manage the filter, instead of a function argument
  const [filterCategory, setFilterCategory] = useState('all');

  // 6. Your filtering logic is almost the same
  const filteredMocks = filterCategory === 'all'
    ? DEMO_DATA.mocks
    : DEMO_DATA.mocks.filter(m => m.category === filterCategory);

  // 7. Return JSX, not an HTML string.
  return (

      <div className="container">
        <h1 style={{ marginBottom: '2rem' }}>Available Mock Tests</h1>

      <div className="filter-buttons">
        {/* 8. Use 'className' and 'onClick' with functions */}
        <button
          className={`filter-btn ${filterCategory === 'all' ? 'active' : ''}`}
          onClick={() => setFilterCategory('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filterCategory === 'CAT' ? 'active' : ''}`}
          onClick={() => setFilterCategory('CAT')}
        >
          CAT
        </button>
        <button
          className={`filter-btn ${filterCategory === 'GATE' ? 'active' : ''}`}
          onClick={() => setFilterCategory('GATE')}
        >
          GATE
        </button>
        <button
          className={`filter-btn ${filterCategory === 'CUSTOM' ? 'active' : ''}`}
          onClick={() => setFilterCategory('CUSTOM')}
        >
          Custom
        </button>
      </div>

      <div className="mock-grid">
        {/* 9. Map directly inside the JSX */}
        {filteredMocks.map(mock => (
          // 10. Add a 'key' prop for lists
          <div key={mock.id} className="mock-card">
            <div className="mock-header">
              <h3 className="mock-title">{mock.title}</h3>
              <span className={`badge badge-${mock.category.toLowerCase()}`}>
                {mock.category}
              </span>
            </div>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
              {mock.description}
            </p>
            <div className="mock-meta">
              <span>⏱️ {mock.durationMin} min</span>
              <span>📝 {mock.questionCount} questions</span>
              <span>🎯 {mock.totalMarks} marks</span>
            </div>
            
            {/* 11. Use the <Link> component for navigation */}
            <Link 
              href={`/instructions?mockId=${mock.id}`} 
              className="btn btn-primary" 
              style={{ width: '100%' }}
            >
              Start Mock
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}