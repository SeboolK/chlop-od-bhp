import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import classes from "./ctaIcon.module.scss";

const CtaIcon = () => {
  return (
    <div className={classes.cta}>
      <Link href="tel:+48533066822">
        <p>533 066 822</p>
        <div className={classes.cta__icon}>
          <FaPhoneAlt aria-hidden="true" />
        </div>
      </Link>
    </div>
  );
};

export default CtaIcon;
