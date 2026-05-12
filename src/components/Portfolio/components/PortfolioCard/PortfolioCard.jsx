import { Activity } from "react";
import { Link } from "react-router";

const PortfolioCard = ({ data }) => {
    const { tag, title, description, cover, viewers } = data;

    return (
        <div className="flex-1">
            <Link to={`?q=${tag}`}>
                <img src={cover} alt="portfolio" className="rounded-2xl h-40 xxs:h-50 max-sm:mx-auto" />
            </Link>
            <div className="flex flex-col justify-start items-start mt-3 capitalize font-ubuntuMedium gap-y-2">
                <span className="text-slate-400 text-xs">
                    {tag}
                </span>
                <h5 className="text-white text-xl">
                    {title}
                </h5>
                <p className="text-slate-400 text-sm line-clamp-2">
                    {description}
                </p>
            </div>
            <div className="flex justify-between items-center mt-5">
                <Link to={"projects"} className="uppercase text-white font-ubuntuBold rounded-xl border border-white text-xs py-2 px-7">view all</Link>
                <Activity mode={viewers?.length ? "visible" : "hidden"}>
                    <div className="flex justify-end items-center">
                        {viewers?.map(item =>
                            <img key={item?.id} src={item?.profile} alt="profile" className="size-6 rounded-full object-cover -ml-2" />
                        )}
                    </div>
                </Activity>
            </div>
        </div>
    );
}

export default PortfolioCard;
