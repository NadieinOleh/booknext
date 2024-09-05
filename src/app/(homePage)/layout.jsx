import "../globals.css";
import "@fontsource/roboto"; 
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css"; 
import Head from 'next/head';

export const metadata = {
  title: "constructiveartistry.com",
  description: "book store",
  openGraph: {
    url: "https://constructiveartistry.com/",
    type: "website",
    title: "constructiveartistry.com",
    description: "Book store",
    image: "",
  },
  twitter: {
    card: "summary_large_image",
    domain: "constructiveartistry.com",
    url: "https://constructiveartistry.com/",
    title: "constructiveartistry.com",
    description: "Book store",
    image: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:domain" content={metadata.twitter.domain} />
        <meta property="twitter:url" content={metadata.twitter.url} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
