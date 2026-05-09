import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import clsx from "clsx";

const Intro = ({ data, flex, type, height }) => {
    const { fullname } = data;

    return (
        <div className={clsx(`flex flex-col justify-between items-start rounded-3xl p-6 h-${height} flex-${flex}`, parseInt(type) === 1 ? "jellyfish" : parseInt(type) === 2 ? "introBg" : "")}>
            {parseInt(type) === 1 ?
                <div className="text-slate-500 font-ubuntuMedium">
                    <span>Welcome back,</span>
                    <h3 className="text-white! text-[33px] font-ubuntuBold capitalize mt-1">{fullname}</h3>
                    <span className="block mt-3 w-45">
                        Glad to see you again!
                        Ask me anything.
                    </span>
                </div> :
                <div>
                    <h3 className="font-ubuntuBold text-white capitalize text-3xl">welcome back !</h3>
                    <span className="capitalize text-slate-200 mt-1 font-ubuntuMedium block text-sm">
                        nice to see you, {fullname} !
                    </span>
                </div>
            }
            <Link to="/" className="flex justify-start items-center gap-x-2 text-white capitalize hover:*:[svg]:translate-x-1">
                tap to record
                <FaArrowRight className="size-3 transition-transform duration-150" />
            </Link>
        </div>
    )
}

export default Intro;
