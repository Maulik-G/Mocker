// app/(main)/dashboard/page.tsx
import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

// Import your new components
import { StatCard } from '@/app/(routes)/_components/StatCard';
import { PieChartComponent } from '@/app/(routes)/_components/PieChart';
import { PerformanceLineChart } from '@/app/(routes)/_components/PerformanceLineChart';
// 1. IMPORT YOUR NEW FILTER COMPONENT
import { CategoryFilter } from '@/app/(routes)/_components/CategoryFilter';
import Link from 'next/link';

const prisma = new PrismaClient();

// 2. UPDATE THE FUNCTION SIGNATURE to accept searchParams
export default async function DashboardPage({
  searchParams
}: {
  searchParams: { category?: string }
}) {
  const { userId } = await auth();

  if (!userId) {
    return <div>Not logged in</div>;
  }
  
  // 3. GET THE CURRENT CATEGORY from the URL
  const currentCategory = searchParams.category;

  // 4. PREPARE THE DATABASE QUERY
  const whereClause: any = {
    userId: userId, // Always filter by the logged-in user
  };

  // If a category is selected (e.g., "CAT" or "GATE"),
  // add it to the query.
  if (currentCategory) {
    whereClause.mockTitle = {
      contains: currentCategory, // Assumes title is "CAT Mock 1", etc.
    };
  }

  // 5. FETCH THE FILTERED RESULTS
  const userResults = await prisma.examResult.findMany({
    where: whereClause, // Use the new whereClause
    orderBy: { createdAt: 'desc' },
  });

  // (Your "no results" check is here, it's perfect)
  if (userResults.length === 0) {
    return (
      <div className="container" style={{padding: '2rem'}}>
        <h1>Your Dashboard</h1>
        {/* Add the filter component here too so user can clear it */}
        <CategoryFilter /> 
        <p style={{marginTop: '2rem', fontSize: '1.2rem'}}>
          {currentCategory 
            ? `You have no mock results for the "${currentCategory}" category.`
            : "You haven't completed any mocks yet."
          }
        </p>
      </div>
    );
  }

  // 6. CALCULATE ANALYTICS (This code is unchanged)
  // All your analytics will now be based *only* on the filtered results!
  const totalTests = userResults.length;
  const averagePercentage = userResults.reduce((acc, res) => acc + res.percentage, 0) / totalTests;
  const averageAccuracy = userResults.reduce((acc, res) => acc + res.accuracy, 0) / totalTests;
  const pieChartData = {
    correctCount: userResults.reduce((acc, res) => acc + res.correctCount, 0),
    wrongCount: userResults.reduce((acc, res) => acc + res.wrongCount, 0),
    unattemptedCount: userResults.reduce((acc, res) => acc + res.unattemptedCount, 0),
  };
  const lineChartData = userResults.map(res => ({
    date: new Date(res.createdAt).toLocaleDateString(),
    score: res.percentage,
  })).reverse();


  // 7. RENDER THE DASHBOARD
  return (
    <div className="container" style={{padding: '2rem'}}>
      <h1>Your Dashboard</h1>
      
      {/* 7. ADD THE FILTER COMPONENT TO THE PAGE */}
      <CategoryFilter />

      {/* --- Summary Cards --- */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        margin: '2rem 0'
      }}>
        <StatCard title="Total Mocks" value={totalTests} />
        <StatCard title="Average Score" value={`${averagePercentage.toFixed(1)}%`} />
        <StatCard title="Average Accuracy" value={`${averageAccuracy.toFixed(1)}%`} />
      </div>

      {/* --- Charts --- */}
      {/* (Your charts JSX is unchanged) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '1rem',
        margin: '2rem 0'
      }}>
        <div className="result-card" style={{border: '1px solid #ccc', padding: '1rem', borderRadius: '8px'}}>
          <h3>Overall Accuracy</h3>
          <PieChartComponent results={pieChartData} />
        </div>
        <div className="result-card" style={{border: '1px solid #ccc', padding: '1rem', borderRadius: '8px'}}>
          <h3>Performance Over Time</h3>
          <PerformanceLineChart data={lineChartData} />
        </div>
      </div>

      {/* --- List of Recent Results --- */}
      {/* (Your recent results JSX is unchanged) */}
      {/* --- List of Recent Results --- */}
      <h2 style={{marginTop: '2rem'}}>Recent Results</h2>
      <div className="results-list">
        {userResults.map((result) => (
          <div key={result.id} className="result-card" style={{border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px'}}>
            <h2>{result.mockTitle}</h2>
            <p><strong>Score: {result.totalScore} / {result.maxScore}</strong> ({result.percentage.toFixed(1)}%)</p>
            <p>Correct: {result.correctCount} | Wrong: {result.wrongCount}</p>
            <p>Completed on: {new Date(result.createdAt).toLocaleDateString()}</p>
            
            {/* --- ADD THIS BUTTON HERE --- */}
            <Link 
              href={`/review/${result.id}`}
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
              }}
            >
              View Detailed Analysis
            </Link>
            {/* --- END OF ADDITION --- */}

          </div>
        ))}
      </div>
    </div>
  );
}