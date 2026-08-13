import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, User } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";
import { blogPosts, img } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "The Scuttlebutt: Moving Beyond Toxic Emissions.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Blog"
          title="The Scuttlebutt: Moving Beyond Toxic Emissions"
          image={img(2)}
          imageAlt="Sailboat regatta on the Detroit River at golden hour"
        />

        <section className="container-px mx-auto max-w-5xl pt-20 pb-24">
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((p) => (
              <RevealItem key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                        p.pos
                      )}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <h2 className="text-lg font-semibold group-hover:text-primary">
                      {p.title}
                    </h2>
                    <p className="flex-1 text-pretty text-sm text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <User className="size-3.5" /> {p.author}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="size-3.5" /> {p.date}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                        Read more <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
