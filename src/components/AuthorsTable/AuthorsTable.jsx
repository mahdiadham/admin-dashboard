import { Activity } from "react";
import { authors } from "../../data/database.json";
import { clsx } from "clsx";
import { FaPen } from "react-icons/fa6";

const AuthorsTable = () => {
    const { title, table } = authors;
    
    return (
        <div className="w-auto! overflow-x-hidden flex-1 bg-linear-to-b from-secondary to-tertiary rounded-3xl p-6 flex flex-col justify-between items-start *:w-full">
            <h4 className="text-white text-xl font-ubuntuBold capitalize">
                {title}
            </h4>
            <div className="overflow-x-auto">
                <table className="max-lg:w-200! w-full! divide-y divide-slate-700 mt-9">
                    <thead>
                        <tr className="text-slate-600 uppercase text-xs *:pb-3">
                            <th className="text-start">author</th>
                            <th className="text-start">function</th>
                            <th>status</th>
                            <th>employed</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <Activity mode={table?.length ? "visible" : "hidden"}>
                        <tbody className="divide-y divide-slate-700">
                            {table?.map(user =>
                                <tr key={user?.id}>
                                    <td className="py-3 w-2/5">
                                        <div className="flex justify-start items-center gap-x-5">
                                            <img src={user?.profile} alt="profile" className="size-10 rounded-2xl object-cover" />
                                            <div className="font-ubuntuMedium">
                                                <h5 className="text-white capitalize">
                                                    {user?.username}
                                                </h5>
                                                <span className="block -mt-px text-sm text-slate-500">
                                                    {user?.email}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-ubuntuMedium capitalize text-sm">
                                            <h6 className="text-white">
                                                {user?.function}
                                            </h6>
                                            <span className="block -mt-[2px] text-slate-500">
                                                {user?.job}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <span className={clsx("capitalize text-white font-ubuntuBold text-xs border border-transparent rounded-lg block w-14 mx-auto py-[6px]", user?.online ? "bg-emerald-500" : "border-white")}>
                                            {user?.online ? "online" : "offline"}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <span className="text-white text-[13px] font-ubuntuBold">
                                            {user?.employed}
                                        </span>
                                    </td>
                                    <td className="*:mx-auto!">
                                        <button className="text-slate-400 capitalize cursor-pointer text-sm font-ubuntuBold flex justify-end items-center gap-x-2">
                                            <FaPen />
                                            edit
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Activity>
                </table>
            </div>
        </div>
    );
}

export default AuthorsTable;
