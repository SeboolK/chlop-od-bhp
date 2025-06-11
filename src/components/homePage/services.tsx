import React from "react";
import classes from "./services.module.scss";
import { homeServices } from "@/lib/data";
import Link from "next/link";
import { HomeService } from "@/lib/types";
import FadeInOnScroll from "../UI/animation/fadeInOnScroll";

const Services: React.FC = () => {
  return (
    <div className={classes.services}>
      {homeServices.map((service: HomeService) => (
        <FadeInOnScroll key={service.href}>
          <div className={classes.services__card}>
            <h3>
              <span>{service.icon}</span>
              {service.title}
            </h3>
            <p>{service.description}</p>
            <Link
              href={service.href}
              className={classes.services__link}
            >
              Czytaj więcej...
            </Link>
          </div>{" "}
        </FadeInOnScroll>
      ))}
    </div>
  );
};

export default Services;
