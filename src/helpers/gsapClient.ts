"use client";

// Client-only GSAP helpers.
// Centralizing plugin registration avoids duplicate registrations across components.

let registered = false;
let gsapInstance: any = null;
let ScrollTriggerInstance: any = null;

// Mock GSAP for SSR
const createMockTimeline = () => {
  const tl = {
    from: () => tl,
    to: () => tl,
  };
  return tl;
};

const mockGsap: any = {
  context: () => ({ revert: () => {} }),
  timeline: (opts?: any) => createMockTimeline(),
  set: () => {},
  quickSetter: () => () => {},
  utils: { toArray: () => [] },
  registerPlugin: () => {},
  to: () => {},
  from: () => {},
  killTweensOf: () => {},
};

const mockScrollTrigger = {
  refresh: () => {},
  create: () => ({ kill: () => {} }),
};

export function getGsap() {
  // Only run on client side
  if (typeof window === "undefined") {
    return mockGsap;
  }

  // Lazy load GSAP only on client using dynamic import
  if (!gsapInstance) {
    try {
      // gsap's CJS/ESM interop can return different shapes; normalize to the actual gsap instance.
      const gsapMod = require("gsap");
      gsapInstance = gsapMod?.gsap ?? gsapMod?.default ?? gsapMod;

      const stMod = require("gsap/ScrollTrigger");
      ScrollTriggerInstance = stMod?.ScrollTrigger ?? stMod?.default ?? stMod;
    } catch (e) {
      console.warn("GSAP not available:", e);
      return mockGsap;
    }
  }

  if (!registered && gsapInstance && ScrollTriggerInstance) {
    try {
      gsapInstance.registerPlugin(ScrollTriggerInstance);
      registered = true;
    } catch (e) {
      console.warn("Failed to register ScrollTrigger:", e);
    }
  }

  // If something went wrong and we didn't get a real gsap object, fall back safely.
  if (!gsapInstance?.context) return mockGsap;
  return gsapInstance;
}

export function getScrollTrigger() {
  if (typeof window === "undefined") {
    return mockScrollTrigger;
  }

  if (!ScrollTriggerInstance) {
    try {
      const stMod = require("gsap/ScrollTrigger");
      ScrollTriggerInstance = stMod?.ScrollTrigger ?? stMod?.default ?? stMod;
    } catch (e) {
      console.warn("ScrollTrigger not available:", e);
      return mockScrollTrigger;
    }
  }

  return ScrollTriggerInstance || mockScrollTrigger;
}


