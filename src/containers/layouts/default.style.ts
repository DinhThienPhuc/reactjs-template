/* CONTAINER STYLE: LAYOUT DEFAULT
   ========================================================================== */

import { DEFAULT_LAYOUT_SIZE } from "./default.utils";
import styled from "styled-components";

const Styled = {
  Main: styled.main`
    width: 100%;
    color: ${({ theme }) => theme.colors.text};
    padding-top: ${15 + DEFAULT_LAYOUT_SIZE.HEADER_HEIGHT}px;
    padding-left: ${DEFAULT_LAYOUT_SIZE.PADDING_HORIZONTAL}px;
    padding-right: ${DEFAULT_LAYOUT_SIZE.PADDING_HORIZONTAL}px;
    padding-bottom: 100px;
  `,
};

export default Styled;
