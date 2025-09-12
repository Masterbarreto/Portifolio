'use client';

import { useState } from 'react';
import type { Skill, SkillCategory } from '@/lib/types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';

interface SkillsGridProps {
  skills: Skill[];
}

const CATEGORIES: SkillCategory[] = ['Backend', 'Frontend', 'Database', 'DevOps & Infra', 'Other'];

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <TooltipProvider>
      <div className="space-y-8">
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === 'All' ? 'default' : 'secondary'}
            onClick={() => setSelectedCategory('All')}
          >
            Todas
          </Button>
          {CATEGORIES.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'secondary'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map(skill => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className="cursor-pointer">
                <Badge
                  className={cn(
                    'w-full text-center justify-center text-sm md:text-base px-4 py-3 border-transparent transition-all duration-300 transform hover:scale-110 hover:bg-primary hover:text-primary-foreground'
                  )}
                  variant="secondary"
                >
                  {skill.name}
                </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{skill.proficiency}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
