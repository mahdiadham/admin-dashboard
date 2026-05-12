import { Activity } from "react";
import { billingInfo } from "../../data/database.json";
import BillingInfoCard from "./components/BillingInfoCard/BillingInfoCard";

const BillingInfo = () => {
    return (
        <div className="flex-1/2 p-6 rounded-3xl bg-linear-to-r from-secondary to-tertiary h-auto xxs:h-156">
            <h4 className="font-ubuntuBold text-white capitalize text-xl mb-5">billing information</h4>
            <Activity mode={billingInfo?.length ? "visible" : "hidden"}>
                <div className="space-y-6">
                    {billingInfo?.map(item =>
                        <BillingInfoCard data={item} key={item?.id} />
                    )}
                </div>
            </Activity>
        </div>
    );
}

export default BillingInfo;
