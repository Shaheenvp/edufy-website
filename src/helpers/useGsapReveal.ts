"use client";

import { RefObject, useLayoutEffect } from "react";
import { getGsap, getScrollTrigger } from "@/helpers/gsapClient";

type RevealOptions = {
  /** Defaults to "[data-reveal]" */
  selector?: string;
  /** ScrollTrigger start, defaults to "top 80%" */
  start?: string;
  /** Stagger for multiple elements */
  stagger?: number;
  /** Distance in px */
  y?: number;
  /** Duration in seconds */
  duration?: number;
  /** Only animate once (recommended) */
  once?: boolean;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function useGsapReveal(scopeRef: RefObject<HTMLElement | null>, opts: RevealOptions = {}) {
  const {
    selector = "[data-reveal]",
    start = "top 80%",
    stagger = 0.08,
    y = 24,
    duration = 0.7,
    once = true,
  } = opts;

  useLayoutEffect(() => {
    const el = scopeRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const gsap = getGsap();

    const ctx = gsap.context(() => {
      const targets = (gsap.utils.toArray as any)(selector) as HTMLElement[];
      if (!targets.length) return;

      gsap.set(targets, { autoAlpha: 0, y });

      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          once,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      getScrollTrigger().refresh();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}


