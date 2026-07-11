export interface PersonalInfo {
  name: string;
  headline: string;
  intro: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  board?: string;
  duration: string;
  startYear: number;
  endYear: number;
  score: string;
  scoreType: "CGPA" | "Percentage";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  date: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  github?: string;
  demo?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  score: string;
  date: string;
  icon: string;
}

export interface Activity {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
