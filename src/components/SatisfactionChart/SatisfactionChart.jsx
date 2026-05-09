import { useState } from "react";
import Chart from "react-apexcharts";
import { satisfactionRate } from "../../data/database.json";
import { FaLaugh } from "react-icons/fa";

const ChartBar = () => {
    const { title, description, percent, from, to, base } = satisfactionRate;

    const [series, setSeries] = useState([percent]);
    const [options, setoptions] = useState({
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
                    background: "#ffffff15",
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
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: ["#0075FF"],
                inverseColors: true,
                opacityFrom: 0,
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
        <div className="flex-1 h-85 bg-linear-to-br from-secondary to-tertiary rounded-3xl flex flex-col justify-between items-center p-6">
            <div className="self-start capitalize font-ubuntuBold">
                <h4 className="text-white text-xl">
                    {title}
                </h4>
                <span className="text-slate-500 text-sm mt-2 block">
                    {description}
                </span>
            </div>
            <div className="size-85 mx-auto relative">
                <Chart options={options} series={series} type="radialBar" width={"100%"} height={"100%"} />
                <div className="bg-primary rounded-full p-3 size-13 text-white text-center -translate-1/2 absolute top-22 left-1/2">
                    <FaLaugh className="size-full" />
                </div>
                <div className="bg-secondary w-full rounded-2xl p-4 absolute bottom-5 flex justify-between items-stretch text-slate-400 text-sm">
                    <span>
                        {from}%
                    </span>
                    <div className="flex flex-col justify-start items-center">
                        <span className="text-white font-ubuntuMedium text-3xl">
                            {percent}%
                        </span>
                        <span className="capitalize">
                            {base}
                        </span>
                    </div>
                    <span>
                        {to}%
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ChartBar
