"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";

/**
 * Contact form. No backend is wired up, so submitting composes a real
 * mailto: to brand.social.email with the visitor's details, opening their
 * mail client, rather than faking a "message sent" success state.
 */
export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [occasion, setOccasion] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const pkg = new URLSearchParams(window.location.search).get("package");
    if (pkg) {
      setOccasion(pkg);
      setMessage(`Hi! I'd like to book the ${pkg} cruise. Please let me know availability.`);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = occasion
      ? `Cruise inquiry: ${occasion}`
      : "Cruise inquiry from sycoraxcruises.getyetti.com";
    const body = [`Name: ${name}`, `Email: ${email}`, occasion && `Occasion/package: ${occasion}`, "", message]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${brand.social.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="occasion" className="text-sm font-medium">
          Occasion / package (optional)
        </label>
        <input
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          placeholder="Birthday, Belle Isle Breeze, etc."
          className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <Button type="submit" size="lg" className="w-fit rounded-full">
        Send message <Send className="size-4" />
      </Button>
    </form>
  );
}
