/**
 * @description Admin dashboard routes with nested routing for various admin functionalities
 *        - uses lazy loading for performance optimization
 * @access ADMINS ONLY
 */

import { Route } from "react-router-dom";
import { lazy } from "react";

// Admin dashboard wrapper
const AdminDashboard = lazy(() =>
  import("../dashboard/adminDashboard/AdminLayout")
);

// Nested pages
const AdminHome = lazy(() => import("../dashboard/adminDashboard/Home"));
// add other admin pages here

const AdminRoutes = () => (
  <Route path="/admin/dashboard" element={<AdminDashboard />}>
    <Route index element={<AdminHome />} />
  </Route>
);

export default AdminRoutes;
