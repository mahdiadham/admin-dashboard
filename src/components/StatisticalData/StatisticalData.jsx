import { Line } from "rc-progress";

const StatisticalData = ({ data, icon: Icon, percent }) => {
    const { name, value, cash } = data;
    const newValue = value > 1e6 ? `${(value / 1e6).toFixed(2).toLocaleString()}M` : value.toLocaleString();

    return (
        <div className="flex-1 flex flex-col justify-around items-start">
            <div className="flex justify-start items-center gap-x-3 capitalize text-slate-400 font-ubuntuMedium">
                <div className="rounded-lg flex justify-center items-center bg-primary size-6 text-white *:size-3">
                    <Icon />
                </div>
                <span>
                    {name}
                </span>
            </div>
            <span className="text-white text-xl font-ubuntuBold mt-3 mb-2">
                {cash ? `$${newValue}` : newValue}
            </span>
            <Line
                percent={percent}
                strokeWidth={5}
                strokeColor="#0075FF"
                trailColor="#2D2E5F"
                trailWidth={3}
                strokeLinecap="round"
            />
        </div>
    );
}

export default StatisticalData;
