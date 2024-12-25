import LocationIcon from "../../../assets/icons/LocationIcon";
import EmptyHeartIcon from "../../../assets/icons/EmptyHeartIcon";

const ProfilePropertyCard = ({
  imageUrl,
  price,
  priceUnit,
  title,
  location,
}) => {
  return (
    <>
      <div className="bg-[#d9d9d91a] rounded-[16px] p-[15px] border-[1.5px] w-full relative border-[#F0EFFB] flex gap-[10px]">
        <div className="h-[204px] bg-[#F7F7FD] w-full relative">
          <img
            src={imageUrl}
            className="w-full h-full rounded-[16px]"
            alt="Property"
          />
          <span className="absolute top-[10px] left-[10px] w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
            <EmptyHeartIcon />
          </span>
        </div>
        <div className="">
          <div className="flex justify-end">
            <span className="bg-[#d9d9d933] shadow-[0px_3px_40px_0px_#0e08540d] rounded-[6px] absolute right-[10px] top-[10px] px-[7px] py-[3px] flex justify-center items-center text-[#8EA0AE] text-[11px] font-[500] leading-[15.95px] tracking-[-0.055px] border border-[#8ea0ae99] w-fit">
              House
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#0A62CC] text-[24px] font-[800] leading-[36px] tracking-[-1px]">
              {price}
              <span className="text-[#000929]/[0.5] text-[16px] font-[500] leading-[24px]">
                {priceUnit}
              </span>
            </p>
          </div>
          <h2 className="text-[#000929] text-[20px] font-[600] leading-[30px] tracking-[-0.2px] mb-[10px]">
            {title}
          </h2>
          <p className="text-[#000929]/[0.5] text-[11px] font-[500] leading-[16.5px]  mb-[10px]">
            Omnis animi necessitatibus sit dolorum perspiciatis consequatur
            suscipit.
          </p>
          <div className="flex gap-[8px] items-center">
            <LocationIcon />
            <span className="text-[#000929]/[0.5] text-[14px] font-[500] leading-[21px]">
              {location}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePropertyCard;
