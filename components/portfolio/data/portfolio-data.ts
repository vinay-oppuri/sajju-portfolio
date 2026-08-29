export interface ProjectItem {
  number: string;
  title: string;
  category: string;
  slug: string;
  accent: string;
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
    category: "Brand motion",
    slug: "pulse-one",
    accent: "bg-[#dc8b74]",
  },
  {
    number: "02",
    title: "Flow State",
    category: "Product animation",
    slug: "flow-state",
    accent: "bg-[#526dc3] text-white",
  },
  {
    number: "03",
    title: "Words in Motion",
    category: "Kinetic typography",
    slug: "words-in-motion",
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
