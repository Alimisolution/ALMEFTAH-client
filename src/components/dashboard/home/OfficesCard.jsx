import Table from "../../dashboard/Table"; // Make sure Table is imported
import avarImg from "../../../assets/images/admin-sidebar/avatar.png";

const OfficesCard = () => {
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
    { label: "User Photo", key: "logo" },
    { label: "Company Name ", key: "companyName" },
    { label: "City", key: "city" },
    { label: "Office Types", key: "officeTypes" },
    { label: "Owner", key: "owner" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "No.Ads", key: "noads" },
    { label: "Joining date", key: "joiningDate" },
    { label: "Category type", key: "categoryType" },

    { label: "Actions", key: "action" },
  ];

  const rowData = [
    {
      id: 1,
      logo: (
        <img src={avarImg} alt="Avatar" className="w-10 h-10 rounded-full" />
      ),
      companyName: "Bode - Kutch",
      city: "Muqdisho",
      officeTypes: "Real estate office",
      owner: "Jamie Dicki",
      email: "Rhoda.Davis@yahoo.com",
      phone: "722-790-3448",
      noads: 10,
      joiningDate: "20/02/2024",
      categoryType: "Package name",
      action: "View",
    },
  ];

  return (
    <div className="col-span-5 bg-white py-[15px] px-[20px] rounded-[20px]">
      <h2 className="text-[#121212] text-[20px] font-[600] tracking-[0.5px]">
        Offices{" "}
      </h2>
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

export default OfficesCard;
