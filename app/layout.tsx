import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Playfair_Display, Poppins } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amoraweds.live"),

  title: {
    default:
      "AmoraWeds | Premium Wedding Website & Digital Invitation Service",
    template: "%s | AmoraWeds",
  },

  description:
    "AmoraWeds creates premium wedding websites and digital wedding invitations in Kerala and across India. Elegant wedding websites with RSVP, photo gallery, countdown timer, venue details, love story, events, custom domains and personalized invitation designs.",

  applicationName: "AmoraWeds",

  keywords: [
    "AmoraWeds",
    "Wedding Website Kerala",
    "Wedding Website India",
    "Wedding Invitation Website",
    "Digital Wedding Invitation",
    "Wedding RSVP Website",
    "Custom Wedding Website",
    "Online Wedding Invitation",
    "Marriage Website Kerala",
    "Wedding Website for Couples",
    "Luxury Wedding Website",
    "Wedding Invitation Kerala",
    "Wedding Invitation India",
    "Wedding Invitation Online",
    "Digital Wedding Card",
    "Wedding Landing Page",
    "Save the Date Website",
    "Wedding Countdown Website",
    "Wedding Website Developer",
    "Wedding Website Design",
    "Personalized Wedding Website",
    "Wedding Couple Website",
    "Premium Wedding Website",
    "Online Wedding RSVP",
    "Wedding Event Website",
    "Kerala Wedding Website",
    "Indian Wedding Website",
    "Elegant Wedding Website",
    "Wedding Website Service",
    "Wedding Planning Website",
    "Wedding Website with Gallery",
    "Wedding Website with RSVP",
    "Wedding Website with Countdown",
    "Marriage Invitation Website",
    "Modern Wedding Invitation",
    "Wedding Web Designer Kerala",
    "Custom Invitation Website",
    "Digital Wedding Card Kerala",
  ],

  authors: [
    {
      name: "AmoraWeds",
      url: "https://amoraweds.live",
    },
  ],

  creator: "AmoraWeds",
  publisher: "AmoraWeds",
  category: "Wedding Services",

  alternates: {
    canonical: "https://amoraweds.live",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "AmoraWeds | Premium Wedding Websites & Digital Invitations",
    description:
      "Elegant wedding websites for modern couples. RSVP, countdown timer, gallery, events, venue details and premium digital wedding invitations in Kerala and across India.",

    url: "https://amoraweds.live",
    siteName: "AmoraWeds",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AmoraWeds Wedding Website Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AmoraWeds | Wedding Website Service",
    description:
      "Premium wedding websites & digital wedding invitations with RSVP, countdown, gallery and custom elegant designs.",
    images: ["/og-image.jpg"],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AmoraWeds",
    url: "https://amoraweds.live",
    logo: "https://amoraweds.live/logo.png",
    description:
      "Premium wedding website creation and digital wedding invitation service in Kerala and India.",
    sameAs: [],
    areaServed: ["Kerala", "India"],
    serviceType: [
      "Wedding Website Design",
      "Digital Wedding Invitation",
      "Wedding RSVP Website",
      "Custom Wedding Website",
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${playfair.variable} ${poppins.variable}`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Navbar />
        <WhatsAppFloat />
        {children}
        <Footer />
      </body>
    </html>
  );
}
