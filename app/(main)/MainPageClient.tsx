'use client';

import "@/app/globals.css"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import FAQ from "../(routes)/_components/FAQ";
import VerticalScrollingReviews from "@/components/ui/VerticalScrollingReviews";
import { ArrowRight, BookOpen, Settings, Code } from 'lucide-react';

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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans selection:bg-blue-200 dark:selection:bg-blue-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Subtle decorative background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            Master Your Exams with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Mocker</span>
          </h1>

          <div className="max-w-2xl mx-auto mb-8 h-10 flex justify-center items-center">
            <TextGenerateEffect words={words} className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300" />
          </div>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Experience realistic exam environments, track your progress with deep analytics, and stay ahead of the competition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/mocks" className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-blue-500/25">
              Start Practicing Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#categories" className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-sm w-full sm:w-auto justify-center flex items-center">
              Explore Mocks
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-20 -mt-16 mb-24 px-6">
        <div className="max-w-[1000px] mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 dark:border-gray-800 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-100 dark:divide-gray-800">
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">300+</span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Active Students</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">50+</span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Curated Mocks</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">99%</span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Satisfaction Rate</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">24/7</span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Live Analytics</span>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" className="py-24 bg-white dark:bg-gray-900/50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Path</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Comprehensive mock tests tailored to the most competitive exams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* CAT Card */}
            <Link href="/mocks?category=CAT" className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">CAT Mocks</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">Prepare for the Common Admission Test with detailed analytics and solutions.</p>
              <span className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">View Mocks <ArrowRight className="w-4 h-4" /></span>
            </Link>

            {/* GATE Card */}
            <Link href="/mocks?category=GATE" className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GATE Mocks</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">Practice GATE exam papers with realistic marking scheme and analysis.</p>
              <span className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">View Mocks <ArrowRight className="w-4 h-4" /></span>
            </Link>

            {/* TECH Card */}
            <Link href="/mocks?category=TECH" className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tech Mocks</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">Give tech mocks tailored for placements and track your progress.</p>
              <span className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">View Mocks <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* VERTICAL REVIEWS SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden relative border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Text */}
            <div className="text-left space-y-6">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold text-sm">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                We believe in the power of community
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                Our goal is to create a product and service that you are satisfied with and use every day.
                This is why we are constantly working on our platform to make it better every day, and we really listen to what our users have to say.
              </p>
              <Link href="/mocks" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md mt-4">
                See For Yourself.
              </Link>
            </div>

            {/* Right Column: Vertical Scrolling Reviews */}
            <div className="lg:h-[700px] h-[500px] w-full">
              <VerticalScrollingReviews lanes={[REVIEWS_A, REVIEWS_B]} speed={0.4} />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-6">
          <FAQ />
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/20" />
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-blue-500/20 text-white relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">
              Ready to Ace Your Exams?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10 font-medium">
              Join thousands of students who are already using Mocker to achieve their dreams. Start practicing for free today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/mocks" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all shadow-xl flex items-center gap-2">
                Get Started for Free <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}