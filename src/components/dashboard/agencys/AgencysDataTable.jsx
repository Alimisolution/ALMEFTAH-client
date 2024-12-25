import avarImg from "../../../assets/images/admin-sidebar/avatar.png";
import Table from "../../../components/dashboard/Table";

const AgencysDataTable = () => {
  const handleDelete = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleUnlock = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`view row with id: ${id}`);
  };

  const columns = [
    { label: "Logo", key: "logo" },
    { label: "Company Name", key: "companyName" },
    { label: "City", key: "city" },
    { label: "Agency Type", key: "agencyType" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "No. of Ads", key: "numAds" },
    { label: "Account Status", key: "accountStatus" },
    { label: "Category Type", key: "categoryType" },
    { label: "Actions", key: "actions" },
  ];

  const rowData = [
    {
      logo: <img src={avarImg} alt="Avatar" />,
      companyName: "Strosin - Mraz",
      city: "Muqdisho",
      agencyType: "Real estate office",
      email: "Rhoda.Davis@yahoo.com",
      phone: "809-241-1781",
      numAds: "No.Ads",
      accountStatus: "Processing",
      categoryType: "Package name",
      action: "View",
    },
  ];

  return (
    <Table
      columns={columns}
      rowData={rowData}
      onDelete={handleDelete}
      onUnlock={handleUnlock}
      onView={handleView}
    />
  );
};

export default AgencysDataTable;
