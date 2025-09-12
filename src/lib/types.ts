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
  description: string;
}
