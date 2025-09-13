import Timeline from "@/components/timeline";
import { TIMELINE, CERTIFICATIONS } from "@/lib/data";
import { Award, Code, Drama, Rocket, BrainCircuit, Building, Calendar, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Sobre Mim | MasterDev Portfolio',
  description: 'Conheça a trajetória de Pedro Henrique, estudante de IoT e desenvolvedor backend, seus interesses e atividades.',
};

const HobbiesSection = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-card rounded-full">
                <Rocket className="h-8 w-8 text-primary" />
            </div>
            <p className="font-semibold">Oficina de Foguetes</p>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-card rounded-full">
                <Code className="h-8 w-8 text-primary" />
            </div>
            <p className="font-semibold">Robótica</p>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-card rounded-full">
                <Drama className="h-8 w-8 text-primary" />
            </div>
            <p className="font-semibold">Teatro</p>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-card rounded-full">
                <Award className="h-8 w-8 text-primary" />
            </div>
            <p className="font-semibold">Competições</p>
        </div>
    </div>
)

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <Image
            src="https://picsum.photos/seed/profile/120/120"
            alt="Pedro Henrique Vieira Barreto"
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-primary/20 shadow-lg mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Sobre Mim</h1>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground">
        <p>
          Sou um estudante técnico em Internet das Coisas (IoT) apaixonado por resolver problemas através da tecnologia. Minha jornada começou com uma curiosidade insaciável por hardware no primeiro ano, evoluiu para a complexidade das redes no segundo, e culminou na arte da programação no terceiro ano.
        </p>
        <p>
          Hoje, meu foco está no desenvolvimento backend, onde me especializo na criação de APIs robustas, na automação de processos e na exploração do vasto potencial da inteligência artificial. Tenho grande interesse em Cloud, IA e DevOps, áreas que vejo como pilares para a construção de soluções escaláveis e inovadoras.
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Linha do Tempo</h2>
        <Timeline events={TIMELINE} />
      </section>

      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Fora do Código</h2>
        <div className="space-y-12">
            <p className="text-center text-lg text-muted-foreground">
                Além da programação, meu tempo é preenchido com atividades que desafiam minha criatividade e lógica, desde competições de robótica e programação (OBI, OBA) até o palco do teatro.
            </p>
            <HobbiesSection />
        </div>
      </section>
      
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Licenças e Certificados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
                <Card key={index} className="flex flex-col h-full hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-start gap-3 font-headline text-xl">
                           <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1"/> 
                           {cert.title}
                        </CardTitle>
                        <CardDescription className="flex flex-col gap-2 pt-2">
                           <span className="flex items-center gap-2 text-sm">
                               <Building className="h-4 w-4"/> {cert.issuer}
                           </span>
                           <span className="flex items-center gap-2 text-sm">
                               <Calendar className="h-4 w-4"/> {cert.date}
                           </span>
                        </CardDescription>
                    </CardHeader>
                    {cert.credentialUrl && (
                        <CardFooter className="mt-auto">
                           <Button asChild variant="outline" className="w-full">
                                <Link href={cert.credentialUrl} target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4"/>
                                    Exibir Credencial
                                </Link>
                           </Button>
                        </CardFooter>
                    )}
                </Card>
            ))}
        </div>
      </section>

      <section className="mt-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Visão de Futuro</h2>
        <BrainCircuit className="h-12 w-12 text-primary mx-auto mb-4"/>
        <p className="text-lg text-muted-foreground">
            Acredito que a tecnologia é a maior alavanca para o progresso humano. Meu objetivo é estar na vanguarda da inovação, construindo sistemas inteligentes e automatizados que não apenas otimizem processos, mas que também criem novas possibilidades e gerem um impacto positivo na sociedade.
        </p>
      </section>
    </div>
  );
}