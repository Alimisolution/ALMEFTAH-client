import { useState } from "react";
import Button from "../../components/common/Button";
import FilterIcon from "../../assets/icons/FilterIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import Pagination from "../../components/dashboard/Pagination";
import { useNavigate } from "react-router-dom";
import ReportAdsTableCard from "../../components/dashboard/reports/ReportAdsTableCard";
import FinancialReportTableCard from "../../components/dashboard/reports/FinancialReportTableCard";
import ReportAgencysTableCard from "../../components/dashboard/reports/ReportAgencysTableCard";
import ReportCustomerTableCard from "../../components/dashboard/reports/ReportCustomerTableCard";
import ReportAdsFilterModal from "../../components/dashboard/reports/ReportAdsFilterModal";
import ReportAgencyFilterModal from "../../components/dashboard/reports/ReportAgencyFilterModal";
import ReportFinancialFilterModal from "../../components/dashboard/reports/ReportFinancialFilterModal";
import ReportCustomerFilterModal from "../../components/dashboard/reports/ReportCustomerFilterModal";

const Reports = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [reportAdsFilterModal, setReportAdsFilterModal] = useState(false);
  const [reportAgencyFilterModal, setReportAgencyFilterModal] = useState(false);
  const [reportCustomerFilterModal, setReportCustomerFilterModal] =
    useState(false);
  const [reportFinancialFilterModal, setReportFinancialFilterModal] =
    useState(false);

  const reportsTitles = [
    "Report Ads",
    "Report Agencys",
    "Report Customer",
    "Financial report",
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full h-full relative">
      <ReportAdsFilterModal
        reportAdsFilterModal={reportAdsFilterModal}
        setReportAdsFilterModal={setReportAdsFilterModal}
      />

      <ReportAgencyFilterModal
        reportAgencyFilterModal={reportAgencyFilterModal}
        setReportAgencyFilterModal={setReportAgencyFilterModal}
      />
      <ReportCustomerFilterModal
        reportCustomerFilterModal={reportCustomerFilterModal}
        setReportCustomerFilterModal={setReportCustomerFilterModal}
      />
      <ReportFinancialFilterModal
        reportFinancialFilterModal={reportFinancialFilterModal}
        setReportFinancialFilterModal={setReportFinancialFilterModal}
      />
      <div className="flex flex-col bg-white rounded-2xl shadow-[#dedede]/[0.1] px-[20px] pt-[20px] mb-[30px] shadow-[0px_15px_40px_0px_#dedede1a]">
        <div className="flex justify-between mb-[39px]">
          <div className="bg-[#efefef42] border border-[#C4D9F2] h-[50px] w-[255px] rounded-[40px] px-5 items-center hidden md:flex">
            <SearchIcon />

            <input
              type="text"
              placeholder="Search for Report Ads"
              className="ml-[15px] bg-transparent text-[#8BA3CB] text-[13px] font-[500] focus:outline-none"
            />
            <div
              className="border-l-[1.5px] border-[#BEBEBE] pl-[15.75px] cursor-pointer"
              onClick={() => {
                if (activeTab === 0) {
                  setReportAdsFilterModal(true);
                } else if (activeTab === 1) {
                  setReportAgencyFilterModal(true);
                } else if (activeTab === 2) {
                  setReportCustomerFilterModal(true);
                } else {
                  setReportFinancialFilterModal(true);
                }
              }}
            >
              <FilterIcon />
            </div>
          </div>
          <div>
            <Button
              text="Excel export"
              variant="primary"
              onClick={() => navigate("/super-dashboard/add-property")}
            />
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          {reportsTitles.map((title, index) => (
            <h2
              className={`${
                index === activeTab
                  ? "text-[#0A62CC] border-b-[2px] border-[#0A62CC]"
                  : "text-[#8BA3CB] border-b-0"
              } pb-[10px] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] cursor-pointer`}
              key={title}
              onClick={() => setActiveTab(index)}
            >
              {title}
            </h2>
          ))}
        </div>
      </div>
      {activeTab === 0 && (
        <>
          <ReportAdsTableCard />
          <div className="flex justify-end mt-[20px]">
            <Pagination />
          </div>
        </>
      )}

      {activeTab === 1 && (
        <>
          <ReportAgencysTableCard />
          <div className="flex justify-end mt-[20px]">
            <Pagination />
          </div>
        </>
      )}
      {activeTab === 2 && (
        <>
          <>
            <ReportCustomerTableCard />
            <div className="flex justify-end mt-[20px]">
              <Pagination />
            </div>
          </>
        </>
      )}
      {activeTab === 3 && (
        <>
          <>
            <FinancialReportTableCard />
            <div className="flex justify-end mt-[20px]">
              <Pagination />
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default Reports;
