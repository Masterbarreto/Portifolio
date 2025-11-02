import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CERTIFICATIONS, PROJECTS, SKILLS, TIMELINE } from "@/lib/data";
import { Award, Book, Briefcase, Calendar, Code, ExternalLink, GitFork, Star, GraduationCap, Wrench, Building } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Currículo | MasterDev Portfolio',
  description: 'Currículo completo de Pedro Henrique, detalhando sua formação, experiência, projetos e habilidades técnicas.',
};

const LanguageColor = ({ lang }: { lang: string }) => {
    const colors: { [key: string]: string } = {
        'TypeScript': 'bg-blue-500',
        'JavaScript': 'bg-yellow-500',
        'Python': 'bg-green-500',
        'C++': 'bg-pink-500',
        'Node.js': 'bg-green-600',
    };
    return <span className={`w-3 h-3 rounded-full inline-block mr-2 ${colors[lang] || 'bg-gray-500'}`}></span>
}

export default function CurriculoPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Currículo</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Minha jornada profissional, acadêmica e projetos em um só lugar.
        </p>
      </div>

      <div className="mt-12 space-y-12 max-w-4xl mx-auto">
        
        {/* Formação e Experiência */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                    <GraduationCap className="h-7 w-7 text-primary"/>
                    Formação e Experiência
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {TIMELINE.map((event, index) => (
                        <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border last:before:h-0">
                            <div className="absolute left-[-6.5px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                            <p className="text-sm font-semibold text-primary">{event.year}</p>
                            <h3 className="text-lg font-bold mt-1">{event.title}</h3>
                            <p className="text-sm text-muted-foreground italic mb-2">{event.institution}</p>
                            <p className="text-sm">{event.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

        {/* Projetos */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                    <Briefcase className="h-7 w-7 text-primary"/>
                    Projetos
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map(project => (
                     <Link href={project.githubUrl} key={project.id} target="_blank" rel="noopener noreferrer">
                        <Card className="h-full hover:border-primary transition-colors flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 font-headline text-lg">
                                    <Book className="h-5 w-5 text-primary"/>
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-xs">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex items-end text-sm text-muted-foreground">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </CardContent>
        </Card>

        {/* Habilidades */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                    <Wrench className="h-7 w-7 text-primary"/>
                    Habilidades Técnicas
                </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex flex-wrap gap-3">
                {SKILLS.map(skill => (
                    <Badge key={skill.name} variant="default" className="py-2 px-4 text-sm font-medium">
                        {skill.name}
                    </Badge>
                ))}
               </div>
            </CardContent>
        </Card>

        {/* Certificados */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                    <Award className="h-7 w-7 text-primary"/>
                    Licenças e Certificados
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS.map((cert, index) => (
                    <Card key={index} className="flex flex-col h-full hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="font-headline text-base">
                               {cert.title}
                            </CardTitle>
                            <CardDescription className="flex flex-col gap-2 pt-2">
                               <span className="flex items-center gap-2 text-xs">
                                   <Building className="h-4 w-4"/> {cert.issuer}
                               </span>
                               <span className="flex items-center gap-2 text-xs">
                                   <Calendar className="h-4 w-4"/> {cert.date}
                               </span>
                            </CardDescription>
                        </CardHeader>
                        {cert.credentialUrl && (
                            <CardContent className="mt-auto">
                               <Button asChild variant="outline" size="sm" className="w-full">
                                    <Link href={cert.credentialUrl} target="_blank">
                                        <ExternalLink className="mr-2 h-4 w-4"/>
                                        Exibir Credencial
                                    </Link>
                               </Button>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </CardContent>
        </Card>
        
      </div>
    </div>
  );
}
