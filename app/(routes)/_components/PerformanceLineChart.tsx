// app/(routes)/_components/PerformanceLineChart.tsx
'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// This "registers" all the parts of the chart we need
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function PerformanceLineChart({ data: chartData }: { data: any[] }) {
  const data = {
    // e.g., ["11/1/25", "11/3/25", ...]
    labels: chartData.map(d => d.date), 
    datasets: [
      {
        label: 'Score %',
        // e.g., [80, 85, ...]
        data: chartData.map(d => d.score), 
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Score Over Time',
      },
    },
  };

  return <Line options={options} data={data} />;
}