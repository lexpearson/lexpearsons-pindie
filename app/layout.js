import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./styles/globals.css";

export const metadata = {
  charset: "utf-8",
  title: "Pindie"
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru' dir='ltr' data-lt-installed='true'>
      <head>
        <meta name='theme-color' content='#ffff00' />
        <meta name='color-scheme' content='light' />

        <meta name='format-detection' content='address=no' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='msapplication-tap-highlight' content='no' />

        <meta name='google' content='notranslate' />
        <meta content='IE=Edge' httpEquiv='X-UA-Compatible' />
        <link rel='canonical' href='/' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover shrink-to-fit=no user-scalable=no'
        />

        {/* SEO [OPEN GRAPH] */}
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='ru_RU' />
        <meta property='og:site_name' content='Pindie' />
        <meta property='og:title' content='Pindie' />
        <meta property='og:description' content='Портал инди-игр от студентов Яндекс Практикума' />

        {/* TWITTER */}
        <meta name='twitter:title' content='Pindie' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content='Портал инди-игр от студентов Яндекс Практикума' />

        {/* BASIC */}
        <meta name='description' content='Портал инди-игр от студентов Яндекс Практикума' />
        <meta name='keywords' content='Pindie, games, indie-games, game studio Practicum' />
        <meta name='copyright' content='GITHUB.COM/LEXPEARSON' />
        <meta name='robots' content='index, follow' />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
