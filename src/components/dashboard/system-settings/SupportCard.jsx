import { useState } from "react";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import SearchIcon from "../../../assets/icons/SearchIcon.jsx";
import Table from "../../../components/dashboard/Table.jsx";
import WhatsAppIcon from "../../../assets/icons/WhatsAppIcon";
const SupportCard = () => {
    const [showModal, setShowModal] = useState(false);

    const columns = [
        { label: "Full Name", key: "fullName" },
        { label: "Email", key: "email" },
        { label: "Title", key: "title" },
        { label: "Order status", key: "orderStatus" },
        { label: "Type", key: "type" },
        { label: "Action", key: "action" },
      ];
      
      const rowData = [
        {
          fullName: "Patti Lemke",
          email: "Frederick87@gmail.com",
          title: "soluta ullam nam",
          orderStatus: "Active",
          type: "Problem",
          action: "view",
        },
      ];
      const columnStyles = {
        price: {
          color: "#0A62CC",
        },
      };
      const handleDelete = () => {
        console.log("deleted");
      };
    
      const handleUnlock = (id) => {
        console.log(`Unlocking row with id: ${id}`);
      };
    
      const handleView = () => {
        setShowModal(true);
      };
  return (
    <>
    <div className="p-5 bg-white rounded-2xl mb-[30px]">
      <div className="bg-[#F5F7FA] h-[50px] w-[255px] rounded-[40px] px-5 items-center hidden md:flex mb-[15px]">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="ml-[15px] bg-[#F6F6F6] text-[#8BA3CB] text-[13px] font-[400] focus:outline-none"
        />
      </div>
      <div>
        <h2 className="mt-[10px] mb-[15px] text-[#000929] text-[19px] font-[600] leading-[20.9px] tracking-[-0.19px]">
          Filter
        </h2>
        <div>
          <div className="grid grid-cols-2 gap-x-[50px]">
            <div className="flex flex-col">
              <h3 className="flex-1 mb-[10px] text-[#000929] text-[15px] font-[600] leading-normal">
                Select a type
              </h3>
              <div className="flex gap-x-[10px]">
                <div className="text-[#000929] text-[15px] font-[400] leading-[17px] rounded-[10px] border-[1.5px] border-[#C4D9F2] bg-white py-[14px] flex justify-center items-center flex-1">
                  Suggestion
                </div>
                <div className="text-[#000929] text-[15px] font-[400] leading-[17px] rounded-[10px] border-[1.5px] border-[#C4D9F2] bg-white py-[14px] flex justify-center items-center flex-1">
                  Problem
                </div>
                <div className="text-[#000929] text-[15px] font-[400] leading-[17px] rounded-[10px] border-[1.5px] border-[#C4D9F2] bg-white py-[14px] flex justify-center items-center flex-1">
                  Report
                </div>{" "}
              </div>{" "}
            </div>
            <div className="flex flex-col">
              <h3 className="flex-1 mb-[10px] text-[#000929] text-[15px] font-[600] leading-normal">
                Order status{" "}
              </h3>
              <div className="flex gap-x-[10px]">
                <div className="text-[#0A62CC] text-[17px] font-[600] leading-[17px] rounded-[10px] border-[2px] border-[#0A62CC] bg-white py-[14px] flex justify-center items-center flex-1">
                  All status
                </div>
                <div className="text-[#000929] text-[15px] font-[400] leading-[17px] rounded-[10px] border-[1.5px] border-[#C4D9F2] bg-white py-[14px] flex justify-center items-center flex-1">
                  Active
                </div>
                <div className="text-[#000929] text-[15px] font-[400] leading-[17px] rounded-[10px] border-[1.5px] border-[#C4D9F2] bg-white py-[14px] flex justify-center items-center flex-1">
                  Locked
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Table
      columns={columns}
      rowData={rowData}
      columnStyles={columnStyles}
      onDelete={handleDelete}
      onUnlock={handleUnlock}
      onView={handleView}
    />
    {showModal && (
      <div className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white w-[891px] p-[30px] rounded-[15px]">
          <h2 className="text-[18px] text-[#000] font-[600] mb-[20px]">
            Select a type
          </h2>
          <div className="flex gap-x-[10px] mb-[18px]">
            <div className=" text-[#000929] text-[17px] font-[400] leading-[17px] rounded-[10px] border-[1.5px] border-[#C4D9F2] bg-white py-[14px] flex justify-center items-center w-[129px]">
              Suggestion{" "}
            </div>
            <div className="text-[#0A62CC] text-[15px] font-[600] leading-[17px] rounded-[10px] border-[2px] border-[#0A62CC] bg-white py-[14px] flex justify-center items-center w-[129px]">
              Problem
            </div>
            <div className="text-[#000929] text-[15px] font-[400] leading-[17px] rounded-[10px] border-[1.5px] border-[#C4D9F2] bg-white py-[14px] flex justify-center items-center w-[129px]">
              Report
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[12px]">
            <Input
              label="Full Name"
              placeholder="Nelson Kshlerin"
              name=""
              type="text"
              value={""}
              onChange={""}
            />
            <Input
              label="Email"
              placeholder="Citlalli48@yahoo.com"
              name=""
              type="text"
              value={""}
              onChange={""}
            />
            <Input
              label="Title"
              placeholder="libero blanditiis quo"
              name=""
              type="text"
              value={""}
              onChange={""}
            />
            <div className="flex flex-col gap-[14px] mb-[18px] flex-1 relative">
              <label className="text-[#000] text-[16px] font-[500] w-full">
                WhatsApp
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="https://web.whatsapp.com/"
                  value=""
                  onChange=""
                  className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[500] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px] pl-[60px]" // Add padding-right for the icon
                />
                <span className="absolute left-[20px]  top-1/2 -translate-y-1/2">
                  <WhatsAppIcon color="#000929" />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[14px] mb-[18px] flex-1 relative col-span-2">
              <label className="text-[#000] text-[16px] font-[500] w-full">
                Description
              </label>
              <textarea className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[500] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px] pl-[20px] appearance-none"></textarea>
            </div>
            <Input
              label="Account type"
              placeholder="Company"
              name=""
              type="text"
              value=""
              onChange={""}
            />
            <div className="flex justify-end gap-[20px] items-end mb-[18px]">
              <div className="">
                <Button text="Locked" variant="primary" type="submit" />
              </div>
              <div className="">
                <Button text="Cancel" variant="secondary" type="submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default SupportCard