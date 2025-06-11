"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./hero.module.scss";
import Button from "../UI/button";
import { slides } from "@/lib/data";
import { Slide } from "@/lib/types";
import Image from "next/image";

export default function Hero() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      autoHeight={true}
      className={styles.swiper}
    >
      {slides.map((slide: Slide, index: number) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.swiper__slide}>
            <Image
              src={slide.image}
              alt="Tło slidera"
              fill
              style={{
                objectFit: "cover",
                zIndex: 0,
                objectPosition: `${slide.position}`,
              }}
              aria-hidden="true"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
            />
            <div className="overlay"></div>
            <div className={styles.swiper__text}>
              <h2>{slide.title}</h2>
              <Button
                link
                href="/uslugi"
                outline
              >
                Poznaj ofertę
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import styles from "./hero.module.scss";
// import Button from "../UI/button";
// import { slides } from "@/lib/data";
// import { Slide } from "@/lib/types";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <Swiper
//       modules={[Autoplay, Pagination]}
//       loop={true}
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 7000, disableOnInteraction: false }}
//       autoHeight={true}
//       className={styles.swiper}
//     >
//       {slides.map((slide: Slide, index: number) => (
//         <SwiperSlide key={slide.id}>
//           <div className={styles.swiper__slide}>
//             <Image
//               src={slide.image}
//               alt="Tło slidera"
//               style={{
//                 objectFit: "cover",
//                 zIndex: 0,
//                 objectPosition: `${slide.position}`,
//               }}
//               aria-hidden="true"
//               fill
//               sizes="(max-width: 768px) 100vw, 100vw"
//               priority={index === 0}
//             />
//             <div className={styles.swiper__text}>
//               <h2>{slide.title}</h2>
//               <Button
//                 link
//                 href="/uslugi"
//               >
//                 Poznaj ofertę
//               </Button>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
