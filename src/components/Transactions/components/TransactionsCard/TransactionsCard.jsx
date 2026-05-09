import clsx from "clsx";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const TransactionsCard = ({ data }) => {
    const { companyName, date, time, price } = data;

    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-5">
                <div className={clsx("size-9 border rounded-full flex justify-center items-center *:size-3", price > 0 ? "text-emerald-500 border-emerald-500" : price < 0 ? "text-red-500 border-red-500" : "text-white border-white")}>
                    {price > 0 ? <FaArrowUp /> : price < 0 ? <FaArrowDown /> : "!"}
                </div>
                <div className="font-ubuntuMedium capitalize flex flex-col justify-start items-start">
                    <span className="text-white">
                        {companyName}
                    </span>
                    <span className="text-slate-400 text-sm">
                        {date}, at {time}
                    </span>
                </div>
            </div>
            <span className={clsx("capitalize font-ubuntuMedium", price > 0 ? "text-emerald-500" : price < 0 ? "text-red-500" : "text-white")}>
                {price > 0 ? `+ $${price.toLocaleString().replace("-", "")}` : price < 0 ? `- $${price.toLocaleString().replace("-", "")}` : "pending"}
            </span>
        </div>
    );
}

export default TransactionsCard;
