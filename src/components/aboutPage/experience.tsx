import { experience } from "@/lib/data";
import classes from "./experience.module.scss";
import TimelineItem from "./timelineItem";
import React from "react";
import Section from "../UI/section";

const Experience = () => {
  return (
    <Section>
      <div className={classes.timeline}>
        {experience.map((item, index) => (
          <TimelineItem
            key={item.description}
            item={item}
            isLast={index === experience.length - 1}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
