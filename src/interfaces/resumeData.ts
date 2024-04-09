export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  summary: string;
  linkedIn: string;
  github: string;
  location: {
      region: string | null;
      country: string;
  };
}

export interface Work {
  name: string;
  position: string;
  urls: string[];
  startDate: string | null;
  endDate: string | null;
  summary: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
}

export interface Skill {
  name: string;
}

export interface Language {
  language: string;
  flag: string;
  fluency: string;
  level: string | null;
}

interface Reference {
  name: string;
  reference: string;
}

export interface Project {
  name: string;
  isActive: boolean;
  startDate: string | null;
  endDate: string | null;
  description: string;
  picture: string | null;
  highlights: string[];
  url: string | null;
}

export interface ResumeData {
  basics: Basics;
  work: Work[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  references: Reference[];
  projects: Project[];
}