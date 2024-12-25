import { useState } from "react";
import Button from "../../components/common/Button";
import FilterIcon from "../../assets/icons/FilterIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import Pagination from "../../components/dashboard/Pagination";
import CompanyFilterModal from "../../components/dashboard/advertisements/CompanyFilterModal";
import AdvertisementsDataTable from "../../components/dashboard/advertisements/AdvertisementsDataTable";
import CompanyAddAdsModal from "../../components/dashboard/advertisements/CompanyAddAdsModal";
const Reports = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [companyAddAdsModal, setCompanyAddAdsModal] = useState(false);

  return (
    <div className="w-full h-full relative">
      <CompanyFilterModal
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
      />
      <CompanyAddAdsModal
        companyAddAdsModal={companyAddAdsModal}
        setCompanyAddAdsModal={setCompanyAddAdsModal}
      />
      <div className="flex justify-between bg-white rounded-2xl shadow-[#dedede]/[0.1] px-[23px] py-[20px] mb-[30px] shadow-[0px_15px_40px_0px_#dedede1a]">
        <div className="bg-[#efefef42] border border-[#C4D9F2] h-[50px] w-[255px] rounded-[40px] px-5 items-center hidden md:flex">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for Report Ads"
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
            text="Add Ads"
            variant="primary"
            onClick={() => setCompanyAddAdsModal(true)}
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

export default Reports;
