import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { Outlet } from "react-router-dom";
import { useDashboardHeading } from "../hooks/useDashboardHeading";
import DashboardIcon from "../assets/icons/DashboardIcon";
import AdvertisementsIcon from "../assets/icons/AdvertisementsIcon";
import OfficesIcon from "../assets/icons/OfficesIcon";
import EstateIcon from "../assets/icons/EstateIcon";
import PackagesIcon from "../assets/icons/PackagesIcon";
import ReportsIcon from "../assets/icons/ReportsIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import { CompanyDashboardRoutes } from "../routes/CompanyDashboardRoutes";

const CompanyDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const title = useDashboardHeading(CompanyDashboardRoutes);

  const sidebarItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/company" },
    {
      text: "Advertisements",
      icon: <AdvertisementsIcon />,
      path: "/company/advertisements",
    },
    {
      text: "Real estate",
      icon: <EstateIcon />,
      path: "/company/estate",
    },
    {
      text: "Packages",
      icon: <PackagesIcon />,
      path: "/company/packages",
    },
    {
      text: "Office account",
      icon: <OfficesIcon />,
      path: "/company/office-account",
    },
    {
      text: "Report Ads",
      icon: <ReportsIcon />,
      path: "/company/reports",
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      path: "/company/settings",
    },
  ];

  return (
    <div className="flex min-h-full relative">
      <Sidebar
        open={isSidebarOpen}
        toggleDrawer={toggleSidebar}
        sidebarItems={sidebarItems}
        isCompanyDashboard={true}
      />
      <main className={`flex-1 mt-28 overflow-y-auto`}>
        <Header
          title={title}
          open={isSidebarOpen}
          toggleDrawer={toggleSidebar}
          isCompanyDashboard={true} 
        />
        <div
          className={`relative right-[30px] transition-all duration-300 ${
            isSidebarOpen
              ? "w-[calc(100%-60px)] left-[30px]"
              : "w-[calc(100%-156px)] left-[126px]"
          }`}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CompanyDashboardLayout;
