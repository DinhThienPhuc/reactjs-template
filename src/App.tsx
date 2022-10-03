/* APP
   ========================================================================== */

import "assets/styles/reset.css";
import "assets/styles/global.css";
import "services/i18n";

import { BrowserRouter, useRoutes } from "react-router-dom";

import { ErrorBoundary } from "@dinhthienphuc/artemis/src/containers";
import { ThemesProvider } from "services/styled-themes";
import { reload } from "utils/functions";
import routes from "routes";

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
