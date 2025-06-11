"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import classes from "./advantage.module.scss";

// Typy propsów
interface AdvantageProps {
  targetNumber: number;
  text: string;
  suffix?: string;
}

const Advantage: React.FC<AdvantageProps> = ({
  targetNumber,
  text,
  suffix = "+",
}) => {
  const [current, setCurrent] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const getStep = (target: number): number => {
    if (target <= 50) return 1;
    if (target <= 200) return 10;
    return 100;
  };

  const animate = useCallback(() => {
    const step = getStep(targetNumber);
    let value = 0;

    const interval = setInterval(() => {
      value += step;
      if (value >= targetNumber) {
        value = targetNumber;
        clearInterval(interval);
      }
      setCurrent(value);
    }, 60);
  }, [targetNumber]);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current || hasAnimated) return;

      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 100 && rect.bottom > 0;

      if (inView) {
        setHasAnimated(true);
        animate();
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [animate, hasAnimated]);

  return (
    <div
      className={classes.advantage}
      ref={ref}
    >
      <p className={classes.advantage__number}>
        {current}
        {suffix}
      </p>
      <p className={classes.advantage__text}>{text}</p>
    </div>
  );
};

export default Advantage;
