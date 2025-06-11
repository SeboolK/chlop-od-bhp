"use client";
import React from "react";
import Section from "../UI/section";
import classes from "./accordionServices.module.scss";
import Accordion from "../accordion/accordion";
import { AccordionServicesItem } from "@/lib/types";
import { servicesData } from "@/lib/data";

const AccordionServices = () => {
  return (
    <div className={classes.accordionServices}>
      <Section>
        <Accordion className={classes.accordion}>
          {servicesData.map((item: AccordionServicesItem) => (
            <Accordion.Item
              key={item.id}
              id={item.id}
              className={classes.accordion__item}
            >
              <Accordion.Title className={classes.accordion__title}>
                {item.title}
              </Accordion.Title>
              <Accordion.Content className={classes.accordion__content}>
                <ul>
                  {item.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>
    </div>
  );
};

export default AccordionServices;
