import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import styles from "./NotFound.module.css";
import vector from "../../../../public/assets/images/elements/vector.webp"

const NotFound = () => {
    return (
        <div className={`${styles.notfound} inset-0 fixed flex flex-col justify-center items-center`}>
            <img src={vector} alt="vector" />
            <h2 className="text-white font-ubuntuBold text-8xl">404</h2>
            <h3 className="text-white font-ubuntuMedium text-3xl capitalize mt-4">page not found !</h3>
            <Link
                to="/"
                className="text-black capitalize flex items-center justify-center gap-2 mt-10 bg-white py-3 px-5 rounded-xl hover:-translate-y-1 transition font-ubuntuBold" replace>
                    back to home page
                    <FaArrowRight />
            </Link>
        </div>
    );
}

export default NotFound;