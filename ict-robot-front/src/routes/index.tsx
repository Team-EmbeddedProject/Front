import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { Layout } from "@/components/features/Layout";
import { AboutUsPage } from "@/pages/AboutUs";
import { CategoryPage } from "@/pages/Category";
import { GoodsDetailPage } from "@/pages/Goods/Detail";
import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { MyAccountPage } from "@/pages/MyAccount";
import { OrderPage } from "@/pages/Order";
import { RobotDistributionPage } from "@/pages/RobotDistribution";
import { RobotGraphPage } from "@/pages/RobotGraph";
import { RobotLogPage } from "@/pages/RobotLog";
import { SignUpPage } from "@/pages/SignUp";

import { PrivateRoute } from "./components/PrivateRoute";
import { RouterPath } from "./path";

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      {
        path: RouterPath.aboutUs,
        element: <AboutUsPage />,
      },
      {
        path: RouterPath.robotLog,
        element: <RobotLogPage />,
      },
      {
        path: RouterPath.robotDistribution,
        element: <RobotDistributionPage />,
      },
      {
        path: RouterPath.robotGraph,
        element: <RobotGraphPage />,
      },
      {
        path: RouterPath.category,
        element: <CategoryPage />,
      },
      {
        path: RouterPath.productsDetail,
        element: <GoodsDetailPage />,
      },
      {
        path: RouterPath.myAccount,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.myAccount,
            element: <MyAccountPage />,
          },
        ],
      },
      {
        path: RouterPath.order,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.order,
            element: <OrderPage />,
          },
        ],
      },
      {
        path: RouterPath.notFound,
        element: <Navigate to={RouterPath.home} />,
      },
    ],
  },
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: RouterPath.signUp,
    element: <SignUpPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
