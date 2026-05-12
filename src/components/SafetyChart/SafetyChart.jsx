import { useState } from "react";
import Chart from "react-apexcharts";
import { referralTracking } from "../../data/database.json";
import { FaLaugh } from "react-icons/fa";

const SafetyChart = () => {
    const { title, percent, base, bonus, invited } = referralTracking;

    const [series, setSeries] = useState([percent]);
    const [options, setOptions] = useState({
        chart: {
            height: "100%",
            type: "radialBar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    margin: 0,
                    size: "75%",
                    background: "transparent",
                    position: "front",
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.5,
                    },
                },
                track: {
                    background: "transparent",
                    strokeWidth: "90%",
                    margin: 0,
                    dropShadow: {
                        enabled: false,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.7,
                    },
                },
                dataLabels: {
                    show: false,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: "#888",
                        fontSize: "17px",
                    },
                    value: {
                        formatter: function (val) {
                            return parseInt(val);
                        },
                        color: "#111",
                        fontSize: "36px",
                        show: false,
                    },
                },
            },
        },
        colors: ["#079276"],
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: ["#079276"],
                inverseColors: false,
                opacityFrom: 0.1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: "round",
        },
        labels: [],
    });

    return (
        <div className="flex-[15%] sm:h-85 bg-linear-to-r from-[#0C1034] to-secondary rounded-3xl flex flex-col justify-between items-center p-6">
            <h4 className="text-white text-xl capitalize font-ubuntuBold self-start mb-7">
                {title}
            </h4>
            <div className="flex justify-between items-center gap-x-4 size-full max-sm:flex-col-reverse">
                <div className="flex flex-col justify-between items-start gap-5 w-full *:bg-tertiary *:rounded-2xl *:py-4 *:px-5 *:w-full capitalize text-slate-400">
                    <div className="flex flex-col justify-between items-start">
                        <span>
                            invited
                        </span>
                        <span className="text-white text-xl font-ubuntuBold mt-1">
                            {invited.toLocaleString()} people
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-start">
                        <span>
                            bonus
                        </span>
                        <span className="text-white text-xl font-ubuntuBold mt-1">
                            {bonus.toLocaleString()}
                        </span>
                    </div>
                </div>
                <div className="size-55 xxs:size-60 relative">
                    <Chart options={options} series={series} type="radialBar" width={"100%"} height={"100%"} />
                    <div className="-translate-1/2 absolute top-1/2 left-1/2 flex flex-col justify-between items-center gap-y-2 text-slate-400 capitalize font-ubuntuBold text-sm">
                        <span>safety</span>
                        <span className="text-5xl text-white">
                            {percent/10}
                        </span>
                        <span>
                            {base}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SafetyChart
