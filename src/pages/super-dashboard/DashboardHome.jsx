import StatsCards from "../../components/dashboard/home/StatsCards";
import ChartCard from "../../components/dashboard/home/ChartCard";
import RecentPropertiesCard from "../../components/dashboard/home/RecentPropertiesCard";
import OfficesCard from "../../components/dashboard/home/OfficesCard";
const DashboardHome = () => {
  return (
    <section>
      <StatsCards />
      <div className="grid grid-col-1 lg:grid-cols-8 gap-[30px]">
        <RecentPropertiesCard />
        <ChartCard />
      </div>
      <div className="mt-[30px]">
        <OfficesCard />
      </div>
    </section>
  );
};

export default DashboardHome;
