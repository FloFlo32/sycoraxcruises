import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { blogPosts } from "@/content/site-data";

export function BlogTeaser() {
  return (
    <section className="container-px mx-auto max-w-6xl py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Our blog
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
            The Scuttlebutt
          </h2>
        </div>
        <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
          Read the blog
        </Link>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((p) => (
          <RevealItem key={p.slug}>
            <ImageCard
              href={`/blog/${p.slug}`}
              src={p.image}
              alt={p.alt}
              title={p.homeTeaser}
              ratio="aspect-[4/3]"
              imagePos={p.pos}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
