import { Link, useMatches } from "react-router";
import { IoMdHome } from "react-icons/io";

const BreadCrumb = () => {
    const matches = useMatches();
    const crumbs = matches.filter(match => match.handle?.crumb);
    
    return (
        <div className="max-xs:hidden">
            <div className="flex justify-start items-center gap-x-1 capitalize text-white font-ubuntuMedium">
                <Link to="/admin-panel" className="flex justify-between items-center gap-x-1">
                    <IoMdHome className="text-white/60" />
                </Link>
                {
                    crumbs.map(match => (
                        <Link to={match?.pathname} key={match?.handle?.crumb}>
                            / {match?.handle?.crumb}
                        </Link>
                    ))
                }
            </div>
            <p className="capitalize text-white mt-1 font-ubuntuBold">
                {
                    crumbs[crumbs.length - 1]?.handle?.crumb || "dashboard"
                }
            </p>
        </div>
    )
}

export default BreadCrumb;
