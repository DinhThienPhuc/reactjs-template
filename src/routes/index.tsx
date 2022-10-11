/* ROUTES ENTRY
   ========================================================================== */

import { AuthRoute, LayoutDefault, Loading } from "containers";
import { RouteObject } from "react-router-dom";
import loadable from "@loadable/component";

/**
 * Lazy load page components. Fallback to <Loading /> when in loading phase
 */
const Home = loadable(() => import("pages/home"), {
  fallback: <Loading />,
});
const Search = loadable(() => import("pages/search"), {
  fallback: <Loading />,
});
const Setting = loadable(() => import("pages/setting"), {
  fallback: <Loading />,
});
const Profile = loadable(() => import("pages/profile"), {
  fallback: <Loading />,
});
const Login = loadable(() => import("pages/login"), {
  fallback: <Loading />,
});
const NotFound = loadable(() => import("pages/not-found"), {
  fallback: <Loading />,
});

export enum ROUTES {
  HOME = "/",
  NOT_FOUND = "*",
  LOGIN = "/login",
  SEARCH = "/search",
  SETTING = "/setting",
  PROFILE = "/profile",
}

/**
 * Use <AuthRoute /> to protect authenticate pages
 */
const routes: RouteObject[] = [
  {
    path: ROUTES.LOGIN,
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
  {
    path: ROUTES.HOME,
    element: (
      <AuthRoute>
        <LayoutDefault />
      </AuthRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.NOT_FOUND, element: <NotFound /> },
      { path: ROUTES.SEARCH, element: <Search /> },
      { path: ROUTES.SETTING, element: <Setting /> },
      { path: ROUTES.PROFILE, element: <Profile /> },
      { path: ROUTES.NOT_FOUND, element: <NotFound /> },
    ],
  },
];

export default routes;
