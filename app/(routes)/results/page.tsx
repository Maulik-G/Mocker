// app/results/page.tsx
'use client';

import React, { useEffect } from 'react';
import { useExam } from '@/context/ExamContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PieChartComponent } from '../_components/PieChart';
import NavBar from '../_components/NavBar';
import Footer from '../_components/Footer';

// Mini stat card
function StatCard({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <div
      className="chart-card"
      style={{
        padding: '0.75rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        minWidth: 140,
      }}
      >
      <div style={{ fontSize: 12, color: 'var(--gray-600)', fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 18, fontWeight: 700 }}>{value}</div>
    </div>
  );
}

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
  
  useEffect(() => {
    if (!results) router.replace('/mocks');
  }, [results, router]);
  
  if (!results) return <div>Loading results...</div>;
  
  const totalQuestions =
  results.totalQuestions ??
  results.correctCount + results.wrongCount + results.unattemptedCount;
  
  const attempted = results.correctCount + results.wrongCount;
  const timeStr = formatTime(results.timeTaken);
  
  return (
    <>
    <NavBar />
    <div className="results-container" style={{ paddingBottom: '4rem' }}>
      {/* ---------------------- GRID LAYOUT ---------------------- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}
        className="w-full"
        >
        {/* LEFT HALF — BLUE BOX */}
        <div className="score-summary" style={{ height: '100%' }}>
          <h1 style={{ margin: 0 }}>Exam Completed! 🎉</h1>
          <div className="score-display" style={{ marginTop: 8 }}>
            {results.totalScore.toFixed(2)} / {results.maxScore}
          </div>
          <p style={{ fontSize: '20px', opacity: 0.95, marginTop: 6 }}>
            {results.percentage?.toFixed(1)}%
          </p>

          <div
            className="score-stats"
            style={{
              marginTop: 12,
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
            }}
            >
            <div className="stat-item">
              <div className="stat-value" style={{ color: '#10b981' }}>
                ✓ {results.correctCount}
              </div>
              <div className="stat-label">Correct</div>
            </div>
            <div className="stat-item">
              <div className="stat-value" style={{ color: '#ef4444' }}>
                ✗ {results.wrongCount}
              </div>
              <div className="stat-label">Wrong</div>
            </div>
            <div className="stat-item">
              <div className="stat-value" style={{ color: '#9ca3af' }}>
                − {results.unattemptedCount}
              </div>
              <div className="stat-label">Unattempted</div>
            </div>
          </div>

          <p style={{ marginTop: '1rem', opacity: 0.9 }}>
            Accuracy: {results.accuracy.toFixed(1)}% | Time Taken: {timeStr}
          </p>
        </div>

        {/* RIGHT HALF — CHART + MINI ANALYTICS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Pie chart */}
          <div className="chart-card" style={{ height: '260px' }}>
            <h3 style={{ marginBottom: 8 }}>Question Distribution</h3>
            <div style={{ height: 200 }}>
              <PieChartComponent results={results} />
            </div>
          </div>

          {/* Mini stats row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <StatCard title="Total Questions" value={totalQuestions} />
            <StatCard title="Attempted" value={attempted} />
            <StatCard title="Correct Rate" value={`${results.accuracy.toFixed(1)}%`} />
          </div>
        </div>
      </div>

      {/* ---------------------- BOTTOM BUTTONS ---------------------- */}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
        <Link
          href="/"
          className="btn btn-outline"
          style={{ minWidth: 160, textAlign: 'center' }}
          >
          Back to Home
        </Link>

        <Link
          href="/dashboard"
          className="btn btn-primary"
          style={{ minWidth: 220, textAlign: 'center' }}
          >
          View Detailed Analytics
        </Link>
      </div>
    </div>
    <Footer />
  </>
  );
}
