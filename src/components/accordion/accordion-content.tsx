"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { useAccordionContext } from "./accordion";
import { useAccordionItemContext } from "./accordion-item";
import classes from "./accordion-content.module.scss";

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
}) => {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();
  const contentRef = useRef<HTMLDivElement>(null);

  const isOpen = openItemId === id;

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + "px";
    } else {
      el.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      className={`${className ?? ""} ${isOpen ? classes.open : classes.close}`}
    >
      <div className={classes.inner}>{children}</div>
    </div>
  );
};

export default AccordionContent;
