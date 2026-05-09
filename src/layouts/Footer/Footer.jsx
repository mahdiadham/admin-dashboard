import { Activity } from "react";
import { Link } from "react-router";
import { footer } from "../../data/database.json";
import ThisYear from "../../utilities/ThisYear";

const Footer = () => {
    const { ankerText, links } = footer;

    return (
        <footer className="flex justify-between items-center text-white capitalize py-8 font-ubuntuMedium">
            <span className="text-sm">
                @ {ThisYear()} {ankerText}
            </span>
            <Activity mode={links?.length ? "visible" : "hidden"}>
                <div className="flex text-sm justify-start items-center gap-x-8">
                    {links?.map(link =>
                        <Link key={link?.id} to={link?.url}>
                            {link?.title}
                        </Link>
                    )}
                </div>
            </Activity>
        </footer>
    );
}

export default Footer;
