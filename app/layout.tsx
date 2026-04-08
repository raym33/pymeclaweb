import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pymeclaweb.vercel.app"),
  title: "Pymeclaw | Local AI assistant for small Spanish businesses",
  description:
    "Product website for Pymeclaw, a local AI office assistant for small Spanish businesses running on Mac.",
  openGraph: {
    title: "Pymeclaw",
    description:
      "Local AI office assistant for small Spanish businesses. Runs on your Mac with no cloud and no monthly fee.",
    images: ["/pymeclaw-logo.jpeg"],
  },
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${cormorant.variable} bg-[var(--page)]`}
    >
      <body>{children}</body>
    </html>
  );
}
