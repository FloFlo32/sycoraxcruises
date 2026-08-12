import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { BookButton } from "@/components/ui/book-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";
import { packages, img, imgPos } from "@/content/site-data";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cruise = packages.find((p) => p.slug === slug);
  if (!cruise) return {};
  return {
    title: cruise.name,
    description: cruise.description,
  };
}

export default async function CruisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cruise = packages.find((p) => p.slug === slug);
  if (!cruise) notFound();

  const others = packages.filter((p) => p.slug !== cruise.slug);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Cruises"
          title={cruise.name}
          subtitle={cruise.description}
          image={cruise.image}
          imagePos={cruise.pos}
          imageAlt={cruise.alt}
        />

        <section className="container-px mx-auto max-w-5xl pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {cruise.longDescription}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {cruise.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {cruise.gallery.slice(1).map((g) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={g.n}
                    src={img(g.n)}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "aspect-square w-full rounded-xl object-cover",
                      imgPos(g.n)
                    )}
                  />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <span className="text-3xl font-bold text-primary">{cruise.price}</span>
                <div className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Clock className="size-4 text-primary" /> {cruise.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="size-4 text-primary" /> {cruise.guests}
                  </span>
                </div>
                <BookButton activityId={cruise.activityId} className="mt-6 w-full rounded-full">
                  Book this cruise
                </BookButton>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  100% inclusive. No booking fee, no taxes, no gratuity.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-border/60 bg-muted/30 py-16">
          <div className="container-px mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold">Other cruises</h2>
            <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2">
              {others.map((p) => (
                <RevealItem key={p.slug}>
                  <Link
                    href={`/cruises/${p.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
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
                    <div>
                      <h3 className="font-semibold group-hover:text-primary">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {p.duration} &middot; {p.price}
                      </p>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
