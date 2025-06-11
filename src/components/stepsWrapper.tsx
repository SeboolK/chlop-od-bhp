import React from "react";
import Section from "./UI/section";
import classes from "./stepsWrapper.module.scss";
import { StepsItem } from "@/lib/types";
import FadeInOnScroll from "./UI/animation/fadeInOnScroll";
import Subtitle from "./UI/subtitle";

type StepsWrapperProps = {
  title: string;
  subtitle: string;
  stepsData: StepsItem[];
};

const StepsWrapper: React.FC<StepsWrapperProps> = ({
  title,
  subtitle,
  stepsData,
}) => {
  return (
    <Section>
      <Subtitle title={title}>{subtitle}</Subtitle>
      <div className={classes.steps}>
        {stepsData?.map((item: StepsItem) => (
          <FadeInOnScroll key={`${item.number}-${item.title}`}>
            <div className={classes.steps__item}>
              <p className={classes.steps__number}>{item.number}.</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </Section>
  );
};

export default StepsWrapper;
