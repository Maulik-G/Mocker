// app/results/page.tsx
'use client';

import React, { useEffect } from 'react';
import { useExam } from '@/context/ExamContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { PieChartComponent } from '../_components/PieChart';

// Helper function
function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export default function ResultsPage() {
  const { examState } = useExam();
  const { results } = examState;
  const router = useRouter();

  // Redirect if no results are found
  useEffect(() => {
    if (!results) {
      router.replace('/mocks');
    }
  }, [results, router]);

  if (!results) {
    return <div>Loading results...</div>;
  }
  
  const timeStr = formatTime(results.timeTaken);

  return (
    <div className="results-container">
      <div className="score-summary">
        <h1>Exam Completed! 🎉</h1>
        <div className="score-display">{results.totalScore.toFixed(2)} / {results.maxScore}</div>
        <p style={{ fontSize: '24px', opacity: 0.95 }}>{results.percentage.toFixed(1)}%</p>
        
        <div className="score-stats">
          <div className="stat-item">
            <div className="stat-value" style={{ color: '#10b981' }}>✓ {results.correctCount}</div>
            <div className="stat-label">Correct</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" style={{ color: '#ef4444' }}>✗ {results.wrongCount}</div>
            <div className="stat-label">Wrong</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" style={{ color: '#9ca3af' }}>− {results.unattemptedCount}</div>
            <div className="stat-label">Unattempted</div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', opacity: 0.9 }}>
          <p>Accuracy: {results.accuracy.toFixed(1)}% | Time Taken: {timeStr}</p>
        </div>
      </div>
      
      {/* We'll add charts here in the next step */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Question Distribution</h3>
          <PieChartComponent results={results} /> {/* <-- Add this */}
        </div>
        {/* ... other charts ... */}
      </div>
      
      {/* We'll add the review section later */}
      {/* <ReviewSection results={results} /> */}
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
        {/* <Link href="/dashboard" className="btn btn-outline">View Dashboard</Link> */}
      </div>
    </div>
  );
}