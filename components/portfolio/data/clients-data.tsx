import React from "react";

export interface ClientItem {
  name: string;
  category: string;
  tagline?: string;
  svg: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

export const clientsData: ClientItem[] = [
  {
    name: "Linear",
    category: "Product Motion",
    tagline: "Issue tracking & sprints",
    svg: (props) => (
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-label="Linear"
        {...props}
      >
        <path d="M1.218 57.777C-.406 48.01 1.05 37.917 5.44 29.01c4.39-8.907 11.455-16.149 20.198-20.701 8.742-4.551 18.795-6.223 28.736-4.778 9.941 1.445 19.262 6.064 26.643 13.203L1.218 57.777z" />
        <path d="M4.697 68.225l57.172-35.32c5.845 6.046 9.773 13.682 11.233 21.838 1.46 8.156-.16 16.54-4.633 23.978-4.474 7.438-11.274 13.167-19.448 16.386-8.174 3.218-17.214 3.488-25.852.772a39.816 39.816 0 0 1-18.472-13.654v-.004z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    category: "Brand & Launch",
    tagline: "Frontend cloud",
    svg: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Vercel"
        {...props}
      >
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "Design System Motion",
    tagline: "Collaborative design",
    svg: (props) => (
      <svg
        viewBox="0 0 38 57"
        fill="currentColor"
        aria-label="Figma"
        {...props}
      >
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0zM0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0zM0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5zM0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5zM19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" />
      </svg>
    ),
  },
  {
    name: "Raycast",
    category: "UI Micro-interactions",
    tagline: "Supercharged productivity",
    svg: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Raycast"
        {...props}
      >
        <path d="M18.545 4.545l-4.09 4.09 2.182 2.182 4.09-4.09-2.182-2.182zm-8 8l-4.09 4.09 2.182 2.182 4.09-4.09-2.182-2.182zm-4.727-4.727l-2.182 2.182 4.09 4.09 2.182-2.182-4.09-4.09zm16 16l-2.182 2.182 4.09 4.09 2.182-2.182-4.09-4.09zm-3.273-4.728l-8-8-2.182 2.182 8 8 2.182-2.182zM4.545 1.273L.455 5.364l2.181 2.181 4.091-4.09-2.182-2.182zm18.182 18.182l-4.091 4.09 2.182 2.182 4.09-4.091-2.181-2.181z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "3D Visuals & Demo",
    tagline: "Open source database",
    svg: (props) => (
      <svg
        viewBox="0 0 109 113"
        fill="currentColor"
        aria-label="Supabase"
        {...props}
      >
        <path d="M63.7076 110.284C60.848 113.885 55.0243 111.976 54.8474 107.391L52.7937 54.0841H98.9221C107.561 54.0841 112.355 64.0743 106.883 70.9631L63.7076 110.284Z" />
        <path d="M45.2924 2.71619C48.152 -0.884784 53.9757 1.02387 54.1526 5.60914L56.2063 58.9159H10.0779C1.43949 58.9159 -3.35548 48.9257 2.11656 42.0369L45.2924 2.71619Z" />
      </svg>
    ),
  },
  {
    name: "Framer",
    category: "Interactive Prototypes",
    tagline: "Interactive web canvas",
    svg: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Framer"
        {...props}
      >
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    category: "Kinetic Explainer",
    tagline: "Connected workspace",
    svg: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Notion"
        {...props}
      >
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.006-.793c.373 0 .42-.14.28-.42L16.88 1.458c-.42-.56-1.167-.84-2.007-.793L3.106 1.552c-.466.046-.606.326-.42.606l1.773 2.05zm.84 3.732v12.78c0 .84.42 1.167 1.26 1.12l13.111-.746c.84-.047 1.12-.607 1.12-1.307V6.868c0-.653-.373-.933-1.026-.886L5.86 6.773c-.466.047-.56.42-.56 1.167zm12.365.746c.093.42.047.84-.374.887l-1.073.233v9.098c-.467.28-.98.42-1.447.42-.84 0-1.26-.373-1.96-1.213L8.847 10.97v6.626l1.493.327c.42.093.513.466.513.886v.047c0 .42-.233.466-.653.466l-3.5-.047c-.42 0-.56-.233-.56-.653 0-.42.233-.56.653-.606l1.213-.187V9.757l-1.353-.14c-.42-.047-.513-.42-.513-.793v-.047c0-.42.28-.513.7-.513l3.687.047 5.272 7.745V9.757l-1.213-.14c-.42-.047-.513-.42-.513-.793v-.047c0-.42.28-.513.7-.513l3.5.047c.42 0 .56.14.56.56v.047z" />
      </svg>
    ),
  },
  {
    name: "Loom",
    category: "Video Product Motion",
    tagline: "Async video messaging",
    svg: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Loom"
        {...props}
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.75 6.222a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zm-5.528 2.29a1.75 1.75 0 1 1-1.75 3.031 1.75 1.75 0 0 1 1.75-3.031zm0 7.016a1.75 1.75 0 1 1-1.75-3.031 1.75 1.75 0 0 1 1.75 3.031zm5.528 2.29a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zm5.528-2.29a1.75 1.75 0 1 1-1.75-3.031 1.75 1.75 0 0 1 1.75 3.031zm0-7.016a1.75 1.75 0 1 1-1.75 3.031 1.75 1.75 0 0 1 1.75-3.031zM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" />
      </svg>
    ),
  },
  {
    name: "Resend",
    category: "Email Motion UI",
    tagline: "Developer email platform",
    svg: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Resend"
        {...props}
      >
        <path d="M2.5 4h19a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 18.5v-13A1.5 1.5 0 0 1 2.5 4zm9.5 7.828L4.621 6.5h14.758L12 11.828zM3 7.808V18h18V7.808l-8.435 6.025a1 1 0 0 1-1.13 0L3 7.808z" />
      </svg>
    ),
  },
  {
    name: "Arc",
    category: "Interface & Sound",
    tagline: "The browser company",
    svg: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Arc"
        {...props}
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 3.86 2.186 7.21 5.414 8.892l1.01-1.724C5.787 17.848 4 15.132 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8c0 3.132-1.787 5.848-4.424 7.168l1.01 1.724C19.814 19.21 22 15.86 22 12c0-5.523-4.477-10-10-10zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
      </svg>
    ),
  },
];
