import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import CameraIcon from "../../assets/icons/CameraIcon";
import SquareRemoveIcon from "../../assets/icons/SquareRemoveIcon";
import VideoIcon from "../../assets/icons/VideoIcon";
import propertyImg from "../../assets/images/advertisement/property.png";
import PlayIcon from "../../assets/icons/PlayIcon";
import Button from "../../components/common/Button";
const PropertyFeatures = () => {
  return (
    <div>
      <div className="bg-white rounded-[20px] p-5 mb-[40px]">
        <div className="flex items-center gap-[10px]">
          <HomeIcon />
          <Link
            to="/"
            className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
          >
            Ads
          </Link>
          <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
          <Link
            to="/"
            className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
          >
            Add Ads
          </Link>
          <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
          <Link
            to="/"
            className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
          >
            Details
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-[20px] p-5">
        <div className="flex items-center gap-[10px] pb-[20px] border-b border-[#E2E8F0] mb-[30px]">
          <HomeIcon />
          <Link
            to="/"
            className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
          >
            Property data
          </Link>
          <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
          <Link
            to="/"
            className="text-[20px] text-[#64748B] font-[500] leading-[22px] tracking-[-0.2px]"
          >
            Property features
          </Link>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-x-[30px]">
            <Input
              label="No.Lounge"
              placeholder="Enter the No.Lounge"
              name=""
              type="text"
              value={""}
              onChange={""}
            />
            <Input
              label="No.Car garage"
              placeholder="Enter the No.Car garage"
              name=""
              type="text"
              value={""}
              onChange={""}
            />
            <Input
              label="No.Kitchen"
              placeholder="Enter the No.Kitchen"
              name=""
              type="text"
              value={""}
              onChange={""}
            />
            <Input
              label="No.Total area *"
              placeholder="Enter the No.Total area"
              name=""
              type="text"
              value={""}
              onChange={""}
            />
          </div>
        </form>
        <div className="grid grid-cols-2 gap-x-[30px] pb-[20] border-b border-[#E2E8F0] mb-[20px]">
          <div className="">
            <h2 className="text-[#000929] text-[24px] font-[500] leading-[26.4px] tracking-[-0.24px] mb-[20px]">
              Beds & Baths
            </h2>
            <h3 className="text-[#000] text-[18px] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[15px]">
              Bedrooms
            </h3>
            <div className="flex flex-wrap gap-[10px] mb-[20px]">
              <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
                studio
              </div>
              <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
                1
              </div>
              <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
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
            <div className="flex flex-wrap gap-[10px] mb-[20px]">
              <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
                1
              </div>
              <div className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 border-[#C4D9F2] bg-white rounded-[6px] flex items-center justify-center">
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
          </div>
          <div className="">
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
            <h3 className="text-[20px] text-[#000929] font-[500] leading-[22px] tracking-[-0.2px] mb-[20px]">
              Amenities
            </h3>
            <div className="flex gap-[10px] items-center flex-wrap mb-[20px]">
              <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
                Central A/C
              </div>
              <div className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#C4D9F2]">
                Maids Room
              </div>
              <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
                Shared Spa
              </div>
              <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
                Concierge Service
              </div>
              <div className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#C4D9F2]">
                Shared Gym
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[20px] border-b border-[#E2E8F0]">
          <h2 className="text-[24px] text-[#000929] font-[500] leading-[26.4px] tracking-[-0.24px] mb-[10px]">
            Photos of the property
          </h2>
          <p className="text-[16px] text-[#989EA5] font-[500] leading-[25.6px] tracking-[-0.08px] mb-[20px]">
            Please attach at least 10 photos of the property
          </p>
          <div className="flex gap-[20px] items-center mb-[20px]">
            <label className="text-[12px] text-[#4C535F] font-[500] p-[10px] w-[110px] h-[112px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
              <CameraIcon />
              Upload your photo
            </label>
            <div>
              <h3 className="text-[25px] text-[#000] font-[500] mb-[26px]">
                Property image
              </h3>
              <strong className="text-[12px] text-[#0A62CC] font-[500]">
                Please attach a photo of the property in PNG or JPG format
              </strong>
            </div>
          </div>
          <div className="flex gap-[20px] items-center flex-wrap">
            <div className="relative">
              <img src={propertyImg} alt="" />
              <span className="absolute left-[5px] top-[5px]">
                <SquareRemoveIcon />
              </span>
            </div>
            <div className="relative">
              <img src={propertyImg} alt="" />
              <span className="absolute left-[5px] top-[5px]">
                <SquareRemoveIcon />
              </span>
            </div>
            <div className="relative">
              <img src={propertyImg} alt="" />
              <span className="absolute left-[5px] top-[5px]">
                <SquareRemoveIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="pt-[20px]">
          <h2 className="text-[24px] text-[#000929] font-[500] leading-[26.4px] tracking-[-0.24px] mb-[10px]">
            Video of the property
          </h2>
          <p className="text-[16px] text-[#989EA5] font-[500] leading-[25.6px] tracking-[-0.08px] mb-[20px]">
            Please attach at least 2 Video of the property
          </p>
          <div className="flex gap-[20px] items-center mb-[20px]">
            <label className="text-[12px] text-[#4C535F] font-[500] p-[10px] w-[110px] h-[112px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
              <VideoIcon />
              Video property
            </label>
            <div>
              <h3 className="text-[25px] text-[#000] font-[500] mb-[26px]">
                Video property
              </h3>
              <strong className="text-[12px] text-[#0A62CC] font-[500]">
                Please attach a Video property of the property in Mp4{" "}
              </strong>
            </div>
          </div>
          <div className="flex gap-[20px] items-center flex-wrap">
            <div className="relative border-2 border-[#C4D9F2] rounded-[6px] overflow-hidden">
              <img src={propertyImg} alt="" />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-[6px]"></div>
              <span className="absolute left-[5px] top-[5px]">
                <SquareRemoveIcon />
              </span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <PlayIcon />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <div className="flex items-center gap-[20px]">
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
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
