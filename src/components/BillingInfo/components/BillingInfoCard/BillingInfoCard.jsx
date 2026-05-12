import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";

const BillingInfoCard = ({ data }) => {
    const { title, companyName, email, VATNumber } = data;

    return (
        <div className="bg-linear-to-br from-tertiary to-secondary rounded-2xl p-6">
            <div className="flex justify-between items-center mb-3">
                <h5 className="font-ubuntuMedium text-white capitalize">
                    {title}
                </h5>
                <div className="*:uppercase font-ubuntuBold flex justify-end items-center gap-x-5 sm:gap-x-10 text-sm *:cursor-pointer">
                    <button className="text-red-500 flex justify-center items-center gap-x-2">
                        <FaTrashCan className="size-4" />
                        <span className="max-sm:hidden">delete</span>
                    </button>
                    <button className="text-slate-400 flex justify-center items-center gap-x-2">
                        <FaPen className="size-4" />
                        <span className="max-sm:hidden">edit</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-y-2 text-slate-400 text-xs xs:text-sm *:not-even:capitalize">
                <span>
                    company name:
                    <span className="ml-2">
                        {companyName}
                    </span>
                </span>
                <span>
                    Email Address:
                    <span className="ml-2">
                        {email}
                    </span>
                </span>
                <span>
                    VAT number:
                    <span className="ml-2">
                        {VATNumber}
                    </span>
                </span>
            </div>
        </div>
    );
}

export default BillingInfoCard;
