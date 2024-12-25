import DashboardHome from "../pages/company-dashboard/DashboardHome";
import Advertisements from "../pages/company-dashboard/Advertisements";
import RealEsate from "../pages/company-dashboard/RealEsate";
import AdsDetails from "../pages/company-dashboard/AdsDetails"
import Packages from "../pages/company-dashboard/Packages";
import OfficeAccount from "../pages/company-dashboard/OfficeAccount"
import Reports from "../pages/company-dashboard/Reports";
import Settings from "../pages/company-dashboard/Settings";

import AddProperty from "../pages/company-dashboard/AddProperty";
import PropertyFeatures from "../pages/company-dashboard/PropertyFeatures";
export const CompanyDashboardRoutes = [
  {
    path: "/",
    element: <DashboardHome />,
    title:"Dashboard"
  },
  {
    path: "advertisements",
    element: <Advertisements />,
    title:"Advertisements"
  },
  {
    path: "estate",
    element: <RealEsate />,
    title:"Real estate"
  },
  {
    path: "ads-details",
    element: <AdsDetails />,
    title:"adsDetails"
  },
  {
    path: "add-property",
    element: <AddProperty />,
    title:"addProperty"
  },
  {
    path: "add-property/property-features",
    element: <PropertyFeatures />,
    title:"propertyFeatures"
  },
  {
    path: "office-account",
    element: <OfficeAccount />,
    title:"Office account"
  },
  {
    path: "packages",
    element: <Packages />,
    title:"Packages"
  },
  {
    path: "Reports",
    element: <Reports />,
    title:"System settings"
  },
  {
    path: "reports",
    element: <Reports />,
    title:"Reports"
  },
  {
    path: "settings",
    element: <Settings />,
    title:"Settings"
  },
];

