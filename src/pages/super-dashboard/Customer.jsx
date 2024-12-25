import { useState } from "react";
import FilterIcon from "../../assets/icons/FilterIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import Pagination from "../../components/dashboard/Pagination";
import { useNavigate } from "react-router-dom";
import SendEmailModal from "../../components/dashboard/customers/SendEmailModal";
import FilterModal from "../../components/dashboard/customers/FilterModal";
import CustomerDataTable from "../../components/dashboard/customers/CustomerDataTable";
const Customer = () => {
  const [sendEmailModal, setSendEmailModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full relative">
      <FilterModal
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
        navigate={navigate}
      />

      <div className="flex items-center justify-between  gap-[10px] flex-wrap bg-white rounded-2xl shadow-[#dedede]/[0.1] px-[23px] py-[20px] mb-[30px] shadow-[0px_15px_40px_0px_#dedede1a]">
        <div className="bg-[#efefef42] border border-[#C4D9F2] h-[50px] w-[255px] rounded-[40px] px-5 items-center flex">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for Customer"
            className="ml-[15px] bg-transparent text-[#8BA3CB] text-[13px] font-[500] focus:outline-none"
            // onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <div
            className="border-l-[1.5px] border-[#BEBEBE] pl-[15.75px] cursor-pointer"
            onClick={() => setOpenFilterModal(true)}
          >
            <FilterIcon />
          </div>
        </div>
        <button
          className="bg-[#F7F7FD] border border-[#C4D9F2] h-[50px] rounded-[15px] px-[36px] py-[22px] text-[#000929] text-[16px] font-[700] flex items-center justify-center"
          onClick={() => setSendEmailModal(true)}
        >
          Send an email
        </button>
        <SendEmailModal
          sendEmailModal={sendEmailModal}
          setSendEmailModal={setSendEmailModal}
        />
      </div>

      <div className="">
        <CustomerDataTable />
        <div className="flex justify-end mt-[20px]">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Customer;
