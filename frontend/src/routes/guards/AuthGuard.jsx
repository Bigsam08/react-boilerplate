/**
 * @description This file contains the AuthGuard component which is used to protect routes
 * by checking if the user is authenticated and has the required role.
 * If not, it redirects them to the login page or an unauthorized page.
 */

import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  // TODO: fetch user from the store
  // TODO: fetch isCheckingAuth from the store and display a loader
  const isCheckingAuth = true; // Replace with actual state
  const user = null; // Replace with actual user state
  
  if (isCheckingAuth) {
    return "loading component"; // Show a loading state while checking auth
  }
  // if user show the next else take user back to login page
  return user ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default AuthGuard;
