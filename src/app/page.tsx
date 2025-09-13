import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Github, Linkedin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SKILLS } from '@/lib/data';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center">
        <div className="flex justify-center mb-8">
            <Image
                src="https://picsum.photos/seed/profile/150/150"
                alt="Pedro Henrique Vieira Barreto"
                width={150}
                height={150}
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                priority
            />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
          Pedro Henrique Vieira Barreto
        </h1>
        <p className="text-lg md:text-xl text-primary mb-8 font-headline">
          Backend Developer | IoT Student | APIs & AI Automation
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button asChild size="lg">
            <a href="/cv-pedro-barreto.pdf" download>
              <Download className="mr-2 h-5 w-5" /> Baixar CV
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/projects">
              <Briefcase className="mr-2 h-5 w-5" /> Explorar Projetos
            </Link>
          </Button>
        </div>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/MasterBarreto" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/pedro-henrique-vieira-barreto-2b7433281/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <h2 className="text-3xl font-bold text-center mb-10">Destaques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/about">
            <Card className="border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Briefcase className="text-primary"/>
                  Experiência na Yamamotto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Estágio focado em integrações de APIs, automação de fluxos com webhooks, e prototipagem de agentes de IA para atendimento ao cliente.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/about">
            <Card className="border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  Formação no Senac
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Técnico em IoT, com uma base sólida em hardware, redes e programação, e participação ativa em projetos de inovação e competições.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Minha caixa de ferramentas de desenvolvimento.
            </p>
        </div>
        <Skills skills={SKILLS} />
      </section>
    </div>
  );
}
