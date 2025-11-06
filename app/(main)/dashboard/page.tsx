// app/(main)/dashboard/page.tsx

import { auth } from '@clerk/nextjs/server'; // Server-side auth
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const { userId } = auth(); // Get the current user

  if (!userId) {
    // This will be handled by your middleware,
    // but it's good practice to check again.
    return <div>Not logged in</div>;
  }

  // Fetch all results from the DB for THIS user
  const userResults = await prisma.examResult.findMany({
    where: {
      userId: userId, // The most important line!
    },
    orderBy: {
      createdAt: 'desc', // Show newest first
    },
  });

  return (
    <div className="container" style={{padding: '2rem'}}>
      <h1>Your Dashboard</h1>
      <p>Here are your past exam results:</p>
      
      <div className="results-list">
        {userResults.length === 0 && (
          <p>You haven't completed any mocks yet.</p>
        )}
        
        {userResults.map((result) => (
          <div key={result.id} className="result-card" style={{border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px'}}>
            <h2>{result.mockTitle}</h2>
            <p><strong>Score: {result.score} / {result.maxScore}</strong> ({result.percentage.toFixed(1)}%)</p>
            <p>Correct: {result.correctCount} | Wrong: {result.wrongCount}</p>
            <p>Completed on: {new Date(result.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}