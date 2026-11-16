// Edit this file to make the site yours. Everything on the page comes from here.
// Icons come from https://lucide.dev/icons — use the icon's name in PascalCase.
// To use your own photo, put it in /public (e.g. public/me.jpg) and set `photo: "/me.jpg"`.

export const site = {
  name: "Your Name",
  role: "EdTech Developer",
  location: "City, Country",
  photo: "/profile.svg",
  headline: "I build learning experiences that kids and teachers love.",
  tagline:
    "Interactive lessons, playful learning games and classroom tools — designed with educators and built for every learner.",
  email: "hello@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/", icon: "Github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "Linkedin" },
  ],
  stats: [
    { value: "10k+", label: "Learners reached", icon: "Users" },
    { value: "25", label: "Lessons built", icon: "BookOpen" },
    { value: "5", label: "Schools partnered", icon: "School" },
  ],
  about: [
    "Write a short paragraph about who you are and why you care about education and technology.",
    "Add a second paragraph about your background — teaching, design, development — and what you're building now.",
  ],
  skills: [
    { name: "React & Next.js", icon: "Code2", color: "violet" },
    { name: "Game-based learning", icon: "Gamepad2", color: "pink" },
    { name: "Accessibility (WCAG)", icon: "Accessibility", color: "sky" },
    { name: "LMS & LTI integrations", icon: "Plug", color: "amber" },
    { name: "Learning analytics", icon: "BarChart3", color: "emerald" },
    { name: "UX for kids & teachers", icon: "Smile", color: "orange" },
  ],
  projects: [
    {
      title: "Math Quest",
      description: "A game where students level up by solving fractions puzzles, with hints that adapt to each learner.",
      tags: ["React", "Gamification"],
      icon: "Calculator",
      color: "violet",
      href: "#",
    },
    {
      title: "ReadAlong",
      description: "A reading app that highlights words as they're read aloud and tracks fluency over time.",
      tags: ["Speech API", "Next.js"],
      icon: "BookOpenCheck",
      color: "pink",
      href: "#",
    },
    {
      title: "Teacher Dashboard",
      description: "Real-time class insights so teachers can see who's stuck and step in at the right moment.",
      tags: ["Analytics", "TypeScript"],
      icon: "LayoutDashboard",
      color: "sky",
      href: "#",
    },
    {
      title: "Science Lab Sim",
      description: "Virtual experiments that let students mix, measure and explore safely from any device.",
      tags: ["Canvas", "Simulation"],
      icon: "FlaskConical",
      color: "emerald",
      href: "#",
    },
  ],
  experience: [
    { period: "2024 — Now", title: "EdTech Developer", org: "Company", note: "What you build there and for whom.", icon: "Rocket" },
    { period: "2021 — 2024", title: "Frontend Developer", org: "Company", note: "Highlights from this role.", icon: "Laptop" },
    { period: "2018 — 2021", title: "Teacher", org: "School", note: "Classroom experience that shapes how you build.", icon: "GraduationCap" },
  ],
};

export type Color = "violet" | "pink" | "sky" | "amber" | "emerald" | "orange";
