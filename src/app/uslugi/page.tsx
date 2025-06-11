import React from "react";
import PageTitle from "@/components/UI/pageTitle";
import classes from "./page.module.scss";
import AccordionServices from "@/components/servicesPage/accordionServices";
import WhyMe from "@/components/aboutPage/whyMe";
import CtaButtons from "@/components/servicesPage/ctaButtons";
import StepsWrapper from "@/components/stepsWrapper";
import { collaborationSteps } from "@/lib/data";

export const metadata = {
  title: "Usługi BHP i prawa pracy na terenie Rzeszowa | Chłop od BHP",
  description:
    "Audyty, szkolenia, nadzór i wsparcie w organizacji zakładu pracy. Szeroki zakres usług w zakresie BHP i prawa pracy w Rzeszowie i okolicy. Dbamy o bezpieczeństwo Twojej firmy!",
  alternates: {
    canonical: "/uslugi",
  },
  openGraph: {
    title:
      "Usługi BHP i prawa pracy na terenie Rzeszowa – audyty, szkolenia, nadzór i doradztwo BHP | Chłop od BHP",
    description:
      "Audyty, szkolenia, nadzór i wsparcie w organizacji zakładu pracy. Szeroki zakres usług w zakresie BHP i prawa pracy w Rzeszowie i okolicy. Dbamy o bezpieczeństwo Twojej firmy!",
    url: "/uslugi",
    type: "website",
    locale: "pl_PL",
    siteName: "Usługi BHP i prawa pracy | Chłop od BHP",
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
      "Usługi BHP i prawa pracy na terenie Rzeszowa – audyty, szkolenia, nadzór i doradztwo BHP | Chłop od BHP",
    description:
      "Szeroki zakres usług w zakresie BHP i prawa pracy w Rzeszowie i okolicy. Audyty, szkolenia BHP, nadzór i doradztwo prawne – dbamy o bezpieczeństwo Twojej firmy.",
    images: ["/meta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ServicePage = () => {
  return (
    <main className={classes.servicesPage}>
      <PageTitle
        subtitle="Chłop od BHP"
        pageTitle="Usługi BHP i Prawa Pracy"
      />
      <AccordionServices />
      <CtaButtons />
      <WhyMe />
      <StepsWrapper
        title="BHP i Prawo Pracy"
        subtitle="Jak wygląda współpraca?"
        stepsData={collaborationSteps}
      />
    </main>
  );
};

export default ServicePage;
