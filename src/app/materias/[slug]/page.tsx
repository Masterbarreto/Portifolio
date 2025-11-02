'use client';

import { MATERIAS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
 
type Props = {
  params: { slug: string }
}
 
export default function MateriaPage({ params }: { params: { slug: string } }) {
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const materia = MATERIAS.find(m => m.slug === params.slug);

    if (!materia) {
        notFound();
    }

    const handleSubjectClick = (slug: string) => {
        setSelectedSubject(prev => prev === slug ? null : slug);
    };

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

            {params.slug === 'iot' && selectedSubject === 'hardware' && (
                <section className="mt-12 max-w-3xl mx-auto">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <BookOpen className="h-6 w-6 text-primary" />
                                Anotações da Aula de Eletrônica
                            </CardTitle>
                            <CardDescription>
                                Um resumo sobre os componentes e circuitos utilizados no projeto do robô seguidor de linha.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="aspect-video relative rounded-md overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwY2lyY3VpdHxlbnwwfHx8fDE3NjIxODAzNTV8MA&ixlib=rb-4.1.0&fm=jpg&w=1080&h=720&fit=crop"
                                    alt="Circuito Arduino"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Componentes Principais</h4>
                                <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                                    <li><b>Arduino Uno:</b> O cérebro do robô, responsável por processar os dados dos sensores e controlar os motores.</li>
                                    <li><b>Sensor de Infravermelho (TCRT5000):</b> Utilizado para detectar a linha preta no chão. Ele emite luz infravermelha e mede a reflexão.</li>
                                    <li><b>Driver de Motor (Ponte H L298N):</b> Controla a direção e a velocidade dos dois motores DC.</li>
                                    <li><b>Motores DC com Caixa de Redução:</b> Fornecem o movimento para as rodas do robô.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            )}
        </div>
    );
}