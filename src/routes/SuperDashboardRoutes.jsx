import DashboardHome from "../pages/super-dashboard/DashboardHome";
import Advertisements from "../pages/super-dashboard/Advertisements";
import Agencys from "../pages/super-dashboard/Agencys";
import Customer from "../pages/super-dashboard/Customer";
import Packages from "../pages/super-dashboard/Packages";
import SystemSettings from "../pages/super-dashboard/SystemSettings";
import Reports from "../pages/super-dashboard/Reports";
import Settings from "../pages/super-dashboard/Settings";
import AdsDetails from "../pages/super-dashboard/AdsDetails";
import AddProperty from "../pages/super-dashboard/AddProperty";
import PropertyFeatures from "../pages/super-dashboard/PropertyFeatures";
import AgencysDetails from "../pages/super-dashboard/AgencysDetails";
import SendAnEmail from "../pages/super-dashboard/SendAnEmail";
export const SuperDashboardRoutes = [
  {
    path: "/",
    element: <DashboardHome />,
    title: "Dashboard",
  },
  {
    path: "advertisements",
    element: <Advertisements />,
    title: "Advertisements",
  },
  {
    path: "ads-details",
    element: <AdsDetails />,
    title: "adsDetails",
  },
  {
    path: "add-property",
    element: <AddProperty />,
    title: "addProperty",
  },
  {
    path: "add-property/property-features",
    element: <PropertyFeatures />,
    title: "propertyFeatures",
  },
  {
    path: "agencys",
    element: <Agencys />,
    title: "Agencys",
  },
  {
    path: "agencys-details",
    element: <AgencysDetails />,
    title: "Agencys",
  },
  {
    path: "customer",
    element: <Customer />,
    title: "Customer",
  },
  {
    path: "customer/sendmail",
    element: <SendAnEmail />,
    title: "Send an email",
  },
  {
    path: "packages",
    element: <Packages />,
    title: "Packages",
  },
  {
    path: "system-settings",
    element: <SystemSettings />,
    title: "System settings",
  },
  {
    path: "reports",
    element: <Reports />,
    title: "Reports",
  },
  {
    path: "settings",
    element: <Settings />,
    title: "Settings",
  },
];
