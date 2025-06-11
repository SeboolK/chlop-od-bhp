// import React from "react";
// import Button from "./button";
// import classes from "./ctaSection.module.scss";
// import Image from "next/image";
// import FadeInOnScroll from "./animation/fadeInOnScroll";

// const CtaSection = () => {
//   return (
//     <div className={classes.cta}>
//       <Image
//         src="/images/hero7.jpg"
//         alt="Tło CTA"
//         fill
//         style={{ objectFit: "cover", zIndex: 0, objectPosition: "left top" }}
//         aria-hidden="true"
//       />
//       <div className="overlay"></div>
//       <FadeInOnScroll>
//         <div className={classes.cta__wrapper}>
//           <h2>Zapraszam do współpracy!</h2>
//           <p>
//             Łączę ekspercką wiedzę z praktycznym podejściem, oferując
//             rozwiązania dopasowane do realnych potrzeb Twojej firmy.
//           </p>
//           <Button
//             link
//             href="/kontakt"
//             outline
//           >
//             Skontaktuj się ze mną
//           </Button>
//         </div>
//       </FadeInOnScroll>
//     </div>
//   );
// };

// export default CtaSection;

import React from "react";
import Button from "./button";
import classes from "./ctaSection.module.scss";
import Image from "next/image";
import Section from "./section";
import bgImage from "@/assets/ctaSection.webp";

const CtaSection = () => {
  return (
    <Section>
      <div className={classes.cta}>
        <div className={classes.cta__bg}>
          <Image
            src={bgImage}
            alt="Tło CTA"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "right top",
              zIndex: 0,
            }}
            sizes="100vw"
            aria-hidden="true"
            priority={false}
          />
        </div>

        <div className={classes.cta__wrapper}>
          <h2>Zapraszam do współpracy!</h2>
          <p>
            Łączę ekspercką wiedzę z praktycznym podejściem, oferując
            rozwiązania dopasowane do realnych potrzeb Twojej firmy.
          </p>
          <Button
            link
            href="/kontakt"
          >
            Skontaktuj się ze mną
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;
