// app/layout.tsx
import Header from "@/components/header/header";
import "./globals.scss";
import { Quicksand, Poppins } from "next/font/google";
import Footer from "@/components/footer/footer";
import CookieBanner from "@/components/cookie-banner/cookieBanner";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Chłop od BHP | Usługi BHP i Prawa Pracy – Rzeszów i okolice",
  description:
    "Audyty, szkolenia, nadzór i wsparcie w organizacji zakładu pracy. Profesjonalna obsługa prawna w zakresie BHP i prawa pracy na terenie Rzeszowa i okolic. Zapraszam do kontaktu!",
  metadataBase: new URL("https://chlopodbhp.pl/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Chłop od BHP | Kompleksowa obsługa prawna firm w zakresie BHP i Prawa Pracy.",
    description:
      "Audyty, szkolenia, nadzór i wsparcie w organizacji zakładu pracy. Profesjonalna obsługa prawna w zakresie BHP i prawa pracy na terenie Rzeszowa i okolic. Zapraszam do kontaktu!",
    url: "https://chlopodbhp.pl/",
    type: "website",
    locale: "pl_PL",
    siteName:
      "Kompleksowa obsługa prawna firm w zakresie BHP i Prawa Pracy | Chłop od BHP",
    images: [
      {
        url: "/meta.jpg",
        width: 1200,
        height: 630,
        alt: "Chłop od BHP - Kompleksowa obsługa prawna firm w zakresie BHP i Prawa Pracy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chłop od BHP | Kompleksowa obsługa prawna firm w zakresie BHP i Prawa Pracy.",
    description:
      "Audyty, szkolenia, nadzór i wsparcie w organizacji zakładu pracy. Profesjonalna obsługa prawna w zakresie BHP i prawa pracy na terenie Rzeszowa i okolic. Zapraszam do kontaktu!",
    images: ["/meta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${quicksand.variable} ${poppins.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
