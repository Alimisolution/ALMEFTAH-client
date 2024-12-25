import { useState } from "react";
import HomeCard from "./HomeCard";
import AdsCard from "./AdsCard";
import OfficesCard from "./OfficesCard";
import BlogCard from "./BlogCard";
import AboutUsCard from "./AboutUsCard";
import FaqCard from "./FaqCard";
import TermsCard from "./TermsCard";
import PrivacyCard from "./PrivacyCard";

const WebsiteSettingsCard = ({ appSettingsActiveSection }) => {
  const [activeWebsiteTab, setActiveWebsiteTab] = useState(1);
  const websiteSettingsTabs = [
    { id: 1, label: "Home" },
    { id: 2, label: "Ads" },
    { id: 3, label: "Offices" },
    { id: 4, label: "Blog" },
    { id: 5, label: "About us" },
    { id: 6, label: "FAQ" },
    { id: 7, label: "Terms & Conditions" },
    { id: 8, label: "Privacy & Policy" },
  ];

  return (
    <>
      {appSettingsActiveSection === 2 && (
        <div>
          <div className="bg-white rounded-[20px] px-[10px] mb-[30px] pt-[82px]">
            <div className="flex gap-x-[20px] items-center border-t border-[#E2E8F0] overflow-x-auto whitespace-nowrap">
              {websiteSettingsTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-[12px] text-[16px] leading-[17.6px] tracking-[-0.16px] transition-all duration-200 ${
                    activeWebsiteTab === tab.id
                      ? "border-b-2 border-[#0A62CC] text-[#0A62CC] font-[700]"
                      : "text-[#8BA3CB] hover:text-[#0A62CC] font-[500]"
                  }`}
                  onClick={() => setActiveWebsiteTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeWebsiteTab === 1 && <HomeCard />}
          {activeWebsiteTab === 2 && <AdsCard />}
          {activeWebsiteTab === 3 && <OfficesCard />}
          {activeWebsiteTab === 4 && <BlogCard />}
          {activeWebsiteTab === 5 && <AboutUsCard />}
          {activeWebsiteTab === 6 && <FaqCard />}
          {activeWebsiteTab === 7 && <TermsCard />}
          {activeWebsiteTab === 8 && <PrivacyCard />}
        </div>
      )}
    </>
  );
};

export default WebsiteSettingsCard;
