import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { fontVariables } from "@/lib/fonts";
import { criticalCss } from "@/lib/critical-css";
import { ThemeScript } from "@/components/theme-provider";
import { FaqWidget } from "@/components/widget/faq-widget";
import { WhatsAppWidget } from "@/components/widget/whatsapp-widget";

const siteUrl = `https://${brand.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  openGraph: {
    title: brand.name,
    description: brand.description,
    url: siteUrl,
    siteName: brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`} suppressHydrationWarning>
      <head>
        {/*
          The full site stylesheet is inlined directly into the HTML (not a linked
          <link rel="stylesheet">) on purpose: some corporate security proxies and
          browser policies strip or block separate CSS requests to brand-new/
          unclassified domains while letting the base HTML document through. Inlining
          removes that dependency entirely so the design can never be stripped out.
          Generated fresh on every build by scripts/inline-css.mjs (see package.json
          "prebuild"). Do not replace with a normal `import "./globals.css"`.
        */}
        <style id="critical-css" dangerouslySetInnerHTML={{ __html: criticalCss }} />
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <FaqWidget />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
