import { Activity } from "react";
import { transactions } from "../../data/database.json";
import { LuCalendarRange } from "react-icons/lu";
import TransactionsCard from "./components/TransactionsCard/TransactionsCard";

const Transactions = () => {
    const { title, date, newest, yesterday } = transactions;
    
    return (
        <div className="flex-1/3 h-156 rounded-3xl p-6 bg-linear-to-br from-secondary to-tertiary">
            <div className="flex justify-between items-center font-ubuntuBold">
                <h4 className="text-white capitalize text-xl">
                    {title}
                </h4>
                <span className="capitalize text-slate-400 flex justify-end items-center gap-x-2">
                    <LuCalendarRange className="size-5 text-white" />
                    {date}
                </span>
            </div>
            <Activity mode={newest?.length ? "visible" : "hidden"}>
                <div className="space-y-6 mt-7">
                    <h5 className="uppercase text-slate-400 text-sm font-ubuntuBold">newest</h5>
                    {newest?.map(item =>
                        <TransactionsCard data={item} key={item?.id} />
                    )}
                </div>
            </Activity>
            <Activity mode={yesterday?.length ? "visible" : "hidden"}>
                <div className="space-y-6 mt-7">
                    <h5 className="uppercase text-slate-400 text-sm font-ubuntuBold">yesterday</h5>
                    {yesterday?.map(item =>
                        <TransactionsCard data={item} key={item?.id} />
                    )}
                </div>
            </Activity>
        </div>
    );
}

export default Transactions;
