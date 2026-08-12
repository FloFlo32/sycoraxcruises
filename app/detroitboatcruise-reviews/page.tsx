import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Star } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { reviews, img, imgPos } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Reviews",
  description: "See why our electric boat rentals stand out from the crowd in Detroit's cruise scene.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Reviews"
          title="See why our electric boat rentals stand out from the crowd in Detroit's cruise scene"
          image={img(30)}
          imagePos={imgPos(30)}
          imageAlt="Friends celebrating aboard the Sycorax with the Detroit skyline behind them"
        />

        <section className="container-px mx-auto max-w-6xl pb-16">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <RevealItem
                key={r.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <Quote className="size-6 text-primary/30" />
                <div className="mt-3 flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold">{r.name}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-24 text-center">
          <Reveal>
            <div className="rounded-3xl border border-border bg-muted/40 p-10">
              <h2 className="text-balance text-2xl font-bold sm:text-3xl">
                Questions before getting started? Get in touch.
              </h2>
              <Link
                href="/detroitboatcruise-contact"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
