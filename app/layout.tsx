import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "clubd.app";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const description =
    "Build a living Digital Twin from your real progress, verified wins, stats, badges, products and people.";

  return {
    metadataBase,
    title: "ClubD — Proof Is the New Profile",
    description,
    keywords: [
      "ClubD",
      "Digital Twin",
      "verified achievements",
      "social identity",
      "sports",
      "fitness",
      "style",
    ],
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      title: "ClubD — Proof Is the New Profile",
      description,
      images: [
        {
          url: "/og.png",
          width: 1734,
          height: 909,
          alt: "ClubD — Proof Is the New Profile",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ClubD — Proof Is the New Profile",
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
