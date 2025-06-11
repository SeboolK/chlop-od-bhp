import Link from "next/link";
import classes from "./button.module.scss";
import React from "react";

type ButtonProps =
  | {
      link: true;
      href: string;
      outline?: boolean;
      children: React.ReactNode;
      className?: string;
      onClick?: React.MouseEventHandler<HTMLAnchorElement>;
      [x: string]: unknown;
    }
  | {
      link?: false;
      href?: never;
      outline?: boolean;
      children: React.ReactNode;
      className?: string;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      type?: "button" | "submit" | "reset";
      [x: string]: unknown;
    };

const Button = ({
  link,
  outline,
  href,
  type,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  let cssClass = outline ? `${classes.outline} ` : classes.button;
  if (className) {
    cssClass = `${cssClass} ${className}`;
  }
  if (link) {
    return (
      <Link
        href={href}
        className={`${cssClass} ${classes.framer}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${cssClass} ${classes.framer}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
