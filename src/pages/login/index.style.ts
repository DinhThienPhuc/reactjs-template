import { Button, Input } from "components";

import styled from "styled-components";

const Styled = {
  Login: styled.div`
    padding: 0px 30px;
  `,
  Logo: styled.div`
    text-align: center;
    margin: calc(50vw - 64px) 0px 70px 0px;
  `,
  Title: styled.div`
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    color: ${({ theme }) => theme.colors.black["300"]};
    margin-bottom: 10px;
  `,
  Description: styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray["100"]};
    margin-bottom: 30px;
  `,
  Input: styled(Input)`
    margin-bottom: 55px;
  `,
  LoginButton: styled(Button)``,
};

export default Styled;
