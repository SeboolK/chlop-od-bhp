import React, { useEffect } from "react";
import { useAccordionContext } from "./accordion";
import { useAccordionItemContext } from "./accordion-item";
import { FaPlus, FaMinus } from "react-icons/fa6";

type AccordionTitleProps = {
  className?: string;
  children: React.ReactNode;
};

const AccordionTitle: React.FC<AccordionTitleProps> = ({
  className,
  children,
}) => {
  const { toggleItem, openItemId } = useAccordionContext();
  const id = useAccordionItemContext();
  const isOpen = openItemId === id;
  useEffect(() => {
    if (isOpen) {
      window.location.hash = `${id}`;
    }
  }, [isOpen, id]);
  return (
    <h3
      className={className ? className : undefined}
      onClick={() => toggleItem(String(id))}
    >
      <span>{children}</span>
      <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
    </h3>
  );
};

export default AccordionTitle;
