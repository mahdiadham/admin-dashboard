import { Activity } from "react";
import PortfolioCard from "./components/PortfolioCard/PortfolioCard";
import { portfolio } from "../../data/database.json";

const Portfolio = () => {
    const { title, description, projects } = portfolio;

    return (
        <div className="h-123 rounded-3xl p-6 bg-linear-to-r from-secondary to-tertiary flex-1/2">
            <h4 className="text-xl text-white capitalize font-ubuntuBold">
                {title}
            </h4>
            <span className="capitalize text-slate-500 text-sm font-ubuntuBold mt-2 block">
                {description}
            </span>
            <Activity mode={projects?.length ? "visible" : "hidden"}>
                <div className="mt-6 flex justify-between items-start gap-5 flex-wrap">
                    {projects?.map(project =>
                        <PortfolioCard key={project?.id} data={project} />
                    )}
                </div>
            </Activity>
        </div>
    );
}

export default Portfolio;
