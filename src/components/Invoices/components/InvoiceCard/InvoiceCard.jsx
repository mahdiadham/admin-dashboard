import { FaFilePdf } from "react-icons/fa6";

const InvoiceCard = ({ data }) => {
    const { date, tag, price, link } = data;

    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start capitalize font-ubuntuMedium gap-y-1">
                <span className="text-white text-sm">
                    {date}
                </span>
                <span className="text-slate-400 text-xs">
                    #{tag}
                </span>
            </div>
            <div className="flex justify-end items-center gap-x-10 font-ubuntuMedium">
                <span className="text-slate-500">
                    ${price}
                </span>
                <a href={link} download>
                    <FaFilePdf className="size-5 text-white" />
                </a>
            </div>
        </div>
    );
}

export default InvoiceCard;
