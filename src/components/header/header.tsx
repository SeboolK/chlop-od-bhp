"use client";
import React, { useState } from "react";
import ToggleBtn from "./toggleBtn";
import classes from "./header.module.scss";
import { mainNav } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../UI/logo";
import { NavItem } from "@/lib/types";
import Socials from "../socials";
import CtaIcon from "./ctaIcon";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const path = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return path === href;
    }
    return path === href || path.startsWith(href);
  };

  return (
    <>
      {showMenu && (
        <div
          className={classes.overlay}
          onClick={() => setShowMenu((prevState) => !prevState)}
        ></div>
      )}
      <header className={classes.header}>
        <div className={classes.header__wrapper}>
          <div className={classes.header__mobileWrapper}>
            <Link
              href="/"
              className={classes.header__logo}
              onClick={() => setShowMenu(false)}
              aria-label="Przejdź do strony głównej"
            >
              <Logo />
            </Link>
            <div className={classes.header__mobileAside}>
              <CtaIcon />

              <div className={classes.header__toggleBtn}>
                <ToggleBtn
                  onClick={() => setShowMenu((prevState) => !prevState)}
                  isOpen={showMenu}
                ></ToggleBtn>
              </div>
            </div>
          </div>
          <nav
            className={`${classes.nav} ${showMenu ? classes.open : ""}`}
            onClick={() => setShowMenu(false)}
          >
            <ul className={classes.nav__mainNav}>
              {mainNav.map((item: NavItem) => {
                return (
                  <li
                    className={showMenu ? classes.open : ""}
                    key={`main-${item.href}`}
                  >
                    <Link
                      href={item.href}
                      className={`${classes.nav__navlink} ${
                        isActive(item.href) ? classes.activeLink : undefined
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={classes.nav__socials}>
              <Socials />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
