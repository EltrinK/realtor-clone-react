import { RouteObject, useRoutes } from "react-router-dom";

import {
  Home,
  ForgotPassword,
  Offers,
  Profile,
  SignIn,
  SignUp,
  Error404,
} from "../pages";

export const dashboardRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/offers", element: <Offers /> },
  { path: "*", element: <Error404 /> },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
