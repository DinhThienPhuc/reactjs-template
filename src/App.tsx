/* APP
   ========================================================================== */

import "assets/styles/reset.css";
import "assets/styles/global.css";
import "services/i18n";

import { BrowserRouter, useRoutes } from "react-router-dom";
import { ErrorBoundary, styledTheme } from "@dinhthienphuc/artemis";

import { reload } from "utils/helpers";
import routes from "routes";

const { ThemesProvider } = styledTheme;

/**
 * Entry point for route component
 * @returns JSX Element represents for route components
 */
const Main = () => {
  const element = useRoutes(routes);
  return element;
};

/**
 * Entry point for App
 * @returns JSX Element represents for app
 */
const App = () => {
  return (
    <ErrorBoundary onReset={reload}>
      <BrowserRouter>
        <ThemesProvider>
          <Main />
        </ThemesProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
