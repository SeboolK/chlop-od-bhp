import React from "react";
import classes from "./page.module.scss";
import PageTitle from "@/components/UI/pageTitle";
import Welcome from "@/components/aboutPage/welcome";
import Experience from "@/components/aboutPage/experience";
import WhyMe from "@/components/aboutPage/whyMe";
import CtaSection from "@/components/UI/ctaSection";

export const metadata = {
  title: "O firmie | Chłop od BHP - profesjonalne usługi BHP i Prawa Pracy.",
  description:
    "Wspieram firmy z Rzeszowa i okolic w zakresie zgodności z przepisami BHP i prawa pracy, oferując praktyczne rozwiązania dostosowane do specyfiki branży. Dzięki doświadczeniu we współpracy z sektorem budowlanym, produkcyjnym i instytucjami publicznymi przyczyniam się do zwiększenia efektywności i bezpieczeństwa pracy.",
  alternates: {
    canonical: "/o-firmie",
  },
  openGraph: {
    title:
      "O firmie | Chłop od BHP. Profesjonalne usługi BHP i Prawa Pracy – audyty, szkolenia, nadzór.",
    description:
      "Wspieram firmy z Rzeszowa i okolic w zakresie zgodności z przepisami BHP i prawa pracy, oferując praktyczne rozwiązania dostosowane do specyfiki branży. Dzięki doświadczeniu we współpracy z sektorem budowlanym, produkcyjnym i instytucjami publicznymi przyczyniam się do zwiększenia efektywności i bezpieczeństwa pracy.",
    url: "/o-firmie",
    type: "website",
    locale: "pl_PL",
    siteName:
      "Bartłomiej Kędzior - specjalista BHP i prawa pracy | Chłop od BHP",
    images: [
      {
        url: "/bar-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Bartłomiej Kędzior - właściciel firmy Chłop od BHP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "O firmie | Chłop od BHP. Profesjonalne usługi BHP i Prawa Pracy – audyty, szkolenia, nadzór.",
    description:
      "Wspieram firmy z Rzeszowa i okolic w zakresie zgodności z przepisami BHP i prawa pracy, oferując praktyczne rozwiązania dostosowane do specyfiki branży. Dzięki doświadczeniu we współpracy z sektorem budowlanym, produkcyjnym i instytucjami publicznymi przyczyniam się do zwiększenia efektywności i bezpieczeństwa pracy.",
    images: ["/bar-meta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const AboutPage = () => {
  return (
    <main className={classes.aboutPage}>
      <PageTitle
        subtitle="O firmie"
        pageTitle="Chłop od BHP"
      />
      <Welcome />
      <WhyMe />
      <Experience />
      <CtaSection />
    </main>
  );
};

export default AboutPage;
