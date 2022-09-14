/* COMPONENT STYLE: INPUT
   ========================================================================== */

import { DEFAULT_LAYOUT_SIZE } from "containers/layouts/default.utils";
import styled from "styled-components";

const Styled = {
  Input: styled.div<{ hasLeftIcon: boolean; hasRightIcon: boolean }>`
    position: relative;
    width: 100%;
    height: ${Math.min(DEFAULT_LAYOUT_SIZE.HEADER_HEIGHT, 52)}px;
    background: rgba(205, 205, 205, 0.25);
    border-radius: 14px;
    overflow: hidden;

    & .input-box {
      position: absolute;
      outline: none;
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      padding-left: ${({ hasLeftIcon }) => (hasLeftIcon ? "56px" : "24px")};
      padding-right: ${({ hasRightIcon }) => (hasRightIcon ? "56px" : "24px")};
    }

    & .input-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.colors.gray["100"]};
      width: 24px;
      height: 24px;
    }

    & .input-icon__left {
      left: 24px;
    }

    & .input-icon__right {
      right: 24px;
    }
  `,
};

export default Styled;
