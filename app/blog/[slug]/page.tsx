import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/magic/reveal";
import { blogPosts } from "@/content/site-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Blog"
          title={post.title}
          subtitle={post.excerpt}
          image={post.image}
          imagePos={post.pos}
          imageAlt={post.alt}
        />

        <article className="container-px mx-auto max-w-2xl pt-20 pb-16">
          <Reveal>
            <div className="flex items-center gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="size-3.5" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" /> {post.date}
              </span>
            </div>
          </Reveal>

          <div className="mt-8 space-y-5">
            {post.content.map((block, i) => {
              if (block.type === "h3") {
                return (
                  <Reveal key={i} delay={Math.min(i * 0.03, 0.3)}>
                    <h2 className="pt-2 text-2xl font-bold">{block.text}</h2>
                  </Reveal>
                );
              }
              if (block.type === "list") {
                return (
                  <Reveal key={i} delay={Math.min(i * 0.03, 0.3)}>
                    <ul className="list-disc space-y-2 pl-5 text-pretty leading-relaxed text-muted-foreground">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Reveal>
                );
              }
              return (
                <Reveal key={i} delay={Math.min(i * 0.03, 0.3)}>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {block.text}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-3.5" /> Back to the blog
          </Link>
        </article>

        <section className="border-t border-border/60 bg-muted/30 py-16">
          <div className="container-px mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold">More from the blog</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      quality={70}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${p.pos ?? ""}`}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
