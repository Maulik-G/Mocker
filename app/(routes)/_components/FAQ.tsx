"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CircleSmall } from "lucide-react";
import Link from "next/link";
import React from "react";

type FAQItem = {
  id: string;
  icon: "circle-small";
  question: string;
  answer: string;
};

const iconMap = {
  "circle-small": CircleSmall,
};

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "circle-small",
      question: "How does the AI mock interview work?",
      answer:
        "Our platform uses advanced AI to simulate a realistic interview experience. You can either upload your resume for a personalized session based on your experience or provide a specific job description to practice for an upcoming interview. The AI will ask relevant questions and analyze your responses in real time.",
    },
    {
      id: "item-2",
      icon: "circle-small",
      question: "What kind of feedback will I receive?",
      answer:
        "After each session, you will get a detailed performance report. The AI provides actionable feedback on the content and clarity of your answers, your confidence, speaking pace, and use of relevant keywords. For technical interviews, it can also assess the effectiveness of your problem-solving approach.",
    },
    {
      id: "item-3",
      icon: "circle-small",
      question: "Is my data and are my interview sessions private?",
      answer:
        "Absolutely. We prioritize your privacy and data security. All interview sessions are encrypted and stored securely. We do not share your data or responses with any third parties without your explicit consent. You can practice with confidence knowing that your information is safe with us.",
    },
    {
      id: "item-4",
      icon: "circle-small",
      question: "Can I practice for different types of jobs?",
      answer:
        "Yes, our platform allows you to practice for a wide range of job roles across various industries. You can select specific job titles or descriptions to tailor your interview practice sessions to your career goals.",
    },
    {
      id: "item-5",
      icon: "circle-small",
      question: "What do I need to get started?",
      answer:
        "All you need is a computer with a stable internet connection, a working microphone, and a webcam (optional, but recommended for feedback on non-verbal cues). No software installation is required.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-12">
      {/* 1. Use a narrower max-width for a single column */}
      <div className="mx-auto max-w-3xl px-4 md:px-6">

        {/* --- (I removed the two-column flex wrapper) --- */}

        {/* 2. Left column (Title) is now a centered text block */}
        <div className="w-full px-2 text-center">
          <h2 className="mt-2 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4">
            Can&apos;t find what you&apos;re looking for? Contact our{" "}
            <Link href="/contact-support" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>

        {/* 3. Right column (Accordion) is now below the title */}
        <div className="w-full px-2 mt-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <AccordionItem key={item.id} value={item.id} className="w-full bg-background shadow-xs rounded-lg border">
                  <AccordionTrigger className="w-full flex items-center justify-between gap-4 py-4 px-5 hover:no-underline focus:outline-none">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-richblack-900/30 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-base font-medium text-richblack-5 leading-tight pr-4">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0">
                    <div className="text-base text-richblack-300">
                      <p>{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

      </div>
    </section>
  );
}