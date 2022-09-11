/* PAGE STYLE: SETTING
   ========================================================================== */

import styled from "styled-components";

const Styled = {
  Setting: styled.div``,
  Paper: styled.div`
    height: 460px;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.colors.boxShadows["100"]};
    border-radius: 10px;
  `,
};

export default Styled;
