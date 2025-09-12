import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Contato | MasterDev Portfolio',
  description: 'Entre em contato com Pedro Henrique para colaborações, projetos ou para bater um papo sobre tecnologia.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Vamos Colaborar?</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Estou sempre aberto a novas oportunidades, projetos interessantes e conversas sobre tecnologia. Preencha o formulário abaixo ou me encontre nas redes sociais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-5xl mx-auto">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <div className="md:col-span-2 flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-bold font-headline text-center md:text-left">Outras formas de contato</h3>
            <Button asChild variant="outline" size="lg" className="justify-start">
                <Link href="https://www.linkedin.com/in/pedro-henrique-vieira-barreto-2b7433281/" target="_blank">
                    <Linkedin className="mr-3 h-5 w-5 text-primary"/>
                    LinkedIn
                </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="justify-start">
                <Link href="https://github.com/MasterBarreto" target="_blank">
                    <Github className="mr-3 h-5 w-5 text-primary"/>
                    GitHub
                </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="justify-start">
                <Link href="mailto:pedro.barreto@example.com">
                    <Mail className="mr-3 h-5 w-5 text-primary"/>
                    Email
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
