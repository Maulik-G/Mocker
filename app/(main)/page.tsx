'use client';
import "@/app/globals.css"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { Space } from "lucide-react";
import Link from "next/link";
import FAQ from "../(routes)/_components/FAQ";
// import FAQ from "../(routes)/_components/FAQ";
// import NavBar from "../(routes)/_components/NavBar"
// import { CardSpotlight } from "@/components/ui/card-spotlight";

const words = `Practice. Analyze. Improve. Succeed.`;
export default function Home() {
  return (
    <main>
    
      <div className="container">
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
              <Link href="/mocks?category=CUSTOM">
                <div className="category-icon">✏️</div>
                <h2>Custom Mocks</h2>
                <p>Create and practice custom mock tests tailored to your specific preparation needs.</p>
                <button className="btn btn-primary">View Mocks</button>
              </Link>
            </div>
          </div>
        </div>
              

    </main>
  );
}
