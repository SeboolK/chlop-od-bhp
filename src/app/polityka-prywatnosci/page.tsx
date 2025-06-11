import PageTitle from "@/components/UI/pageTitle";
import React from "react";
import classes from "./page.module.scss";
import Section from "@/components/UI/section";

export const metadata = {
  title: "Polityka prywatności | Chłop od BHP",
  description:
    "Zapoznaj się z polityką prywatności dotyczącą przetwarzania danych osobowych na stronie chlopodbhp.pl.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPage = () => {
  return (
    <>
      <PageTitle
        pageTitle="Polityka prywatności"
        subtitle="Chłop od BHP"
      />
      <Section>
        <main>
          <div className={classes.privacy}>
            <h2>Polityka Prywatności firmy Chłop od BHP</h2>

            <p>
              Podstawą przetwarzania danych jest zgoda użytkownika (art. 6 ust.
              1 lit. a RODO). Możesz ją w każdej chwili wycofać, kontaktując się
              z nami.
            </p>

            <h3>Administrator danych osobowych</h3>
            <p>
              Administratorem Twoich danych osobowych jest firma{" "}
              <strong>Chłop od BHP</strong> (dalej: &quot;Administrator&quot;).
              Możesz się z nami skontaktować pod adresem e-mail:{" "}
              <a href="mailto:chlopodbhp@gmail.com">chlopodbhp@gmail.com</a>.
            </p>

            <h3>Zakres przetwarzanych danych osobowych</h3>
            <p>
              W ramach formularza kontaktowego zbieramy następujące dane
              osobowe:
            </p>
            <ul>
              <li>Imię i nazwisko,</li>
              <li>Adres e-mail,</li>
              <li>Treść wiadomości.</li>
            </ul>

            <h3>Cel przetwarzania danych</h3>
            <p>
              Dane osobowe podane w formularzu kontaktowym są przetwarzane
              wyłącznie w celu:
            </p>
            <ul>
              <li>
                Odpowiedzi na Twoje zapytanie przesłane za pośrednictwem
                formularza,
              </li>
              <li>Umożliwienia kontaktu zwrotnego drogą e-mailową.</li>
            </ul>

            <h3>Podstawa prawna przetwarzania</h3>
            <p>
              Podstawą prawną przetwarzania Twoich danych jest art. 6 ust. 1
              lit. f) RODO, czyli uzasadniony interes Administratora polegający
              na możliwości udzielenia odpowiedzi na Twoje pytanie oraz
              nawiązania kontaktu.
            </p>

            <h3>Okres przechowywania danych</h3>
            <p>
              Twoje dane osobowe będą przechowywane przez okres niezbędny do
              obsługi zapytania oraz kontaktu zwrotnego, jednak nie dłużej niż
              12 miesięcy od dnia przesłania formularza.
            </p>

            <h3>Odbiorcy danych osobowych</h3>
            <p>
              Dane osobowe nie będą udostępniane podmiotom trzecim, chyba że
              wymagają tego obowiązujące przepisy prawa.
            </p>

            <h3>Zewnętrzni dostawcy usług</h3>
            <p>
              W celu zapewnienia prawidłowego funkcjonowania strony internetowej
              oraz obsługi zapytań z formularza kontaktowego, możemy korzystać z
              usług zewnętrznych dostawców, takich jak:
            </p>
            <ul>
              <li>
                Usługi hostingowe – przechowywanie danych na serwerach dostawcy
                hostingu,
              </li>
              <li>
                Serwer pocztowy – obsługa wiadomości e-mail w celu odpowiedzi na
                zapytania użytkowników,
              </li>
              <li>Inne usługi IT wspomagające działanie strony.</li>
            </ul>
            <p>
              Wszyscy zewnętrzni dostawcy są zobowiązani do przestrzegania
              przepisów RODO i zapewnienia odpowiedniego poziomu ochrony danych.
            </p>

            <h3>Twoje prawa</h3>
            <p>Masz prawo do:</p>
            <ul>
              <li>Dostępu do swoich danych oraz otrzymania ich kopii,</li>
              <li>Sprostowania (poprawiania) swoich danych,</li>
              <li>Usunięcia danych (prawo do bycia zapomnianym),</li>
              <li>Ograniczenia przetwarzania danych,</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych,</li>
              <li>
                Złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (PUODO).
              </li>
            </ul>

            <h3>Dobrowolność podania danych</h3>
            <p>
              Podanie danych osobowych w formularzu kontaktowym jest dobrowolne,
              jednak ich niepodanie może uniemożliwić udzielenie odpowiedzi na
              Twoje zapytanie.
            </p>

            <h3>Pliki cookies</h3>
            <p>
              Strona nie stosuje własnych plików cookies do celów marketingowych
              ani analitycznych. Mogą być używane wyłącznie techniczne pliki
              cookies niezbędne do prawidłowego działania strony oraz niektórych
              funkcji (np. nawigacja, formularz kontaktowy, slider Owl
              Carousel).
            </p>

            <h3>Usługi zewnętrzne i technologie</h3>
            <p>
              Na stronie korzystamy z czcionek Google Fonts, które są ładowane z
              serwerów Google (Google Ireland Limited). Google może gromadzić
              dane techniczne (np. adres IP, dane o przeglądarce) w związku z
              wyświetlaniem czcionek.
            </p>
            <p>
              Więcej informacji na temat przetwarzania danych przez Google
              znajdziesz w ich{" "}
              <a
                href="https://policies.google.com/privacy?hl=pl"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                polityce prywatności
              </a>
              .
            </p>

            <h3>Usługi zewnętrzne – Google Maps</h3>
            <p>
              Na stronie wykorzystujemy usługę Google Maps za pomocą iframe,
              która jest dostarczana przez Google LLC. W związku z tym Google
              może zapisywać pliki cookies oraz zbierać dane użytkowników, takie
              jak adres IP czy dane przeglądarki, w celu zapewnienia
              funkcjonalności mapy oraz statystyk. Korzystanie z Google Maps
              może powodować przesyłanie danych do Google zgodnie z ich polityką
              prywatności. Więcej informacji znajdziesz na stronie:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Polityka prywatności Google
              </a>
              .
            </p>

            <h3>Kontakt w sprawie ochrony danych</h3>
            <p>
              W przypadku pytań dotyczących przetwarzania danych osobowych
              możesz skontaktować się z nami pod adresem e-mail:{" "}
              <a href="mailto:chlopodbhp@gmail.com">chlopodbhp@gmail.com</a>.
            </p>
            <div className={classes.privacy__separator}></div>

            <p>
              Niniejsza polityka prywatności obowiązuje od dnia jej
              opublikowania i może być aktualizowana w przypadku zmian w
              przepisach prawa lub sposobie przetwarzania danych osobowych.
            </p>
          </div>
        </main>
      </Section>
    </>
  );
};

export default PrivacyPage;
