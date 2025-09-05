/**
 * @description Client protected routes
 * @access client only
 */

import { Route } from "react-router-dom";
import { lazy } from "react";

// Dashboard wrapper
const DashboardPage = lazy(() =>
  import("../dashboard/clientDashboard/ClientLayout")
);

// Nested pages
const Home = lazy(() => import("../dashboard/clientDashboard/Home"));
const Profile = lazy(() => import("../dashboard/clientDashboard/Profile"));

const ClientRoutes = (
  <Route path="/client/dashboard" element={<DashboardPage />}>
    <Route index element={<Home />} />
    <Route path="profile" element={<Profile />} />
  </Route>
);

export default ClientRoutes;
