/* BUTTON COMPONENT STYLES
   ========================================================================== */

import { Size, Variant } from "./button.utils";
import styled, { css } from "styled-components";

const sizeModify = (props: any) => {
  if (props?.size === Size.Small) {
    return css`
      height: 24px;
      padding: 0 16px;
      border-radius: 12px;
    `;
  }
  if (props?.size === Size.Medium) {
    return css`
      height: 36px;
      padding: 0 20px;
      border-radius: 18px;
    `;
  }
  return css`
    height: 48px;
    padding: 0 24px;
    border-radius: 24px;
  `;
};

const variantModify = (props: any) => {
  if (props?.variant === Variant.Contained) {
    return css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.green["300"]};
      border: 1px solid ${({ theme }) => theme.colors.green["300"]};
    `;
  }
  if (props?.variant === Variant.Outlined) {
    return css`
      color: ${({ theme }) => theme.colors.black["100"]};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.green["300"]};
    `;
  }
  return css`
    color: ${({ theme }) => theme.colors.black["100"]};
    background-color: transparent;
    border: 1px solid transparent;
  `;
};

const Styled = {
  Container: styled.button<{ size: Size; variant: Variant }>`
    transition: all 0.2s ease;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: none;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    ${sizeModify};
    ${variantModify};

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
    }
  `,
  Text: styled.span``,
};

export default Styled;
