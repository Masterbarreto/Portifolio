import ContributionHeatmap from "@/components/contribution-heatmap";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked, GitFork, Star } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'GitHub | MasterDev Portfolio',
  description: 'Repositórios e atividade de Pedro Henrique no GitHub.',
};

const PinnedRepos = [
    {
        name: 'Guarda-Meu-Lanche',
        description: 'App de otimização de compras em lanchonete escolar. Backend em Node.js.',
        language: 'TypeScript',
        stars: 42,
        forks: 8,
        url: '#'
    },
    {
        name: 'portfolio-nextjs',
        description: 'O código-fonte deste portfólio, construído com Next.js e Tailwind CSS.',
        language: 'TypeScript',
        stars: 73,
        forks: 12,
        url: '#'
    },
    {
        name: 'bots-ia-whatsapp',
        description: 'Experimentos com automação de atendimento via WhatsApp.',
        language: 'JavaScript',
        stars: 31,
        forks: 5,
        url: '#'
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

export default function GithubPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Atividade no GitHub</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Uma visão geral da minha atividade de codificação e projetos em destaque.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Repositórios Fixados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PinnedRepos.map(repo => (
                <Link href={repo.url} key={repo.name} target="_blank" rel="noopener noreferrer">
                    <Card className="h-full hover:border-primary transition-colors flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline">
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
        <h2 className="text-2xl font-bold mb-6 text-center">Heatmap de Contribuições (Estático)</h2>
        <Card className="p-4 md:p-6">
            <ContributionHeatmap />
        </Card>
      </section>
    </div>
  );
}
