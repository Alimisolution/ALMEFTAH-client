import { useState } from "react";
import Button from "../../components/common/Button";
import FilterIcon from "../../assets/icons/FilterIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import avarImg from "../../assets/images/admin-sidebar/avatar.png";
import Pagination from "../../components/dashboard/Pagination";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../components/dashboard/advertisements/FilterModal";
import AdvertisementsDataTable from "../../components/dashboard/advertisements/AdvertisementsDataTable";
const Offices = () => {
  const navigate = useNavigate();
  const [openFilterModal, setOpenFilterModal] = useState(false);
  return (
    <div className="w-full h-full relative">
      <FilterModal
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
      />
      <div className="flex justify-between bg-white rounded-2xl shadow-[#dedede]/[0.1] px-[23px] py-[20px] mb-[30px] shadow-[0px_15px_40px_0px_#dedede1a]">
        <div className="bg-[#efefef42] border border-[#C4D9F2] h-[50px] w-[255px] rounded-[40px] px-5 items-center hidden md:flex">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for Packages"
            className="ml-[15px] bg-transparent text-[#8BA3CB] text-[13px] font-[500] focus:outline-none"
          />
          <div
            className="border-l-[1.5px] border-[#BEBEBE] pl-[15.75px] cursor-pointer"
            onClick={() => setOpenFilterModal(true)}
          >
            <FilterIcon />
          </div>
        </div>
        <div>
          <Button
            text="Add a property"
            variant="primary"
            onClick={() => navigate("/super-dashboard/add-property")}
          />
        </div>
      </div>
      <div className="">
        <AdvertisementsDataTable />
        <div className="flex justify-end mt-[20px]">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Offices;
