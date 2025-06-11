"use client";
import React, { useRef, useState, useEffect } from "react";
import classes from "./timelineItem.module.scss";
import { ExperienceItem } from "@/lib/types";

const TimelineItem = ({
  item,
  isLast,
  index,
}: {
  item: ExperienceItem;
  isLast: boolean;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;
  const direction = isDesktop
    ? isEven
      ? 80 // z prawej
      : -80 // z lewej
    : 80;

  const contentClass = isDesktop
    ? isEven
      ? `${classes.timelineItem__content} ${classes["timelineItem__content--left"]}`
      : `${classes.timelineItem__content} ${classes["timelineItem__content--right"]}`
    : classes.timelineItem__content;

  // Dodajemy klasę visible, która uruchomi animację w CSS
  const contentClassesWithAnimation = `${contentClass} ${
    inView ? classes.visible : ""
  }`;

  return (
    <div
      ref={ref}
      className={classes.timelineItem}
    >
      <div
        className={`${classes.timelineItem__iconWrapper} ${
          inView ? classes.visible : ""
        }`}
      >
        <div className={classes.timelineItem__icon}>{item.icon}</div>
      </div>

      {!isLast && (
        <div
          className={`${classes.timelineItem__line} ${
            inView ? classes.visible : ""
          }`}
        />
      )}

      <div
        className={contentClassesWithAnimation}
        style={{
          // Przesunięcie na początek animacji - dla efektu wejścia z lewej/prawej
          transform: inView ? "translateX(0)" : `translateX(${direction}px)`,
          opacity: inView ? 1 : 0,
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
      >
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
