import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { Outlet } from "react-router-dom";
import { SuperDashboardRoutes } from "../routes/SuperDashboardRoutes";
import { useDashboardHeading } from "../hooks/useDashboardHeading";
import DashboardIcon from "../assets/icons/DashboardIcon";
import AdvertisementsIcon from "../assets/icons/AdvertisementsIcon";
import OfficesIcon from "../assets/icons/OfficesIcon";
import UsersIcon from "../assets/icons/UsersIcon";
import PackagesIcon from "../assets/icons/PackagesIcon";
import SystemIcon from "../assets/icons/SystemIcon";
import ReportsIcon from "../assets/icons/ReportsIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";

const SuperDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const title = useDashboardHeading(SuperDashboardRoutes);

  const sidebarItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/super-dashboard" },
    { text: "Advertisements", icon: <AdvertisementsIcon />, path: "/super-dashboard/advertisements" },
    { text: "Agencys", icon: <OfficesIcon />, path: "/super-dashboard/agencys" },
    { text: "Customer", icon: <UsersIcon />, path: "/super-dashboard/customer" },
    { text: "Packages", icon: <PackagesIcon />, path: "/super-dashboard/packages" },
    { text: "System Settings", icon: <SystemIcon />, path: "/super-dashboard/system-settings" },
    { text: "Reports", icon: <ReportsIcon />, path: "/super-dashboard/reports" },
    { text: "Settings", icon: <SettingsIcon />, path: "/super-dashboard/settings" },
  ];

  return (
    <div className="flex min-h-full relative">
      <Sidebar open={isSidebarOpen} toggleDrawer={toggleSidebar} sidebarItems={sidebarItems} />
      <main className={`flex-1 mt-28 overflow-y-auto`}>
      <Header
          title={title}
          open={isSidebarOpen}
          toggleDrawer={toggleSidebar}
          isCompanyDashboard={false} 
        />
        <div className={`relative right-[30px] transition-all duration-300 ${isSidebarOpen ? "w-[calc(100%-60px)] left-[30px]" : "w-[calc(100%-156px)] left-[126px]"}`}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SuperDashboardLayout;
