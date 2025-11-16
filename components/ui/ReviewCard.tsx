"use client";
import React from "react";
import { motion } from "framer-motion";

export type Review = {
  id?: string | number;
  reviewer: string;
  role?: string;
  rating?: number; // 1-5
  text: string;
  avatarUrl?: string;
};

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.79 1.402 8.173L12 18.896l-7.336 3.977 1.402-8.173L.132 9.21l8.2-1.192L12 .587z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="0.8"
        style={{ color: filled ? "#f6c244" : "#e6e6e6" }}
      />
    </svg>
  );
}

export default function EnhancedReviewCard({ review }: { review: Review }) {
  const stars = new Array(5).fill(0);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 110, damping: 14 }}
      className="w-72 min-w-[18rem] bg-gradient-to-br from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/60
                 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-blue-400/50 dark:border-blue-600/50 transform-gpu"
      style={{
        // subtle layered shadow
        boxShadow:
          "0 8px 30px rgba(20,20,40,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
      role="article"
      aria-label={`Review by ${review.reviewer}`}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold text-gray-800 dark:text-gray-100"
          style={{
            background:
            
            review.avatarUrl ? "transparent" : "linear-gradient(135deg,#f3f4f6,#e2e8f0)",
            border: "1px solid rgba(255,255,255,0.5)",
            overflow: "hidden",
          }}
        >
          {review.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={review.avatarUrl} alt={`${review.reviewer} avatar`} className="w-full h-full object-cover" />
          ) : (
            <div className="text-gray-700 dark:text-gray-200">{(review.reviewer || "U")[0]}</div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{review.reviewer}</h3>
          {review.role && <div className="text-xs text-gray-500 dark:text-gray-400">{review.role}</div>}
        </div>

        <div className="text-sm font-medium select-none" aria-hidden>
          <div style={{ display: "flex", gap: 4 }}>
            {stars.map((_, i) => (
              <span key={i} style={{ display: "inline-block", lineHeight: 0 }}>
                <Star filled={i < (review.rating ?? 5)} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-700 dark:text-gray-200 leading-snug h-16 overflow-hidden">
        {review.text}
      </p>

      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">Reviewed • {new Date().toLocaleDateString()}</div>
    </motion.article>
  );
}
