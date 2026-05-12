import { useState, Activity } from "react";
import Chart from "react-apexcharts";
import clsx from "clsx";
import { sales, overviewData } from "../../data/database.json";
import { IoWallet } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import StatisticalData from "../StatisticalData/StatisticalData";

const SalesChart = () => {
    const { activeUsers, data } = overviewData;
    const icons = {
        IoWallet: IoWallet,
        IoIosRocket: IoIosRocket,
        FaCartShopping: FaCartShopping,
        AiFillTool: AiFillTool
    }

    const [series, setSeries] = useState([
        {
            name: "sales",
            data: sales
        }
    ]);

    const [options, setOptions] = useState({
        chart: {
            type: "bar",
            height: "100%",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '10%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                }
            }
        },
        xaxis: {
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                show: true,
                style: {
                    colors: "#ffffff",
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
            min: 0,
            max: 500000,
            tickAmount: 5,
            labels: {
                show: true,
                formatter: (val) => Math.round(val).toLocaleString(),
                style: {
                    colors: "#ffffff",
                    fontSize: "10px",
                }
            }
        },
        colors: ["#ffffff"],
        tooltip: {
            y: {
                formatter: function (val) {
                    return `$${val.toLocaleString()}`;
                }
            },
            theme: "dark",
            background: "#333333",
        }
    });

    return (
        <div className="flex-3/2 lg:flex-3 xl:flex-1 bg-linear-to-br from-secondary to-tertiary rounded-3xl md:h-112 xs:px-6 flex flex-col justify-between items-start *:w-full">
            <div className="bg-secondary rounded-3xl h-55 pb-2 pr-2 xs:mt-6">
                <Chart options={options} series={series} type="bar" height="100%" className="xl:max-w-149 max-xxs:w-65! max-xxs:mx-auto" />
            </div>
            <div className="max-md:mt-5 max-xs:px-6">
                <h4 className="capitalize text-xl text-white font-ubuntuBold">active users</h4>
                <span className="text-slate-400 text-sm font-ubuntuMedium">
                    <span className={clsx("mr-1", activeUsers > 0 ? "text-green-500" : "text-red-500")}>
                        ({activeUsers > 0 ? `+${activeUsers}` : activeUsers})
                    </span>
                    than last week
                </span>
            </div>
            <Activity mode={data?.length ? "visible" : "hidden"}>
                <div className="flex justify-between items-center gap-10 flex-wrap max-md:mt-5 max-xs:px-6 pb-6">
                    {data?.map(item => {
                        const icon = icons[item.icon];
                        const percent = (item.value / item.max) * 100;
                        return <StatisticalData key={item?.id || item?.name} data={item} icon={icon} percent={percent} />
                    })}
                </div>
            </Activity>
        </div>
    );
}

export default SalesChart;
