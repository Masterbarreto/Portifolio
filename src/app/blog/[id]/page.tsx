import { BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import Image from "next/image";
import { Calendar, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.id === params.id);

  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: `${post.title} | Blog MasterDev`,
    description: post.summary,
    openGraph: {
        title: post.title,
        description: post.summary,
        images: [
            {
                url: post.imageUrl,
                width: 600,
                height: 400,
                alt: post.title,
            },
        ],
    }
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
            <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.imageHint}
                />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
            <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
            </div>
        </header>
        
        <div 
          className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 space-y-4 text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.links && post.links.length > 0 && (
            <section className="mt-10 pt-6 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">Links Úteis</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    {post.links.map(link => (
                        <Button asChild variant="outline" key={link.url}>
                            <Link href={link.url} target="_blank">
                                <LinkIcon className="mr-2 h-4 w-4" />
                                {link.label}
                            </Link>
                        </Button>
                    ))}
                </div>
            </section>
        )}
      </article>
    </div>
  );
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
      id: post.id,
    }));
}
