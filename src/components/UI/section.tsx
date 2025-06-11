import React, { ReactNode } from "react";
import classes from "./section.module.scss";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
