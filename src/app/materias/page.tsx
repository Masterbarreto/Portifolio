import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, BrainCircuit, Calculator, Globe, Languages } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";
import { MATERIAS } from "@/lib/data";
import React from "react";

export const metadata: Metadata = {
  title: 'Matérias | MasterDev Portfolio',
  description: 'Áreas de estudo e projetos de Pedro Henrique durante o ensino médio técnico.',
};

const materiaIcons: { [key: string]: React.ReactElement } = {
    'linguagens': <Languages className="h-8 w-8 text-primary" />,
    'matematica': <Calculator className="h-8 w-8 text-primary" />,
    'ciencias-da-natureza': <Atom className="h-8 w-8 text-primary" />,
    'ciencias-humanas': <Globe className="h-8 w-8 text-primary" />,
    'iot': <BrainCircuit className="h-8 w-8 text-primary" />,
};

export default function MateriasPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Matérias</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Uma visão geral das áreas de estudo e projetos desenvolvidos durante minha formação.
        </p>
      </div>

      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MATERIAS.map((materia) => (
                <Link href={`/materias/${materia.slug}`} key={materia.slug}>
                    <Card className="h-full hover:border-primary transition-colors flex flex-col items-center text-center p-6">
                        <div className="p-4 bg-card-foreground/5 rounded-full mb-4">
                            {materiaIcons[materia.slug]}
                        </div>
                        <CardHeader>
                            <CardTitle>{materia.title}</CardTitle>
                            <CardDescription>{materia.description}</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
