import { MATERIAS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Metadata, ResolvingMetadata } from 'next'
 
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
                        <CardTitle>Conteúdo da Matéria</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>O conteúdo detalhado para a matéria de {materia.title} será adicionado aqui em breve.</p>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
