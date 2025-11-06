// components/PieChart.tsx
'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChartComponent({ results }: { results: any }) {
  const data = {
    labels: ['Correct', 'Wrong', 'Unattempted'],
    datasets: [
      {
        label: '# of Questions',
        data: [results.correctCount, results.wrongCount, results.unattemptedCount],
        backgroundColor: [
          'rgba(16, 185, 129, 0.6)', // Green
          'rgba(239, 68, 68, 0.6)',  // Red
          'rgba(156, 163, 175, 0.6)', // Gray
        ],
        borderColor: [
          '#10b981',
          '#ef4444',
          '#9ca3af',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}