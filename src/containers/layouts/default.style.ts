/* LAYOUT DEFAULT COMPONENT STYLES
   ========================================================================== */

import { DEFAULT_LAYOUT_SIZE } from "utils/constants";
import styled from "styled-components";

const Styled = {
  Main: styled.main`
    width: 100%;
    color: ${({ theme }) => theme.colors.text};
    padding: ${15 + DEFAULT_LAYOUT_SIZE.HEADER_HEIGHT}px 24px 100px 24px;
  `,
};

export default Styled;
