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
    padding: 60px 52px;
  `,
  Item: styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray["100"]};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    height: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border["100"]};
    margin-bottom: 50px;
    padding: 0px 5px;
  `,
  Icon: styled.div`
    width: 24px;
    height: 24px;
    margin-right: 24px;
    color: ${({ theme }) => theme.colors.blue["200"]};
  `,
};

export default Styled;
