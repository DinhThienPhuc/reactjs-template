/* LAYOUT NAVBAR COMPONENT
   ========================================================================== */

import { useCallback, useMemo } from "react";

import { NavLink } from "react-router-dom";
import Select from "components/select/select";
import Styled from "./navbar.style";
import useSessionStorage from "hooks/useSessionStorage";
import { useTheme } from "services/styled-themes";
import { useTranslation } from "services/i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [refreshToken, setRefreshToken] = useSessionStorage<string | null>(
    "refresh-token",
    null
  );

  const activateLink = useCallback((isLastItem?: boolean) => {
    return ({ isActive }: { isActive: boolean }) => ({
      marginRight: isLastItem ? 0 : 20,
      color: isActive ? "green" : "",
    });
  }, []);

  const languageOptions = useMemo(() => {
    return [
      { label: "English", value: "en" },
      { label: "France", value: "fr" },
      { label: "Vi", value: "vi" },
    ];
  }, []);

  const handleChange = useCallback(
    async (e) => {
      try {
        await i18n.changeLanguage(e.target.value);
      } catch (error) {
        console.log(error);
      }
    },
    [i18n]
  );

  const handleThemeSwitch = useCallback(async () => {
    try {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    } catch (error) {
      console.log(error);
    }
  }, [setTheme, theme]);

  const handleLogout = useCallback(async () => {
    setRefreshToken(null);
  }, [setRefreshToken]);

  const renderThemeSwitcher = useMemo(() => {
    const icon = theme === "dark" ? <span>☀️</span> : <span>🌙</span>;

    return (
      <Styled.ThemeSwitcher onClick={handleThemeSwitch}>
        {icon}
      </Styled.ThemeSwitcher>
    );
  }, [handleThemeSwitch, theme]);

  const renderUserMenu = useMemo(() => {
    if (!refreshToken) {
      return null;
    }

    return <button onClick={handleLogout}>Logout</button>;
  }, [handleLogout, refreshToken]);

  return (
    <Styled.Container>
      <div>
        <NavLink to={"/"} style={activateLink()}>
          {t("navbar.homepage")}
        </NavLink>
        <NavLink to={"/posts"} style={activateLink()}>
          {t("navbar.posts")}
        </NavLink>
        <NavLink to={"/about"} style={activateLink(true)}>
          {t("navbar.about_us")}
        </NavLink>
      </div>
      <Styled.Right>
        <Select options={languageOptions} onChange={handleChange} />
        {renderThemeSwitcher}
        {renderUserMenu}
      </Styled.Right>
    </Styled.Container>
  );
};

export default Navbar;
