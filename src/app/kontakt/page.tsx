import React from "react";
import classes from "./page.module.scss";
import PageTitle from "@/components/UI/pageTitle";
import Address from "@/components/contactPage/address";
import Section from "@/components/UI/section";
import Form from "@/components/contactPage/form";
import Subtitle from "@/components/UI/subtitle";

export const metadata = {
  title: "Kontakt | Chłop od BHP. Profesjonalne usługi BHP i Prawa Pracy.",
  description:
    "Skontaktuj się z firmą Chłop od BHP – znajdziesz tutaj dane kontaktowe, lokalizację oraz formularz zapytań dotyczących usług BHP i prawa pracy w Rzeszowie i okolicach.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title:
      "Kontakt | Chłop od BHP. Profesjonalne usługi BHP i Prawa Pracy – audyty, szkolenia, nadzór.",
    description:
      "Potrzebujesz wsparcia w zakresie BHP lub prawa pracy? Skontaktuj się z Chłopem od BHP – oferujemy szybki kontakt, formularz online i profesjonalne doradztwo dla firm w Rzeszowie i okolicach.",
    url: "/kontakt",
    type: "website",
    locale: "pl_PL",
    siteName: "Skontaktuj się z nami | Chłop od BHP",
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
      "Kontakt | Chłop od BHP. Profesjonalne usługi BHP i Prawa Pracy – audyty, szkolenia, nadzór.",
    description:
      "Potrzebujesz wsparcia w zakresie BHP lub prawa pracy? Skontaktuj się z Chłopem od BHP – oferujemy szybki kontakt, formularz online i profesjonalne doradztwo dla firm w Rzeszowie i okolicach.",
    images: ["/meta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ContactPage = () => {
  return (
    <main className={classes.contactPage}>
      <PageTitle
        subtitle="Chłop od BHP"
        pageTitle="Zapraszam do kontaktu"
      />
      <Section>
        <div className={classes.contactPage__wrapper}>
          <Address />
          <div className={classes.contactPage__form}>
            <div className={classes.contactPage__subtitle}>
              <Subtitle title="Masz pytanie?">Napisz do mnie!</Subtitle>
            </div>
            <Form />
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;
