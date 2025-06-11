import React from "react";
import classes from "./servicesSection.module.scss";
import Subtitle from "../UI/subtitle";
import Button from "../UI/button";
import Section from "../UI/section";
import Services from "./services";

const ServicesSection = () => {
  return (
    <div className={classes.servicesSection}>
      <Section>
        <div className={classes.servicesSection__wrapper}>
          <div className={classes.servicesSection__textWrapper}>
            <Subtitle title="Chłop od BHP">
              Usługi BHP i&nbsp;Prawa Pracy
            </Subtitle>
            <p className={classes.servicesSection__text}>
              Wspieram firmy z Rzeszowa i okolic w zakresie zgodności z
              przepisami BHP i prawa pracy, oferując praktyczne rozwiązania
              dostosowane do specyfiki branży. Dzięki doświadczeniu we
              współpracy z sektorem budowlanym, produkcyjnym i instytucjami
              publicznymi przyczyniam się do zwiększenia efektywności i
              bezpieczeństwa pracy.
            </p>
            <Button
              link
              href="/uslugi"
            >
              Zapoznaj się z pełną ofertą
            </Button>
          </div>
          <Services />
        </div>
      </Section>
    </div>
  );
};

export default ServicesSection;
