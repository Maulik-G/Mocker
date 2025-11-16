// components/exam/ExamProctor.tsx
'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  onAutoSubmit?: () => void;
  maxViolations?: number;
  suspend?: boolean;
};

// vendor fullscreen fallbacks shape (no `any`)
type VendorFullscreenElement = {
  webkitRequestFullscreen?: () => void;
};

type VendorDocument = {
  webkitIsFullScreen?: boolean;
  mozFullScreen?: boolean;
  msFullscreenElement?: Element | null;
};

export default function ExamProctor({
  children,
  onAutoSubmit,
  maxViolations = 3,
  suspend = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [violations, setViolations] = useState<number>(0);
  const [showWarning, setShowWarning] = useState<boolean>(false);

  /** REQUEST FULLSCREEN — must be triggered by a user click */
  const enterFullscreen = useCallback(() => {
    const el = containerRef.current ?? document.documentElement;
    // typed vendor fallback
    const vendorEl = el as HTMLElement & VendorFullscreenElement;

    if (typeof (el as HTMLElement).requestFullscreen === 'function') {
      (el as HTMLElement).requestFullscreen().catch(() => {
        /* ignore fullscreen rejection */
      });
    } else if (typeof vendorEl.webkitRequestFullscreen === 'function') {
      vendorEl.webkitRequestFullscreen();
    }
    setFullscreen(true);
  }, []);

  /** REGISTER A VIOLATION — NO-OP when suspended */
  const addViolation = useCallback(() => {
    if (suspend) return; // ignore while suspended (e.g. during submit)

    setViolations((v) => {
      const next = v + 1;
      setShowWarning(true);

      if (next >= maxViolations) {
        if (onAutoSubmit) {
          // small timeout so UI updates show before navigation
          setTimeout(() => onAutoSubmit(), 800);
        } else {
          alert('Exam ended due to repeated violations.');
        }
      }
      return next;
    });
  }, [suspend, maxViolations, onAutoSubmit]);

  /** TAB SWITCH, MINIMIZE, VISIBILITY */
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') addViolation();
    };
    const handleBlur = () => addViolation();

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('blur', handleBlur);
    };
  }, [addViolation, suspend]);

  /** ESC / Fullscreen exit detection (with vendor fallbacks) */
  useEffect(() => {
    const handleFsChange = () => {
      const docVendor = document as unknown as VendorDocument;
      const fs =
        !!document.fullscreenElement ||
        !!docVendor.webkitIsFullScreen ||
        !!docVendor.mozFullScreen ||
        !!docVendor.msFullscreenElement;
      setFullscreen(fs);
      if (!fs) addViolation();
    };

    document.addEventListener('fullscreenchange', handleFsChange);
    // vendor event names can be present on some browsers; these accept EventListener
    document.addEventListener('webkitfullscreenchange', handleFsChange as EventListener);
    document.addEventListener('mozfullscreenchange', handleFsChange as EventListener);
    document.addEventListener('MSFullscreenChange', handleFsChange as EventListener);

    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange as EventListener);
      document.removeEventListener('mozfullscreenchange', handleFsChange as EventListener);
      document.removeEventListener('MSFullscreenChange', handleFsChange as EventListener);
    };
  }, [addViolation, suspend]);

  return (
    <div ref={containerRef} className="relative">
      {/* Silences "fullscreen assigned but never used" by exposing a data attribute.
          It's visually hidden but still references the state. */}
      <div aria-hidden style={{ display: 'none' }} data-fullscreen={fullscreen ? '1' : '0'} />

      <div>{children}</div>

      {/* only show warning when NOT suspended */}
      {showWarning && !suspend && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full shadow-xl">
            <h2 className="text-xl font-bold text-red-600">⚠ Warning</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              You switched tabs or exited fullscreen. This counts as a violation.
            </p>
            <p className="mt-2">
              Violations: <b>{violations}</b> / {maxViolations}
            </p>

            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded w-full"
                onClick={() => {
                  setShowWarning(false);
                  enterFullscreen();
                }}
              >
                Resume Exam (Go Fullscreen)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
