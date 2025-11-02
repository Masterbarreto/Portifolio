import { MATERIAS, PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import type { Metadata, ResolvingMetadata } from 'next'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Bot } from "lucide-react";
 
type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const materia = MATERIAS.find(m => m.slug === params.slug);
 
  if (!materia) {
    return {
        title: "Matéria não encontrada"
    }
  }
 
  return {
    title: `${materia.title} | MasterDev Portfolio`,
    description: `Detalhes sobre a matéria de ${materia.title}.`,
  }
}

export function generateStaticParams() {
    return MATERIAS.map((materia) => ({
      slug: materia.slug,
    }))
}

export default function MateriaPage({ params }: { params: { slug: string } }) {
    const materia = MATERIAS.find(m => m.slug === params.slug);
    const iotProject = PROJECTS.find(p => p.id === 'seguidor-de-linha');

    if (!materia) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{materia.title}</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {materia.description}
                </p>
            </div>

            <section className="mt-12 max-w-3xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Disciplinas de {materia.title}</CardTitle>
                        <CardDescription>Escolha uma disciplina para ver conteúdos / anotações:</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <div className="flex flex-wrap gap-4">
                         {materia.subjects.map(subject => (
                            <Button key={subject.slug} asChild variant="default">
                                <Link href={`/materias/${materia.slug}/${subject.slug}`}>
                                    {subject.title}
                                </Link>
                            </Button>
                         ))}
                       </div>
                       <p className="mt-6 text-sm text-muted-foreground">O conteúdo detalhado para cada disciplina será adicionado aqui em breve.</p>
                    </CardContent>
                </Card>
            </section>

            {params.slug === 'iot' && iotProject && (
                <section className="mt-12 max-w-3xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <Bot className="h-6 w-6 text-primary" />
                                Atividade Prática em Destaque
                            </CardTitle>
                            <CardDescription>
                                Exemplo de projeto prático desenvolvido na área de IoT.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h4 className="font-bold text-lg">{iotProject.title}</h4>
                            <p className="text-muted-foreground text-sm mt-1">{iotProject.longDescription}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <Link href={iotProject.githubUrl} target="_blank">
                                    <Github className="mr-2 h-4 w-4" />
                                    Ver no GitHub
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </section>
            )}
        </div>
    );
}
