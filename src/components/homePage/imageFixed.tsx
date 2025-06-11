// import React from "react";
// import classes from "./imageFixed.module.scss";
// import Image from "next/image";
// import FadeInOnScroll from "../UI/animation/fadeInOnScroll";

// const ImageFixed: React.FC = () => {
//   return (
//     <div className={classes.imageFixed}>
//       <Image
//         src="/images/hero4.jpg"
//         alt="Kobieta i mężczyzna w kaskach BHP stojący w hali produkcyjnej"
//         fill
//         style={{ objectFit: "cover", zIndex: 0, objectPosition: "center top" }}
//         aria-hidden="true"
//       />
//       <div className="overlay"></div>

//       <FadeInOnScroll>
//         <div className={classes.imageFixed__wrapper}>
//           <h2 className={classes.imageFixed__title}>
//             Każdy ma prawo do bezpiecznych i&nbsp;higienicznych warunków pracy
//           </h2>
//           <p>Art.66. Konstytucji RP</p>
//         </div>
//       </FadeInOnScroll>
//     </div>
//   );
// };

// export default ImageFixed;

import React from "react";
import classes from "./imageFixed.module.scss";
import Image from "next/image";
import bgImage from "@/assets/bhp.webp";

const ImageFixed: React.FC = () => {
  return (
    <div className={classes.imageFixed}>
      <div className={classes.imageFixed__bg}>
        <Image
          src={bgImage}
          alt="Pracownicy firmy BHP"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "left top",
          }}
          sizes="100vw"
          aria-hidden="true"
          priority={false}
        />
      </div>

      <div className={classes.imageFixed__wrapper}>
        <h2 className={classes.imageFixed__title}>
          Każdy ma prawo do bezpiecznych i&nbsp;higienicznych warunków pracy
        </h2>
        <p>Art.66. Konstytucji RP</p>
      </div>
    </div>
  );
};

export default ImageFixed;
