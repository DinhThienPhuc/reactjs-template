/* LAYOUT DEFAULT COMPONENT STYLES
   ========================================================================== */

import styled from "styled-components";

const Styled = {
  Main: styled.main`
    width: 100%;
    margin-top: 50px;
    min-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
  `,
};

export default Styled;
