import { useState } from "react";
import RegistrationCard from "./RegistrationCard";
import CityCard from "./CityCard";
import ExploreCard from "./ExploreCard";

const AppSettingsCard = ({ appSettingsActiveSection }) => {
  const [activeAppTab, setActiveAppTab] = useState(1);

  const appSettingsTabs = [
    { id: 1, label: "Registration" },
    { id: 2, label: "City" },
    { id: 3, label: "Explore" },
  ];

  return (
    <>
      {appSettingsActiveSection === 3 && (
        <>
          <div className="bg-white rounded-[20px] px-[10px] mb-[30px] pt-[82px]">
            <div className="flex gap-x-[20px] items-center border-t border-[#E2E8F0] overflow-x-auto whitespace-nowrap">
              {appSettingsTabs.map((tab) => (
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
          {activeAppTab === 1 && <RegistrationCard />}
          {activeAppTab === 2 && <CityCard />}
          {activeAppTab === 3 && <ExploreCard />}
        </>
      )}
    </>
  );
};

export default AppSettingsCard;
