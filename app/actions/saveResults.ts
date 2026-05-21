'use server';

import { authActionClient } from '@/lib/safe-action';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const prisma = new PrismaClient();

const saveResultSchema = z.object({
  totalScore: z.number(),
  maxScore: z.number(),
  percentage: z.number(),
  correctCount: z.number(),
  wrongCount: z.number(),
  unattemptedCount: z.number(),
  accuracy: z.number(),
  timeTaken: z.number(),
  questionResults: z.any().array(),
  mock: z.object({
    title: z.string(),
  }).passthrough(), // passthrough because mock might have other fields
});

export const saveExamResultAction = authActionClient
  .schema(saveResultSchema)
  .action(async ({ parsedInput: results, ctx: { userId } }) => {
    try {
      await prisma.examResult.create({
        data: {
          userId,
          mockTitle: results.mock.title,
          totalScore: results.totalScore,
          maxScore: results.maxScore,
          percentage: results.percentage,
          correctCount: results.correctCount,
          wrongCount: results.wrongCount,
          unattemptedCount: results.unattemptedCount,
          accuracy: results.accuracy,
          timeTaken: results.timeTaken,
          questionResults: results.questionResults,
        },
      });

      revalidatePath('/dashboard');
      return { success: true };
    } catch (error) {
      console.error('Failed to save exam result:', error);
      throw new Error('Could not save exam result.');
    }
  });