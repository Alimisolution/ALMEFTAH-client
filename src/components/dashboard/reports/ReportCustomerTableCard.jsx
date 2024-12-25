import Table from "../../dashboard/Table";
import avarImg from "../../../assets/images/admin-sidebar/avatar.png";

const ReportCustomerTableCard = () => {
  const handleDelete = (id) => {
    console.log(`Deleting row with id: ${id}`);
  };

  const handleUnlock = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`View row with id: ${id}`);
  };

  const columns = [
    { label: "User photo", key: "userPhoto" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "City ", key: "city" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Newsletter", key: "newsletter" },
    { label: "Favorites", key: "favorites" },
    { label: "Actions", key: "action" },
  ];
  const rowData = [
    {
      userPhoto: <img src={avarImg} alt="Avatar" />,
      firstName: "Joan",
      lastName: "Wintheiser",
      city: "West Norafort",
      email: "Zetta21@hotmail.com",
      phoneNumber: "669-778-0619",
      newsletter: "Subscriber",
      favorites: "70",
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

export default ReportCustomerTableCard;
