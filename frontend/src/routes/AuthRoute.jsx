/**
 * @description Routes that requires authentication and authorization
 *              - AuthGuard checks if user is authenticated
 *              - RoleGuard checks if user has the right role to access the route
 *
 *
 */

import { Route } from "react-router-dom";
import AuthGuard from "./guards/AuthGuard";
import RoleGuard from "./guards/RoleGuard";

import clientRoutes from "./ClientRoutes";
import AdminRoutes from "./AdminRoutes";

const AuthRoutes = (
  <Route element={<AuthGuard />}>
    <Route element={<RoleGuard allowedRoles="client" />}>{clientRoutes}</Route>
    <Route element={<RoleGuard allowedRoles="admin" />}>{AdminRoutes}</Route>
  </Route>
);

export default AuthRoutes;
