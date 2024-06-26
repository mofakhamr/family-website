
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

import Script from 'next/script'


import { Suspense } from 'react';
import GoogleAnalytics from '@/components/ga';

export const metadata: Metadata = {
  title: {
    template: '%s | Mofakham Family Website',
    default: "Mofakham Family Website",
  },
  description: "Some history and information on the Family Mofakham",
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Robin M', url: 'https://nextjs.org' }],
  creator: 'Mahmoud Mofakham',
  publisher: 'Robin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// https://ravinduinduwara.medium.com/adding-google-analytics-to-a-react-typescript-next-js-application-5d114ed8b170
const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Measurement ID*/}
        <Script async src={gtag} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname
                });
              `,
            }}
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"></link>
      </head>
      <body className={inter.className}>
      <Header />

        {/* Include the Header component */}
        {/* Layout UI */}
        {children}
        {/*  strategy="afterInteractive"  */}

        <div className="bg-gray-500 left-0 flex h-24 w-full items-end justify-center ">
          &nbsp;
        </div>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        </body>
    </html>
  );
}
