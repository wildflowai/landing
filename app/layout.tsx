import { Metadata } from "next";
import Script from "next/script";

import { SITE } from "~/config.js";

import Providers from "~/components/atoms/Providers";
import Header from "~/components/widgets/Header";
import Footer2 from "~/components/widgets/Footer2";

import { Inter as CustomFont } from "next/font/google";
import "~/assets/styles/base.css";

const customFont = CustomFont({
  subsets: ["latin"],
  variable: "--font-custom",
});

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Providers>
          <Header />
          <main>{children}</main>
          {/* <Footer2 /> */}
        </Providers>
        {/* 100% privacy-first analytics */}
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
