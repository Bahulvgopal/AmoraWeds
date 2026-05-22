import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "AmoraWeds",
    template: "%s | AmoraWeds",
  },

  description:
    "Premium wedding website creation service in Kerala. Custom wedding websites with RSVP, gallery, countdown timer and elegant invitation designs.",

  keywords: [
    "Wedding Website Kerala",
    "Wedding Invitation Website",
    "Digital Wedding Invitation",
    "Wedding Website India",
    "Wedding RSVP Website",
    "AmoraWeds",
  ],

  authors: [
    {
      name: "AmoraWeds",
    },
  ],

  openGraph: {
    title: "AmoraWeds",
    description:
      "Elegant wedding websites for modern couples.",
    url: "https://amoraweds.live",
    siteName: "AmoraWeds",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  data-scroll-behavior="smooth"
>
      <body
  className={`${playfair.variable} ${poppins.variable}`}
>
        <Navbar />
        <WhatsAppFloat />
        {children}
        <Footer />
      </body>
    </html>
  );
}
