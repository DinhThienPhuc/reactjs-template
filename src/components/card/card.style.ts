/* COMPONENT STYLE: CARD
   ========================================================================== */

import styled from "styled-components";

const Styled = {
  Card: styled.div`
    display: flex;
    align-items: center;
    height: 88px;
    background: #d6f7f7;
    border-radius: 20px;
    margin: 10px 0px;
    padding: 0px 18px;

    &:nth-child(odd) {
      background: ${({ theme }) => theme.colors.blue["100"]};
    }

    &:nth-child(even) {
      background: ${({ theme }) => theme.colors.pink["100"]};
    }

    .card-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .card-title {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: ${({ theme }) => theme.colors.black["200"]};
    }

    .card-sub-title {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.gray["200"]};
    }
  `,
  Texts: styled.div``,
};

export default Styled;
