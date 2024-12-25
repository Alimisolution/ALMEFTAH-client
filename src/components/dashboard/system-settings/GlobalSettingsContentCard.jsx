import ThemeCard from "./ThemeCard.jsx";
import NotificationsCard from "./NotificationsCard.jsx";
import SupportCard from "./SupportCard.jsx";
import GlobalSettingsCard from "./GlobalSettingsCard.jsx";
import WebsiteSettingsCard from "./WebsiteSettingsCard.jsx";
import AppSettingsCard from "./AppSettingsCard.jsx";
import EmailTemplatesCard from "./EmailTemplatesCard.jsx";
const GlobalSettingsContentCard = ({
  appSettingsActiveSection,
  setAppSettingsActiveSection,
}) => {
  return (
    <div>
      {/* Global Settings */}
      {appSettingsActiveSection === 1 && (
        <GlobalSettingsCard
          appSettingsActiveSection={appSettingsActiveSection}
          setAppSettingsActiveSection={setAppSettingsActiveSection}
        />
      )}

      {/* Website Settings */}
      {appSettingsActiveSection === 2 && (
        <WebsiteSettingsCard
          appSettingsActiveSection={appSettingsActiveSection}
          setAppSettingsActiveSection={setAppSettingsActiveSection}
        />
      )}

      {/* App Settings */}
      {appSettingsActiveSection === 3 && (
        <AppSettingsCard
          appSettingsActiveSection={appSettingsActiveSection}
          setAppSettingsActiveSection={setAppSettingsActiveSection}
        />
      )}

      {/* Theme & Logo */}
      {appSettingsActiveSection === 4 && <ThemeCard />}

      {/* Notifications */}
      {appSettingsActiveSection === 5 && <NotificationsCard />}

      {/* Support */}
      {appSettingsActiveSection === 6 && <SupportCard />}
      {appSettingsActiveSection === 7 && (
        <EmailTemplatesCard
          appSettingsActiveSection={appSettingsActiveSection}
          setAppSettingsActiveSection={setAppSettingsActiveSection}
        />
      )}
    </div>
  );
};

export default GlobalSettingsContentCard;
