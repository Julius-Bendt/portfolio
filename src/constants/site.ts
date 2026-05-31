// Site Configuration Constants
export const SITE_URL = "https://jub.dk";
export const SITE_TITLE = "Julius Bendt | Portfolio";
export const DEFAULT_HERO_IMAGE = "julius.png";
export const SITE_DESCRIPTION =
  "Julius Bendt - Fullstack developer, DevOps engineer and dark mode enthusiast";

// Author Information
export const AUTHOR = {
  name: "Julius Bendt",
  url: SITE_URL,
  jobTitle: "Fullstack Developer",
  email: undefined,
  social: {
    github: "https://github.com/Julius-Bendt",
    linkedin: "https://www.linkedin.com/in/julius-bendt",
    leetcode: "https://leetcode.com/Julius-Bendt",
    itchio: "https://bukz.itch.io",
  },
} as const;

// SEO Defaults
export const DEFAULT_SEO = {
  description: SITE_DESCRIPTION,
  keywords: [
    "fullstack developer",
    "devops engineer",
    "software engineer",
    "web developer",
    "Julius Bendt",
  ],
  locale: "en_US",
  themeColor: "#1f2022",
} as const;

// Animation Constants
export const ANIMATION = {
  fadeInDuration: "1s",
  fadeInDelay: {
    short: "300ms",
    medium: "600ms",
  },
  cubesBackground: {
    numberOfShapes: 40,
    shapeMinSize: 20,
    shapeMaxSize: 40,
    shapeOpacity: 0.2,
    parallaxSpeed: 0.15,
    moveSpeedMin: 0.02,
    moveSpeedMax: 0.07,
    rotationSpeedMax: 0.1,
    fadeOutDuration: 1000, // ms
    resetTopThreshold: 100, // px
  },
} as const;

// Responsive Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  mobile: 768, // md breakpoint
} as const;
