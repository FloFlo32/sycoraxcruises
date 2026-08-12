import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { BorderBeam } from "@/components/magic/border-beam";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";
import { packages, img, imgPos } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Cruises",
  description:
    "We offer an array of cruise options to suit your needs, 7 days a week, May through September, aboard the fully electric Sycorax.",
};

export default function CruisesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Cruises"
          title="Your voyage is our passion"
          subtitle="We offer an array of cruise options to suit your needs, 7 days a week, May through September."
          image={img(26)}
          imagePos={imgPos(26)}
          imageAlt="Guests aboard the Sycorax cruising past the Detroit skyline"
        />

        <section className="container-px mx-auto max-w-6xl pt-20 pb-24">
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <RevealItem
                key={p.slug}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
                  i === 2 && "ring-1 ring-primary/20"
                )}
              >
                {i === 2 && <BorderBeam duration={9} />}
                <Link href={`/cruises/${p.slug}`} className="aspect-[4/3] overflow-hidden bg-muted">
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
                </Link>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="text-xl font-semibold">
                    <Link href={`/cruises/${p.slug}`} className="hover:text-primary">
                      {p.name}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-4 text-primary" /> {p.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="size-4 text-primary" /> {p.guests}
                    </span>
                  </div>
                  <p className="flex-1 text-pretty text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="text-2xl font-bold text-primary">{p.price}</span>
                    <Link
                      href={`/cruises/${p.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                    >
                      Learn more <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
