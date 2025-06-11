import Section from "@/components/UI/section";
import React from "react";
import classes from "./not-found.module.scss";
import Link from "next/link";

export const metadata = {
  title: "404 – Strona nie została znaleziona | Chłop od BHP",
  description:
    "Ups! Strona, której szukasz, nie istnieje. Sprawdź adres lub wróć na stronę główną.",
  robots: {
    index: false,
    follow: false,
  },
};

const NotFound = () => {
  return (
    <main className={classes.notFound}>
      <Section>
        <h1>404</h1>
        <p>Przykro nam taka strona nie istnieje 🤔</p>
        <p>
          Wróć na <Link href="/">stronę główną.</Link>
        </p>
      </Section>
    </main>
  );
};

export default NotFound;
