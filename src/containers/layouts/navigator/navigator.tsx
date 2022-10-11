/* CONTAINER: LAYOUT NAVIGATOR
   ========================================================================== */

import { NavLink } from "react-router-dom";
import { ROUTES } from "routes";
import Styled from "./navigator.style";
import { useLocation } from "react-router-dom";

const Navigator = () => {
  const { pathname } = useLocation();

  return (
    <Styled.Container>
      <Styled.AddButtonWrap>
        <Styled.AddButton />
      </Styled.AddButtonWrap>

      <Styled.Panel>
        <NavLink to={ROUTES.HOME}>
          <Styled.Home
            isActive={pathname === ROUTES.HOME}
            width={24}
            height={24}
          />
        </NavLink>
        <NavLink to={ROUTES.SEARCH}>
          <Styled.Search
            isActive={pathname === ROUTES.SEARCH}
            width={24}
            height={24}
          />
        </NavLink>
      </Styled.Panel>

      <Styled.Panel>
        <NavLink to={ROUTES.SETTING}>
          <Styled.Setting
            isActive={pathname === ROUTES.SETTING}
            width={24}
            height={24}
          />
        </NavLink>
        <NavLink to={ROUTES.PROFILE}>
          <Styled.Profile
            isActive={pathname === ROUTES.PROFILE}
            width={24}
            height={24}
          />
        </NavLink>
      </Styled.Panel>
    </Styled.Container>
  );
};

export default Navigator;
