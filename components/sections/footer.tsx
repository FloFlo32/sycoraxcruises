import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { InstagramIcon, FacebookIcon } from "@/components/icons";
import { BookButton } from "@/components/ui/book-button";

const navCol = [
  { label: "About", href: "/detroitboatcruise-about" },
  { label: "Reviews", href: "/detroitboatcruise-reviews" },
  { label: "FAQs", href: "/detroitboatcruise-faqs" },
  { label: "Gift Certificate", href: "/detroitboatcruise-contact" },
];

const exploreCol = [
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/detroitboatcruise-contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-card">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="Sycorax Cruises home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.webp" alt="Sycorax Electric Cruises" className="h-12 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-pretty text-muted-foreground">
            {brand.description}
          </p>
          <div className="mt-5 flex gap-2">
            <Link
              href={`https://instagram.com/${brand.social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </Link>
            <Link
              href={`https://facebook.com/${brand.social.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </Link>
            <Link
              href={`mailto:${brand.social.email}`}
              aria-label="Email"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Mail className="size-4" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {exploreCol.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Book</h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <BookButton
                variant="link"
                className="h-auto p-0 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground hover:no-underline"
              >
                Book Our Boat Today
              </BookButton>
            </li>
            {navCol.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Questions? Contact us.</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>We depart from: {brand.contact.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <Link href={`mailto:${brand.social.email}`} className="hover:text-foreground">
                {brand.social.email}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <p className="container-px mx-auto max-w-7xl text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
