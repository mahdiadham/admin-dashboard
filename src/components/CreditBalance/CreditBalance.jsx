import { Activity } from "react";
import Newest from "../Newest/Newest";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const CreditBalance = ({ data }) => {
    const { title, balance, img, newest } = data;

    return (
        <div className="flex-1/3 rounded-3xl py-8 px-6 bg-secondary h-65">
            <div className="bg-[url(../../../public/assets/images/elements/credit-bg.webp)] bg-no-repeat bg-center bg-cover rounded-2xl p-4 h-26">
                <div className="flex justify-between items-center">
                    <h5 className="capitalize text-[13px] text-white font-ubuntuMedium">
                        {title}
                    </h5>
                    <button className="cursor-pointer">
                        <HiOutlineDotsHorizontal className="text-white size-6" />
                    </button>
                </div>
                <div className="flex justify-between items-start mt-2">
                    <span className="text-white font-ubuntuBold text-4xl">
                        {balance > 0 ? `$${balance.toLocaleString()}` : `-$${balance.toLocaleString().replace("-", "")}`}
                    </span>
                    <img src={img} alt="icon" className="w-15" />
                </div>
            </div>
            <div className="mt-8">
                <h5 className="text-xs uppercase text-slate-500 font-ubuntuMedium mb-2">newest</h5>
                <Activity mode={newest.length ? "visible" : "hidden"}>
                    {newest?.map(item =>
                        <Newest key={item?.id} data={item} />
                    )}
                </Activity>
            </div>
        </div>
    );
}

export default CreditBalance;
