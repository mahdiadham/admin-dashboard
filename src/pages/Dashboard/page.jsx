import { Activity } from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import Intro from "../../components/Intro/Intro";
import SatisfactionChart from "../../components/SatisfactionChart/SatisfactionChart";
import SafetyChart from "../../components/SafetyChart/SafetyChart";
import SalesPlatformChart from "../../components/SalesPlatformChart/SalesPlatformChart";
import SalesChart from "../../components/SalesChart/SalesChart";
import Projects from "../../components/Projects/Projects";
import Orders from "../../components/Orders/Orders";
import { infoCard, profile } from "../../data/database.json";
import { IoWallet } from "react-icons/io5";
import { GiEarthAmerica } from "react-icons/gi";
import { IoDocument } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Dashboard = () => {
    const icons = {
        IoWallet: IoWallet,
        GiEarthAmerica: GiEarthAmerica,
        IoDocument: IoDocument,
        FaCartShopping: FaCartShopping
    }

    return (
        <section>
            <Activity mode={infoCard?.length ? "visible" : "hidden"}>
                <div className="flex justify-between items-center flex-wrap gap-6">
                    {infoCard?.map(card => {
                        const Icon = icons[card?.icon];
                        return <InfoCard key={card?.id} Icon={Icon} title={card?.title} value={card?.value} profit={card?.profit} cash={card?.cash} />;
                    })}
                </div>
            </Activity>
            <div className="flex justify-between items-center gap-4 flex-wrap mt-7">
                <Intro data={profile} flex={2} type={1} height={85} />
                <SatisfactionChart />
                <SafetyChart />
            </div>
            <div className="flex justify-between items-center gap-4 flex-wrap mt-7">
                <SalesPlatformChart />
                <SalesChart />
            </div>
            <div className="flex justify-between items-center gap-4 flex-wrap mt-7">
                <Projects />
                <Orders />
            </div>
        </section>
    );
}

export default Dashboard;
