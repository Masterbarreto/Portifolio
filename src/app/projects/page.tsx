import AiTool from "@/components/ai-tool";
import ProjectCard from "@/components/project-card";
import { PROJECTS } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos | MasterDev Portfolio',
  description: 'Explore os projetos de Pedro Henrique, incluindo aplicações web, robótica e experimentos com IA.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Projetos</h1>
      
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-20 max-w-3xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Ferramenta de IA</h2>
            <p className="text-muted-foreground mt-2">Gere tags e um resumo para a descrição do seu projeto usando IA.</p>
        </div>
        <AiTool />
      </section>
    </div>
  );
}
