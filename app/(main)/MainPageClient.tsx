'use client'; // <-- This file is the Client Component
import "@/app/globals.css"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import FAQ from "../(routes)/_components/FAQ"; // (Make sure this path is correct)
import ScrollingReviews from "@/components/ui/ScrollingReviews";

// (All metadata code is removed from here)

const words = `Practice. Analyze. Improve. Succeed.`;


const REVIEWS_A = [
  { id: 1, reviewer: "Maulik", role: "SDE Job Seeker", rating: 5, text: "Personally liked the interface and had fun while developing this." },
  { id: 2, reviewer: "Vaidehi Maharishi ", role: "Student", rating: 5, text: "Best platform for GATE " },
  { id: 3, reviewer: "Ankur", role: "SDE Intern", rating: 5, text: "Amazing." },
  { id: 4, reviewer: "Rohit", role: "Student", rating: 5, text: "Loved the motion and the review screen." },
];

const REVIEWS_B = [
  { id: 11, reviewer: "Monalisha Kalita", role: "Student", rating: 5, text: "Smooth UI. Useful platform." },
  { id: 12, reviewer: "Poonam", role: "SDE Intern", rating: 4, text: "Outstanding." },
  { id: 13, reviewer: "Dhruv Singh", role: "Student", rating: 5, text: "Excellent mock test platform with quality questions and clear analysis. Highly recommended!" },
  { id: 14, reviewer: "Sana", role: "Graduate", rating: 5, text: "Great question quality and analysis." },
];



export default function Home() { // <-- Renamed to 'Home' but can be 'MainPageClient'
  return (
    <main>
      <div className="container mx-auto px-4 items-center justify-center text-center py-20">
          <div className="hero">
            <h1>Mocker - Master Your Exams</h1>
            <TextGenerateEffect words={words} />
            <p>Practice with real exam-style mock tests and track your performance</p>
          </div>

        
          <div className="category-grid">
            <div className="category-card" >
              <Link href="/mocks?category=CAT">
                <div className="category-icon">📚</div>
                <h2>CAT Mocks</h2>
                <p>Comprehensive mock tests for Common Admission Test with detailed analytics and solutions.</p>
                <button className="btn btn-primary">View Mocks</button>
              </Link>
            </div>
            
            <div className="category-card" >
              <Link href="/mocks?category=GATE">
                <div className="category-icon">⚙️</div>
                <h2>GATE Mocks</h2>
                <p>Practice GATE exam papers with realistic marking scheme and performance analysis.</p>
                <button className="btn btn-primary">View Mocks</button>
              </Link>
            </div>
            
            <div className="category-card" >
              <Link href="/mocks?category=TECH">
                <div className="category-icon">✏️</div>
                <h2>Tech Mocks</h2>
                <p>Give tech mocks and track your progress with detailed analytics.</p>
                <button className="btn btn-primary">View Mocks</button>
              </Link>
            </div>
          </div>
          <FAQ />
        </div>
        
        <ScrollingReviews lanes = {[REVIEWS_A, REVIEWS_B]} speed = {0.5} />
    </main>
  );
}