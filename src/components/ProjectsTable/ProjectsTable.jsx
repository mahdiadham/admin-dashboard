import { Activity } from "react";
import clsx from "clsx";
import { Line } from "rc-progress";
import { projectsTable } from "../../data/database.json";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ProjectsTable = () => {
    const { title, table } = projectsTable;

    return (
        <div className="flex-1 bg-linear-to-r from-secondary to-tertiary rounded-3xl p-6 flex flex-col justify-between items-start *:w-full">
            <h4 className="text-white text-xl font-ubuntuBold capitalize">
                {title}
            </h4>
            <table className="divide-y divide-slate-700 mt-9">
                <thead>
                    <tr className="text-slate-600 uppercase text-xs *:pb-3">
                        <th className="text-start">project</th>
                        <th className="text-start">budget</th>
                        <th>status</th>
                        <th>completion</th>
                        <th>action</th>
                    </tr>
                </thead>
                <Activity mode={table?.length ? "visible" : "hidden"}>
                    <tbody className="divide-y divide-slate-700">
                        {table?.map(project =>
                            <tr key={project?.id}>
                                <td className="py-5 w-1/3">
                                    <div className="flex justify-start items-center gap-x-5">
                                        <img src={project?.icon} alt="profile" />
                                        <h5 className="text-white capitalize font-ubuntuBold text-sm">
                                            {project?.title}
                                        </h5>
                                    </div>
                                </td>
                                <td>
                                    <span className="capitalize text-white font-ubuntuBold text-sm">
                                        {project?.budget > 0 ? `$${project?.budget}` : "not set"}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <span className={clsx("capitalize font-ubuntuBold text-xs border rounded-lg w-17 py-[6px] block mx-auto", project?.status === "done" ? "bg-emerald-500/20 border-emerald-500 text-emerald-500" : project?.status === "working" ? "bg-yellow-500/20 border-yellow-500 text-yellow-500" : "bg-red-500/20 border-red-500 text-red-500")}>
                                        {project?.status}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <div className="flex flex-col justify-start items-center gap-y-1 w-max mx-auto">
                                        <span className="text-white text-sm font-ubuntuMedium self-start">
                                            {`${project?.completion}%`}
                                        </span>
                                        <Line
                                            percent={project?.completion}
                                            strokeWidth={4}
                                            strokeColor="#0075FF"
                                            trailColor="#2D2E5F"
                                            trailWidth={2}
                                            strokeLinecap="round"
                                            className="w-35"
                                        />
                                    </div>
                                </td>
                                <td className="text-center">
                                    <button className="cursor-pointer">
                                        <HiOutlineDotsVertical className="size-5 text-slate-300" />
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Activity>
            </table>
        </div>
    );
}

export default ProjectsTable;
