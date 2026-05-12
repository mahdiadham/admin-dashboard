import { Link, NavLink } from "react-router";
import { Activity } from "react";
import clsx from "clsx";
import Logo from "../../../public/assets/images/logo/logo.png";
import { menu } from "../../data/database.json";
import { IoClose, IoHome, IoStatsChart } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Aside = ({ isOpen, setIsOpen }) => {
    const icons = {
        IoHome: IoHome,
        IoStatsChart: IoStatsChart,
        FaCreditCard: FaCreditCard,
        FaUser: FaUser
    }

    return (
        <>
            <aside className={"hidden md:w-max xl:w-90! h-screen sticky top-0 left-0 bottom-0 md:flex flex-col justify-start items-center py-5"}>
                <Link to="/" className="flex justify-center items-center gap-x-2 mt-5 relative before:absolute before:top-10 before:w-full before:h-px before:bg-linear-to-r before:from-slate-500/5 before:via-slate-500 before:to-slate-500/5">
                    <img src={Logo} alt="Logo" />
                    <h3 className="max-xl:hidden uppercase tracking-widest bg-linear-to-r from-white via-white to-white/30 bg-clip-text text-transparent">
                        admin dashboard
                    </h3>
                </Link>
                {<Activity mode={menu?.length ? "visible" : "hidden"}>
                        <nav className="w-full mt-10 px-5">
                            <ul className="flex flex-col justify-start items-start *:w-full">
                                {menu.map(nav => {
                                    const Icon = icons[nav.icon];
                                    return (
                                        <li key={nav.id}>
                                            <NavLink title={nav?.title.toUpperCase()} to={nav.link} className={({ isActive }) => clsx("flex justify-start items-center gap-x-3 px-4 py-3 rounded-2xl transition duration-150 capitalize font-ubuntuMedium **:transition **:duration-150 text-white", isActive && "bg-white/10 **:[svg]:fill-white *:[div]:bg-primary backdrop-blur-2xl text-white")}>
                                                <div className="size-8 bg-white/10 rounded-xl p-2 flex justify-center items-center text-primary">
                                                    <Icon />
                                                </div>
                                                <span className="max-xl:hidden">
                                                    {nav.title}
                                                </span>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                </Activity>}
            </aside>
            <div className={clsx("-translate-x-70 bg-linear-to-br from-secondary to-tertiary w-70 h-screen fixed top-0 left-0 bottom-0 flex flex-col justify-start items-center py-5 z-20 transition-all duration-300", isOpen && "translate-x-0")}>
                <button className="self-end mr-5 text-white cursor-pointer *:size-5" onClick={() => setIsOpen(!isOpen)}>
                    <IoClose />
                </button>
                <Link to="/" className="flex justify-center items-center gap-x-2 mt-5 relative before:absolute before:top-10 before:w-full before:h-px before:bg-linear-to-r before:from-slate-500/5 before:via-slate-500 before:to-slate-500/5">
                    <img src={Logo} alt="Logo" />
                    <h3 className="uppercase tracking-widest bg-linear-to-r from-white via-white to-white/30 bg-clip-text text-transparent">
                        admin dashboard
                    </h3>
                </Link>
                {<Activity mode={menu?.length ? "visible" : "hidden"}>
                        <nav className="w-full mt-10 px-5">
                            <ul className="flex flex-col justify-start items-start *:w-full">
                                {menu.map(nav => {
                                    const Icon = icons[nav.icon];
                                    return (
                                        <li key={nav.id}>
                                            <NavLink title={nav?.title.toUpperCase()} to={nav.link} className={({ isActive }) => clsx("flex justify-start items-center gap-x-3 px-4 py-3 rounded-2xl transition duration-150 capitalize font-ubuntuMedium **:transition **:duration-150 text-white", isActive && "bg-white/10 **:[svg]:fill-white *:[div]:bg-primary backdrop-blur-2xl text-white")} onClick={() => setIsOpen(!isOpen)}>
                                                <div className="size-8 bg-white/10 rounded-xl p-2 flex justify-center items-center text-primary">
                                                    <Icon />
                                                </div>
                                                <span>
                                                    {nav.title}
                                                </span>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                </Activity>}
            </div>
        </>
    );
}

export default Aside;
