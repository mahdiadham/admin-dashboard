const InfoCard = ({ title, value, children }) => {
    return (
        <div className="bg-secondary rounded-2xl px-4 py-6 flex justify-between items-center w-59">
            <div>
                <h5 className="text-slate-500 capitalize text-sm font-ubuntuBold mb-1">
                    {title}
                </h5>
                <span className="text-white text-2xl font-ubuntuBold">
                    {value}
                </span>
            </div>
            {children}
        </div>
    );
}

export default InfoCard;
