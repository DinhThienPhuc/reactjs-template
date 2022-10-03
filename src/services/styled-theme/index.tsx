/* SERVICE: STYLED_THEME
   ========================================================================== */

import { ReactNode } from "react";
import schema from "./schema.json";
import { styledTheme } from "@dinhthienphuc/artemis";

const { ThemesProvider, useTheme } = styledTheme;

interface IProps {
  children: ReactNode;
}

const StyledThemeProvider = ({ children }: IProps) => (
  <ThemesProvider schemas={schema} defaultTheme={"light"}>
    {children}
  </ThemesProvider>
);

export default {
  StyledThemeProvider,
  useTheme,
};
