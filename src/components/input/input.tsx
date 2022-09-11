/* COMPONENT: INPUT
   ========================================================================== */

import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";

import Styled from "./input.style";
import cx from "classnames";

interface IProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = ({
  className,
  value,
  onChange,
  onFocus,
  placeholder = "",
  leftIcon,
  rightIcon,
}: IProps) => {
  return (
    <Styled.Input
      className={cx("input", className)}
      hasLeftIcon={!!leftIcon}
      hasRightIcon={!!rightIcon}
    >
      <div className={cx("input-icon", "input-icon__left")}>{leftIcon}</div>
      <input
        className={cx("input-box")}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
      />
      <div className={cx("input-icon", "input-icon__right")}>{rightIcon}</div>
    </Styled.Input>
  );
};

export default Input;
