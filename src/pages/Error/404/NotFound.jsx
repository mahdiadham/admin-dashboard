import { Link } from "react-router";
import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className="text-center pt-10 flex flex-col justify-center items-center gap-y-6">
            <span className={styles.label}>
                not found !
            </span>
            <Link to="/" className="text-[#020618] bg-slate-500 rounded-lg px-6 py-2 font-bold" replace>
                back home
            </Link>
        </div>
    );
}

export default NotFound;