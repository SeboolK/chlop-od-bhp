import React from "react";
import classes from "./footer.module.scss";
import Section from "../UI/section";
import Logo from "../UI/logo";
import { mainNav } from "@/lib/data";
import Link from "next/link";
import Socials from "../socials";
import ContactItems from "../contactItems";
import FooterYear from "./footerYear";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <Section>
          <div className={classes.footer__info}>
            <div className={classes.footer__logo}>
              <Logo />
            </div>

            <nav className={classes.footer__box}>
              <ul>
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/polityka-prywatnosci"
                className={classes.footer__privacy}
              >
                Polityka Prywatności
              </Link>
            </nav>
            <div className={classes.footer__box}>
              <ContactItems />
              <div className={classes.footer__socials}>
                <Socials />
              </div>
            </div>
          </div>
        </Section>
      </footer>
      <div className={classes.rights}>
        <div className={classes.rights__wrapper}>
          <p>
            All rights reserved <FooterYear /> &copy; Chłop od BHP
          </p>
          <p>
            Images designed by{" "}
            <a
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
          </p>
          <p>
            Build and designed by{" "}
            <a
              href="https://www.lubeckastrony.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Katarzyna Lubecka
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
