import BlogPostCard from "@/components/blog-post-card";
import { BLOG_POSTS } from "@/lib/blog-data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | MasterDev Portfolio',
  description: 'Leia sobre as experiências, projetos e aprendizados de Pedro Henrique.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Minhas experiências, projetos e aprendizados no mundo da tecnologia.
        </p>
      </div>

      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
