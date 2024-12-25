import Table from "../../dashboard/Table"; // Make sure Table is imported
import propertyImg from "../../../assets/images/add-property/img1.png";

const  CompanyHomeTable= () => {
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
    { label: "Image", key: "logo" },
    { label: "Title", key: "title" },
    { label: "Office", key: "office" },
    { label: "City", key: "city" },
    { label: "Ads type", key: "adsType" },
    { label: "Property type", key: "propertyType" },
    { label: "Beds & Baths", key: "bedsBaths" },
    { label: "price", key: "price" },
    { label: "Watching", key: "watching" },
    { label: "Clicks", key: "clicks" },
    { label: "End date", key: "endDate" },
    { label: "Actions", key: "action" },
  ];

  const rowData = [
    {
      id: 1,
      logo: (
        <img src={propertyImg} alt="Avatar" className="w-10 h-10 rounded-lg" />
      ),
      title: "necessitatibus qui assumenda",
      office: "Walker - Wehner",
      city: "Muqdisho",
      adsType: "Rent",
      propertyType: "Apartment",
      bedsBaths: "1 Bed; 1 Baths",
      price: "$1,000",
      watching: "2K",
      clicks: "800",
      endDate: "800",
      action: "View",
    },
  ];

  return (
    <div className="col-span-5 bg-white py-[15px] px-[20px] rounded-[20px]">
      <Table
        columns={columns}
        rowData={rowData}
        onDelete={handleDelete}
        onUnlock={handleUnlock}
        onView={handleView}
      />
    </div>
  );
};

export default CompanyHomeTable;
