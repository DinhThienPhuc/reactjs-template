/* SELECT COMPONENT UTILS: Interfaces, Types, Constants, Functions, etc
   ========================================================================== */

import { ChangeEventHandler, ReactNode, SelectHTMLAttributes } from "react";

/* Interfaces & Types
   ========================================================================== */
export interface ISelectOption {
  value: string;
  label: ReactNode | string;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[];
  label?: ReactNode | string;
  onChange: ChangeEventHandler;
}
