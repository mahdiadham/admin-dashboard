import toast from "react-hot-toast";

const CreditCard = ({ data }) => {
    const { title, icon, number, exp, cvv } = data;

    const copyToClipboard = cardNumber => {
        navigator.clipboard.writeText(cardNumber);
        toast.success("Card Number Copied To Clipboard !");
    }

    return (
        <div className="flex-1/3 rounded-3xl creditBg p-8 h-65 flex flex-col justify-between items-start">
            <div className="flex justify-between items-center w-full">
                <h4 className="capitalize text-white text-xl font-ubuntuMedium">
                    {title}
                </h4>
                <img src={icon} alt="icon" />
            </div>
            <div>
                <span className="text-2xl text-white mb-4 block font-ubuntuMedium cursor-pointer" title="Copy Card Number" onClick={() => copyToClipboard(number)}>
                    {
                        number
                        .replace(/\D/g, "")
                        .slice(0, 16)
                        .replace(/(.{4})/g, " $1 -")
                        .replace(/-$/, "")
                    }
                </span>
                <div className="flex justify-start items-center gap-x-10">
                    <div className="flex flex-col justify-start items-start uppercase font-ubuntuMedium text-white">
                        <span className="text-[10px] text-slate-400">valid thru</span>
                        <span>
                            {exp}
                        </span>
                    </div>
                    <div className="flex flex-col justify-start items-start uppercase font-ubuntuMedium text-white">
                        <span className="text-[10px] text-slate-400">cvv</span>
                        <span>
                            {cvv}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;
