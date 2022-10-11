/* BUTTON COMPONENT
   ========================================================================== */

import { IProps, Size, Variant } from "./button.utils";
import { MouseEvent, useCallback } from "react";

import Styled from "./button.style";

const Button = ({
  variant = Variant.Text,
  size = Size.Medium,
  className,
  children,
  onClick,
}: IProps) => {
  const handleClick = useCallback(
    (e: MouseEvent<any, globalThis.MouseEvent>) => {
      onClick?.(e);
    },
    [onClick],
  );

  return (
    <Styled.Container
      className={className}
      variant={variant}
      size={size}
      onClick={handleClick}
    >
      <Styled.Text className="text">{children}</Styled.Text>
    </Styled.Container>
  );
};

export default Button;
