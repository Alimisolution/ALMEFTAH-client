import { useState } from "react";
import LoginInfo from "./LoginInfo"
import ResetPassword from "./ResetPassword"
import AgencyVerified from "./AgencyVerified"
import PackageRenewal from "./PackageRenewal"
import ExtendThePlan from "./ExtendThePlan"
const EmailTemplatesCard = ({ appSettingsActiveSection }) => {
  const [activeAppTab, setActiveAppTab] = useState(1);

  const emailTemplateTabs = [
    { id: 1, label: "Login info" },
    { id: 2, label: "Reset password" },
    { id: 3, label: "Agency Verified" },
    { id: 4, label: "Package renewal" },
    { id: 5, label: "Extend the plan" },

  ];

  return (
    <>
      {appSettingsActiveSection === 7 && (
        <>
          <div className="bg-white rounded-[20px] px-[10px] mb-[30px] pt-[82px]">
            <div className="flex gap-x-[20px] items-center border-t border-[#E2E8F0] overflow-x-auto whitespace-nowrap">
              {emailTemplateTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-[12px] text-[16px] leading-[17.6px] tracking-[-0.16px] transition-all duration-200 ${
                    activeAppTab === tab.id
                      ? "border-b-2 border-[#0A62CC] text-[#0A62CC] font-[700]"
                      : "text-[#8BA3CB] hover:text-[#0A62CC] font-[500]"
                  }`}
                  onClick={() => setActiveAppTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {activeAppTab === 1 && <LoginInfo />}
          {activeAppTab === 2 && <ResetPassword />}
          {activeAppTab === 3 && <AgencyVerified />}
          {activeAppTab === 4 && <PackageRenewal />}
          {activeAppTab === 5 && <ExtendThePlan />}
        </>
      )}
    </>
  );
};



export default EmailTemplatesCard