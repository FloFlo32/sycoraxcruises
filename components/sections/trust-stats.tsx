import { Anchor, Leaf, Ship, Users } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";

const stats = [
  {
    icon: Leaf,
    value: "100%",
    label: "Electric. Detroit's only zero-emissions power boat rental.",
  },
  {
    icon: Ship,
    value: "3",
    label: "Cruise options to choose from, 7 days a week, May through September.",
  },
  {
    icon: Users,
    value: "6",
    label: "Guests per cruise, aboard your own private charter.",
  },
  {
    icon: Anchor,
    value: "2",
    label: "Crew included on every cruise: a captain and a first mate.",
  },
];

export function TrustStats() {
  return (
    <section className="container-px mx-auto max-w-6xl py-14">
      <RevealGroup className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-xl shadow-black/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
        {stats.map((s) => (
          <RevealItem key={s.label}>
            <div className="flex h-full items-start gap-4 rounded-2xl p-3 transition-colors duration-200 hover:bg-accent">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                <s.icon className="size-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold leading-none">{s.value}</p>
                <p className="mt-1.5 text-pretty text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
