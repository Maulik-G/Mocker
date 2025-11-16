// app/(main)/dashboard/page.tsx
// Note: this is a Server Component (no "use client" at top)


import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { PrismaClient, Prisma } from '@prisma/client';

// Import your components (CategoryFilter may be a client component — that's fine)
import { StatCard } from '@/app/(routes)/_components/StatCard';
import { PieChartComponent } from '@/app/(routes)/_components/PieChart';
import { PerformanceLineChart } from '@/app/(routes)/_components/PerformanceLineChart';
import { CategoryFilter } from '@/app/(routes)/_components/CategoryFilter';
import Link from 'next/link';

// Use a global singleton for Prisma in development to avoid creating multiple clients
const _global = global as unknown as { prisma?: PrismaClient };
const prisma = _global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') {
  _global.prisma = prisma;
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  // Next.js may provide a promise-like searchParams — await to be safe
  const params = await Promise.resolve(searchParams);

  // Normalize category from URL
  const rawCategory = params?.category;
  const currentCategory: string | null =
    Array.isArray(rawCategory) ? (rawCategory[0] ?? null) : (rawCategory ?? null);

  // Authenticate the user on the server
  const { userId } = await auth();

  if (!userId) {
    return <div>Not logged in</div>;
  }
   
  // 4. BUILD THE WHERE CLAUSE BASED ON FILTERS
 // [START] Replace from here
  
  // 4. PREPARE THE DATABASE QUERY
  const normalizedCategory = currentCategory?.toString().trim();
  let whereClause: Prisma.ExamResultWhereInput = { userId };

  if (normalizedCategory) {
    // Try to find matching mocks if the `mock` model exists
    let matchingMocks: Array<{ title: string }> = [];

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const clientAny = prisma as any;
      if (clientAny && clientAny.mock && typeof clientAny.mock.findMany === 'function') {
        matchingMocks = await clientAny.mock.findMany({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          where: { category: { equals: normalizedCategory, mode: 'insensitive' } } as any,
          select: { title: true },
        });
      }
    } catch (err) {
      console.warn('[Dashboard] prisma.mock lookup failed, falling back to title contains. Error:', err);
      matchingMocks = [];
    }

    // --- THIS IS THE CORRECTED LOGIC ---
    if (matchingMocks && matchingMocks.length > 0) {
      // Create a list of case-insensitive filters.
      // We still .trim() just in case of whitespace issues.
      const titleFilters = matchingMocks.map((m) => ({
        mockTitle: { equals: m.title.trim(), mode: 'insensitive' },
      }));

      // Build a query that says:
      // "WHERE userId = ? AND (mockTitle = 'Title A' OR mockTitle = 'Title B' OR ...)"
      whereClause = {
        userId,
        OR: titleFilters,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

    } else {
      // Fallback: This logic likely won't find your tech tests,
      // since "Python Programming" does not "contain" the word "TECH".
      // But we keep it as a fallback.
      whereClause = {
        userId,
        mockTitle: { contains: normalizedCategory, mode: 'insensitive' },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
    }
    // --- END OF CORRECTED LOGIC ---
  }
  
// [END] Stop replacing here (the next line should be "const userResults = ...")
 
  // 5. FETCH THE FILTERED RESULTS
  const userResults = await prisma.examResult.findMany({
    where: whereClause,
    orderBy: { createdAt: 'desc' },
  });

  // (Your "no results" check is here)
  if (!userResults || userResults.length === 0) {
    return (
      <div className="container" style={{ padding: '2rem' }}>
        <h1>Your Dashboard</h1>
        <CategoryFilter />
        <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
          {currentCategory
            ? `You have no mock results for the "${currentCategory}" category.`
            : "You haven't completed any mocks yet."}
        </p>
      </div>
    );
  }

  // 6. CALCULATE ANALYTICS
  const totalTests = userResults.length;
  const averagePercentage =
    totalTests > 0
      ? userResults.reduce((acc: number, res) => acc + (res.percentage ?? 0), 0) / totalTests
      : 0;
  const averageAccuracy =
    totalTests > 0
      ? userResults.reduce((acc: number, res) => acc + (res.accuracy ?? 0), 0) / totalTests
      : 0;

  const pieChartData = {
    correctCount: userResults.reduce((acc: number, res) => acc + (res.correctCount ?? 0), 0),
    wrongCount: userResults.reduce((acc: number, res) => acc + (res.wrongCount ?? 0), 0),
    unattemptedCount: userResults.reduce((acc: number, res) => acc + (res.unattemptedCount ?? 0), 0),
  };

  const lineChartData = userResults
    .map((res) => ({
      date: new Date(res.createdAt).toLocaleDateString(),
      score: Number(res.percentage ?? 0),
    }))
    .reverse();

  // 7. RENDER THE DASHBOARD
  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Your Dashboard</h1>

      <CategoryFilter />

      {/* --- Summary Cards --- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          margin: '2rem 0',
        }}
      >
        <StatCard title="Total Mocks" value={totalTests} />
        <StatCard title="Average Score" value={`${averagePercentage.toFixed(1)}%`} />
        <StatCard title="Average Accuracy" value={`${averageAccuracy.toFixed(1)}%`} />
      </div>

      {/* --- Charts --- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '1rem',
          margin: '2rem 0',
        }}
      >
        <div className="result-card" style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Overall Accuracy</h3>
          <PieChartComponent results={pieChartData} />
        </div>
        <div className="result-card" style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Performance Over Time</h3>
          <PerformanceLineChart data={lineChartData} />
        </div>
      </div>

      {/* --- List of Recent Results --- */}
      <h2 style={{ marginTop: '2rem' }}>Recent Results</h2>
      <div className="results-list">
        {userResults.map((result) => (
          <div
            key={result.id}
            className="result-card"
            style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}
          >
            <h2>{result.mockTitle}</h2>
            <p>
              <strong>
                Score: {result.totalScore} / {result.maxScore}
              </strong>{' '}
              ({Number(result.percentage ?? 0).toFixed(1)}%)
            </p>
            <p>
              Correct: {result.correctCount} | Wrong: {result.wrongCount}
            </p>
            <p>Completed on: {new Date(result.createdAt).toLocaleDateString()}</p>

            <Link
              href={`/review/${result.id}`}
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              View Detailed Analysis
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
