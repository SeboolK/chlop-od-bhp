import {
  NavItem,
  Slide,
  HomeService,
  ExperienceItem,
  WhyMeItem,
  AccordionServicesItem,
  StepsItem,
} from "./types";
import {
  FaPenClip,
  FaFolderOpen,
  FaEye,
  FaChartLine,
  FaHelmetSafety,
  FaScaleBalanced,
  FaGraduationCap,
  FaPersonFallingBurst,
  FaEarthAmericas,
} from "react-icons/fa6";
import { LuLightbulb, LuMessageCircle, LuScale } from "react-icons/lu";
import creativeImg from "@/assets/law.webp";
import proffesionalImg from "@/assets/bg.webp";
import trustImg from "@/assets/trust.webp";
import creative2Img from "@/assets/law2.webp";
import responsibleImg from "@/assets/responsibility.webp";
import aspectImg from "@/assets/aspect.webp";

export const mainNav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "O firmie", href: "/o-firmie" },
  { name: "Usługi", href: "/uslugi" },
  { name: "Kontakt", href: "/kontakt" },
];

export const slides: Slide[] = [
  {
    id: 1,
    title: (
      <>
        Kompleksowa obsługa prawna <span className="">firm</span>{" "}
        w&nbsp;zakresie BHP i&nbsp;Prawa Pracy
      </>
    ),
    image: trustImg,
    position: "center",
    icon: <LuScale />,
  },
  {
    id: 2,
    title: (
      <>
        <span className="">Indywidualne</span> podejście do zgłaszanych
        zagadnień
      </>
    ),
    image: aspectImg,
    position: "center",
    icon: <LuMessageCircle />,
  },
  {
    id: 3,
    title: (
      <>
        Nieszablonowe rozwiązywanie spraw w&nbsp;zakresie{" "}
        <span className="">BHP i&nbsp;Prawa Pracy</span>
      </>
    ),

    image: creativeImg,
    position: "top right",
    icon: <LuLightbulb />,
  },
];

export const homeServices: HomeService[] = [
  {
    href: "/uslugi#audyty",
    icon: <FaPenClip />,
    title: <>Audyty prawa pracy i&nbsp;BHP</>,
    description:
      "Wykonuję szczegółowe audyty BHP oraz zgodności z przepisami prawa pracy dla firm i instytucji.",
  },
  {
    href: "/uslugi#outsourcing",
    icon: <FaFolderOpen />,
    title: <>Outsourcing BHP i&nbsp;p.poż</>,
    description:
      "Zapewniam kompleksową obsługę w zakresie BHP i ochrony przeciwpożarowej w formie outsourcingu.",
  },
  {
    href: "/uslugi#nadzor-bhp",
    icon: <FaEye />,
    title: <>Nadzór BHP na budowach</>,
    description:
      "Oferuję bieżący nadzór BHP na placach budowy, dbając o bezpieczeństwo i zgodność z przepisami.",
  },
  {
    href: "/uslugi#szkolenia",
    icon: <FaChartLine />,
    title: <>Szkolenia z&nbsp;BHP i&nbsp;prawa pracy</>,
    description:
      "Prowadzę praktyczne szkolenia z zakresu BHP oraz aktualnych przepisów prawa pracy.",
  },
];

export const whyBHP: StepsItem[] = [
  {
    number: "01",
    title: "Bezpieczeństwo pracowników",
    description: "Zminimalizowanie ryzyka wypadków i chorób zawodowych",
  },
  {
    number: "02",
    title: "Zwiększona produktywność",
    description:
      "Zdrowie i bezpieczństwo pracowników przekłada się na wyższą efektywność",
  },
  {
    number: "03",
    title: "Poprawa wizerunku firmy",
    description: "Dbanie o BHP świadczy o profesjonalizmie i odpowiedzialności",
  },
];

export const collaborationSteps: StepsItem[] = [
  {
    number: "01",
    title: "Audyt i analiza potrzeb",
    description:
      "Rozpoczynam od rozpoznania warunków pracy w Twojej firmie. Przeprowadzam audyt BHP oraz analizę zagrożeń, by dopasować działania do realnych potrzeb",
  },
  {
    number: "02",
    title: "Działania i wdrożenia",
    description:
      "Wprowadzam rozwiązania zgodne z przepisami i dobrą praktyką. Szkolenia, dokumentacja, instrukcje i doradztwo – wszystko, by zapewnić bezpieczeństwo i zgodność z prawem",
  },
  {
    number: "03",
    title: "Opieka i wsparcie",
    description:
      "Dbam o bezpieczeństwo przez cały czas trwania współpracy. Regularnie aktualizuję dokumentację, przeprowadzam kontrole i odpowiadam na bieżące pytania",
  },
];

export const experience: ExperienceItem[] = [
  {
    description:
      "Wieloletni inspektor pracy w Państwowej Inspekcji Pracy oddział w Rzeszowie",
    icon: <FaHelmetSafety />,
  },
  {
    description:
      "Audytor w zakresie technicznego bezpieczeństwa pracy oraz prawnej ochrony prawa pracy",
    icon: <FaScaleBalanced />,
  },
  {
    description:
      "Praktyk, wykładowca w zakresie prawa pracy i przepisów bhp w Ośrodku Szkoleniowym PIP we Wrocławiu oraz na uczelni wyższej",
    icon: <FaGraduationCap />,
  },
  {
    description:
      "Przez 15 lat prowadził czynności służbowe w zakresie badania przyczyn i okoliczności zdarzeń wypadkowych przy pracy w zakładach i podmiotach działających na rynku pracy",
    icon: <FaPersonFallingBurst />,
  },
  {
    description:
      "Doświadczony praktyk w zakresie prowadzenia czynności kontrolnych z prawa pracy i technicznego bezpieczeństwa pracy: maszyny, urządzenia dozorowe, place budów, obiekty infrastruktury drogowej (drogi, autostrady), obiekty przemysłowe (fabryki, hale magazynowe), budowy wielkokubaturowe i liniowe.",
    icon: <FaEye />,
  },
  {
    description:
      "Posiada duże doświadczenie w prowadzeniu kontroli ustalających przyczyny i okoliczności wypadków w odniesieniu do obowiązujących przepisów bhp i prawa pracy w tym legalności zatrudnienia obywateli polskich i obcokrajowców.",
    icon: <FaEarthAmericas />,
  },
];

export const whyMe: WhyMeItem[] = [
  {
    title: "Profesjonalizm",
    description: "Ponad 15 lat doświadczenia i znajomości trendów w branży",
    image: proffesionalImg,
  },
  {
    title: "Zaufanie",
    description: "Relacje z klientami oparte na uczciwości i transparentności",
    image: trustImg,
  },
  {
    title: "Odpowiedzialność",
    description:
      "Każdy projekt realizowany z zaangażowaniem i dbałością o detale",
    image: responsibleImg,
  },
  {
    title: "Kreatywność",
    description:
      "Indywidualne podejście i świeże pomysły dopasowane do potrzeb klienta",
    image: creative2Img,
  },
];

export const servicesData: AccordionServicesItem[] = [
  {
    id: "wsparcie-zakladu",
    title: "Wsparcie w organizacji zakładu pracy",
    list: [
      "Pełnienie obowiązków służby BHP w przedsiębiorstwach zgodnie z Kodeksem Pracy w ramach stałych umów",
      "Ocena ryzyka zawodowego",
      "Opracowanie instrukcji BHP",
      "Obsługa firm w zakresie BHP i p. poż. w ramach umów stałych, jak i jednorazowych zleceń",
    ],
  },
  {
    id: "audyty",
    title: "Audyty",
    list: [
      "Prowadzenie audytów wypadkowych",
      "Prowadzenie audytów zarówno w kwestiach BHP oraz prawa pracy",
    ],
  },
  {
    id: "nadzor-bhp",
    title: "Nadzór BHP",
    list: ["Nadzór BHP na budowach", "Nadzór BHP w zakładach pracy"],
  },
  {
    id: "szkolenia",
    title: "Szkolenia",
    list: [
      "Szkolenia BHP dla pracowników, kadry kierowniczej, pracodawców zgodnie z obowiązującymi przepisami prawa pracy (wstępne, okresowe)",
      "Szkolenia świadomościowe (dobrane tematycznie do profilu firmy) z zakresu BHP, prawa pracy, zatrudniania cudzoziemców na terytorium RP",
    ],
  },
  {
    id: "procesy-wsparcia",
    title: "Procesy wsparcia",
    list: [
      "Wsparcie i usprawnianie procesów i procedur obowiązujących w firmie w zakresie bezpieczeństwa i higieny pracy",
      "Pomoc w zawiłych kwestiach z zakresu prawa pracy oraz procedur zatrudniania cudzoziemców na terytorium RP",
    ],
  },
  {
    id: "postepowania-przy-wypadku",
    title: "Działania/postępowania przy wypadku",
    list: [
      "Udział w ustalaniu okoliczności i przyczyn wypadków przy pracy",
      "Przygotowanie i reprezentacja Klientów przed organami kontroli tj. Państwowa Inspekcja Pracy, Państwowa Inspekcja Sanitarna czy Nadzór Budowlany",
    ],
  },
  {
    id: "outsourcing",
    title: "Outsourcing BHP i p. poż.",
    list: [
      "Obsługa firm w zakresie BHP i p. poż. w ramach umów stałych",
      "Obsługa firm w zakresie BHP i p. poż. w ramach jednorazowych zleceń",
    ],
  },
];
