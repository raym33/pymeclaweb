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
  title: "Pymeclaw | Asistente local para autónomos y pequeñas oficinas",
  description:
    "Web de producto de Pymeclaw, un asistente local para autónomos y pequeñas oficinas que trabajan en Mac.",
  openGraph: {
    title: "Pymeclaw",
    description:
      "Asistente local para presupuestos, facturas, citas y seguimiento diario. Funciona en tu Mac, sin nube y sin cuota mensual.",
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
      lang="es"
      className={`${sora.variable} ${cormorant.variable} bg-[var(--page)]`}
    >
      <body>{children}</body>
    </html>
  );
}
