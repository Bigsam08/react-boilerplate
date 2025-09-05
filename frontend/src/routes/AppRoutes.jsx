/**
 * @description all app routes
 *              - public routes
 *              - guest routes
 *              - auth routes
 *              - lazy loaded with suspense fallback
 *              - wrapped in routes component
 *
 */
import { Routes } from "react-router-dom";
import { Suspense } from "react";
import MainLoader from "../components/common/MainLoader";

import PublicRoutes from "./PublicRoutes";
import GuestRoutes from "./GuestRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRoutes = () => (
  <Suspense fallback={<MainLoader />}>
    <Routes>
      {PublicRoutes}
      {GuestRoutes}
      {AuthRoutes}
    </Routes>
  </Suspense>
);

export default AppRoutes;
