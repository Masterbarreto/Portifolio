export type SkillCategory = 'Backend' | 'Frontend' | 'Database' | 'DevOps & Infra' | 'Other';

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: string; // e.g., "Advanced", "Intermediate", "Familiar"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  imageUrl: string;
  imageHint: string;
  githubUrl: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description:string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    summary: string;
    imageUrl: string;
    imageHint: string;
    content: string;
    links?: { label: string; url: string }[];
}
