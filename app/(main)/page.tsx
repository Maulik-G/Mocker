'use client';
import "@/app/globals.css"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { Space } from "lucide-react";
import Link from "next/link";
import FAQ from "../(routes)/_components/FAQ";
import ScrollingReviews from "@/components/ui/ScrollingReviews";

// import VantaBackground from "@/components/ui/VantaWaves";
// import FAQ from "../(routes)/_components/FAQ";
// import NavBar from "../(routes)/_components/NavBar"
// import { CardSpotlight } from "@/components/ui/card-spotlight";

const words = `Practice. Analyze. Improve. Succeed.`;

const REVIEWS_A = [
  { id: 1, reviewer: "Maulik", role: "Student", rating: 5, text: "Mocker is a great app — nice UX and fast tests." },
  { id: 2, reviewer: "Aisha", role: "SDE Intern", rating: 5, text: "The feedback is detailed and helped me improve a lot." },
  { id: 3, reviewer: "Vikram", role: "Final Year", rating: 4, text: "Good mocks, some questions felt tricky." },
  { id: 4, reviewer: "Rohit", role: "Student", rating: 5, text: "Loved the motion and the review screen." },
];

const REVIEWS_B = [
  { id: 11, reviewer: "Priya", role: "Student", rating: 5, text: "Perfect for last-minute practice." },
  { id: 12, reviewer: "Karan", role: "Developer", rating: 4, text: "UI is clean — performance could improve on mobile." },
  { id: 13, reviewer: "Sana", role: "Graduate", rating: 5, text: "Great question quality and analysis." },
  { id: 14, reviewer: "Sana", role: "Graduate", rating: 5, text: "Great question quality and analysis." },
];


export default function Home() {
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
