import { Activity } from "react";
import { NavLink } from "react-router";
import { profile, profileHeaderMenu } from "../../data/database.json";
import { clsx } from "clsx";
import { BsBoxFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa6";

const ProfileHeader = () => {
    const { fullname, logo, email } = profile;
    const icons = {
        BsBoxFill: BsBoxFill,
        FaUsers: FaUsers,
        FaWrench: FaWrench
    }

    return (
        <div className="flex-1 bg-secondary p-6 rounded-3xl flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-7">
                <img src={logo} alt="logo" className="rounded-2xl" />
                <div className="font-ubuntuBold">
                    <h5 className="text-white capitalize text-lg">
                        {fullname}
                    </h5>
                    <a href={`mailto:${email}}`} className="text-slate-500">
                        {email}
                    </a>
                </div>
            </div>
            <Activity mode={profileHeaderMenu?.length ? "visible" : "hidden"}>
                <div className="flex justify-end items-center">
                    {profileHeaderMenu?.map(link => {
                        const { id, title, href, icon } = link;
                        const Icon = icons[icon];
                        return (
                            <NavLink key={id} to={href} className={({ isActive }) => clsx("flex justify-center items-center gap-x-2 text-slate-300 font-ubuntuMedium uppercase text-[13px] w-38 rounded-2xl py-2.5 transition duration-150", isActive && "bg-primary")}>
                                <Icon className="size-4 text-white" />
                                {title}
                            </NavLink>
                        );
                    })}
                </div>
            </Activity>
        </div>
    );
}

export default ProfileHeader;
