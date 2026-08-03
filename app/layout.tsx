import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  const metadataBase = new URL("https://clubd.in");
  const description =
    "ClubD is next-gen social media powered by a hyper-personal AI Digital Twin that learns from your real stats, style, habits, products and verified wins.";

  return {
    metadataBase,
    title: "ClubD — Your Hyper-Personal AI Digital Twin",
    description,
    keywords: [
      "ClubD",
      "Digital Twin",
      "personal AI",
      "AI coach",
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
      title: "ClubD — Your Hyper-Personal AI Digital Twin",
      description,
      images: [
        {
          url: "/og.png",
          width: 1734,
          height: 909,
          alt: "ClubD — Your Hyper-Personal AI Digital Twin",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ClubD — Your Hyper-Personal AI Digital Twin",
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
