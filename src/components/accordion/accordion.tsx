"use client";
import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  ReactNode,
  FC,
} from "react";
import AccordionItem from "./accordion-item";
import AccordionTitle from "./accordion-title";
import AccordionContent from "./accordion-content";

interface AccordionContextType {
  openItemId: string | null;
  toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);
export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>"
    );
  }
  return ctx;
};

type AccordionProps = {
  children: ReactNode;
  className?: string;
};
const Accordion: FC<AccordionProps> & {
  Item: typeof AccordionItem;
  Title: typeof AccordionTitle;
  Content: typeof AccordionContent;
} = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#")) {
      const idFromHash = decodeURIComponent(hash.slice(1));
      setOpenItemId(idFromHash);

      setTimeout(() => {
        const el = document.getElementById(idFromHash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const toggleItem = (id: string) => {
    // setOpenItemId((prevId) => (prevId === id ? null : id));
    const newId = openItemId === id ? null : id;
    setOpenItemId(newId);
    if (newId) {
      window.history.replaceState(null, "", `#${newId}`);
    } else {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  const contextValue: AccordionContextType = {
    openItemId,
    toggleItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};
Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
