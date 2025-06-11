import React, { FC } from "react";
import { LuX, LuAlignRight } from "react-icons/lu";
import classes from "./toggleBtn.module.scss";

type ToggleBtnProps = {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ToggleBtn: FC<ToggleBtnProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={classes.btn}
      onClick={onClick}
      aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
    >
      {isOpen ? (
        <LuX aria-hidden="true" />
      ) : (
        <LuAlignRight aria-hidden="true" />
      )}
    </button>
  );
};

export default ToggleBtn;
