import Table from "../../dashboard/Table";
import avarImg from "../../../assets/images/admin-sidebar/avatar.png";

const CompanyDataTable = () => {
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
    { label: "Image", key: "image" },
    { label: "Title", key: "title" },
    { label: "Office", key: "office" },
    { label: "City", key: "city" },
    { label: "Ads type", key: "adsType" },
    { label: "Property type", key: "propertyType" },
    { label: "Beds & Baths", key: "bedsBaths" },
    { label: "price", key: "price" },
    { label: "Watching", key: "watching" },
    { label: "Clicks", key: "clicks" },
    { label: "Start date", key: "startDate" },
    { label: "End date", key: "EndDate" },
    { label: "Actions", key: "action" },
  ];

  const rowData = [
    {
      image: <img src={avarImg} alt="Avatar" />,
      title: "necessitatibus qui assumenda",
      office: "Stiedemann LLC",
      city: "Muqdisho",
      adsType: "Rent",
      propertyType: "Apartment",
      bedsBaths: "1 Bed; 1 Baths",
      price: "$1,000",
      watching: "2K",
      clicks: "800",
      startDate: "22/10/2024",
      EndDate: "22/10/2024",
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

export default CompanyDataTable