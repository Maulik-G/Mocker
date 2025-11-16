// app/(routes)/instructions/page.tsx
// NO 'use client' HERE

import type { Metadata } from 'next';
import { DEMO_DATA } from '@/data';
import type { Mock } from '@/data/type';

// 1. Import your client component
import InstructionsClient from './InstructionClient';

// --- DATA FETCHING (SERVER-SIDE) ---
async function getMockDetails(id: string): Promise<Mock | null> {
  const mock = DEMO_DATA.mocks.find(m => m.id === Number(id));
  return mock || null;
}

// --- DYNAMIC METADATA (SERVER-SIDE) ---
export async function generateMetadata(
  { searchParams }: { searchParams: { mockId: string } }
): Promise<Metadata> {
  
  const mockId = searchParams.mockId;
  const mock = await getMockDetails(mockId);

  if (!mock) {
    return { title: 'Mock Not Found | Mocker' };
  }

  return {
    title: `${mock.title} - Instructions`,
    description: `Instructions for ${mock.title}. Duration: ${mock.durationMin} minutes.`,
  };
}
 
// --- THE PAGE COMPONENT (SERVER-SIDE) ---
// Notice it now receives 'searchParams'
export default function Page({ searchParams }: { searchParams: { mockId: string } }) {
  // 2. We get the mockId here, on the server
  const mockId = searchParams.mockId;

  // 3. We pass the ID as a prop to the client component.
  //    No Suspense wrapper is needed anymore!
  return (
    <InstructionsClient mockId={mockId} />
  );
}