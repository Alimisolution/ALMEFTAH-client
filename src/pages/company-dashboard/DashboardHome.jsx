import CompanyStatsCards from "../../components/dashboard/home/CompanyStatsCards";
import CompanyHomeTable from "../../components/dashboard/home/CompanyHomeTable";
const DashboardHome = () => {
  return (
    <section>
      <CompanyStatsCards />
      <div className="mt-[30px]">
        <CompanyHomeTable />
      </div>
   
    </section>
  );
};

export default DashboardHome;
