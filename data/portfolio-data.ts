export interface ProjectItem {
  number: string;
  title: string;
  category: string;
  slug: string;
  accent?: string;
  year?: string;
  tools?: string;
  description?: string;
  videoUrl?: string;
  duration?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const projects: ProjectItem[] = [
  {
    number: "01",
    title: "Pulse / One",
    category: "Brand & 3D Motion",
    slug: "pulse-one",
    year: "2025",
    tools: "Blender · After Effects",
    description: "A study in rhythm, energy, and brand presence designed as a promotional motion system.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-abstract-rotating-sphere-of-particles-41558-large.mp4",
    duration: "0:12",
    accent: "bg-[#dc8b74]",
  },
  {
    number: "02",
    title: "Flow State",
    category: "Product & UI Animation",
    slug: "flow-state",
    year: "2025",
    tools: "Figma · After Effects",
    description: "Fluid interaction language for a digital product experience that makes features feel intuitive.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4",
    duration: "0:18",
    accent: "bg-[#526dc3] text-white",
  },
  {
    number: "03",
    title: "Words in Motion",
    category: "Kinetic Typography",
    slug: "words-in-motion",
    year: "2024",
    tools: "After Effects · Premiere Pro",
    description: "Experimental typographic cadence exploring rhythm, contrast, and visual voice.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-digital-grid-animation-31915-large.mp4",
    duration: "0:15",
    accent: "bg-[#ddd8ce]",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Brand motion",
    description: "Identity animation, logo reveals, launch moments, and motion systems.",
  },
  {
    title: "Product animation",
    description: "Product demos and interface motion that make new features easier to feel.",
  },
  {
    title: "Social content",
    description: "Short-form promotional edits and motion-led content built for attention.",
  },
  {
    title: "Explainers",
    description: "Simple, story-first videos that help a message land.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Listen",
    description: "The message, audience, and outcome.",
  },
  {
    number: "02",
    title: "Shape",
    description: "References, direction, and storyboard.",
  },
  {
    number: "03",
    title: "Move",
    description: "Animation, rhythm, and refinement.",
  },
];
