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
      src="https://i.ibb.co/b5WrTF1X/RC-5638.jpg"
      alt="Pedro Henrique Vieira Barreto"
      width={120}
      height={120}
      unoptimized
      className="rounded-full object-cover border-4 border-primary/20 shadow-lg mx-auto mb-6"
    />
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Sobre Mim</h1>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground">
        <p>
          Olá, meu nome é Pedro, tenho 17 anos e sou um entusiasta da tecnologia, sempre em busca de novos desafios. Atualmente, estou cursando o ensino técnico em Internet das Coisas (IoT), uma área que me fascina pela capacidade de conectar o mundo físico ao digital.
        </p>
        <p>
          Desde cedo, a programação se tornou minha principal ferramenta para dar vida às ideias. Meu interesse natural por resolver quebra-cabeças me levou ao desenvolvimento backend, onde me divirto construindo a lógica e a estrutura que fazem as aplicações funcionarem.
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
        <h2 className="text-3xl font-bold mb-6">Minha Motivação</h2>
        <BrainCircuit className="h-12 w-12 text-primary mx-auto mb-4"/>
        <p className="text-lg text-muted-foreground">
            Acredito que a tecnologia é uma das ferramentas mais poderosas para a mudança. Meu objetivo é continuar aprendendo, criando e colaborando em projetos que não apenas resolvam problemas, mas que também tornem o dia a dia das pessoas um pouco melhor e mais interessante.
        </p>
      </section>
    </div>
  );
}
