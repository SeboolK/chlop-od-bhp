import React from "react";
import classes from "./welcome.module.scss";
import Section from "../UI/section";
import { slides } from "@/lib/data";
import { Slide } from "@/lib/types";
import Socials from "../socials";
import Image from "next/image";

import Button from "../UI/button";
import ContactItems from "../contactItems";
import barImage from "@/assets/bar.jpg";

const Welcome = () => {
  return (
    <Section>
      <div className={classes.welcome}>
        <div className={classes.welcome__box}>
          <div className={classes.welcome__image}>
            <Image
              src={barImage}
              alt="Bartłomiej Kędzior, właściciel firmy Chłop od BHP"
              fill
              style={{
                objectFit: "contain",
                filter:
                  "grayscale(10%) hue-rotate(355deg) brightness(1.1) saturate(110%)",
              }}
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
          <div className={classes.welcome__boxText}>
            <h2>Bartłomiej Kędzior</h2>
            <ContactItems />
          </div>
        </div>

        <div className={classes.welcome__text}>
          <p>Założyciel firmy Chłop od BHP</p>
          <p>Mgr inż.</p>

          <h2>Bartłomiej Kędzior</h2>
          <p className={classes.welcome__textPIP}>Były inspektor PIP</p>

          <p>
            Wspieram firmy z Rzeszowa i okolic w zakresie zgodności z przepisami
            BHP i prawa pracy, oferując praktyczne rozwiązania dostosowane do
            specyfiki branży. Dzięki doświadczeniu we współpracy z sektorem
            budowlanym, produkcyjnym i instytucjami publicznymi przyczyniam się
            do zwiększenia efektywności i bezpieczeństwa pracy.
          </p>
          <ul>
            {slides.map((slide: Slide) => (
              <li key={slide.id}>
                <span>{slide.icon}</span>
                <span>{slide.title}</span>
              </li>
            ))}
          </ul>

          <div className={classes.welcome__socials}>
            <Button
              href={"/uslugi"}
              link
            >
              Usługi
            </Button>
            <Socials />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Welcome;
