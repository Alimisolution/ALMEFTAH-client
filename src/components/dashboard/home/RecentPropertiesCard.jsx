import Pagination from "../../../components/dashboard/Pagination";
import Table from "../../dashboard/Table"; 
import avarImg from "../../../assets/images/admin-sidebar/avatar.png";

const RecentPropertiesCard = () => {
  const columns = [
    { label: "Image", key: "image" },
    { label: "Title", key: "title" },
    { label: "Added by", key: "addedby" },
    { label: "Category", key: "category" },
    { label: "City", key: "city" },
    { label: "Type", key: "type" },
    { label: "Price", key: "price" },
    { label: "Action", key: "action" },
  ];

 

  const rowData = [
    {
      id: 1,
      image: <img src={avarImg} alt="Avatar" className="w-10 h-10 rounded-full" />,
      title: "Property 1",
      addedby: "John Doe",
      category: "Residential",
      city: "New York",
      type: "Sale",
      price: "$500,000",
      action: "View",
    },
  ];

  const handleDelete = (id) => {
    console.log(`Deleting row with id: ${id}`);
  };

  const handleUnlock = (id) => {
    console.log(`Unlocking row with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`View row with id: ${id}`);
  };

  return (
    <div className="col-span-1 lg:col-span-5 bg-white py-[15px] px-[20px] rounded-[20px]">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-[#121212] text-[20px] font-[600] tracking-[0.5px]">
          Recent Properties
        </h2>
       <div className="flex items-center gap-[10px]">
       <Pagination />
        <div className="flex items-center gap-[10px]">
          <div className="w-[85px] h-[30px] bg-[#fff] rounded-[6px] border-[1.5px] border-[#C4D9F2] text-[#000929] text-[14px] font-[400] leading-[17px] flex items-center justify-center">
            Monthly
          </div>
          <div className="w-[85px] h-[30px] bg-[#fff] rounded-[6px] border-[1.5px] border-[#C4D9F2] text-[#000929] text-[14px] font-[400] leading-[17px] flex items-center justify-center">
            Weekly
          </div>
          <div className="w-[85px] h-[30px] bg-[#fff] rounded-[6px] border-[1.5px] border-[#C4D9F2] text-[#000929] text-[14px] font-[400] leading-[17px] flex items-center justify-center">
            Daily
          </div>
        </div>
       </div>
      </div>
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

export default RecentPropertiesCard;
