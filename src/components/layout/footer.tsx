import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Pedro Henrique Vieira Barreto. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a href="https://github.com/MasterBarreto" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/pedro-henrique-vieira-barreto-2b7433281/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
