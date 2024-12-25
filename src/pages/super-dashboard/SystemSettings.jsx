import { useState } from "react";
import GlobalSettingsTabs from "../../components/dashboard/system-settings/GlobalSettingsTabs.jsx";
import GlobalSettingsContentCard from "../../components/dashboard/system-settings/GlobalSettingsContentCard.jsx";

const SystemSettings = () => {
  const [appSettingsActiveSection, setAppSettingsActiveSection] = useState(1);

  return (
    <div className="grid grid-cols-3 gap-x-[30px]">
      <GlobalSettingsTabs
        appSettingsActiveSection={appSettingsActiveSection}
        setAppSettingsActiveSection={setAppSettingsActiveSection}
      />

      <div className="col-span-2">
        <GlobalSettingsContentCard
          appSettingsActiveSection={appSettingsActiveSection}
          setAppSettingsActiveSection={setAppSettingsActiveSection}
        />
      </div>
    </div>
  );
};

export default SystemSettings;
