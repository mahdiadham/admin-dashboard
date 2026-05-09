import { useState } from "react";
import Chart from "react-apexcharts";
import { salesPlatform } from "../../data/database.json";
import clsx from "clsx";
import ThisYear from "../../utilities/ThisYear";

const SalesPlatformChart = () => {
    const { title, mobileApps, websites, profit } = salesPlatform;

    const [series, setSeries] = useState([
        {
            name: mobileApps?.name,
            data: mobileApps?.value
        },
        {
            name: websites?.name,
            data: websites?.value
        }
    ]);

    const [options, setOptions] = useState({
        chart: {
            height: "100%",
            type: "area",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            borderColor: "#848b86",
            strokeDashArray: 5,
            yaxis: {
                lines: {
                    show: true,
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.7,
                opacityTo: 0,
                stops: [0, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 4
        },
        xaxis: {
            type: "category",
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
                style: {
                    colors: "#c8cfca",
                    fontSize: "10px",
                }
            },
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: true
            }
        },
        yaxis: {
            min: 100,
            max: 600,
            tickAmount: 5,
            labels: {
                formatter: (val) => Math.round(val),
                style: {
                    colors: "#c8cfca",
                    fontSize: "10px",
                }
            }
        },
        tooltip: {
            y: {
                formatter: (val) => val
            },
            theme: 'dark',
            background: '#333333',
        },
        legend: {
            show: false
        }
    });

    return (
        <div className="flex-3 h-112 bg-linear-to-br from-secondary to-tertiary rounded-3xl p-6 flex flex-col justify-between items-start *:w-full">
            <div>
                <h4 className="text-white text-xl capitalize font-ubuntuBold">
                    {title}
                </h4>
                <span className="text-sm font-ubuntuBold text-slate-500">
                    <span className={clsx("mr-1", profit > 0 ? "text-green-500" : "text-red-500")}>
                        {profit > 0 ? `+${profit}% more` : `${profit}% less`}
                    </span>
                    in {ThisYear()}
                </span>
            </div>
            <Chart options={options} series={series} type="area" height="80%" />
        </div>
    );
};

export default SalesPlatformChart;