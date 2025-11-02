import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, FileText, Send, Star, Atom, BrainCircuit, Calculator, Globe, Languages } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS, SKILLS, MATERIAS } from '@/lib/data';
import Skills from '@/components/skills';
import ProjectCard from '@/components/project-card';
import { Badge } from '@/components/ui/badge';

const materiaIcons: { [key: string]: React.ReactElement } = {
    'linguagens': <Languages className="h-8 w-8 text-primary" />,
    'matematica': <Calculator className="h-8 w-8 text-primary" />,
    'ciencias-da-natureza': <Atom className="h-8 w-8 text-primary" />,
    'ciencias-humanas': <Globe className="h-8 w-8 text-primary" />,
    'iot': <BrainCircuit className="h-8 w-8 text-primary" />,
};

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const featuredSkills = SKILLS.slice(0, 7);

  return (
    <div className="flex flex-col">
      <section className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2 md:py-32">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="default" className="py-2 px-4 text-sm">
            Backend Developer | IoT Student
          </Badge>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Pedro Henrique Vieira Barreto
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Estudante de IoT e desenvolvedor com foco em APIs, automação e
            inteligência artificial. Transformando ideias em soluções
            eficientes e escaláveis.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                Meus Projetos <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contato <Send className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative flex h-full min-h-[300px] items-center justify-center">
          <Image
            src="https://picsum.photos/seed/home-hero/600/600"
            alt="Hero Image"
            width={450}
            height={450}
            priority
            className="rounded-full object-cover shadow-2xl shadow-primary/20"
            data-ai-hint="abstract developer illustration"
          />
        </div>
      </section>

      <section id="materias" className="w-full bg-card py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Áreas de Estudo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Uma visão geral das áreas de estudo e projetos desenvolvidos durante minha formação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
              {MATERIAS.map((materia) => (
                  <Link href={`/materias/${materia.slug}`} key={materia.slug}>
                      <Card className="h-full hover:border-primary transition-colors flex flex-col items-center text-center p-6">
                          <div className="p-4 bg-card-foreground/5 rounded-full mb-4">
                              {materiaIcons[materia.slug]}
                          </div>
                          <CardHeader>
                              <CardTitle>{materia.title}</CardTitle>
                          </CardHeader>
                      </Card>
                  </Link>
              ))}
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Projetos em Destaque</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Uma seleção de projetos que demonstram minhas habilidades e
            interesses.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/projects">Ver Todos os Projetos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
