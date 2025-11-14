"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type FAQItem = {
  id: string;
  icon: "chevron-right" ;
  question: string;
  answer: string;
};

const iconMap = {
  "chevron-right": ChevronRight,
};

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "chevron-right",
      question: "What is Mocker?",
      answer: "Mocker is an online platform providing realistic mock exams and detailed performance analytics to help you master your tests.",
    },
    {
      id: "item-2",
      icon: "chevron-right",
      question: "Do I need to make an account to take a test?",
      answer: "Yes, a free account is required to save your test results and track your performance on your personal dashboard.",
    },
    {
      id: "item-3",
      icon: "chevron-right",
      question: "Where can I see my past results?",
      answer: "All your completed tests, scores, and analytics are saved on your personal Dashboard page.",
    },
    {
      id: "item-4",
      icon: "chevron-right",
      question: "Can I review my answers after a test?",
      answer: "Yes, every test includes a detailed, question-by-question review with the correct answers and explanations.",
    },
    {
      id: "item-5",
      icon: "chevron-right",
      question: "What kind of analytics do I get?",
      answer: "You get a dashboard with charts for your average score, overall accuracy, and performance improvement over time.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

  {/* TWO-COLUMN FLEX (LEFT – RIGHT) */}
  <div className="flex flex-col md:flex-row gap-12">

    {/* LEFT COLUMN */}
    <div className="w-full md:w-5/12 px-2">
      <h2 className="mt-2 text-3xl font-bold">Frequently Asked Questions</h2>
      <p className="text-muted-foreground mt-4">
        Can&apos;t find what you&apos;re looking for? Contact our{" "}
        <Link href="/contact-support" className="text-primary font-medium hover:underline">
          customer support team
        </Link>
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="w-full md:w-7/12 px-2">
      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="w-full bg-background shadow-xs rounded-lg border"
            >
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
</div>
    </section>
  );
}