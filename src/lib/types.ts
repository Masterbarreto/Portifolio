export type SkillCategory = 'Linguagens e Frameworks' | 'Bancos de Dados' | 'Ferramentas' | 'DevOps e CI/CD';

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: string;
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

export interface SubjectContent {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    items: string[];
}

export interface Subject {
    slug: string;
    title: string;
    content?: SubjectContent;
}
  
export interface Materia {
    slug: string;
    title: string;
    description: string;
    subjects: Subject[];
}