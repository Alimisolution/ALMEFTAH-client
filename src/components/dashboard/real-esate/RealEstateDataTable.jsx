import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/dashboard/Table";
import avatarImg from "../../../assets/images/admin-sidebar/avatar.png";

const RealEstateDataTable = () => {
  const navigate = useNavigate();

  // Handlers for table actions
  const handleDelete = (id) => {
    console.log(`Deleting row with id: ${id}`);
  };

  const handleUnlock = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleView = (id) => {
    navigate("/company/ads-details");
  };

  // Table columns definition
  const columns = [
    { label: "Image", key: "image" },
    { label: "Title", key: "title" },
    { label: "City", key: "city" },
    { label: "Ads type", key: "officeTypes" },
    { label: "Property type", key: "propertyType" },
    { label: "Beds & Baths", key: "bedsAndBaths" },
    { label: "Price", key: "price" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Email", key: "email" },
    { label: "Date added", key: "dateAdded" },
    { label: "Action", key: "action" },
  ];

  // Example row data
  const rowData = [
    {
      image: (
        <img src={avatarImg} alt="Avatar" className="w-8 h-8 rounded-full" />
      ),
      title: "Necessitatibus Qui Assumenda",
      city: "Muqdisho",
      officeTypes: "Walker - Wehner",
      propertyType: "Apartment",
      bedsAndBaths: "1 Bed; 1 Bath",
      price: "$1,000",
      phoneNumber: "542-879-2771",
      email: "Eleanora.Welch49@gmail.com",
      dateAdded: "22/10/2024",
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

export default RealEstateDataTable;
