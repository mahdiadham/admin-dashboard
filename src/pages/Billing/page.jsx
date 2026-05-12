import CreditCard from "../../components/CreditCard/CreditCard";
import CreditBalance from "../../components/CreditBalance/CreditBalance";
import Payment from "../../components/Payment/Payment";
import Invoices from "../../components/Invoices/Invoices";
import BillingInfo from "../../components/BillingInfo/BillingInfo";
import Transactions from "../../components/Transactions/Transactions";
import { creditCard, creditBalance, paymentMethod, invoices } from "../../data/database.json";

const Billing = () => {
    return (
        <section>
            <div className="flex justify-between items-center gap-4 flex-wrap">
                <div className="flex-3/2 2xl:flex-2 flex justify-between items-center gap-4 flex-wrap">
                    <CreditCard data={creditCard} />
                    <CreditBalance data={creditBalance} />
                    <Payment data={paymentMethod} />
                </div>
                <div className="flex-1">
                    <Invoices data={invoices} />
                </div>
            </div>
            <div className="flex justify-between items-center gap-4 flex-wrap mt-7">
                <BillingInfo />
                <Transactions />
            </div>
        </section>
    );
}

export default Billing;
