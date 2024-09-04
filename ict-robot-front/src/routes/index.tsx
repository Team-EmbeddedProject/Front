import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { Layout } from "@/components/features/Layout";
import { AboutUsPage } from "@/pages/AboutUs";
import { HomePage } from "@/pages/Home";
import { RobotDistributionPage } from "@/pages/RobotDistribution";
import { RobotGraphPage } from "@/pages/RobotGraph";
import { RobotLogPage } from "@/pages/RobotLog";

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
        path: RouterPath.notFound,
        element: <Navigate to={RouterPath.home} />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
