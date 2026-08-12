import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
          <GridPattern />
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
            Celebrate Life
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Book a one-, two-, or four-hour cruise on the Detroit River and
            experience the very best of summer in Michigan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/boat-rental-book-online">
                Book Our Boat Today <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/detroitboatcruise-contact">Questions? Contact us</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
