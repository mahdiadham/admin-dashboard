import { Activity } from "react";
import { profile } from "../../data/database.json";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const ProfileInfo = () => {
    const { fullname, mobile, countryCode, email, location, description, social } = profile;
    const icons = {
        FaFacebookSquare: FaFacebookSquare,
        FaTwitter: FaTwitter,
        FaInstagram: FaInstagram
    }

    return (
        <div className="flex-1 bg-secondary rounded-3xl p-6 h-100">
            <h4 className="text-white text-xl capitalize font-ubuntuBold">profile information</h4>
            <p className="text-slate-400 capitalize text-sm text-justify font-ubuntuMedium my-7">
                {description}
            </p>
            <div className="flex flex-col justify-start items-start gap-y-4 *:flex *:justify-start *:items-center *:gap-x-3 *:text-slate-400 *:text-sm capitalize">
                <span>
                    full name:
                    <span className="text-white">
                        {fullname}
                    </span>
                </span>
                <span>
                    mobile:
                    <a href={`tel:+${countryCode}${mobile}`} className="text-white">
                        ({countryCode}) {mobile}
                    </a>
                </span>
                <span>
                    email:
                    <a href={`mailto:${email}`} className="text-white lowercase">
                        {email}
                    </a>
                </span>
                <span>
                    location:
                    <span className="text-white">
                        {location}
                    </span>
                </span>
                <Activity mode={social?.length ? "visible" : "hidden"}>
                    <div>
                        <span>social:</span>
                        <div className="flex justify-start items-center gap-x-3 text-white">
                            {social?.map(item => {
                                const Icons = icons[item?.icon];
                                return (
                                    <a key={item?.name} href={item?.link} target="_blank" referrerPolicy="no-referrer">
                                        <Icons />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </Activity>
            </div>
        </div>
    );
}

export default ProfileInfo;