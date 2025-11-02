import ContributionHeatmap from "@/components/contribution-heatmap";
import ProjectCard from "@/components/project-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/lib/data";
import { BookMarked, GitFork, Star } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Projetos | MasterDev Portfolio',
  description: 'Explore os projetos de Pedro Henrique, incluindo aplicações web, robótica e experimentos com IA.',
};

const PinnedRepos = [
    {
        name: 'Guarda-Meu-Lanche',
        description: 'App de otimização de compras em lanchonete escolar. Backend em Node.js.',
        language: 'TypeScript',
        stars: 42,
        forks: 8,
        url: 'https://github.com/MasterBarreto/Guarda-Meu-Lanche'
    },
    {
        name: 'portfolio-nextjs',
        description: 'O código-fonte deste portfólio, construído com Next.js e Tailwind CSS.',
        language: 'TypeScript',
        stars: 73,
        forks: 12,
        url: 'https://github.com/MasterBarreto/portfolio-nextjs'
    },
    {
        name: 'bots-ia-whatsapp',
        description: 'Experimentos com automação de atendimento via WhatsApp.',
        language: 'JavaScript',
        stars: 31,
        forks: 5,
        url: 'https://github.com/MasterBarreto/whatsapp-bots'
    }
]

const LanguageColor = ({ lang }: { lang: string }) => {
    const colors: { [key: string]: string } = {
        'TypeScript': 'bg-blue-500',
        'JavaScript': 'bg-yellow-500',
        'Python': 'bg-green-500',
    };
    return <span className={`w-3 h-3 rounded-full inline-block mr-2 ${colors[lang] || 'bg-gray-500'}`}></span>
}

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

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Repositórios Fixados no GitHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PinnedRepos.map(repo => (
                <Link href={repo.url} key={repo.name} target="_blank" rel="noopener noreferrer">
                    <Card className="h-full hover:border-primary transition-colors flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline text-lg">
                                <BookMarked className="h-5 w-5 text-primary"/>
                                {repo.name}
                            </CardTitle>
                            <CardDescription>{repo.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-end text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center"><LanguageColor lang={repo.language} /> {repo.language}</span>
                                <span className="flex items-center gap-1"><Star className="h-4 w-4"/> {repo.stars}</span>
                                <span className="flex items-center gap-1"><GitFork className="h-4 w-4"/> {repo.forks}</span>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Heatmap de Contribuições (Estático)</h2>
        <Card className="p-4 md:p-6">
            <ContributionHeatmap />
        </Card>
      </section>
    </div>
  );
}
