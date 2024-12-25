import Table from "../../dashboard/Table";
import avarImg from "../../../assets/images/admin-sidebar/avatar.png";

const ReportAgencysTableCard = () => {
  const handleDelete = (id) => {
    console.log(`Deleting row with id: ${id}`);
  };

  const handleUnlock = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`view row with id: ${id}`);
  };
  const columns = [
    { label: "Logo", key: "logo" },
    { label: "Company Name ", key: "companyName" },
    { label: "City ", key: "city" },
    { label: "Agencys Types", key: "agencysTypes" },
    { label: "Owner", key: "owner" },
    { label: "Email", key: "email" },
    { label: "Phone ", key: "phone" },
    { label: "No.Ads", key: "noAds" },
    { label: "Joining date", key: "joiningDate" },
    { label: "Category type", key: "categoryType" },
    { label: "Visitors", key: "visitors" },
    { label: "Actions", key: "action" },

  ];
  const rowData = [
    {
      logo: <img src={avarImg} alt="Avatar" />,
      companyName: "Zboncak - Mraz",
      city: "Muqdisho",
      agencysTypes: "Real estate office",
      owner: "Jamie Dicki",
      email: "Rhoda.Davis@yahoo.com",
      phone: "809-241-1781",
      noAds: "24",
      joiningDate: "20/11/2024",
      categoryType: "Package name",
      visitors: "6",
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
      useEnvelopeIcon={false}
    />
  );
};

export default ReportAgencysTableCard