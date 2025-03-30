import ForgotPasswordPage from "@/pages/auth/forgotPassword.page";
import LoginPage from "@/pages/auth/login.page";
import RegisterPage from "@/pages/auth/register.page";
import HomePage from "@/pages/home/home.page";
import HomePageLayout from "@/pages/layouts/home-page.layout";
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "",
    element: <HomePageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);

const Routing: FC = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default Routing;
