import classes from "./page.module.scss";
import Hero from "@/components/homePage/hero";
import Advantages from "@/components/homePage/advantages";
import Button from "@/components/UI/button";
import Socials from "@/components/socials";
import ServicesSection from "@/components/homePage/servicesSection";
import ImageFixed from "@/components/homePage/imageFixed";
import About from "@/components/homePage/about";
import CtaSection from "@/components/UI/ctaSection";
import FadeInOnScroll from "@/components/UI/animation/fadeInOnScroll";
import StepsWrapper from "@/components/stepsWrapper";
import { whyBHP } from "@/lib/data";

export const metadata = {
  title: "Chłop od BHP | Usługi BHP i Prawa Pracy dla firm",
  description:
    "Profesjonalne usługi BHP i prawa pracy – audyty, szkolenia i nadzór dla firm w Rzeszowie i okolicach. Skontaktuj się z Chłopem od BHP i zadbaj o bezpieczeństwo w Twojej firmie!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Chłop od BHP | Kompleksowa obsługa prawna firm w zakresie BHP i Prawa Pracy.",
    description:
      "Audyty, szkolenia, nadzór i wsparcie w organizacji zakładu pracy. Profesjonalna obsługa prawna w zakresie BHP i prawa pracy na terenie Rzeszowa i okolic. Zapraszam do kontaktu!",
    url: "/",
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

export default function Home() {
  return (
    <main className={classes.homePage}>
      <Hero />
      <Advantages />
      <div className={classes.homePage__title}>
        <FadeInOnScroll>
          <h1>Bezpieczna praca - pewna przyszłość!</h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className={classes.homePage__socials}>
            <Button
              link
              href="/kontakt"
            >
              Kontakt
            </Button>
            <Socials />
          </div>
        </FadeInOnScroll>
      </div>
      <ServicesSection />
      <ImageFixed />
      <StepsWrapper
        title="Warto pamiętać"
        subtitle="Dlaczego BHP jest ważne?"
        stepsData={whyBHP}
      />
      <div className={classes.homePage__about}>
        <About />
      </div>
      <CtaSection />
    </main>
  );
}
