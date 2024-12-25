import { useState } from "react";
import AccountIcon from "../../assets/icons/AccountIcon.jsx";
import FingerAccessIcon from "../../assets/icons/FingerAccessIcon.jsx";
import SecurityIcon from "../../assets/icons/SecurityIcon";
import CreditIcon from "../../assets/icons/CreditIcon.jsx";
import AdminAccessRightsCard from "../../components/dashboard/settings/AdminAccessRightsCard.jsx";
import AdminAccountCard from "../../components/dashboard/settings/AdminAccountCard.jsx";
import AdminCreditCard from "../../components/dashboard/settings/AdminCreditCard.jsx";
import AdminPasswordCard from "../../components/dashboard/settings/AdminPasswordCard.jsx";
import AdminTabs from "../../components/dashboard/settings/AdminTabs";

const Settings = () => {
  const [settingsActivationSection, setSettingsActivationSection] = useState(1);
  const accountTabs = [
    { id: 1, label: "My account", icon: <AccountIcon /> },
    { id: 2, label: "Access rights", icon: <FingerAccessIcon /> },
    { id: 3, label: "Password", icon: <SecurityIcon /> },
    { id: 4, label: "Credit card", icon: <CreditIcon /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-[30px]">
      <div className="bg-white rounded-[20px] py-[30px] px-[20px] mb-[40px] col-span-1 h-full">
        <div className="h-full">
          <h2 className="text-[20px] text-[#000929] font-[600] leading-[22px] tracking-[-0.2px] pb-[20px] border-b-[2px] border-[#E0E4EC] mb-[20px]">
            My account
          </h2>
          <AdminTabs
            tabs={accountTabs}
            activeTab={settingsActivationSection}
            onTabClick={setSettingsActivationSection}
          />
        </div>
      </div>
      <div className="col-span-2">
        {settingsActivationSection === 1 && <AdminAccountCard />}
        {settingsActivationSection === 2 && <AdminAccessRightsCard />}
        {settingsActivationSection === 3 && <AdminPasswordCard />}
        {settingsActivationSection === 4 && <AdminCreditCard />}
      </div>
    </div>
  );
};

export default Settings;
