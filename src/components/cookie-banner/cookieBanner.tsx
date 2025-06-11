"use client";
import { useState, useEffect, FC } from "react";

import classes from "./cookieBanner.module.scss";
import Button from "../UI/button";

const CookieBanner: FC = () => {
  const [cookieEaten, setCookieEaten] = useState<boolean>(false);

  useEffect(() => {
    const storedCookie = localStorage.getItem("cookieInfoAgreed");
    if (storedCookie) {
      setCookieEaten(true);
    }
  }, []);

  const handleCookieAccept = (): void => {
    localStorage.setItem("cookieInfoAgreed", "true");
    setCookieEaten(true);
  };

  if (cookieEaten) {
    return null;
  }
  return (
    <div className={classes["cookie-box"]}>
      <p>
        Korzystając z tej strony, akceptujesz użycie niezbędnych plików cookie.
        Więcej informacji znajdziesz w naszej{" "}
        <a
          href="/polityka-prywatnosci"
          target="_blank"
        >
          polityce prywatności
        </a>
        .
      </p>
      <Button
        outline
        className={`btn ${classes["cookie-box__btn"]}`}
        onClick={handleCookieAccept}
        type="button"
      >
        Akceptuj 🍪
      </Button>
    </div>
  );
};

export default CookieBanner;
