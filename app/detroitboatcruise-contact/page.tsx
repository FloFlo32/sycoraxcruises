import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Map } from "@/components/sections/map";
import { InstagramIcon, FacebookIcon } from "@/components/icons";
import { Reveal } from "@/components/magic/reveal";
import { img, imgPos } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about our Detroit boat rentals? Get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Questions about our Detroit boat rentals? Get in touch."
          subtitle="Contact us."
          image={img(32)}
          imagePos={imgPos(32)}
          imageAlt="Guests enjoying a cruise aboard the Sycorax"
        />

        <section className="container-px mx-auto max-w-5xl pb-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="space-y-5">
              <p className="text-pretty text-muted-foreground">
                We usually respond within an hour (during the day), via contact
                form or email. If your request is urgent, please include your
                cell number. We can often accomodate sameday requests.
              </p>

              <div className="space-y-3 rounded-2xl border border-border bg-card p-5">
                <a
                  href={`mailto:${brand.social.email}`}
                  className="flex items-center gap-3 text-sm hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" /> email: {brand.social.email}
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>we depart from: 9666 E Jefferson Ave, Detroit, MI</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Or, PM us directly on social apps:</p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`https://instagram.com/${brand.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <InstagramIcon className="size-4" />
                  </a>
                  <a
                    href={`https://facebook.com/${brand.social.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <FacebookIcon className="size-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <Map />
      </main>
      <Footer />
    </>
  );
}
