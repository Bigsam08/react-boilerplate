/**
 * @description Public Routes - accessible to all users including non-authenticated users
 */

import { Route } from "react-router-dom";
import { lazy } from "react";
import RoleRedirect from "./RoleRedirect";

const FAQpage = lazy(() => import("../pages/FaqPage"));
const AboutPage = lazy(() => import("../pages/AboutUs"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const Unauthorized = lazy(() => import("../pages/UnauthorizedPage"));

const PublicRoutes = (
  <>
    <Route path="/" element={<RoleRedirect />} />
    <Route path="/faqs" element={<FAQpage />} />
    <Route path="/about-us" element={<AboutPage />} />
    <Route path="/contact-us" element={<ContactUsPage />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
);

export default PublicRoutes;
