/**
 * @description Routes not accessible to authenticated users
 */

import { Route } from "react-router-dom";
import { lazy } from "react";
import GuestGuard from "./guards/GuestGuard";

const LoginPage = lazy(() => import("../auth/LoginPage"));
const RegisterPage = lazy(() => import("../auth/RegisterPage"));
const ResetPasswordPage = lazy(() => import("../auth/ResetPasswordPage"));
const ForgetPasswordPage = lazy(() => import("../auth/ForgetPasswordPage"));

const GuestRoutes = (
  <Route element={<GuestGuard />}>
    <Route path="/auth/login" element={<LoginPage />} />
    <Route path="/auth/register" element={<RegisterPage />} />
    <Route path="/auth/forget-password" element={<ForgetPasswordPage />} />
    <Route
      path="/auth/reset-password/:resetToken/:userId"
      element={<ResetPasswordPage />}
    />
  </Route>
);

export default GuestRoutes;
