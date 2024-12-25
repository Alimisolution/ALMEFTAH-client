import LocationIcon from "../../../assets/icons/LocationIcon";
import BedIcon from "../../../assets/icons/BedIcon";
import BathIcon from "../../../assets/icons/BathIcon";
import NearPlaceIcon from "../../../assets/icons/NearPlaceIcon";
import EmptyHeartIcon from "../../../assets/icons/EmptyHeartIcon";

const PropertyBasedLocationCard = ({
  imageUrl,
  price,
  priceUnit,
  rentType,
  title,
  location,
  beds,
  bathrooms,
  size,
}) => {
  return (
    <div className="bg-white rounded-[16px] p-[10px] border-[1.5px] border-[#F0EFFB]">
      <div className="rounded-[16px] overflow-hidden border-2 border-[#BED5EF] w-full relative">
        <img src={imageUrl} className="h-full w-full" alt="Property" />
        <span className="absolute top-[10px] right-[10px] w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
          <EmptyHeartIcon />
        </span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#0A62CC] text-[24px] font-[800] leading-[36px] tracking-[-1px] mb-[10px]">
          {price}
          <span className="text-[#000929]/[0.5] text-[16px] font-[500] leading-[24px]">
            {priceUnit}
          </span>
        </p>
        <span className="bg-[#1EAFCA] shadow-[0px_3px_40px_0px_#0e08540d] rounded-[14px] px-[22px] h-[27px] flex justify-center items-center text-white text-[11px] font-[500] leading-[15.95px] tracking-[-0.055px ] border border-[#0E6C7D]">
          {rentType}
        </span>
      </div>
      <h2 className="text-[#000929] text-[24px] font-[700] leading-[36px] tracking-[-0.24px] mb-[2px]">
        {title}
      </h2>
      <div className="pb-[10px] border-b-[1.5px] border-[#F0EFFB] flex gap-[10px] items-center">
        <LocationIcon />
        <span className="text-[#000929]/[0.5] text-[16px] font-[500] leading-[24px]">
          {location}
        </span>
      </div>
      <div className="flex gap-[10px] mb-[18px] mt-[15px] flex-wrap">
        <div className="flex gap-[2px] items-center">
          <BedIcon />
          <span className="text-[#000929]/[0.7] text-[14px] font-[500] leading-[19.6px]">
            {beds} Beds
          </span>
        </div>
        <div className="flex gap-[2px] items-center">
          <BathIcon />
          <span className="text-[#000929]/[0.7] text-[14px] font-[500] leading-[19.6px]">
            {bathrooms} Bathrooms
          </span>
        </div>
        <div className="flex gap-[2px] items-center">
          <NearPlaceIcon />
          <span className="text-[#000929]/[0.7] text-[14px] font-[500] leading-[19.6px]">
            {size}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyBasedLocationCard;
