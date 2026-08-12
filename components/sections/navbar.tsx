"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/ui/book-button";
import { cn } from "@/lib/utils";
import { packages } from "@/content/site-data";

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/detroitboatcruise-about", label: "About" },
  { href: "/detroitboatcruise-reviews", label: "Reviews" },
  { href: "/detroitboatcruise-faqs", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/detroitboatcruise-contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isCruisesActive = pathname?.startsWith("/cruises") ?? false;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [cruisesOpen, setCruisesOpen] = React.useState(false);
  const [mobileCruisesOpen, setMobileCruisesOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!cruisesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCruisesOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setCruisesOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [cruisesOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/75 backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent"
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
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setCruisesOpen((o) => !o)}
              aria-expanded={cruisesOpen}
              aria-current={isCruisesActive ? "page" : undefined}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isCruisesActive
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:bg-accent hover:text-foreground"
              )}
            >
              Cruises
              <ChevronDown className={cn("size-3.5 transition-transform", cruisesOpen && "rotate-180")} />
            </button>

            {cruisesOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-xl shadow-primary/10">
                {packages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/cruises/${p.slug}`}
                    onClick={() => setCruisesOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
                  >
                    <div className="aspect-square w-12 shrink-0 overflow-hidden rounded-lg bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt="" className={cn("size-full object-cover", p.pos)} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {p.duration} &middot; {p.price}
                      </p>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/cruises"
                  onClick={() => setCruisesOpen(false)}
                  className="mt-1 block rounded-xl px-3 py-2.5 text-center text-sm font-medium text-primary hover:bg-accent"
                >
                  View all cruises
                </Link>
              </div>
            )}
          </div>

          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-accent hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <BookButton size="lg" className="hidden rounded-full lg:inline-flex">
            book our boat today
          </BookButton>
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
            <button
              type="button"
              onClick={() => setMobileCruisesOpen((o) => !o)}
              aria-expanded={mobileCruisesOpen}
              aria-current={isCruisesActive ? "page" : undefined}
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isCruisesActive
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-accent hover:text-foreground"
              )}
            >
              Cruises
              <ChevronDown
                className={cn("size-4 transition-transform", mobileCruisesOpen && "rotate-180")}
              />
            </button>
            {mobileCruisesOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                {packages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/cruises/${p.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                ))}
                <Link
                  href="/cruises"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-accent"
                >
                  View all cruises
                </Link>
              </div>
            )}

            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-accent hover:text-foreground"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <BookButton className="mt-2 rounded-full" onClick={() => setOpen(false)}>
              book our boat today
            </BookButton>
          </div>
        </div>
      )}
    </header>
  );
}
