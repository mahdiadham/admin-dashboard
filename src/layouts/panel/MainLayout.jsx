import { Outlet, ScrollRestoration } from "react-router";

const mainLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    );
}

export default mainLayout;
