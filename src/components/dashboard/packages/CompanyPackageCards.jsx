import PackageCard from "./PackageCard";

const CompanyPackageCards = () => {
  const packages = [
    {
      name: "Basic Package",
      color: "bg-[#F9C379]",
      duration: "1 Month",
      discount: "10%",
      price: "19",
      monthlyPrice: "19",
      features: [
        { text: "Access to resources", enabled: true },
        { text: "Free updates", enabled: false },
        { text: "Priority support", enabled: false },
      ],
    },
    {
      name: "Standard Package",
      color: "bg-[#FC895C]",
      duration: "3 Months",
      discount: "33%",
      price: "49",
      monthlyPrice: "$99",
      features: [
        { text: "Access to resources", enabled: true },
        { text: "Free updates", enabled: true },
        { text: "Priority support", enabled: false },
      ],
    },
    {
      name: "Premium Package",
      color: "bg-[#D40F7B]",
      duration: "6 Months",
      discount: "30%",
      price: "99",
      monthlyPrice: "16.5",
      features: [
        { text: "Access to resources", enabled: true },
        { text: "Free updates", enabled: true },
        { text: "Priority support", enabled: true },
      ],
    },
    {
      name: "Ultimate Package",
      color: "bg-[#4BDCD5]",
      duration: "12 Months",
      discount: "40%",
      price: "149",
      monthlyPrice: "12.5",
      features: [
        { text: "Access to resources", enabled: true },
        { text: "Free updates", enabled: true },
        { text: "Priority support", enabled: true },
      ],
    },
  ];

  const handleEditPackage = (updatedData) => {
    console.log("Editing package", updatedData);
    //call the API
  };

  const handleDeletePackage = (packageId) => {
    console.log("Deleting package", packageId);
    // call the API
  };

  return (
    <div className=" bg-white rounded-[16px] p-[25px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            name={pkg.name}
            color={pkg.color}
            duration={pkg.duration}
            discount={pkg.discount}
            price={pkg.price}
            monthlyPrice={pkg.monthlyPrice}
            features={pkg.features}
            onEdit={handleEditPackage}
            onDelete={() => handleDeletePackage(pkg.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyPackageCards;
