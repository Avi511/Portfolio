import type { Metadata } from "next";
import { Paytone_One } from "next/font/google";
import "./globals.css";

const paytone = Paytone_One({
  variable: "--font-paytone",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Avishka Ishan | Portfolio",
  description: "Personal Portfolio of Avishka Ishan Medagamagodage, Software Engineering undergraduate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${paytone.variable} dark antialiased`}>
      <body className="bg-black text-white font-paytone overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
