import { RouteObject, useRoutes } from "react-router-dom";
import { PrivateRoute } from "@components/PrivateRoute";

import {
  Home,
  ForgotPassword,
  Offers,
  Profile,
  SignIn,
  SignUp,
  Error404,
  CreateListing,
} from "../pages";

export const dashboardRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  {
    element: <PrivateRoute />,
    children: [
      { path: "/profile", element: <Profile /> },
      { path: "/create-listing", element: <CreateListing /> },
    ],
  },
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
