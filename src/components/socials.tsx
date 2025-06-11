import React from "react";
import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa";

import classes from "./socials.module.scss";

interface SocialsProps {
  white?: boolean;
}

const Socials: React.FC<SocialsProps> = ({ white }) => {
  return (
    <div className={white ? classes.socialsWhite : classes.socials}>
      <a
        href="https://www.facebook.com/chlop.od.bhp.i.kp"
        target="_blank"
        rel="noopener nofollow noreferrer"
        aria-label="Facebook – profil Chłop od BHP"
      >
        <FaFacebookF aria-hidden="true" />
      </a>
      <a
        href="https://www.instagram.com/chlop_od_bhp"
        target="_blank"
        rel="noopener nofollow noreferrer"
        aria-label="Instagram – profil Chłop od BHP"
      >
        <FaInstagram aria-hidden="true" />
      </a>
      <a
        href="mailto:chlopodbhp@gmail.com"
        target="_blank"
        rel="noopener nofollow noreferrer"
        aria-label="Wyślij e-mail do Chłop od BHP"
      >
        <FaRegEnvelope aria-hidden="true" />
      </a>
    </div>
  );
};

export default Socials;
