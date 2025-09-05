/**
 * @desc Redirects users to dashboards based on role.
 * - Client Dashboard
 * - Admin Dashboard
 * - If no user, show homepage
 */

import { Navigate } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("../pages/HomePage"));

const Redirect = () => {
  // fetch user and isCheckingAuth from local storage or context
  const user = null; // replace with actual user fetching logic
  const isCheckingAuth = false; // replace with actual auth checking logic

  if (isCheckingAuth) {
    return; // checking auth loader
  }

  if (!user || !user.role) {
    return <HomePage />;
  }

  // other conditions can be added here

  // Map roles to routes
  const roleRoutes = {
    admin: "/admin/dashboard",
    client: "/client/dashboard",
  };

  return <Navigate to={roleRoutes[user.role]} replace />;
};

export default Redirect;
