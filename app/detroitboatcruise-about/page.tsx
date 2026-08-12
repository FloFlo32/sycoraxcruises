import type { Metadata } from "next";
import Link from "next/link";
import { Award, Leaf, Ruler, Ship, XCircle } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { boatSpecs, crew, img } from "@/content/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tour the riverfront in luxury and eco-style aboard Detroit's only zero-emissions power boat rental.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About"
          title="Tour the riverfront in luxury and eco-style aboard Detroit's only zero-emissions power boat rental"
          subtitle="Why tour the Detroit River aboard a zero-emissions power boat rental? Luxury, comfort, conscience."
          image={img(17)}
          imageAlt="Vintage-framed view of the Detroit skyline from the water"
        />

        <section className="container-px mx-auto max-w-4xl py-4">
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              A Smarter Approach to Power Boating
            </span>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              The Sycorax proudly offers the only 100% electric boat cruises in
              Southeast Michigan. Our daily luxury cruises voyage over the Detroit
              River and Lake St Clair from May through September. On the Sycorax,
              you get all of the joy and none of the guilt of pleasure cruising. No
              polluting gas fumes. No noise. Just you and the natural beauty of the
              Great Lakes.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              The Swedish boat manufacturer, X Shore, has won multiple awards for
              design and innovation, including the German Design Award Gold
              (2022), the European Power Boat of the Year (2022), and the CICERO
              Shades of Green AS Dark Green rating (the highest rating).
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Gas-powered boats are bad &mdash; like, really bad &mdash; for the
              environment. {boatSpecs.impact}
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              And we&apos;ve taken the guesswork out of booking a private boat
              charter. {boatSpecs.pledge}
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Cruises depart from Stanton Yards near downtown Detroit, directly
              across from Belle Isle, in the nationally acclaimed emerging
              neighborhood Little Village.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-4xl py-14">
          <RevealGroup className="grid gap-4 sm:grid-cols-3">
            <RevealItem className="rounded-2xl border border-border bg-card p-5">
              <Ruler className="size-5 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">Length</p>
              <p className="font-semibold">{boatSpecs.length}</p>
            </RevealItem>
            <RevealItem className="rounded-2xl border border-border bg-card p-5">
              <Ship className="size-5 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">Model &amp; year</p>
              <p className="font-semibold">{boatSpecs.model}</p>
            </RevealItem>
            <RevealItem className="rounded-2xl border border-border bg-card p-5">
              <Leaf className="size-5 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">Crew</p>
              <p className="font-semibold">{boatSpecs.crew}</p>
            </RevealItem>
          </RevealGroup>
        </section>

        <section className="border-y border-border/60 bg-muted/30 py-20">
          <div className="container-px mx-auto max-w-5xl">
            <Reveal className="max-w-2xl">
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">We provide</h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {boatSpecs.amenities.map((a) => (
                <RevealItem
                  key={a}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Award className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{a}</span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal className="mt-14 max-w-2xl">
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">
                Uncommonly good fare
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {boatSpecs.fare.map((f) => (
                <RevealItem
                  key={f}
                  className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
                >
                  {f}
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal className="mt-14 max-w-2xl">
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">Boat rules</h2>
            </Reveal>
            <RevealGroup className="mt-8 flex flex-wrap gap-3">
              {boatSpecs.rules.map((r) => (
                <RevealItem
                  key={r}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                >
                  <XCircle className="size-4 text-primary" /> {r}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Meet our team
            </span>
            <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
              First Mate Allie &amp; Captain Blair
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {crew.map((c) => (
              <RevealItem
                key={c.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    {c.role}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">{c.name}</h3>
                  <p className="mt-2 text-pretty text-muted-foreground">{c.bio}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24 text-center">
          <Reveal>
            <h2 className="text-balance text-4xl font-bold sm:text-5xl">
              Your Journey Awaits
            </h2>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/boat-rental-book-online">Book Our Boat Today</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
