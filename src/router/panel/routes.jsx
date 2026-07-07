import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

const PrivateRouter = lazy(() => import("../../components/PrivateRouter/PrivateRouter"));
const MainLayout = lazy(() => import("../../layouts/main/MainLayout"));
const Dashboard = lazy(() => import("../../pages/Dashboard/page"));
const Tables = lazy(() => import("../../pages/Tables/page"));
const Billing = lazy(() => import("../../pages/Billing/page"));
const Profile = lazy(() => import("../../pages/Profile/page"));
const Overview = lazy(() => import("../../pages/Profile/pages/Overview/page"));
const Teams = lazy(() => import("../../pages/Profile/pages/Teams/page"));
const Projects = lazy(() => import("../../pages/Profile/pages/Projects/page"));
const NotFound = lazy(() => import("../../pages/Error/404/NotFound"));

const router = createBrowserRouter([
    {
        path: "/admin-panel",
        element: <PrivateRouter />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                        handle: { crumb: "Dashboard" }
                    },
                    {
                        path: "tables",
                        element: <Tables />,
                        handle: { crumb: "Tables" }
                    },
                    {
                        path: "billing",
                        element: <Billing />,
                        handle: { crumb: "Billing" }
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                        handle: { crumb: "Profile" },
                        children: [
                            {
                                index: true,
                                element: <Navigate to="overview" />
                            },
                            {
                                path: "overview",
                                element: <Overview />,
                                handle: { crumb: "Overview" }
                            },
                            {
                                path: "teams",
                                element: <Overview />,
                                handle: { crumb: "Teams" }
                                // element: <Teams />
                            },
                            {
                                path: "projects",
                                element: <Overview />,
                                handle: { crumb: "Projects" }
                                // element: <Projects />
                            },
                        ]
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