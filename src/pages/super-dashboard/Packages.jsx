import PackageCards from "../../components/dashboard/packages/PackageCards";
import AddPackagesCard from "../../components/dashboard/packages/AddPackagesCard";
const Packages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      <PackageCards />
      <AddPackagesCard />
    </div>
  );
};

export default Packages;
