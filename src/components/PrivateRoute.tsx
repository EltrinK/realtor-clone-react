import { useAuthStatus } from "hooks/useAuthStatus";
import { Outlet, Navigate } from "react-router";
import { Spinner } from "./Spinner";

export const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
