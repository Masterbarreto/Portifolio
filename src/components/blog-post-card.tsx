import type { BlogPost } from "@/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
        <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1">
            <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={post.imageHint}
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow p-6 flex flex-col">
                <h3 className="text-xl font-bold font-headline mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <div className="flex items-center text-muted-foreground text-xs mb-3">
                  <Calendar className="h-3 w-3 mr-1.5" />
                  <span>{post.date}</span>
                </div>
                <p className="text-muted-foreground text-sm flex-grow">{post.summary}</p>
                <div className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                    Ler mais →
                </div>
            </CardContent>
        </Card>
    </Link>
  );
}
