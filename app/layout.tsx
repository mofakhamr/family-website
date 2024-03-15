import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

import Script from 'next/script'


export const metadata: Metadata = {
  title: {
    template: '%s | Sitename',
    default: "Sample Site",
  },
  description: "The best place for the best things",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Robin', url: 'https://nextjs.org' }],
  creator: 'Robin',
  publisher: 'Robin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />

        {/* Include the Header component */}
        {/* Layout UI */}
        {children}
        {/*  strategy="afterInteractive"  */}
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1900426305141513"/>
        
        <div className="bg-gray-500 left-0 flex h-24 w-full items-end justify-center ">
          footer
        </div>

        </body>
    </html>
  );
}
