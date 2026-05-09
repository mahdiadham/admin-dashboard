import Intro from "../../../../components/Intro/Intro";
import CarInfo from "../../../../components/CarInfo/CarInfo";
import ProfileInfo from "../../../../components/ProfileInfo/ProfileInfo";
import Platform from "../../../../components/Platform/Platform";
import Portfolio from "../../../../components/Portfolio/Portfolio";
import { profile } from "../../../../data/database.json";

const Overview = () => {
    return (
        <>
            <div className="flex justify-between items-center flex-wrap gap-6 mt-6">
                <Intro data={profile} flex={1} bg={"../../../public/assets/images/elements/profile-bg.webp"} type={2} height={100} />
                <CarInfo />
                <ProfileInfo />
            </div>
            <div className="flex justify-between items-center flex-wrap gap-6 mt-6">
                <Platform />
                <Portfolio />
            </div>
        </>
    );
}

export default Overview;
