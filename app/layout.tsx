import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mudanzas Bilbao | Transportes y Portes País Vasco | Vaciados Vizcaya",
  description:
    "Empresa líder en mudanzas, transportes, portes y vaciados en Bilbao, País Vasco y toda España. Servicio 24h, presupuesto gratuito. Mudanzas profesionales desde 1995.",
  keywords:
    "mudanzas Bilbao, transportes País Vasco, portes Vizcaya, vaciados Bilbao, mudanzas Getxo, transportes Barakaldo, mudanzas profesionales, empresa mudanzas Bilbao",
  authors: [{ name: "Mudanzas Bilbao" }],
  creator: "mudanzasbilbo.com",
  publisher: "mudanzasbilbo.com",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mudanzasbilbo.com",
    siteName: "Mudanzas Bilbao",
    title: "Mudanzas Bilbao | Transportes y Portes País Vasco | Vaciados",
    description:
      "Empresa líder en mudanzas, transportes, portes y vaciados en Bilbao y País Vasco. Servicio profesional 24h con más de 25 años de experiencia.",
    images: [
      {
        url: "/guggenheim-museum-bilbao-exterior-architecture-mod.jpg",
        width: 1200,
        height: 630,
        alt: "Mudanzas profesionales en Bilbao - País Vasco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas Bilbao | Transportes País Vasco",
    description: "Empresa líder en mudanzas, transportes y vaciados en Bilbao y País Vasco. Servicio 24h.",
    images: ["/guggenheim-museum-bilbao-exterior-architecture-mod.jpg"],
  },
  alternates: {
    canonical: "https://mudanzasbilbo.com",
  },
  generator: "v0.app",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "Mudanzas Bilbao",
      url: "https://mudanzasbilbo.com",
      logo: "https://mudanzasbilbo.com/logo.png",
      description: "Empresa líder en mudanzas, transportes, portes y vaciados en Bilbao, País Vasco y toda España",
      telephone: "+34648762308",
      email: "bilbaomudanzas1@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bilbao",
        addressRegion: "País Vasco",
        addressCountry: "ES",
      },
      areaServed: ["Bilbao", "País Vasco", "Vizcaya", "Getxo", "Barakaldo", "Santurtzi", "Portugalete", "España"],
      serviceType: [
        "Mudanzas residenciales",
        "Mudanzas comerciales",
        "Transportes",
        "Portes",
        "Vaciados",
        "Mudanzas internacionales",
      ],
      openingHours: "Mo-Su 00:00-23:59",
      priceRange: "€€",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
      },
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "Mudanzas Bilbao",
              url: "https://mudanzasbilbo.com",
              logo: "https://mudanzasbilbo.com/logo.png",
              description:
                "Empresa líder en mudanzas, transportes, portes y vaciados en Bilbao, País Vasco y toda España",
              telephone: "+34648762308",
              email: "bilbaomudanzas1@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bilbao",
                addressRegion: "País Vasco",
                addressCountry: "ES",
              },
              areaServed: [
                "Bilbao",
                "País Vasco",
                "Vizcaya",
                "Getxo",
                "Barakaldo",
                "Santurtzi",
                "Portugalete",
                "España",
              ],
              serviceType: [
                "Mudanzas residenciales",
                "Mudanzas comerciales",
                "Transportes",
                "Portes",
                "Vaciados",
                "Mudanzas internacionales",
              ],
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "€€",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
