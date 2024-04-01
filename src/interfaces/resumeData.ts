interface Basics {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    summary: string;
    linkedIn: string;
    github: string;
    location: {
      region: string;
      country: string;
    };
  }
  
  interface WorkExperience {
    name: string;
    position: string;
    urls: string[];
    startDate: string;
    endDate: string | null;
    summary: string;
    highlights: string[];
  }
  
  interface Education {
    institution: string;
    area: string;
    studyType: string;
  }
  
  interface Skill {
    name: string;
  }
  
  interface Language {
    language: string;
    flag: string;
    fluency: string;
    level: string | null;
  }
  
  interface Reference {
    name: string;
    reference: string;
  }
  
  interface Project {
    name: string;
    isActive: boolean;
    startDate: string | null;
    endDate: string | null;
    description: string;
    picture: string | null;
    highlights: string[];
    url: string;
  }
  
  export interface ResumeData {
    basics: Basics;
    work: WorkExperience[];
    education: Education[];
    skills: Skill[];
    languages: Language[];
    references: Reference[];
    projects: Project[];
  }