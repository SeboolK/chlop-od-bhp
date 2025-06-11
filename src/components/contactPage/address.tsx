import React from "react";
import ContactItems from "../contactItems";
import Socials from "../socials";
import classes from "./address.module.scss";

// Błąd z iframe Google Maps w konsoli (Uncaught _.Nc) — nie wpływa na działanie strony
const Address = () => {
  return (
    <div className={classes.address}>
      <div className={classes.address__dataWrapper}>
        <ContactItems />
        <div className={classes.address__socials}>
          <Socials />
        </div>
      </div>

      <div className={classes.address__map}>
        <iframe
          title="Lokazlizacja biura firmy Chłop od BHP"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5125.259845061908!2d21.984579!3d50.03703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb09b3a3aed5%3A0x744db2ba32a1793!2sWita%20Stwosza%2057%2C%2035-113%20Rzesz%C3%B3w!5e0!3m2!1sen!2spl!4v1748847281396!5m2!1sen!2spl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Address;
