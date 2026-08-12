import Link from "next/link";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { homeTestimonial } from "@/content/site-data";

export function Testimonial() {
  return (
    <section className="container-px mx-auto max-w-6xl py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
          <Quote className="size-10 text-primary/20" />
          <h2 className="mt-4 text-balance text-2xl font-bold sm:text-3xl">
            Surrender to the lusty, decadent delights of electric cruising
          </h2>
          <div className="mt-4 flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-pretty text-xl font-medium leading-relaxed sm:text-2xl">
            &ldquo;{homeTestimonial.quote}&rdquo;
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{homeTestimonial.attribution}</p>
            <Link
              href="/detroitboatcruise-reviews"
              className="text-sm font-medium text-primary hover:underline"
            >
              Read more reviews
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
