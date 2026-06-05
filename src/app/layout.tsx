import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../routes/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avishkaishan.vercel.app'),
  title: "Avishka Medagamagodage | Portfolio",
  description: "I am Avishka Medagamagodage, Software Engineering Undergraduate.Showcasing my projects, skills, and articles.",
  keywords: ["Avishka Medagamagodage", "Software Engineer", "Full Stack Developer", "Web Developer", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Avishka Medagamagodage", url: "https://avishkaishan.vercel.app" }],
  creator: "Avishka Medagamagodage",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avishkaishan.vercel.app",
    title: "Avishka Medagamagodage | Portfolio",
    description: "I am Avishka Medagamagodage, Software Engineering Undergraduate.Showcasing my projects, skills, and articles.",
    siteName: "Avishka Medagamagodage Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avishka Medagamagodage | Portfolio",
    description: "Personal developer portfolio of Avishka Medagamagodage, showcasing my projects, skills, and articles.",
  },
  alternates: {
    canonical: "https://avishkaishan.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} scroll-smooth`}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
