import { Outlet } from "react-router";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

const Profile = () => {
    return (
        <section>
            <ProfileHeader />
            <Outlet />
        </section>
    )
}

export default Profile;
