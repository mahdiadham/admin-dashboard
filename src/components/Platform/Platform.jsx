import { Activity, useId, useState } from "react";
import Switch from "react-switch";
import { platformSettings } from "../../data/database.json";

const Platform = () => {
    const [settings, setSettings] = useState(platformSettings)

    const { title, account, application } = settings;
    const formID = useId();

    const handleToggle = (category, itemID) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [category]: prevSettings[category].map(item =>
                item?.id === itemID ? { ...item, checked: !item?.checked } : item
            )
        }));
    }

    return (
        <div className="h-auto xs:h-130 rounded-3xl p-6 bg-linear-to-r from-secondary to-tertiary flex-1">
            <h4 className="text-white font-ubuntuBold text-xl capitalize">
                {title}
            </h4>
            <Activity mode={account?.length ? "visible" : "hidden"}>
                <div className="mt-10">
                    <h5 className="text-slate-500 uppercase font-ubuntuBold text-xs mb-4">account</h5>
                    {account?.map(item =>
                        <div key={item?.id} className="flex justify-start items-center gap-x-4 not-last:mb-7">
                            <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                                offColor="#0F1535"
                                onColor="#0075FF"
                                height={20}
                                width={40}
                                handleDiameter={16}
                                id={`${formID}-${item?.id}`}
                                checked={item?.checked}
                                onChange={() => handleToggle("account", item?.id)}
                            />
                            <label htmlFor={`${formID}-${item?.id}`} className="text-slate-500 capitalize font-ubuntuMedium text-xs xs:text-sm">
                                {item?.label}
                            </label>
                        </div>
                    )}
                </div>
            </Activity>
            <Activity mode={application?.length ? "visible" : "hidden"}>
                <div className="mt-10">
                    <h5 className="text-slate-500 uppercase font-ubuntuBold text-xs mb-4">application</h5>
                    {application?.map(item =>
                        <div key={item?.id} className="flex justify-start items-center gap-x-4 not-last:mb-7">
                            <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                                offColor="#0F1535"
                                onColor="#0075FF"
                                height={20}
                                width={40}
                                handleDiameter={16}
                                id={`${formID}-${item?.id}`}
                                checked={item?.checked}
                                onChange={() => handleToggle("application", item?.id)}
                            />
                            <label htmlFor={`${formID}-${item?.id}`} className="text-slate-500 capitalize font-ubuntuMedium text-xs xs:text-sm">
                                {item?.label}
                            </label>
                        </div>
                    )}
                </div>
            </Activity>
        </div>
    );
}

export default Platform;
