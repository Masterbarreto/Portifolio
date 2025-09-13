export type SkillCategory = 'Linguagens e Frameworks' | 'Bancos de Dados' | 'Ferramentas' | 'DevOps e CI/CD';

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: string; // e.g., "Advanced", "Intermediate", "Familiar"
  icon: string;
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
