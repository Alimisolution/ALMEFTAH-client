import Select from "../../../components/common/Select";
import RentIcon from "../../../assets/icons/RentIcon";
import NewProjectIcon from "../../../assets/icons/NewProjectIcon";
import BuyIcon from "../../../assets/icons/BuyIcon";
import Button from "../../common/Button";

const SearchForCompanyCard = () => {
  return (
    <section className="">
      <h2 className="text-[20px] text-[#000929] font-[500] leading-[22px] tracking-[-0.2px] pb-[15px] border-b border-[#E2E8F0] mb-[7px]">
        Search for companies
      </h2>
      <div className="mb-[20px]">
        <label
          htmlFor=""
          className="text-[#000] text-[16px] font-[500] w-full mb-[14px] block"
        >
          Search
        </label>
        <Select placeholder="Find agent" />
      </div>
      <div className="flex justify-between mb-[10px] pb-[20px] border-b border-[#E2E8F0]">
        <div className="text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] py-[11px] px-[22px] flex justify-center items-center gap-[8px]">
          <RentIcon color="#100A55" /> Rent
        </div>
        <div className="text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] py-[11px] px-[22px] flex justify-center items-center gap-[8px]">
          <BuyIcon /> Buy
        </div>
        <div className="text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] py-[11px] px-[22px] flex justify-center items-center gap-[8px]">
          <NewProjectIcon /> New projects
        </div>
      </div>
      <div className="mb-[20px] pb-[20px] border-b border-[#E2E8F0]">
        <input type="checkbox" />
        <label className="text-[#000] text-[13px] font-[400] ml-[6px]">
          View commercial properties only
        </label>
      </div>
      <div className="mb-[20px]">
        <label
          htmlFor=""
          className="text-[#000] text-[16px] font-[500] w-full mb-[14px] block"
        >
          Office Types
        </label>
        <Select placeholder="Select Office Types" />
      </div>

      <div className="mb-[20px]">
        <label
          htmlFor=""
          className="text-[#000] text-[16px] font-[500] w-full mb-[14px] block"
        >
          Property type
        </label>
        <Select placeholder="Select Property type" />
      </div>
      <div className="flex items-center gap-[15px] pt-[13px]  border-t border-[#E2E8F0]">
        <Button
          text="Show results"
          variant="primary"
          type="submit"
          className="flex-1"
        />
        <Button
          text="Cancel"
          variant="secondary"
          type="submit"
          className="flex-1"
        />
      </div>
    </section>
  );
};

export default SearchForCompanyCard;
