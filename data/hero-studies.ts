export interface MotionStudy {
  number: string;
  title: string;
  category: string;
  tools: string;
  slug: string;
  accent: string;
  type: "pulse" | "flow" | "kinetic" | "frame" | "vortex" | "chroma";
}

export const motionStudies: MotionStudy[] = [
  {
    number: "01",
    title: "Pulse / One",
    category: "Brand Motion",
    tools: "Blender · After Effects",
    slug: "pulse-one",
    accent: "bg-[#df8c74] text-foreground",
    type: "pulse",
  },
  {
    number: "02",
    title: "Flow State",
    category: "Product & UI Motion",
    tools: "Figma · After Effects",
    slug: "flow-state",
    accent: "bg-[#4d6acf] text-white",
    type: "flow",
  },
  {
    number: "03",
    title: "Words in Motion",
    category: "Kinetic Typography",
    tools: "After Effects · Premiere",
    slug: "words-in-motion",
    accent: "bg-[#d9d4ca] text-foreground",
    type: "kinetic",
  },
  {
    number: "04",
    title: "Frame by Frame",
    category: "Social Motion System",
    tools: "Premiere Pro · CapCut",
    slug: "frame-by-frame",
    accent: "bg-[#d6e66d] text-foreground",
    type: "frame",
  },
  {
    number: "05",
    title: "Orbital Dynamics",
    category: "3D Spatial Study",
    tools: "Blender · Octane",
    slug: "pulse-one",
    accent: "bg-[#25282a] text-white",
    type: "vortex",
  },
  {
    number: "06",
    title: "Chroma Shift",
    category: "Commercial Title",
    tools: "Cinema 4D · Resolve",
    slug: "words-in-motion",
    accent: "bg-[#e89b88] text-foreground",
    type: "chroma",
  },
];
