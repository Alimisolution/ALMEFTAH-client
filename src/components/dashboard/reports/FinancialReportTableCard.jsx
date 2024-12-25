import Table from "../../dashboard/Table";
import avarImg from "../../../assets/images/admin-sidebar/avatar.png";

const FinancialReportTableCard = () => {
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
    { label: "SL No", key: "slNo" },
    { label: "Agencys", key: "agencys" },
    { label: "Owner", key: "owner" },
    { label: "Package type", key: "packageType" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Package status", key: "packageStatus" },
    { label: "Price", key: "price" },
    { label: "No.Subscriptions", key: "noSubscriptions" },
    { label: "End date", key: "endDate" },
    { label: "Actions", key: "action" },
  ];
  const rowData = [
    {
      slNo: <img src={avarImg} alt="Avatar" />,
      agencys: "Jones Group",
      owner: "Shari Feeney",
      packageType: "West Norafort",
      email: "Miracle.Moen@gmail.com",
      phoneNumber: "527-284-2798",
      packageStatus: "Active",
      price: "70$",
      noSubscriptions: "50",
      endDate: "20/11/2024",
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

export default FinancialReportTableCard