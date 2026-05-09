import { Activity } from "react";
import { Line } from "rc-progress";
import { projects } from "../../data/database.json";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Projects = () => {
    const { title, done, data } = projects;

    return (
        <div className="flex-1/2 bg-linear-to-r from-secondary to-tertiary rounded-3xl h-128 p-6 flex flex-col justify-between items-start *:w-full">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-white text-xl font-ubuntuBold capitalize">
                        {title}
                    </h4>
                    <span className="flex justify-start items-center text-slate-400 text-sm mt-1">
                        <IoIosCheckmarkCircle className="size-4 text-green-700" />
                        <strong className="mr-1 ml-2">
                            {done} done
                        </strong>
                        this month
                    </span>
                </div>
                <button className="cursor-pointer">
                    <HiOutlineDotsVertical className="size-5 text-slate-300" />
                </button>
            </div>
            <table>
                <thead>
                    <tr className="text-slate-600 uppercase text-xs *:text-start *:pb-3 border-b border-slate-700!">
                        <th>companies</th>
                        <th>members</th>
                        <th>budget</th>
                        <th>completion</th>
                    </tr>
                </thead>
                <Activity mode={data.length ? "visible" : "hidden"}>
                    <tbody>
                        {data.map(project =>
                            <tr key={project?.id} className="not-last:border-b not-last:border-slate-700 w-full!">
                                <td className="text-white capitalize py-4">
                                    <div className="flex justify-start items-center gap-x-3 font-ubuntuMedium">
                                        <img src={project?.icon} alt={project?.title} />
                                        <h5>
                                            {project?.title}
                                        </h5>
                                    </div>
                                </td>
                                <Activity mode={project?.members?.length ? "visible" : "hidden"}>
                                    <td className="inline-flex justify-start items-center h-14">
                                        {project.members.map(member =>
                                            <div key={member?.id} className="-ml-2 border border-secondary rounded-full overflow-hidden size-6">
                                                <img src={member?.profile} alt="profile" className="object-cover size-full" />
                                            </div>
                                        )}
                                    </td>
                                </Activity>
                                <td>
                                    <span className="text-white capitalize font-ubuntuBold">
                                        {project?.budget ? `$${project?.budget?.toLocaleString()}` : "not set"}
                                    </span>
                                </td>
                                <td className="w-1/5">
                                    <span className="text-white text-sm font-ubuntuBold">
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
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Activity>
            </table>
        </div>
    );
}

export default Projects;
