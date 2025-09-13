import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CERTIFICATIONS } from "@/lib/data";
import { Award, Building, Calendar, ExternalLink } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Certificados | MasterDev Portfolio',
  description: 'Licenças e certificados de Pedro Henrique, validando suas competências técnicas.',
};

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Licenças e Certificados</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Uma coleção de minhas certificações que demonstram meu compromisso com o aprendizado contínuo e a validação de minhas habilidades.
        </p>
      </div>

      <section className="mt-12">
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
    </div>
  );
}
