import React from "react";
import classes from "./contactItems.module.scss";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

type ContactItemsProps = {
  className?: string;
};

const ContactItems: React.FC<ContactItemsProps> = ({ className }) => {
  return (
    <div
      className={
        className
          ? `${classes.contactItems} ${className}`
          : classes.contactItems
      }
    >
      <p>
        <FaLocationDot aria-hidden="true" />
        Wita Stwosza 57, 35-113 Rzeszów
      </p>
      <a href="tel:+48533066822">
        <FaPhone aria-hidden="true" />
        +48 533 066 822
      </a>
      <a href="mailto:chlopodbhp@gmail.com">
        <FaEnvelope aria-hidden="true" />
        chlopodbhp@gmail.com
      </a>
    </div>
  );
};

export default ContactItems;
