import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import type { Metadata, ResolvingMetadata } from 'next'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ArrowLeft } from "lucide-react";
import Image from "next/image";
 
type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = PROJECTS.find(p => p.id === params.id);
 
  if (!project) {
    return {
        title: "Projeto não encontrado"
    }
  }
 
  return {
    title: `${project.title} | MasterDev Portfolio`,
    description: `Detalhes sobre o projeto ${project.title}.`,
  }
}

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
      id: project.id,
    }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = PROJECTS.find(p => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para Projetos
                    </Link>
                </Button>
                
                <Card className="overflow-hidden">
                    <CardHeader className="p-0">
                        <div className="aspect-video relative">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">{project.title}</h1>
                        <p className="text-lg text-muted-foreground">
                            {project.longDescription}
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="outline" className="w-full">
                            <Link href={project.githubUrl} target="_blank">
                                <Github className="mr-2 h-4 w-4" />
                                Ver no GitHub
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
