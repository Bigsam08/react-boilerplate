/**
 * @description: This component restricts access to routes for authenticated users only.
 *               If a user is authenticated, they are redirected to the home page.
 *               Otherwise, they can access the child routes.
 * @returns A route component that guards guest-only routes.
 */

import { Outlet } from "react-router-dom";
import RoleRedirect from "../RoleRedirect";
import useAuthStore from "../../store/authStore";

const GuestGuard = () => {
  const authenticated = useAuthStore((state) => state.user); // fetch if user is authenticated or a guest
  if (authenticated) {
    //send to redirection route for perfect redirection
    return <RoleRedirect />;
  }
  return <Outlet />;
};

export default GuestGuard;
