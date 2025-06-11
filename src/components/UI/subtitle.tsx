import React from "react";
import classes from "./subtitle.module.scss";
import { ReactNode } from "react";

type SubtitleProps = {
  children: ReactNode;
  className?: string;
  title: string;
  bigHeader?: boolean;
};

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  className,
  title,
  bigHeader,
}) => {
  return (
    <div
      className={
        className ? `${classes.subtitle} ${className}` : classes.subtitle
      }
    >
      <div>{title}</div>
      {bigHeader ? (
        <h1 className={classes.subtitle__text}>{children}</h1>
      ) : (
        <h2 className={classes.subtitle__text}>{children}</h2>
      )}
    </div>
  );
};

export default Subtitle;
