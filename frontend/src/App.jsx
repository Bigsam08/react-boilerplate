/**
 * @description This is the main entry of our app
 * @returns The app routes
 */

import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./routes/AppRoutes";
import DisplayNavBar from "./components/layout/Layout";
import MainLoader from "./components/common/MainLoader";
import ScrollTop from "./components/common/ScrollTop";
import { useEffect } from "react";
import useAuthStore from "./store/authStore";

const App = () => {
  const user = useAuthStore((state) => state.user);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  useEffect(() => {
    useAuthStore.getState().authUser();
  }, []);

  useEffect(() => {
    if (user) {
      console.log("app entry", user);
    } else {
      console.log("no user");
    }
  }, [user]);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  // Check if the user is authenticated
  if (isCheckingAuth) {
    return <MainLoader />;
  }

  //redirect to dashboard if user is already logged in and tries to access login or register page
  return (
    <div className="min-h-screen safe-area">
      <ScrollTop />
      <AppRoutes />
    </div>
  );
};

export default App;
