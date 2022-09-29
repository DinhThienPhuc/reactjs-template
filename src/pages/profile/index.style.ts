/* PAGE STYLE: PROFILE
   ========================================================================== */

import { DEFAULT_LAYOUT_SIZE } from "containers/layouts/default.utils";
import { Header } from "components";
import styled from "styled-components";

const Styled = {
  Profile: styled.div`
    position: relative;
  `,
  Header: styled(Header)`
    & > .header-wrap {
      background-color: transparent;
    }
  `,
  Paper: styled.div`
    position: absolute;
    top: ${304 - DEFAULT_LAYOUT_SIZE.HEADER_HEIGHT - 15 - 44}px;
    height: fit-content;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.colors.boxShadows["100"]};
    border-radius: 10px;
    padding: 60px 52px;
    z-index: ${DEFAULT_LAYOUT_SIZE.Z_VALUE};
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
    padding: 0px 5px;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  `,
  Icon: styled.div`
    width: 24px;
    height: 24px;
    margin-right: 24px;
    color: ${({ theme }) => theme.colors.blue["200"]};
  `,
  AvatarBackground: styled.div`
    position: absolute;
    left: ${-DEFAULT_LAYOUT_SIZE.PADDING_HORIZONTAL}px;
    top: ${-15 - DEFAULT_LAYOUT_SIZE.HEADER_HEIGHT}px;
    width: 100vw;
    height: 304px;
    background-color: ${({ theme }) => theme.colors.pink["100"]};
    z-index: ${DEFAULT_LAYOUT_SIZE.Z_VALUE - 1};
    padding-top: ${15 + DEFAULT_LAYOUT_SIZE.HEADER_HEIGHT}px;

    & > img {
    }
  `,
  Avatar: styled.div`
    width: 140px;
    height: 140px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default Styled;
