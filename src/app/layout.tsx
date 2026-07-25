import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atwgames.com"),
  title: "Bee Killings Inn — Tactical Turn-Based Strategy RPG",
  description:
    "A top-down 3D turn-based grid strategy RPG built with a custom Vulkan raytraced engine. Fight demon-possessed bees in an old church turned inn.",
  openGraph: {
    title: "Bee Killings Inn",
    description:
      "Top-down 3D turn-based grid strategy RPG. Custom Vulkan raytraced engine. Fight demon bees.",
    images: ["/SteamMainCapsule-01.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
