import SettingIcon from "../../../assets/icons/SettingIcon.jsx";
import ComputerSetting from "../../../assets/icons/ComputerSetting.jsx";
import AiPhoneIcon from "../../../assets/icons/AiPhoneIcon.jsx";
import PaintBoardIcon from "../../../assets/icons/PaintBoardIcon.jsx";
import NotificationIcon from "../../../assets/icons/NotificationIcon.jsx";
import CustomerSupportIcon from "../../../assets/icons/CustomerSupportIcon.jsx";
import EmailEditIcon from "../../../assets/icons/EmailEditIcon.jsx";
const GlobalSettingsTabs = ({
  appSettingsActiveSection,
  setAppSettingsActiveSection,
}) => {
  const appSettingsSection = [
    { id: 1, label: "Global settings", icon: <SettingIcon /> },
    { id: 2, label: "Website settings", icon: <ComputerSetting /> },
    { id: 3, label: "App settings", icon: <AiPhoneIcon /> },
    { id: 4, label: "Theme & Logo", icon: <PaintBoardIcon /> },
    { id: 5, label: "Notifications", icon: <NotificationIcon /> },
    { id: 6, label: "Support", icon: <CustomerSupportIcon /> },
    { id: 7, label: "Email templates", icon: <EmailEditIcon /> },
  ];
  return (
    <div className="bg-white rounded-[20px] py-[20px] px-[10px] mb-[40px] col-span-1">
      <div className="">
        <h2 className="text-[20px] text-[#000929] font-[500] leading-[22px] tracking-[-0.2px] mb-[40px]">
          Global settings
        </h2>

        {appSettingsSection.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-[10px] border-2 cursor-pointer rounded-[16px] mb-[20px] bg-[#F7F7FD] h-[64px] py-[13px] px-[10px] ${
              appSettingsActiveSection === item.id
                ? "border-[#0A62CC]"
                : "border-[#C4D9F2]"
            }`}
            onClick={() => setAppSettingsActiveSection(item.id)}
          >
            <div className="w-[38px] h-[38px] flex items-center justify-center bg-white/60 border-2 border-[#C4D9F2] rounded-[6px]">
              {item.icon}
            </div>
            <span
              className={`text-[16px] text-[#000929]  leading-[22px] tracking-[-0.2px] 
            ${
              appSettingsActiveSection === item.id ? "font-[700]" : "font-[500]"
            }
            `}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalSettingsTabs;
