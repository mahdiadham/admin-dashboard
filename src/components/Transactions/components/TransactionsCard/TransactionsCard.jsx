import clsx from "clsx";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const TransactionsCard = ({ data }) => {
    const { companyName, date, time, price } = data;

    return (
        <div className="flex justify-between items-center gap-x-5">
            <div className={clsx("h-9 w-11 xs:w-10 border rounded-full flex justify-center items-center *:size-3", price > 0 ? "text-emerald-500 border-emerald-500" : price < 0 ? "text-red-500 border-red-500" : "text-yellow-500 border-yellow-500")}>
                {price > 0 ? <FaArrowUp /> : price < 0 ? <FaArrowDown /> : "!"}
            </div>
            <div className="flex max-xxs:flex-col justify-between items-start xxs:items-center w-full gap-y-2">
                <div className="font-ubuntuMedium capitalize flex flex-col justify-start items-start">
                    <span className="text-white">
                        {companyName}
                    </span>
                    <span className="text-slate-400 text-xs xs:text-sm">
                        {date}, at {time}
                    </span>
                </div>
                <span className={clsx("capitalize font-ubuntuMedium", price > 0 ? "text-emerald-500" : price < 0 ? "text-red-500" : "text-yellow-500")}>
                    {price > 0 ? `+ $${price.toLocaleString().replace("-", "")}` : price < 0 ? `- $${price.toLocaleString().replace("-", "")}` : "pending"}
                </span>
            </div>
        </div>
    );
}

export default TransactionsCard;
