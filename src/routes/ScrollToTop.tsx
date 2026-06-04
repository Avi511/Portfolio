"use client";

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent the browser from automatically restoring the previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top (0, 0) immediately upon page load/reload
    window.scrollTo(0, 0);

    // Re-enable automatic scroll restoration if this component unmounts
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // This component doesn't render any visible UI
  return null;
}
