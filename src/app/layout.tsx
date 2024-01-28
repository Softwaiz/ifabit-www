import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Plateforme d'échange crypto/fiat et transferts en Afrique de l'Ouest | IFABIT",
  description: "La plateforme de référence pour acheter, vendre et transférer vos cryptomonnaies (Bitcoin, Ethereum...), monnaies électroniques (Perfect Money...) et devises fiat (FCFA, Nairas...) en Afrique de l'Ouest et ailleurs. Taux de change imbattables, frais réduits, sécurité maximale.",
  keywords: "achat crypto, vente crypto, échange crypto, plateforme crypto Afrique, transférer argent Afrique de l'Ouest, envoyer argent, recevoir argent, frais transfert, taux de change"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V691Q2E7PK"
        />

        <Script
          async
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-V691Q2E7PK');
        `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
