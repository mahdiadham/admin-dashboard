import { Activity } from "react";
import { orders } from "../../data/database.json";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Orders = () => {
    const { title, statistics, data } = orders;

    return (
        <div className="max-lg:flex-1/2 2xl:flex-2 bg-linear-to-br from-secondary to-tertiary rounded-3xl max-xs:h-auto h-128 p-6 flex flex-col justify-between items-start">
            <div>
                <h4 className="text-white text-xl font-ubuntuBold capitalize">
                    {title}
                </h4>
                <div className="flex justify-start items-center gap-x-1 mt-1">
                    <IoIosCheckmarkCircle className="size-4 text-green-700" />
                    <span className="text-slate-400 text-sm">
                        <span className="mr-1">
                            {statistics > 0 ? `+${statistics}` : statistics}%
                        </span>
                        this month
                    </span>
                </div>
            </div>
            <Activity mode={data?.length ? "visible" : "hidden"}>
                <div className="space-y-4 max-xs:mt-10">
                    {data?.map(order =>
                        <div key={order?.id} className="flex justify-start items-start gap-x-5">
                            <img src={order?.icon} alt="icon" className="mt-2" />
                            <div className="font-ubuntuMedium">
                                <h5 className="text-white capitalize max-xs:text-sm">
                                    {order?.title}
                                </h5>
                                <span className="text-slate-400 text-xs xs:text-sm">
                                    {order?.date}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </Activity>
        </div>
    );
}

export default Orders;
