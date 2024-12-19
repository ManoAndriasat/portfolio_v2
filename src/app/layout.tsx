import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mano Andriasat - Portfolio",
  description: "Portfolio de ANDRISATARINTSOA Manohisoa Alain alias Mano Andriasat. Découvrez mes projets et réalisations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Mano Andriasat, Manohisoa Andriasat, Andriasatarintsoa, Portfolio, Développeur Web, Andrisatarintsoa Manohisoa Alain"
        />
        <meta name="author" content="Andrisatarintsoa Manohisoa Alain" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Mano Andriasat - Portfolio" />
        <meta property="og:description" content="Portfolio de ANDRISATARINTSOA Manohisoa Alain alias Mano Andriasat." />
        <meta property="og:image" content="/moi.ico" />
        <meta property="og:url" content="https://www.facebook.com/mano.andriasat?locale=fr_FR" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mano Andriasat - Portfolio" />
        <meta name="twitter:description" content="Découvrez les projets et compétences de ANDRISATARINTSOA Manohisoa Alain." />
        <meta name="twitter:image" content="/moi.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Andrisatarintsoa Manohisoa Alain",
              alternateName: "Mano Andriasat",
              description:
                "Développeur web, spécialiste en projets technologiques et développement d'applications.",
              image: "/moi.ico",
              url: "https://www.linkedin.com/in/manohisoa-andriasatarintsoa-5894a1304/",
            }),
          }}
        />
        <link rel="icon" href="/moi.ico" />
        <link rel="apple-touch-icon" href="/moi.ico" />

        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T7NQFJKW2V"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T7NQFJKW2V');
            `,
          }}
        />
      </head>
      <body>
          {children}
      </body>

    </html>
  );
}
