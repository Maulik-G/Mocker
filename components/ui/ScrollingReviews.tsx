"use client";
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import EnhancedReviewCard, { Review } from "./ReviewCard";

/**
 * lanes: Review[][]
 * each lane scrolls opposite direction alternately
 */
export default function EnhancedScrollingReviews({
  lanes,
  speed = 1,
}: {
  lanes: Review[][];
  speed?: number;
}): React.JSX.Element {
  return (
    <div className="space-y-6 py-8">
      {lanes.map((reviews, laneIdx) => (
        <ScrollingLane key={laneIdx} reviews={reviews} laneIdx={laneIdx} speed={speed} />
      ))}
    </div>
  );
}

function ScrollingLane({ reviews, laneIdx, speed }: { reviews: Review[]; laneIdx: number; speed: number }) {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const left = laneIdx % 2 === 0;

  // compute duration proportional to number of items (tweak base)
  const baseDuration = Math.max(12, reviews.length * 3) / speed;

  // width of one block (single set) will be computed at runtime:
  const getSingleWidth = () => {
    const el = trackRef.current;
    if (!el) return 0;
    // track contains two identical blocks; singleWidth = half of scrollWidth
    return Math.max(0, el.scrollWidth / 2);
  };

  // helper: read current translateX (px) of the track element
  const getCurrentTranslateX = (): number => {
    const el = trackRef.current;
    if (!el) return 0;
    const style = window.getComputedStyle(el);
    const transform = style.transform || style.webkitTransform || "";
    if (!transform || transform === "none") return 0;
    // transform like: matrix(a, b, c, d, tx, ty)
    const m = transform.match(/matrix\((.+)\)/);
    if (!m) return 0;
    const parts = m[1].split(",").map((p) => parseFloat(p.trim()));
    // tx is at index 4
    return Number.isFinite(parts[4]) ? parts[4] : 0;
  };

  // start the continuous loop animation from the canonical start
  const startFullLoop = async () => {
    const singleWidth = getSingleWidth();
    if (singleWidth === 0) return;
    if (left) {
      await controls.start({
        x: [0, -singleWidth],
        transition: { duration: baseDuration, repeat: Infinity, ease: "linear" },
      });
    } else {
      await controls.start({
        x: [-singleWidth, 0],
        transition: { duration: baseDuration, repeat: Infinity, ease: "linear" },
      });
    }
  };

  // Pause: stop and keep current translateX (we'll read it)
  const handleMouseEnter = () => {
    controls.stop();
    // we intentionally do not change the track's transform - we just stop so it stays where it is
  };

  // Resume: animate from current translateX to the loop end, then reset and resume the infinite loop
  const handleMouseLeave = () => {
    const singleWidth = getSingleWidth();
    if (singleWidth === 0) {
      // fallback to start full loop
      startFullLoop();
      return;
    }

    const currentX = getCurrentTranslateX(); // px (negative for left movement)
    // Determine the target end point depending on direction
    const targetX = left ? -singleWidth : 0;
    // remaining distance (absolute)
    const remaining = Math.abs(targetX - currentX);
    const fraction = Math.min(1, remaining / singleWidth);
    const firstDuration = Math.max(0.04, baseDuration * fraction); // avoid zero duration

    // 1) Animate from currentX -> targetX (one-time)
    controls
      .start({
        x: [currentX, targetX],
        transition: { duration: firstDuration, ease: "linear" },
      })
      .then(() => {
        // 2) Immediately reset to canonical start position (no visual jump because we reset on next tick)
        // For left lanes, canonical start is 0; for right lanes, canonical start is -singleWidth
        const canonicalStart = left ? 0 : -singleWidth;
        controls.set({ x: canonicalStart });

        // 3) Restart the infinite loop animation
        startFullLoop();
      })
      .catch(() => {
        // if animation was interrupted, just restart full loop
        startFullLoop();
      });
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="list"
      aria-label={left ? "reviews moving left" : "reviews moving right"}
    >
      <motion.div
        ref={trackRef}
        animate={controls}
        initial={false}
        onViewportEnter={() => {
          // start the infinite loop when the lane enters viewport
          startFullLoop();
        }}
        style={{ display: "flex", gap: 24, alignItems: "center", willChange: "transform" }}
      >
        {/* duplicate twice for seamless loop */}
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-6 py-2" aria-hidden={dup === 1 ? true : false}>
            {reviews.map((r) => (
              <div key={`${r.id}-${dup}`} className="flex-shrink-0">
                <EnhancedReviewCard review={r} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* subtle gradient overlay edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/100 dark:from-gray-900/95 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white/100 dark:from-gray-900/95 to-transparent" />

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          div[data-framer-motion] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
