import avarImg from "../../../assets/images/admin-sidebar/avatar.png";
import Table from "../../../components/dashboard/Table";
import { useNavigate } from "react-router-dom";
const AdvertisementsDataTable = () => {
  const navigate=useNavigate()
  const handleDelete = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleUnlock = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleView = (id) => {
    navigate("/company/ads-details")
    // console.log(`view row with id: ${id}`);

  };

  
  const columns = [
    { label: "Image", key: "image" },
    { label: "Title", key: "title" },
    { label: "City", key: "city" },
    { label: "Ads type", key: "officeTypes" },
    { label: "Property type", key: "propertyType" },
    { label: "Beds & Baths", key: "bedsAndBaths" },
    { label: "Price", key: "price" },
    { label: "No.Ads", key: "noAds" },
    { label: "Account status", key: "accountStatus" },
    { label: "Category type", key: "categoryType" },
    { label: "Watching", key: "watching" },
    { label: "Clicks", key: "clicks" },
    { label: "End date", key: "endDate" },
    { label: "Action", key: "action" },
  ];

  const rowData = [
    {
      image: <img src={avarImg} alt="Avatar" />,
      title: "necessitatibus qui assumenda",
      city: "Muqdisho",
      officeTypes: "Walker - Wehner",
      propertyType: "Apartment",
      bedsAndBaths: "1 Bed; 1 Baths",
      price: "$1,000",
      noAds: "2K",
      accountStatus: "Active",
      categoryType: "Residential",
      watching: "150",
      clicks: "800",
      endDate: "22/10/2024",
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

export default AdvertisementsDataTable;
