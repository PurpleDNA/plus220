import type { Metadata } from "next";
import { Instrument_Sans, Urbanist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "plus220 | Smart Digital Solutions",
  description: "Practical, results-driven solutions for local businesses.",
  icons: {
    icon: "/assets/Vision/logo-half.png",
    shortcut: "/assets/Vision/logo-half.png",
    apple: "/assets/Vision/logo-half.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${urbanist.variable} ${jakarta.variable} antialiased font-instrument`}
      >
        {children}
      </body>
    </html>
  );
}
