import { useState } from "react";
import FilterIcon from "../../assets/icons/FilterIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import Pagination from "../../components/dashboard/Pagination";
import AgencysDataTable from "../../components/dashboard/agencys/AgencysDataTable";
import FilterModal from "../../components/dashboard/agencys/FilterModal";

const Agencys = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  
  return (
    <div className="w-full h-full relative">
      <FilterModal
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
      />
      <div className="flex items-center bg-white rounded-2xl shadow-[#dedede]/[0.1] px-[23px] py-[20px] mb-[30px] shadow-[0px_15px_40px_0px_#dedede1a]">
        <div className="bg-[#efefef42] border border-[#C4D9F2] h-[50px] w-[255px] rounded-[40px] px-5 items-center hidden md:flex">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for Agencys"
            className="ml-[15px] bg-transparent text-[#8BA3CB] text-[13px] font-[500] focus:outline-none"
          />
          <div
            className="border-l-[1.5px] border-[#BEBEBE] pl-[15.75px] cursor-pointer"
            onClick={() => setOpenFilterModal(true)}
          >
            <FilterIcon />
          </div>
        </div>
      </div>
      <AgencysDataTable />
      <div className="flex justify-end mt-[20px]">
      
        <Pagination />
      </div>
    </div>
  );
};

export default Agencys;
