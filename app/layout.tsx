import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gbenga Anifowoshe",
  description:
    "Personal website where I showcase my work, products and passion",
  creator: "Gbenga Anifowoshe",
  openGraph: {
    locale: "en_US",
    siteName: "Gbenga Anifowoshe",
    type: "website",
    title: "Gbenga Anifowoshe",
    description:
      "Personal website where I showcase my work, products and passion",
    url: "https://gbengaanifowoshe.com",
    images: "https://gbengaanifowoshe.com/icon.png",
  },
  twitter: {
    title: "Gbenga Anifowoshe",
    description:
      "Personal website where I showcase my work, products and passion",
    images: "https://gbengaanifowoshe.com/icon.png",
    creator: "Gbenga Anifowoshe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
