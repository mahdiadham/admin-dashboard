import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

const PrivateRouter = lazy(() => import("../../components/PrivateRouter/PrivateRouter"));
const MainLayout = lazy(() => import("../../layouts/panel/MainLayout"));
const Dashboard = lazy(() => import("../../pages/panel/Dashboard/Page"));
const NotFound = lazy(() => import("../../pages/Error/404/NotFound"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRouter />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/404" replace />
    },
    {
        path: "/404",
        element: <NotFound />
    }
]);

export default router;