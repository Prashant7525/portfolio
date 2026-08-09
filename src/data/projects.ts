import {
  FaReact,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiHuggingface,
} from "react-icons/si";

export const projects = [
  {
    id: 1,

    title: "AI Image Captioner",

    status: "Completed",

    image: "/images/projects/ai-captioner.png",

    description:
      "An AI-powered image captioning application that analyzes uploaded images and generates natural-language descriptions using Hugging Face Vision AI. Users can choose different caption styles and generate, copy, or download captions.",

    features: [
      "Image Upload",
      "AI Image Understanding",
      "Short Captions",
      "Detailed Captions",
      "Creative Captions",
      "Regenerate Captions",
      "Copy Captions",
      "Download Captions",
      "Responsive UI",
      "Render Deployment",
    ],

    stats: [
      {
        title: "AI Model",
        value: "GLM-4.5V",
      },
      {
        title: "Deployment",
        value: "Render",
      },
    ],

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#ffffff",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "Hugging Face",
        icon: SiHuggingface,
        color: "#FFD21E",
      },
    ],

    github:
      "https://github.com/Prashant7525/AI-Image-Captioner",

    liveDemo:
      "https://ai-image-captioner-3p7k.onrender.com",
  },
];