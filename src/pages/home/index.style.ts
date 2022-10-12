/* PAGE STYLE: HOME
   ========================================================================== */

import { Icons } from "components";
import styled from "styled-components";

const Styled = {
  Home: styled.div``,
  MainTitle: styled.div`
    font-weight: 500;
    font-size: 26px;
    line-height: 39px;
    color: ${({ theme }) => theme.colors.black["100"]};
  `,
  SearchBox: styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
  `,
  Scan: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.gray["100"]};
    margin-left: 18px;
  `,
  Minus: styled(Icons.Minus)`
    position: absolute;
    width: 18px;
  `,
  Title: styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin: 32px 0px 6px 0px;
    color: ${({ theme }) => theme.colors.black["100"]};
  `,
};

export default Styled;
