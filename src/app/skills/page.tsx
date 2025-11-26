import SkillsGrid from "@/components/skills";
import { SKILLS } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | MasterDev Portfolio',
  description: 'Lista de habilidades e tecnologias de Pedro Henrique, incluindo linguagens, bancos de dados, e ferramentas de DevOps.',
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Habilidades Técnicas</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Minha caixa de ferramentas de desenvolvimento. Passe o mouse sobre uma habilidade para ver minha experiência.
        </p>
      </div>

      <section className="mt-12">
        <SkillsGrid skills={SKILLS} />
      </section>
    </div>
  );
}
