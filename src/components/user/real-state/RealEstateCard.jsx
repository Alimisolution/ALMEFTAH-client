import LocationIcon from "../../../assets/icons/LocationIcon";
import BedIcon from "../../../assets/icons/BedIcon";
import BathIcon from "../../../assets/icons/BathIcon";
import NearPlaceIcon from "../../../assets/icons/NearPlaceIcon";
import EmptyHeartIcon from "../../../assets/icons/EmptyHeartIcon";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import WhatsAppIcon from "../../../assets/icons/WhatsAppIcon";
import VillaIcon from "../../../assets/icons/VillaIcon";

const RealEstateCard = ({
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
    <>
      <div className="bg-[#d9d9d91a] rounded-[16px] mb-[30px] p-[15px] border-[1.5px] w-full gap-[20px] border-[#F0EFFB] grid grid-cols-3">
        <div className="h-[204px] bg-[#F7F7FD] w-full col-span-3 sm:col-span-1 relative">
          <img
            src={imageUrl}
            className="w-full h-full rounded-[16px]"
            alt="Property"
          />
          <span className="absolute top-[10px] left-[10px] w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
            <EmptyHeartIcon />
          </span>
        </div>
        <div className="col-span-3 sm:col-span-2">
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
          <h2 className="text-[#000929] text-[24px] font-[700] leading-[36px] tracking-[-0.24px] mb-[8px]">
            {title}
          </h2>
          <p className="text-[#000929]/[0.5] text-[16px] font-[500] leading-[24px]  mb-[4px]">
            Omnis animi necessitatibus sit dolorum perspiciatis consequatur
            suscipit.
          </p>
          <div className="pb-[10px] border-b-[1.5px] border-[#F0EFFB] flex gap-[10px] items-center">
            <LocationIcon />
            <span className="text-[#000929] text-[14px] font-[500] leading-[19.6px]">
              {location}
            </span>
          </div>
          <div className="flex gap-[5px] justify-between flex-wrap">
            <div className="flex gap-[3px] mb-[18px] mt-[15px] flex-wrap">
              <div className="flex gap-[3px] items-center">
                <BedIcon />
                <span className="text-[#000929] text-[14px] font-[500] leading-[19.6px]">
                  {beds} Beds
                </span>
              </div>
              <div className="flex gap-[3px] items-center">
                <BathIcon />
                <span className="text-[#000929] text-[14px] font-[500] leading-[19.6px]">
                  {bathrooms} Bathrooms
                </span>
              </div>
              <div className="flex gap-[3px] items-center">
                <NearPlaceIcon />
                <span className="text-[#000929] text-[14px] font-[500] leading-[19.6px]">
                  {size}
                </span>
              </div>
              <div className="flex gap-[3px] items-center">
                <VillaIcon color="#0A62CC" width="20" height="20" />
                <span className="text-[#000929] text-[14px] font-[500] leading-[19.6px]">
                  Villa
                </span>
              </div>
            </div>
            <div className="flex gap-[10px] items-center">
              <span className="w-[36px] h-[36px] rounded-[6px] border-2 border-[#C4D9F2] bg-white flex justify-center items-center">
                <PhoneIcon />
              </span>
              <span className="w-[36px] h-[36px] rounded-[6px] border-2 border-[#C4D9F2] bg-white flex justify-center items-center">
                <EnvelopeIcon />
              </span>
              <span className="w-[36px] h-[36px] rounded-[6px] border-2 border-[#C4D9F2] bg-white flex justify-center items-center">
                <WhatsAppIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealEstateCard;
