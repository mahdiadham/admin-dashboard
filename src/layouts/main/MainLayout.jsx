import { useState, Activity } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import useTitle from "../../hooks/useTitle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Aside from "../Aside/Aside";

const MainLayout = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    useTitle();

    return (
        <>
            <ScrollRestoration />
            <section className="flex justify-between items-start">
                <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className={"pr-5 max-md:px-5 w-full min-w-0 overflow-x-clip"}>
                    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                    <main className="mt-10">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </section>
            <Activity mode={isOpen ? "visible" : "hidden"}>
                <div className="md:hidden fixed inset-0 z-15 backdrop-blur-sm bg-black/50" onClick={() => setIsOpen(!isOpen)}></div>
            </Activity>
        </>
    );
}

export default MainLayout;
