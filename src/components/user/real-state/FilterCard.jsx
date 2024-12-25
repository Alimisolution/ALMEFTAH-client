import { useState } from "react";
import Input from "../../common/Input";
import RentIcon from "../../../assets/icons/RentIcon";
import NewProjectIcon from "../../../assets/icons/NewProjectIcon";
import BuyIcon from "../../../assets/icons/BuyIcon";
import ReactSlider from "react-slider";
import Button from "../../common/Button";
const FilterCard = () => {
  const [range, setRange] = useState([10000, 1000000]);
  return (
    <>
      <h2 className="text-[#000929] text-[24px] font-[600] leading-[26.4px] tracking-[-0.24px] mb-[30px]">
        Filter..
      </h2>
      <Input
        label="City"
        placeholder="City, community or building"
        type="text"
        value=""
        onChange=""
      />
      <Input
        label="Property type"
        placeholder="Select Property type"
        type="text"
        value=""
        onChange=""
      />
      <div className="flex justify-between mt-[20px] mb-[8px] h-[56px] pb-[10px] border-b border-[#E2E8F0]">
        <div className="text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] flex items-center gap-[8px]">
          <RentIcon color="#100A55" /> Rent
        </div>
        <div className="text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] flex items-center gap-[8px]">
          <BuyIcon /> Buy
        </div>
        <div className="text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] flex items-center gap-[8px]">
          <NewProjectIcon /> New projects
        </div>
      </div>
      <div className="pb-[19px] pt-[11px] mb-[20px] border-b border-[#E2E8F0]">
        <input type="checkbox" />
        <label className="text-[#000] text-[13px] font-[400] ml-[6px]">
          View commercial properties only
        </label>
      </div>
      <div className="">
        <h2 className="text-[#000929] text-[20px] font-[500] leading-[22px] tracking-[-0.2px] mb-[20px]">
          Beds & Baths
        </h2>
        <h3 className="text-[#000] text-[18px] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[20px]">
          Bedrooms
        </h3>
        <div className="flex flex-wrap gap-[10px] mb-[20px]">
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            studio
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            1
          </div>
          <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
            2
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            3
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            4
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            5
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            6
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            7+
          </div>
        </div>
        <h3 className="text-[#000] text-[18px] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[15px]">
          Bathrooms
        </h3>
        <div className="flex flex-wrap gap-[10px] mb-[20px]  pb-[20px] border-b border-[#E2E8F0">
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            1
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            2
          </div>
          <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
            3
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            4
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            5
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            6
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
            7+
          </div>
        </div>
      </div>
      <div className="pb-[20px] mb-[20px] border-b border-[#E2E8F0]">
        <h2 className="text-[#000929] text-[20px] font-[500] leading-[22px] tracking-[-0.2px] mb-[20px]">
          price
        </h2>
        <div className="w-full flex flex-col items-center space-y-4">
          <ReactSlider
            className="w-full h-[6px] bg-[#C4D9F2] rounded-[10px]"
            thumbClassName="h-5 w-5 bg-[#4BDCD5] top-1/2 -translate-y-1/2 rounded-full shadow-md cursor-pointer focus:outline-none"
            trackClassName="h-[6px] rounded-[10px] bg-gradient-to-r from-[#4BDCD5] via-[#1EAFCA] to-[#0A62CC]"
            min={0}
            max={1000000}
            value={range}
            onChange={(value) => setRange(value)}
          />

          <div className="w-4/5 flex justify-between text-sm font-semibold text-black">
            <span>{`${range[0].toLocaleString()} $`}</span>
            <span>{`${range[1].toLocaleString()} $`}</span>
          </div>
        </div>
        <p className="text-[#000] text-[13px] font-[600] leading-[14.3px] tracking-[-0.13px]">
          {range}{" "}
        </p>
      </div>

      <div className="pb-[20px] mb-[20px] border-b border-[#E2E8F0]">
        <h2 className="text-[20px] text-[#000929] font-[700] leading-[22px] tracking-[-0.2px] pb-[17px] ">
          Furnishing & Amenities
        </h2>
        <h3 className="text-[20px] text-[#000929] font-[500] leading-[22px] tracking-[-0.2px] mb-[20px]">
          Furnishing
        </h3>
        <div className="flex gap-[10px] items-center flex-wrap mb-[20px]">
          <div className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#C4D9F2]">
            All furnishings
          </div>
          <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
            Furnished
          </div>
          <div className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#C4D9F2]">
            Unfurnished
          </div>
          <div className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#C4D9F2]">
            Partly furnished
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[10px] pb-[20px] mb-[20px] border-b border-[#E2E8F0]">
        <Input
          label="Property Size (sqm)"
          placeholder="Min.Area"
          type="text"
          value=""
          onChange=""
        />
        <Input
          label=" f"
          placeholder="Max.Area"
          type="text"
          value=""
          onChange=""
        />
      </div>
      <div className="pb-[20px] mb-[20px] border-b border-[#E2E8F0]">
        <h3 className="text-[20px] text-[#000929] font-[500] leading-[22px] tracking-[-0.2px] mb-[20px]">
          Amenities
        </h3>
        <div className="flex gap-[20px] items-center flex-wrap mb-[20px] pb-[20px] border-b border-[#E2E8F0]">
          <div className="text-[16px] text-[#000] font-[400] leading-[17.6px] min-h-[50px] tracking-[-0.16px] px-[12px] flex items-center bg-white rounded-[8px] border-2 border-[#C4D9F2]">
            <input type="checkbox" className="mr-[10px]" /> Central A/C
          </div>
          <div className="text-[16px] text-[#000] font-[400] leading-[17.6px] min-h-[50px] tracking-[-0.16px] px-[12px] flex items-center bg-white rounded-[8px] border-2 border-[#C4D9F2]">
            Maids Room
          </div>
          <div className="text-[16px] text-[#000] font-[400] leading-[17.6px] min-h-[50px] tracking-[-0.16px] px-[12px] flex items-center bg-white rounded-[8px] border-2 border-[#C4D9F2]">
            Balcony
          </div>
          <div className="text-[16px] text-[#000] font-[400] leading-[17.6px] min-h-[50px] tracking-[-0.16px] px-[12px] flex items-center bg-white rounded-[8px] border-2 border-[#C4D9F2]">
            Shared Pool
          </div>
          <div className="text-[16px] text-[#000] font-[400] leading-[17.6px] min-h-[50px] tracking-[-0.16px] px-[12px] flex items-center bg-white rounded-[8px] border-2 border-[#C4D9F2]">
            Shared Spa
          </div>
          <div className="text-[16px] text-[#000] font-[400] leading-[17.6px] min-h-[50px] tracking-[-0.16px] p-[10px] bg-white rounded-[8px] border-2 border-[#C4D9F2]">
            Shared Gym
          </div>
          <div className="text-[16px] text-[#000] font-[400] leading-[17.6px] min-h-[50px] tracking-[-0.16px] px-[12px] flex items-center bg-white rounded-[8px] border-2 border-[#C4D9F2]">
            Concierge Service
          </div>
          <div className="text-[16px] text-[#000] font-[400] leading-[17.6px] min-h-[50px] tracking-[-0.16px] px-[12px] flex items-center bg-white rounded-[8px] border-2 border-[#C4D9F2]">
            View
          </div>
        </div>
        <div className="flex items-center gap-[20px] ">
          <Button
            text="Publish"
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
      </div>
    </>
  );
};

export default FilterCard;
