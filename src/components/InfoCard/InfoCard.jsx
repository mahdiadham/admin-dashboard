import clsx from "clsx";

const InfoCard = ({ title, value, Icon, profit, cash }) => {
    return (
        <div className="bg-secondary rounded-2xl max-sm:w-full max-lg:w-[calc(50%-0.75rem)] lg:flex-1 py-3 px-4 font-ubuntuBold flex justify-between items-center">
            <div>
                <span className="capitalize text-slate-500 text-[13px]">
                    {title}
                </span>
                <div className="flex justify-start items-center gap-x-1">
                    <span className="text-white text-[1.4rem]">
                        {cash ? `$${value.toLocaleString()}` : `+${value.toLocaleString()}`}
                    </span>
                    <span className={clsx(profit > 0 ? "text-green-500" : "text-red-500")}>
                        {profit > 0 ? `+${profit}` : profit}%
                    </span>
                </div>
            </div>
            <div className="bg-primary rounded-2xl size-12 flex justify-center items-center *:text-white *:size-6">
                <Icon />
            </div>
        </div>
    )
}

export default InfoCard;
