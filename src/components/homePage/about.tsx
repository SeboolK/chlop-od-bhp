import React from "react";
import classes from "./about.module.scss";
import Button from "../UI/button";
import Subtitle from "../UI/subtitle";
import Section from "../UI/section";
import Image from "next/image";
import factoryImg from "@/assets/bg.webp";

const About: React.FC = () => {
  return (
    <Section>
      <div className={classes.homeAbout}>
        <div className={classes.homeAbout__image}>
          <Image
            src={factoryImg}
            alt="Hala produkcyjna"
            fill
            style={{
              objectFit: "cover",
              zIndex: 0,
              objectPosition: "center left",
              filter: "grayscale(15%) hue-rotate(355deg)",
            }}
            sizes="(max-width: 999px) 0vw, (max-width: 1400px) 100vw, 700"
            aria-hidden="true"
          />
        </div>

        <div className={classes.homeAbout__text}>
          <Subtitle title="O firmie">Chłop od BHP</Subtitle>
          <p className={classes.homeAbout__subtitle}>
            Bezpieczństwo to fundament każdej działalności dlatego dokładam
            wszelkich starań, aby dostarczyć skuteczne rozwiązania oparte na
            doświadczeniu i wiedzy:
          </p>
          <ul>
            <li>
              wieloletni inspektor pracy w Państwowej Inspekcji Pracy oddział w
              Rzeszowie
            </li>
            <li>
              wykładowca w zakresie prawa pracy i przepisów bhp w Ośrodku
              Szkoleniowym PIP we Wrocławiu oraz na uczelni wyższej
            </li>
            <li>
              audytor w zakresie technicznego bezpieczeństwa pracy oraz prawnej
              ochrony prawa pracy
            </li>
            <li>
              doświadczony praktyk w zakresie prowadzenia czynności kontrolnych
              z prawa pracy i technicznego bezpieczeństwa pracy oraz wiele
              innych...
            </li>
          </ul>
          <p className={classes.homeAbout__strong}>Chcesz wiedzieć więcej?</p>
          <div>
            <Button
              link
              href="/o-firmie"
            >
              Poznaj firmę Chłop od BHP
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
