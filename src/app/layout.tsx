import type { Metadata } from "next";
import { Paytone_One, Outfit } from "next/font/google";
import "./globals.css";

const paytone = Paytone_One({
  variable: "--font-paytone",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Spiderman Portfolio",
  description: "A 3D interactive portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${paytone.variable} ${outfit.variable} dark antialiased`}>
      <body className="bg-transparent text-white font-outfit overflow-x-hidden m-0 p-0">
        {children}
      </body>
    </html>
  );
}
