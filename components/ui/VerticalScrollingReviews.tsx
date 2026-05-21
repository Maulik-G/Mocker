"use client";
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import EnhancedReviewCard, { Review } from "./ReviewCard";

export default function VerticalScrollingReviews({
  lanes,
  speed = 1,
}: {
  lanes: Review[][];
  speed?: number;
}): React.JSX.Element {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full pointer-events-auto">
        {lanes.map((reviews, laneIdx) => (
          <VerticalScrollingLane key={laneIdx} reviews={reviews} laneIdx={laneIdx} speed={speed} />
        ))}
      </div>
      
      {/* gradient masks to blend top and bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 dark:from-gray-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent z-10" />
    </div>
  );
}

function VerticalScrollingLane({ reviews, laneIdx, speed }: { reviews: Review[]; laneIdx: number; speed: number }) {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement | null>(null);
  
  // Left column goes UP, Right column goes DOWN
  const isUp = laneIdx % 2 === 0;

  // Slower base duration for vertical scrolling to make reading easier
  const baseDuration = Math.max(25, reviews.length * 6) / speed;

  const getSingleHeight = () => {
    const el = trackRef.current;
    if (!el) return 0;
    return Math.max(0, el.scrollHeight / 2);
  };

  const getCurrentTranslateY = (): number => {
    const el = trackRef.current;
    if (!el) return 0;
    const style = window.getComputedStyle(el);
    const transform = style.transform || style.webkitTransform || "";
    if (!transform || transform === "none") return 0;
    const m = transform.match(/matrix\((.+)\)/);
    if (!m) return 0;
    const parts = m[1].split(",").map((p) => parseFloat(p.trim()));
    // ty is at index 5
    return Number.isFinite(parts[5]) ? parts[5] : 0;
  };

  const startFullLoop = async () => {
    if (isUp) {
      await controls.start({
        y: ["0%", "-50%"],
        transition: { duration: baseDuration, repeat: Infinity, ease: "linear" },
      });
    } else {
      await controls.start({
        y: ["-50%", "0%"],
        transition: { duration: baseDuration, repeat: Infinity, ease: "linear" },
      });
    }
  };

  const handleMouseEnter = () => controls.stop();

  const handleMouseLeave = () => {
    const singleHeight = getSingleHeight();
    if (singleHeight === 0) {
      startFullLoop();
      return;
    }

    const currentY = getCurrentTranslateY(); 
    const targetY = isUp ? -singleHeight : 0;
    const remaining = Math.abs(targetY - currentY);
    const fraction = Math.min(1, remaining / singleHeight);
    const firstDuration = Math.max(0.04, baseDuration * fraction);

    controls
      .start({
        y: [currentY, targetY],
        transition: { duration: firstDuration, ease: "linear" },
      })
      .then(() => {
        startFullLoop();
      })
      .catch(() => startFullLoop());
  };

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={trackRef}
        animate={controls}
        initial={{ y: isUp ? "0%" : "-50%" }}
        onViewportEnter={() => startFullLoop()}
        style={{ display: "flex", flexDirection: "column", willChange: "transform" }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex flex-col gap-6 pb-6" aria-hidden={dup === 1}>
            {reviews.map((r) => (
              <div key={`${r.id}-${dup}`} className="flex-shrink-0 w-full flex">
                <div className="w-full h-full flex flex-col">
                  <EnhancedReviewCard review={r} className="!w-full !min-w-0 flex-1" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
