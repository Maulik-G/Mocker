// 'use client';
// import "@/app/globals.css"
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// // import { Space } from "lucide-react";
// import Link from "next/link";
// import FAQ from "../(routes)/_components/FAQ";
// import ScrollingReviews from "@/components/ui/ScrollingReviews";
// import type { Metadata } from 'next'

// type MetaData = Metadata;
// // import VantaBackground from "@/components/ui/VantaWaves";
// // import FAQ from "../(routes)/_components/FAQ";
// // import NavBar from "../(routes)/_components/NavBar"
// // import { CardSpotlight } from "@/components/ui/card-spotlight";

// export const metadata: MetaData = {
//   title: "Mocker - Master Your Exams",
//   description:
//     "Practice for CAT, GATE, Technical and other competitive exams with free mocks and previous year papers, test series on Mocker.",
// };
// app/(main)/page.tsx
// --- NO 'use client' HERE ---

import type { Metadata } from 'next'

// 1. Import your new client component
// (You exported 'Home', so we import it as 'HomeClient' or any name)
import HomeClient from './MainPageClient'; 

// 2. Your metadata lives here, in the Server Component
export const metadata: Metadata = {
  title: "Mocker - AI Mock Interviews & Test Series for CAT, GATE & More",
  description:
    "Practice for CAT, GATE, Technical and other competitive exams with free mocks and previous year papers, test series on Mocker.",
};

// 3. This is your new Server Component page
export default function Page() {
  
  // 4. It renders your client component
  return (
    <HomeClient />
  );
}