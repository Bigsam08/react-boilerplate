import { Navigate, Outlet } from "react-router-dom";

const RoleGuard = ({ allowedRoles }) => {
    // fetch user from store
    const user = true

    // controll navivation if there is no user
  if (!user) return <Navigate to="/auth/login" replace />;

  // If user doesn't have the right role → Unauthorized
  switch (allowedRoles) {
    case "admin":
      if (user.role !== "type of role") return <Navigate to="/unauthorized" replace />;
      break;
    case "mentor":
      if (user.role !== "type of role")
        return <Navigate to="/unauthorized" replace />;
      break;
    default:
      return <Navigate to="/unauthorized" replace />;
  }

  // Access granted
  return <Outlet />;
};

export default RoleGuard;
