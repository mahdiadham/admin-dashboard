import { Activity } from "react";
import InvoiceCard from "./components/InvoiceCard/InvoiceCard";

const Invoices = ({ data }) => {
    return (
        <div className="bg-secondary rounded-3xl h-112.5 p-6">
            <div className="flex justify-between items-center text-white font-ubuntuBold mb-6">
                <h5 className="text-lg capitalize">invoices</h5>
                <button className="uppercase text-[13px] bg-primary rounded-xl py-2 px-6 xxs:px-8 active:scale-98 cursor-pointer">view all</button>
            </div>
            <Activity mode={data?.length ? "visible" : "hidden"}>
                <div className="space-y-8.5">
                    {data?.map(item =>
                        <InvoiceCard data={item} key={item?.id} />
                    )}
                </div>
            </Activity>
        </div>
    );
}

export default Invoices;
