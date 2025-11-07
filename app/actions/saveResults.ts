// app/actions/saveResult.ts
'use server'; // This marks the file as a Server Action

import { auth } from '@clerk/nextjs/server'; // Clerk's server-side auth
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache'; // To refresh the dashboard

// Initialize Prisma
const prisma = new PrismaClient();

// This is the function we will call from our context
export async function saveExamResult(results: any) {
  const { userId } = await auth(); // Get the logged-in user's ID

  // 1. Check if user is logged in
  if (!userId) {
    // This shouldn't happen if your route is protected, but it's a good check
    throw new Error('You must be logged in to save results.');
  }

  // 2. Map your 'results' object to your database schema
  const dataToSave = {
    userId: userId, // Link the result to the user
    mockTitle: results.mock.title,
    totalScore: results.totalScore,
    maxScore: results.maxScore,
    percentage: results.percentage,
    correctCount: results.correctCount,
    wrongCount: results.wrongCount,
    unattemptedCount: results.unattemptedCount,
    accuracy: results.accuracy,
    timeTaken: results.timeTaken,
    questionResults: results.questionResults, // Save the full review data
  };

  // 3. Save to the database
  try {
    await prisma.examResult.create({
      data: dataToSave,
    });
    
    // 4. Tell Next.js to refresh the dashboard page
    // so the user sees the new result immediately
    revalidatePath('/dashboard');

  } catch (error) {
    console.error('Failed to save exam result:', error);
    throw new Error('Could not save exam result.');
  }
}