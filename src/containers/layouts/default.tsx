/* LAYOUT DEFAULT COMPONENT
   ========================================================================== */

import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";
import Styled from "./default.style";

const Default = () => {
  return (
    <>
      <Navbar />
      <Styled.Main>
        <Outlet />
      </Styled.Main>
      <Footer />
    </>
  );
};

export default Default;
