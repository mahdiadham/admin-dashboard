import { Activity } from "react";
import { FaPen } from "react-icons/fa6";

const Payment = ({ data }) => {
    return (
        <div className="flex-1/2 rounded-3xl bg-linear-to-r from-secondary to-tertiary p-6">
            <div className="flex justify-between items-center text-white font-ubuntuBold mb-6">
                <h5 className="text-lg capitalize">payment method</h5>
                <button className="uppercase text-[13px] bg-primary rounded-xl py-3 px-6 active:scale-98 cursor-pointer">add new card</button>
            </div>
            <Activity mode={data?.length ? "visible" : "hidden"}>
                <div className="flex justify-between items-center flex-wrap gap-4">
                    {data?.map(method => {
                        const firstDigits = method?.cardNumber?.slice(0, -4);
                        return (
                            <div key={method?.id} className="flex-1/3 flex justify-between items-center p-4 bg-transparent border border-slate-500 rounded-2xl cursor-pointer">
                                <div className="flex justify-start items-center gap-x-5">
                                    <img src={method?.icon} alt="icon" />
                                    <span className="text-white font-ubuntuBold">
                                        {
                                            firstDigits
                                                .replace(/\D/g, "")
                                                .slice(0, 16)
                                                .replace(/(.{4})/g, " $1 - ")
                                                .replace(/-$/, "")
                                        } XXXX
                                    </span>
                                </div>
                                <button className="uppercase text-slate-500 font-ubuntuBold text-sm cursor-pointer">
                                    <FaPen className="size-4 text-white" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </Activity>
        </div>
    );
}

export default Payment;
