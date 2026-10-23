export type Project = {
  name: string;
  role: string;
  description: string;
  technologies: string[];
  features: string[];
  featured?: boolean;
  status?: string;
  github?: string;
};
export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
};
export type Education = {
  institution: string;
  qualification: string;
  period: string;
};
