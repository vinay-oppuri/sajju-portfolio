export interface HeroVideo {
  id: string;
  title: string;
  category: string;
  tool: string;
  videoUrl: string;
  slug?: string;
  accent: string;
  duration: string;
}

export const heroVideos: HeroVideo[] = [
  {
    id: "pulse-one",
    title: "Pulse / One",
    category: "Brand Motion",
    tool: "Blender · After Effects",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-abstract-rotating-sphere-of-particles-41558-large.mp4",
    slug: "pulse-one",
    accent: "from-orange-500/20 to-rose-500/20",
    duration: "0:12",
  },
  {
    id: "flow-state",
    title: "Flow State UI",
    category: "Product & UI Motion",
    tool: "Figma · After Effects",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4",
    slug: "flow-state",
    accent: "from-blue-500/20 to-indigo-500/20",
    duration: "0:18",
  },
  {
    id: "words-in-motion",
    title: "Kinetic Velocity",
    category: "Kinetic Typography",
    tool: "After Effects · Premiere",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-digital-grid-animation-31915-large.mp4",
    slug: "words-in-motion",
    accent: "from-emerald-500/20 to-teal-500/20",
    duration: "0:15",
  },
  {
    id: "cyber-rings",
    title: "Orbital Dynamics",
    category: "3D Motion Design",
    tool: "Blender · Octane",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-abstract-technological-3d-rings-animation-41557-large.mp4",
    slug: "pulse-one",
    accent: "from-purple-500/20 to-cyan-500/20",
    duration: "0:10",
  },
  {
    id: "fluid-form",
    title: "Liquid Particle",
    category: "Visual Simulation",
    tool: "Houdini · After Effects",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-fluid-particles-in-motion-in-the-dark-44275-large.mp4",
    slug: "flow-state",
    accent: "from-amber-500/20 to-red-500/20",
    duration: "0:14",
  },
  {
    id: "laser-shift",
    title: "Spectra Reveal",
    category: "Commercial Launch",
    tool: "Cinema 4D · Resolve",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-animation-in-blue-and-purple-41549-large.mp4",
    slug: "words-in-motion",
    accent: "from-violet-500/20 to-fuchsia-500/20",
    duration: "0:09",
  },
];
