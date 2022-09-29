/* SWITCH COMPONENT STYLES
   ========================================================================== */

import styled from "styled-components";

const getBackgroundColor = (props: any) => {
  if (props?.isOn) {
    return props?.theme.colors.blue;
  }
  return props?.theme.colors.gray;
};

const Styled = {
  Container: styled.div<{ isOn: boolean }>`
    transition: all 200ms ease-in-out;
    width: 42px;
    height: 20px;
    border-radius: 10px;
    padding: 2px;
    background-color: ${getBackgroundColor};
  `,
  Circle: styled.div<{ isOn: boolean }>`
    transition: all 200ms ease-in-out;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.texts.white};
    transform: ${({ isOn }) => (isOn ? "translateX(22px)" : "none")};
  `,
};

export default Styled;
