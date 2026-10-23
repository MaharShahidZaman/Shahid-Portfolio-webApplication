import { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Communication Center — MaxChat",
    role: "Project Lead / Web Developer",
    featured: true,
    description:
      "A real-time communication system that brings messaging, calling, email, tasks, and administration into coordinated workflows.",
    technologies: ["React.js", ".NET Core", "SignalR", "Twilio"],
    features: [
      "Led web development across communication modules",
      "Built interfaces for chat, calls, email, tasks, and administration",
      "Supported real-time messaging and calling experiences",
    ],
    status: "Enterprise project",
  },
  {
    name: "Management Information System (MIS)",
    role: "Full Stack Developer",
    featured: true,
    description:
      "An enterprise management system that supports role-based operational workflows across business functions.",
    technologies: [
      "React.js",
      "Material UI",
      ".NET Core",
      "REST APIs",
      "SQL Server",
    ],
    features: [
      "Developed Company Settings, HR, and Admin modules",
      "Contributed to Credentialing and Billing workflows",
      "Built frontend interfaces and supporting application modules",
    ],
    status: "Enterprise project",
  },
  {
    name: "Union Health Center (UHS)",
    role: "Frontend Developer",
    description:
      "A healthcare application with dashboard and charge-management interfaces for day-to-day operational workflows.",
    technologies: ["React.js", "Material UI", "Redux"],
    features: [
      "Developed dashboard interfaces",
      "Built charge-management pages",
      "Created reusable frontend UI components",
    ],
    status: "Internal project",
  },
  {
    name: "MaxChart - Biller Website",
    role: "Frontend Developer",
    description:
      "A biller-facing healthcare application focused on clear, efficient charge-management workflows.",
    technologies: ["React.js", "Material UI", "Redux"],
    features: [
      "Developed the dashboard",
      "Built Add Charge, Edit Charge, and Charge Details pages",
      "Delivered reusable charge-management UI",
    ],
    status: "Internal project",
  },
  {
    name: "Expense Tracker",
    role: "Developer",
    description:
      "A personal project for tracking expenses through a focused, easy-to-use interface.",
    technologies: ["JavaScript", "React.js", "Context API"],
    features: ["Expense tracking workflow"],
    status: "Personal project",
    github: "https://github.com/MaharShahidZaman/Expense-Tracker/tree/master",
  },
  {
    name: "Gym Website",
    role: "Developer",
    description:
      "A responsive personal project for presenting gym-related content and experiences.",
    technologies: ["React.js", "Context API"],
    features: ["Responsive website development"],
    status: "Personal project",
    github: "https://github.com/MaharShahidZaman/Gym-Project",
  },
];
