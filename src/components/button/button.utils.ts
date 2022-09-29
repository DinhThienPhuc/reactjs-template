/* BUTTON COMPONENT UTILS: Interfaces, Types, Constants, Functions, etc
   ========================================================================== */

import { ButtonHTMLAttributes, MouseEventHandler } from "react";

/* Interfaces & Types
   ========================================================================== */

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum Variant {
  Outlined = "outlined",
  Contained = "contained",
  Text = "text",
}

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/* Constants
   ========================================================================== */

/* Functions
      ========================================================================== */
