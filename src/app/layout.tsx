import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prashant7525.vercel.app"), // Change after deployment

  title: {
    default: "Prashant Kumar | Full Stack Developer",
    template: "%s | Prashant Kumar",
  },

  description:
    "Prashant Kumar is a Full Stack Developer and AI enthusiast passionate about building scalable web applications, intelligent AI solutions, and modern user experiences using Next.js, React, TypeScript, Tailwind CSS, Node.js, and Machine Learning.",

  keywords: [
    "Prashant Kumar",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Machine Learning",
    "Artificial Intelligence",
    "AI",
    "Developer Portfolio",
  ],

  authors: [
    {
      name: "Prashant Kumar",
    },
  ],

  creator: "Prashant Kumar",

  openGraph: {
    title: "Prashant Kumar | Full Stack Developer",
    description:
      "Portfolio showcasing projects, skills, certifications, and AI development journey.",
    url: "https://prashant7525.vercel.app",
    siteName: "Prashant Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prashant Kumar | Full Stack Developer",
    description:
      "Portfolio showcasing projects, skills, certifications, and AI development journey.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          overflow-x-hidden
          bg-slate-950
          text-white
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}