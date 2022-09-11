/* LAYOUT NAVIGATOR COMPONENT STYLES
   ========================================================================== */

import { DEFAULT_LAYOUT_SIZE } from "utils/constants";
import Icons from "assets/icons";
import styled from "styled-components";

const applyNavigatorIconStyle = (props: any) =>
  props?.isActive
    ? props?.theme.colors.black["100"]
    : props?.theme.colors.gray["100"];

const Styled = {
  Container: styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${DEFAULT_LAYOUT_SIZE.Z_VALUE};
    height: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_HEIGHT}px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.colors.boxShadows["200"]};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  AddButtonWrap: styled.div`
    width: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON_WRAP}px;
    height: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON_WRAP / 2}px;
    border-bottom-left-radius: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON_WRAP}px;
    border-bottom-right-radius: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON_WRAP}px;
    background: ${({ theme }) => theme.colors.body};
    box-shadow: inset ${({ theme }) => theme.colors.boxShadows["200"]};
    position: fixed;
    left: calc(50% - ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON_WRAP / 2}px);
    bottom: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_HEIGHT -
    DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON_WRAP / 2}px;
    right: 0;
  `,
  AddButton: styled.div`
    width: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON}px;
    height: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON}px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.green};
    position: fixed;
    left: calc(50% - ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON / 2}px);
    bottom: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_HEIGHT -
    DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON / 2}px;
    right: 0;

    &::before {
      position: absolute;
      content: "";
      top: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON / 2 - 2}px;
      left: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON / 2 - 8}px;
      width: 16px;
      height: 4px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colors.white};
    }

    &::after {
      position: absolute;
      content: "";
      top: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON / 2 - 8}px;
      left: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON / 2 - 2}px;
      width: 4px;
      height: 16px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  `,
  Panel: styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;

    &:first-of-type {
      padding-right: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON / 2}px;
    }

    &:last-of-type {
      padding-left: ${DEFAULT_LAYOUT_SIZE.NAVIGATOR_MAIN_BUTTON / 2}px;
    }
  `,
  Home: styled(Icons.Home)<{ isActive?: boolean }>`
    color: ${applyNavigatorIconStyle};
  `,
  Search: styled(Icons.Search)<{ isActive?: boolean }>`
    color: ${applyNavigatorIconStyle};
  `,
  Setting: styled(Icons.Setting)<{ isActive?: boolean }>`
    color: ${applyNavigatorIconStyle};
  `,
  Profile: styled(Icons.User)<{ isActive?: boolean }>`
    color: ${applyNavigatorIconStyle};
  `,
};

export default Styled;
