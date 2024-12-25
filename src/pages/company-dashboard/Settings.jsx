import { useState } from "react";
import CompanyTabs from "../../components/dashboard/settings/CompanyTabs"; // Adjust the import path as needed
import AccountIcon from "../../assets/icons/AccountIcon.jsx";
import SecurityIcon from "../../assets/icons/SecurityIcon";
import CreditIcon from "../../assets/icons/CreditIcon.jsx";
import CustomerSupportIcon from "../../assets/icons/CustomerSupportIcon";
import AboutIcon from "../../assets/icons/AboutIcon.jsx";
import FaqIcon from "../../assets/icons/FaqIcon.jsx";
import TermsIcon from "../../assets/icons/TermsIcon.jsx";
import PrivacyIcon from "../../assets/icons/PrivacyIcon.jsx";
import CompanyAccountCard from "../../components/dashboard/settings/CompanyAccountCard.jsx";
import CompanyPasswordCard from "../../components/dashboard/settings/CompanyPasswordCard.jsx";
import CompanySupportCard from "../../components/dashboard/settings/CompanySupportCard.jsx";
import CompanyTermsCard from "../../components/dashboard/settings/CompanyTermsCard.jsx";
import CompanyCreditCard from "../../components/dashboard/settings/CompanyCreditCard.jsx";
import CompanyAboutCard from "../../components/dashboard/settings/CompanyAboutCard.jsx";
import CompanyFaqCard from "../../components/dashboard/settings/CompanyFaqCard.jsx";
import CompanyPrivacyCard from "../../components/dashboard/settings/CompanyPrivacyCard.jsx";

const Settings = () => {
  const [settingsActivationSection, setSettingsActivationSection] = useState(1);

  const AccountTabs = [
    { id: 1, label: "My account", icon: <AccountIcon /> },
    { id: 2, label: "Password", icon: <SecurityIcon /> },
    { id: 3, label: "Credit card", icon: <CreditIcon /> },
  ];
  const almeftahTabs = [
    { id: 4, label: "About us", icon: <AboutIcon /> },
    { id: 5, label: "FAQ", icon: <FaqIcon /> },
    { id: 6, label: "Terms & Conditions", icon: <TermsIcon /> },
    { id: 7, label: "Privacy & Policy", icon: <PrivacyIcon /> },
    { id: 8, label: "Technical support", icon: <CustomerSupportIcon /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-[30px]">
      <div className="bg-white rounded-[20px] py-[30px] px-[20px] mb-[40px] col-span-1 h-full">
        <div className="h-full">
          <h2 className="text-[20px] text-[#000929] font-[600] leading-[22px] tracking-[-0.2px] pb-[20px] border-b-[2px] border-[#E0E4EC] mb-[20px]">
            My account
          </h2>
          <CompanyTabs
            tabs={AccountTabs}
            activeSection={settingsActivationSection}
            onTabClick={setSettingsActivationSection}
          />
          <h2 className="text-[20px] text-[#000929] font-[600] leading-[22px] tracking-[-0.2px] pb-[20px] border-b-[2px] border-[#E0E4EC] mb-[20px]">
            ALMEFTAH
          </h2>
          <CompanyTabs
            tabs={almeftahTabs}
            activeSection={settingsActivationSection}
            onTabClick={setSettingsActivationSection}
          />
        </div>
      </div>
      <div className="col-span-2">
        {settingsActivationSection === 1 && <CompanyAccountCard />}
        {settingsActivationSection === 2 && <CompanyPasswordCard />}
        {settingsActivationSection === 3 && <CompanyCreditCard />}
        {settingsActivationSection === 4 && <CompanyAboutCard />}
        {settingsActivationSection === 5 && <CompanyFaqCard />}
        {settingsActivationSection === 6 && <CompanyTermsCard />}
        {settingsActivationSection === 7 && <CompanyPrivacyCard />}
        {settingsActivationSection === 8 && <CompanySupportCard />}
      </div>
    </div>
  );
};

export default Settings;
