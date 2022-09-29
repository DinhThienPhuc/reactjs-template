/* LAYOUT DEFAULT COMPONENT
   ========================================================================== */

import Navigator from "./navigator/navigator";
import { Outlet } from "react-router-dom";
import Styled from "./default.style";

const Default = () => {
  return (
    <>
      <Styled.Main>
        <Outlet />
      </Styled.Main>
      <Navigator />
    </>
  );
};

export default Default;
