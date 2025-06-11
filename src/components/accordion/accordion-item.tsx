"use client";
import React, { createContext, useContext } from "react";

const AccordionItemContext = createContext<string | number | undefined>(
  undefined
);

export const useAccordionItemContext = (): string | number => {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>."
    );
  }
  return ctx;
};

type AccordionItemProps = {
  id: string | number;
  className?: string;
  children: React.ReactNode;
};
const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li
        id={String(id)}
        className={className}
      >
        {children}
      </li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
