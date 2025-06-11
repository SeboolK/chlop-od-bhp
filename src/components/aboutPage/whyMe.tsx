import React from "react";
import Subtitle from "../UI/subtitle";
import Section from "../UI/section";
import classes from "./whyMe.module.scss";
import { whyMe } from "@/lib/data";
import Image from "next/image";
import FadeInOnScroll from "../UI/animation/fadeInOnScroll";

const WhyMe = () => {
  return (
    <div className={classes.whyMe}>
      <Section>
        <Subtitle title="Współpraca">Co mnie wyróżnia?</Subtitle>

        <div className={classes.whyMe__cards}>
          {whyMe.map((item) => (
            <FadeInOnScroll key={item.title}>
              <div className={classes.whyMe__card}>
                <div className={classes.whyMe__imgWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    aria-hidden="true"
                    style={{ objectFit: "cover" }}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 25vw"
                    priority={false}
                  />
                </div>

                <h3 className={classes.whyMe__title}>{item.title}</h3>
                <div className={classes.whyMe__textWrapper}>
                  <p className={classes.whyMe__text}>{item.description}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default WhyMe;
