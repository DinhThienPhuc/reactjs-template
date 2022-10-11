/* APP
   ========================================================================== */

import "assets/styles/reset.css";
import "assets/styles/global.css";
import "services/i18n";

import { BrowserRouter, useRoutes } from "react-router-dom";

import { ErrorBoundary } from "containers";
import { StyledThemeProvider } from "services/styled-theme";
import { reload } from "utils/helpers";
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
        <StyledThemeProvider>
          <Main />
        </StyledThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
