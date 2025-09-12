import type { Project } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1 group">
      <CardHeader>
        <div className="aspect-video relative overflow-hidden rounded-md">
            <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.imageHint}
            />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="mb-2 text-xl font-headline">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{project.longDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
            <Link href={project.githubUrl} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Ver no GitHub
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
