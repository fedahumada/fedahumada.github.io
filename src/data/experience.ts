export interface Experience {
  company: string;
  role: string;
  period: string;
  url: string;
  description: string;
  note?: string;
}
export const experience: Experience[] = [
  {
    company: "micro1",
    role: "AI Trainer",
    period: "October 2026 to Present",
    url: "https://www.micro1.ai/",
    description: "Contributed to AI model training across multiple projects.",
    note: "Project-based contractor work",
  },
  {
    company: "EPAM Systems",
    role: "Junior Software Testing Engineer",
    period: "May 2026 to October 2026",
    url: "https://www.epam.com/",
    description:
      "Contributed to software quality assurance and testing activities for an AAA game project, including test execution, issue identification, issue reproduction, and defect reporting.",
    note: "Game QA · Structured testing · Technical reporting",
  },
  {
    company: "FEDAHUMADA STUDIO",
    role: "Unreal Engine Generalist",
    period: "August 2023 to April 2026",
    url: "https://www.fab.com/sellers/Fedahumada%20Studio",
    description:
      "Worked on Unreal Engine projects and proprietary development tools, contributing to gameplay systems, online functionality, technical art, rendering, UI, and performance optimization.",
  },
];
