const InfoCard = ({ title, value, children, type }) => {

    return (
        <div className="bg-secondary rounded-2xl px-4 py-6 flex max-xxs:flex-col justify-between items-center w-full sm:w-[calc(50%-0.75rem)] 2xl:w-59 gap-y-3">
            {type === "icon" && children}
            <div className="max-xxs:text-center">
                <h5 className="text-slate-500 capitalize text-sm font-ubuntuBold mb-1">
                    {title}
                </h5>
                <span className="text-white text-2xl font-ubuntuBold">
                    {value}
                </span>
            </div>
            {type === "chart" && children}
        </div>
    );
}

export default InfoCard;
