import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

const PrivateRouter = () => {
    const [ isLogin, setIsLogin ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        !isLogin && navigate("/", {
            replace: true
        });
    }, []);

    return (
        <Outlet />
    );
}

export default PrivateRouter;
