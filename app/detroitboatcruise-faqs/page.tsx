import type { Metadata } from "next";
import Link from "next/link";
import { Quote } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/magic/reveal";
import { faqs, faqTestimonial, img } from "@/content/site-data";

export const metadata: Metadata = {
  title: "FAQs",
  description: "FAQs about Detroit's exclusive electric boat cruise.",
};

const items = [
  ...faqs.map((f) => ({ q: f.q, a: f.a as React.ReactNode })),
  {
    q: "What does the boat look like?",
    a: (
      <>
        See real photos of the Sycorax and its layout in our{" "}
        <Link href="/gallery" className="text-primary hover:underline">
          gallery
        </Link>
        .
      </>
    ),
  },
  {
    q: "Accessibility",
    a: (
      <>
        Have specific accessibility needs for your cruise? Reach out and we&apos;ll
        work with you directly, {" "}
        <Link href="/detroitboatcruise-contact" className="text-primary hover:underline">
          contact us
        </Link>
        .
      </>
    ),
  },
];

export default function FaqsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQs"
          title="about Detroit's exclusive electric boat cruise"
          image={img(40)}
          imageAlt="Guests at the helm of the Sycorax near the Ambassador Bridge"
        />

        <section className="container-px mx-auto max-w-3xl pb-16">
          <Reveal>
            <Accordion items={items} />
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-16">
          <Reveal>
            <div className="rounded-3xl border border-border bg-muted/30 p-8 sm:p-10">
              <Quote className="size-8 text-primary/30" />
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                &ldquo;{faqTestimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold">{faqTestimonial.attribution}</p>
            </div>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Book your cruise today
            </h2>
            <div className="mt-6">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/boat-rental-book-online">Book the Best</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
