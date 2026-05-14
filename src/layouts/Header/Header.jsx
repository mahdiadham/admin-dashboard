import { Link } from "react-router";
import { useState, useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoMdSettings, IoIosSearch } from "react-icons/io";
import clsx from "clsx";

const Header = ({ isOpen, setIsOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset !== 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="sticky top-5 flex justify-center items-center overflow-x-hidden z-12 w-full">
            <div className={clsx("w-full flex justify-between items-center rounded-2xl p-4 border border-transparent transition duration-150",
                isScrolled && "bg-black/20 backdrop-blur-lg border border-slate-500!")}
            >
                <div className="flex justify-start items-center gap-x-10">
                    <button className="md:hidden *:size-5 text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <FaBars />
                    </button>
                    <BreadCrumb />
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <div className="md:w-60 md:bg-white/5 rounded-full md:rounded-2xl flex justify-between items-center gap-2 md:p-2 md:border border-slate-600">
                        <IoIosSearch className="sm:text-white/60 sm:size-6 size-5 text-white max-sm:cursor-pointer" />
                        <input type="text" placeholder="Type here ..." className="max-md:hidden w-full bg-transparent text-white focus:outline-none" />
                    </div>
                    <Link to="/" className="text-white flex justify-center items-center gap-x-2 capitalize font-ubuntuMedium">
                        <FaUserCircle />
                        <span className="max-md:hidden">sign in</span>
                    </Link>
                    <Link to="/" className="text-white *:size-5">
                        <IoMdSettings />
                    </Link>
                    <button className="text-white cursor-pointer">
                        <FaBell />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header
