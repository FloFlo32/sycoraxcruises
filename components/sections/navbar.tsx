"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/detroitboatcruise-about", label: "About" },
  { href: "/detroitboatcruise-reviews", label: "Reviews" },
  { href: "/detroitboatcruise-faqs", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/detroitboatcruise-contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-background/0"
      )}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Sycorax Cruises home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.webp"
            alt="Sycorax Electric Cruises"
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="lg" className="hidden rounded-full lg:inline-flex">
            <Link href="/boat-rental-book-online">book our boat today</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <Link href="/boat-rental-book-online" onClick={() => setOpen(false)}>
                book our boat today
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
