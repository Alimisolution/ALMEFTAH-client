import Table from "../../dashboard/Table";
import avarImg from "../../../assets/images/admin-sidebar/avatar.png";

const CustomerDataTable = () => {
  const handleDelete = (id) => {
    console.log(`Deleting row with id: ${id}`);
  };

  const handleUnlock = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`view row with id: ${id}`);
  };

  const columnStyles = {
    newsletter: (value) => ({
      color: value === "Subscriber" ? "#1C721F" : "#931113",
    }),
  };

  const columns = [
    { label: "User Photo", key: "logo" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "City", key: "city" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phone" },
    {
      label: "Newsletter",
      key: "newsletter",
      style: (value) => columnStyles.newsletter(value),
    },
    { label: "Favorites", key: "favorites" },
    { label: "Actions", key: "action" },
  ];

  const rowData = [
    {
      id: 1,
      logo: <img src={avarImg} alt="Avatar" className="w-10 h-10 rounded-full" />,
      firstName: "Joan",
      lastName: "Wintheiser",
      city: "West Norafort",
      email: "Zetta21@hotmail.com",
      phone: "669-778-0619",
      newsletter: "Subscriber",
      favorites: 70,
      action: "View",
    },
    {
      id: 2,
      logo: <img src={avarImg} alt="Avatar" className="w-10 h-10 rounded-full" />,
      firstName: "Zola",
      lastName: "Witting",
      city: "Hellenberg",
      email: "Rory.Emmerich@yahoo.com",
      phone: "669-778-0619",
      newsletter: "Not subscribed",
      favorites: 70,
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
      columnStyles={columnStyles}
      useEnvelopeIcon={true}
    />
  );
};

export default CustomerDataTable;
