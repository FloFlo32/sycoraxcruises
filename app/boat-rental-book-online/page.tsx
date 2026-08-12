import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magic/border-beam";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { packages, img } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Book online",
  description:
    "Book a one-, two-, or four-hour cruise on the Detroit River and experience the very best of summer in Michigan.",
};

export default function BookOnlinePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="100% Electric. 100% Awesome."
          title="Book a one-, two-, or four-hour cruise on the Detroit River"
          subtitle="Experience the very best of summer in Michigan aboard the fully electric Sycorax."
          image={img(26)}
          imageAlt="Guests aboard the Sycorax cruising past the Detroit skyline"
        />

        <section className="container-px mx-auto max-w-6xl pb-24">
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <RevealItem
                key={p.name}
                className={
                  "relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10" +
                  (i === 2 ? " ring-1 ring-primary/20" : "")
                }
              >
                {i === 2 && <BorderBeam duration={9} />}
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="text-xl font-semibold">{p.name}</h2>
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
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-primary">{p.price}</span>
                  </div>
                  <Button asChild className="mt-1 w-full rounded-full">
                    <Link href={`/detroitboatcruise-contact?package=${encodeURIComponent(p.name)}`}>
                      Book this cruise <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            All prices are 100% inclusive, no online booking fee, no taxes, no
            fuel or captain fees, no gratuity. Need a bigger group? Ask us about
            our Tandem Cruise (up to 12 guests) or Three-Boat Cruise (up to 18
            guests).
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
