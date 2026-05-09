import { useState, Activity } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Aside from "../Aside/Aside";

const MainLayout = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <ScrollRestoration />
            <section className="flex justify-between items-start">
                <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className={"w-full pr-5 max-md:px-5"}>
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
