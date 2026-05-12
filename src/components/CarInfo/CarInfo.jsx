import { useState } from "react";
import Chart from "react-apexcharts";
import InfoCard from "./components/InfoCard/InfoCard";
import { profile, carInformation } from "../../data/database.json";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineElectricCar } from "react-icons/md";

const CarInfo = () => {
    const { fullname } = profile;
    const { title, batteryCharge, fullChargeTime, batteryHealth, efficiency, consumption, distance } = carInformation;

    const [batterySeries, setBatterySeries] = useState([batteryCharge]);

    const [efficiencySeries, setEfficiencySeries] = useState([
        {
            name: efficiency?.chart?.name,
            data: efficiency?.chart?.value
        }
    ]);

    const [distanceSeries, setDistanceSeries] = useState([
        {
            name: distance?.chart?.name,
            data: distance?.chart?.value
        }
    ]);

    const [batteryOptions, setBatteryOptions] = useState({
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
                    size: "70%",
                    background: "#070C28",
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

    const [baseChartOptions, setBaseChartOptions] = useState({
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
            show: false,
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
                show: false,
                style: {
                    colors: "#c8cfca",
                    fontSize: "10px",
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            min: 100,
            max: 600,
            tickAmount: 5,
            labels: {
                show: false,
                formatter: (val) => Math.round(val),
                style: {
                    colors: "#c8cfca",
                    fontSize: "10px",
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
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

    const [efficiencyOptions, setEfficiencyOptions] = useState({
        ...baseChartOptions,
        colors: ['#00E396']
    });

    const [distanceOptions, setDistanceOptions] = useState({
        ...baseChartOptions,
        colors: ['#0075ff']
    });

    const chargeHour = Math.floor(fullChargeTime / 60);
    const chargeMinute = Math.floor(fullChargeTime % 60);

    return (
        <div className="p-6 rounded-3xl bg-linear-to-br from-secondary to-tertiary flex-1/2 lg:flex-1/3 2xl:h-100">
            <h4 className="text-white text-xl capitalize font-ubuntuBold">
                {title}
            </h4>
            <span className="text-slate-400 capitalize mt-2 block text-sm">
                hello, {fullname}! your car is ready.
            </span>
            <div className="flex max-2xl:flex-col justify-between items-center max-2xl:gap-y-7">
                <div className="flex flex-col justify-center items-center">
                    <div className="relative size-55 xxs:size-60">
                        <Chart options={batteryOptions} series={batterySeries} type="radialBar" height={"100%"} width={"100%"} />
                        <div className="absolute -translate-1/2 top-1/2 left-1/2 flex flex-col justify-center items-center gap-y-2">
                            <BsFillLightningChargeFill className="size-6 text-emerald-500" />
                            <span className="font-ubuntuBold text-white text-4xl">
                                {batteryCharge}%
                            </span>
                            <span className="capitalize text-slate-400 text-sm font-ubuntuMedium">current load</span>
                        </div>
                    </div>
                    <span className="text-white font-ubuntuBold text-xl">
                        {chargeHour}h {chargeMinute} min
                    </span>
                    <span className="text-slate-400 capitalize font-ubuntuMedium text-sm mt-1">time to full charge</span>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-5">
                    <InfoCard title={batteryHealth?.title} value={batteryHealth?.value} type={"icon"}>
                        <div className="rounded-2xl bg-primary size-14 overflow-hidden flex justify-center items-center">
                            <MdOutlineElectricCar className="text-white size-7" />
                        </div>
                    </InfoCard>
                    <InfoCard title={efficiency?.title} value={efficiency?.value} type={"chart"}>
                        <div className="h-14">
                            <Chart options={efficiencyOptions} series={efficiencySeries} type="area" height="140%" width={140} />
                        </div>
                    </InfoCard>
                    <InfoCard title={consumption?.title} value={consumption?.value} type={"icon"}>
                        <div className="rounded-2xl bg-primary size-14 overflow-hidden flex justify-center items-center">
                            <BsFillLightningChargeFill className="size-6 text-white" />
                        </div>
                    </InfoCard>
                    <InfoCard title={distance?.title} value={distance?.value} type={"chart"}>
                        <div className="h-14">
                            <Chart options={distanceOptions} series={distanceSeries} type="area" height="140%" width={115} />
                        </div>
                    </InfoCard>
                </div>
            </div>
        </div>
    );
}

export default CarInfo;
