import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, BookOpen, MessageCircle, FlaskConical, Atom, BrainCircuit, Cpu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const cardSections = [
    {
        icon: <User className="h-6 w-6 text-primary" />,
        title: "Sobre mim",
        description: "Quem sou, meus interesses, meus objetivos.",
        href: "/about"
    },
    {
        icon: <BookOpen className="h-6 w-6 text-primary" />,
        title: "Currículo",
        description: "Formação, cursos, projetos e experiências.",
        href: "/about"
    },
    {
        icon: <MessageCircle className="h-6 w-6 text-primary" />,
        title: "Linguagens",
        description: "Português, Inglês, Artes, Educação Física...",
        href: "/projects" // Pode ser ajustado para uma página específica
    },
    {
        icon: <FlaskConical className="h-6 w-6 text-primary" />,
        title: "Matemática",
        description: "Álgebra, Geometria, Estatística, Lógica...",
        href: "/projects" // Pode ser ajustado para uma página específica
    },
    {
        icon: <Atom className="h-6 w-6 text-primary" />,
        title: "Ciências da Natureza",
        description: "Física, Química e Biologia.",
        href: "/projects" // Pode ser ajustado para uma página específica
    },
    {
        icon: <BrainCircuit className="h-6 w-6 text-primary" />,
        title: "Ciências Humanas",
        description: "História, Geografia, Filosofia, Sociologia.",
        href: "/projects" // Pode ser ajustado para uma página específica
    },
    {
        icon: <Cpu className="h-6 w-6 text-primary" />,
        title: "IOT",
        description: "Projetos com sensores, automação e conectividade.",
        href: "/projects"
    },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center mb-16">
        <div className="flex justify-center mb-8">
            <Image
                src="https://picsum.photos/seed/profile-main/150/150"
                alt="Pedro Henrique Vieira Barreto"
                width={150}
                height={150}
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
            />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bem-vindo ao meu site. 👋
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Aqui você encontra informações sobre mim, meu currículo, e as áreas do saber do Ensino Médio (Linguagens, Matemática, Ciências da Natureza, Ciências Humanas), além de um espaço dedicado a projetos de IOT (Internet das Coisas).
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cardSections.map((card, index) => (
            <Link href={card.href} key={index}>
                <Card className="h-full hover:border-primary transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center gap-4">
                        {card.icon}
                        <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{card.description}</CardDescription>
                    </CardContent>
                </Card>
            </Link>
        ))}
      </section>
    </div>
  );
}
