import { useState } from "react";
import PropertyTypeCard from "./PropertyTypeCard.jsx";
import SocialMediaLinksCard from "./SocialMediaLinksCard.jsx";
import TypesOfRentalsCard from "./TypesOfRentalsCard.jsx";
import AppStoreLinkCard from "./AppStoreLinkCard.jsx";
import FeaturesCard from "./FeaturesCard.jsx";
import FurnishingCard from "./FurnishingCard.jsx";
import AmenitiesCard from "./AmenitiesCard.jsx";
import LoginSignupCard from "./LoginSignupCard";

const GlobalSettingsCard = ({ appSettingsActiveSection }) => {
  const [activeGlobalTab, setActiveGlobalTab] = useState(1);
  const globalSettingsTabs = [
    { id: 1, label: "Property type" },
    { id: 2, label: "Social media links" },
    { id: 3, label: "App store link" },
    { id: 4, label: "Types of rentals" },
    { id: 5, label: "Features" },
    { id: 6, label: "Furnishing" },
    { id: 7, label: "Amenities" },
    { id: 8, label: "Login & Sign up" },
  ];
  return (
    <>
      {appSettingsActiveSection === 1 && (
        <>
          <div className="bg-white rounded-[20px] px-[10px] mb-[30px] pt-[82px]">
            <div className="flex gap-x-[20px] items-center border-t border-[#E2E8F0] overflow-x-auto whitespace-nowrap">
              {globalSettingsTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-[12px] text-[16px] leading-[17.6px] tracking-[-0.16px] transition-all duration-200 ${
                    activeGlobalTab === tab.id
                      ? "border-b-2 border-[#0A62CC] text-[#0A62CC] font-[700]"
                      : "text-[#8BA3CB] hover:text-[#0A62CC] font-[500]"
                  }`}
                  onClick={() => setActiveGlobalTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-[#F6F6F6]">
            {activeGlobalTab === 1 && <PropertyTypeCard />}
            {activeGlobalTab === 2 && <SocialMediaLinksCard />}
            {activeGlobalTab === 3 && <AppStoreLinkCard />}
            {activeGlobalTab === 4 && <TypesOfRentalsCard />}
            {activeGlobalTab === 5 && <FeaturesCard />}
            {activeGlobalTab === 6 && <FurnishingCard />}
            {activeGlobalTab === 7 && <AmenitiesCard />}
            {activeGlobalTab === 8 && <LoginSignupCard />}
          </div>
        </>
      )}
    </>
  );
};

export default GlobalSettingsCard;
