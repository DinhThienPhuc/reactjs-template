/* COMPONENT STYLES: HEADER
   ========================================================================== */

import { DEFAULT_LAYOUT_SIZE } from "containers/layouts/default.utils";
import Icons from "assets/icons";
import styled from "styled-components";

const Styled = {
  Header: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${DEFAULT_LAYOUT_SIZE.Z_VALUE};
  `,
  Wrap: styled.div<{ hasLeftIcon: boolean; hasRightIcon: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${DEFAULT_LAYOUT_SIZE.HEADER_HEIGHT}px;
    padding: 30px 24px 10px 24px;
    background-color: ${({ theme }) => theme.colors.body};

    & .header-icon {
      height: 24px;
    }

    & .header-icon__left {
      margin-right: ${({ hasLeftIcon }) => (hasLeftIcon ? "12px" : "0px")};
      width: ${({ hasLeftIcon }) => (hasLeftIcon ? "24px" : "0px")};
    }
    & .header-icon__right {
      margin-left: ${({ hasRightIcon }) => (hasRightIcon ? "12px" : "0px")};
      width: ${({ hasRightIcon }) => (hasRightIcon ? "24px" : "0px")};
    }
  `,
  Title: styled.div`
    position: absolute;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.black["100"]};
    left: 50%;
    transform: translateX(-50%);

    &.header-greeting {
      font-size: 16px;
      line-height: 24px;
    }
  `,
  Menu: styled(Icons.BarChart)`
    transform: rotate(90deg) scaleX(-1);
  `,
};

export default Styled;
