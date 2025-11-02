'use client';

import { MATERIAS } from "@/lib/data";
import { notFound, useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { SubjectContent } from "@/lib/types";

const SubjectContentDisplay = ({ content }: { content: SubjectContent }) => {
    return (
        <section className="mt-12 max-w-3xl mx-auto">
            <Card className="h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-primary" />
                        {content.title}
                    </CardTitle>
                    <CardDescription>
                        {content.description}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                        <Image
                            src={content.imageUrl}
                            alt={content.imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Pontos Principais</h4>
                        <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                            {content.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
 
export default function MateriaPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const materia = MATERIAS.find(m => m.slug === slug);

    if (!materia) {
        notFound();
    }

    const handleSubjectClick = (subjectSlug: string) => {
        setSelectedSubject(prev => prev === subjectSlug ? null : subjectSlug);
    };

    const currentSubject = materia.subjects.find(s => s.slug === selectedSubject);

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
                            <Button 
                                key={subject.slug} 
                                variant={selectedSubject === subject.slug ? "default" : "outline"}
                                onClick={() => handleSubjectClick(subject.slug)}
                            >
                                {subject.title}
                            </Button>
                         ))}
                       </div>
                       {!selectedSubject && (
                            <p className="mt-6 text-sm text-muted-foreground">Selecione uma disciplina para ver o conteúdo.</p>
                       )}
                    </CardContent>
                </Card>
            </section>

            {currentSubject && currentSubject.content && (
                <SubjectContentDisplay content={currentSubject.content} />
            )}

            {currentSubject && !currentSubject.content && (
                <section className="mt-12 max-w-3xl mx-auto">
                    <Card>
                        <CardContent className="p-6">
                            <p className="text-muted-foreground text-center">Ainda não há anotações para esta disciplina.</p>
                        </CardContent>
                    </Card>
                </section>
            )}
        </div>
    );
}