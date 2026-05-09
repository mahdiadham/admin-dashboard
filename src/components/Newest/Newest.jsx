import { FaBuildingColumns } from "react-icons/fa6";

const Newest = ({ data }) => {
    const { title, date, stockValue } = data;

    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-5">
                <div className="bg-tertiary/75 rounded-full size-10.5 flex justify-center items-center">
                    <FaBuildingColumns className="text-emerald-600 size-5" />
                </div>
                <div>
                    <h6 className="text-white text-sm capitalize font-ubuntuMedium">
                        {title}
                    </h6>
                    <span className="text-sm text-slate-400 capitalize font-ubuntuMedium">
                        {date}
                    </span>
                </div>
            </div>
            <span className="text-sm text-white font-ubuntuBold">
                {stockValue > 0 ? `$${stockValue.toFixed(2).toLocaleString()}` : `-$${stockValue.toFixed(2).toLocaleString().replace("-", "")}`}
            </span>
        </div>
    );
}

export default Newest;
