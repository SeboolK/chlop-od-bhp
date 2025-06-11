import React from "react";
import classes from "./ctaButtons.module.scss";
import Section from "../UI/section";
import Button from "../UI/button";

const CtaButtons = () => {
  return (
    <Section>
      <div className={classes.buttons}>
        <Button
          link
          href="tel:+48533066822"
        >
          +48 533 066 822
        </Button>
        <Button
          link
          href="mailto:chlopodbhp@gmail.com"
        >
          chlopodbhp@gmail.com
        </Button>
      </div>
    </Section>
  );
};

export default CtaButtons;
