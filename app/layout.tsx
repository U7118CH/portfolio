import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Uma Chenniappan",
  description:
    "Uma Chenniappan, Vice President at Wells Fargo pursuing an M.S. in Cybersecurity. Technical program management, product and platform delivery, and AI governance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${plexSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans text-base text-graphite">
        {children}
      </body>
    </html>
  );
}
