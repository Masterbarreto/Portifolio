'use client';
import type { Skill, SkillCategory } from '@/lib/types';
import { Badge } from './ui/badge';
import {
  SiJavascript, SiNodedotjs, SiReact, SiSpringboot, SiPostgresql, SiMysql, 
  SiGit, SiGithub, SiFigma, SiDocker, SiGithubactions, SiVercel, SiPython, SiTypescript
} from 'react-icons/si';
import { FaMobileAlt } from 'react-icons/fa';


interface SkillsProps {
  skills: Skill[];
}

const iconMap: { [key: string]: React.ReactElement | null } = {
  'JavaScript': <SiJavascript className="mr-2" />,
  'Node.js': <SiNodedotjs className="mr-2" />,
  'React.js': <SiReact className="mr-2" />,
  'React Native': <SiReact className="mr-2" />,
  'Spring Boot': <SiSpringboot className="mr-2" />,
  'PostgreSQL': <SiPostgresql className="mr-2" />,
  'MySQL': <SiMysql className="mr-2" />,
  'Visual Studio Code': null, // No icon from this library
  'Git': <SiGit className="mr-2" />,
  'GitHub': <SiGithub className="mr-2" />,
  'Figma': <SiFigma className="mr-2" />,
  'Docker': <SiDocker className="mr-2" />,
  'GitHub Actions': <SiGithubactions className="mr-2" />,
  'Vercel': <SiVercel className="mr-2" />,
  'Python': <SiPython className="mr-2" />,
  'TypeScript': <SiTypescript className="mr-2" />,
  'Expo': <FaMobileAlt className="mr-2" />,
};

const CATEGORIES: SkillCategory[] = ['Linguagens e Frameworks', 'Bancos de Dados', 'Ferramentas', 'DevOps e CI/CD'];

export default function Skills({ skills }: SkillsProps) {
  const skillsByCategory = CATEGORIES.map(category => ({
    name: category,
    skills: skills.filter(skill => skill.category === category),
  }));

  return (
    <div className="space-y-8">
      {skillsByCategory.map(category => (
        category.skills.length > 0 && (
          <div key={category.name}>
            <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map(skill => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="text-lg px-4 py-2 flex items-center"
                >
                  {iconMap[skill.name] || null}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}
