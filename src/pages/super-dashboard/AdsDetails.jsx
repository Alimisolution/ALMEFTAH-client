import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";
import TrashIcon from "../../assets/icons/TrashIcon";
import UnlockIcon from "../../assets/icons/UnlockIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import VillaIcon from "../../assets/icons/VillaIcon";
import HeartIcon from "../../assets/icons/HeartIcon";
import MouseIcon from "../../assets/icons/MouseIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import OfficeMan from "../../assets/images/advertisement/office-man.png";
import InfoIcon from "../../assets/icons/InfoIcon";
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon";
import houseImg1 from "../../assets/images/advertisement/img-1.png";
import houseImg2 from "../../assets/images/advertisement/img-2.png";
import houseImg3 from "../../assets/images/advertisement/img-3.png";
import houseImg4 from "../../assets/images/advertisement/img-4.png";
import MapImg from "../../assets/images/advertisement/map.png";
import BedRoomIcon from "../../assets/icons/BedRoomIcon";
import BathRoomIcon from "../../assets/icons/BathRoomIcon";
import RecipitionIcon from "../../assets/icons/RecipitionIcon";
import ParkingIcon from "../../assets/icons/ParkingIcon";
import NearPlaceIcon from "../../assets/icons/NearPlaceIcon";
import KitchenIcon from "../../assets/icons/KitchenIcon";
const AdsDetails = () => {
  return (
    <div>
      <div className="bg-white rounded-[20px] p-5 mb-[40px]">
        <div className="flex justify-between items-center mb-[20px]">
          <div className="flex items-center gap-[10px]">
            <HomeIcon />
            <Link
              to="/"
              className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
            >
              Home
            </Link>
            <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
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
              Details
            </Link>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="h-[38px] w-[38px] flex items-center justify-center bg-white/50 border-2 border-[#C4D9F2] rounded-md">
              <TrashIcon stroke="#BF0E11" width="24px" height="24px" />
            </div>
            <div className="h-[38px] w-[38px] flex items-center justify-center bg-white/50 border-2 border-[#C4D9F2] rounded-md">
              <UnlockIcon width="24px" height="24px" />
            </div>
          </div>
        </div>
        <h2 className="text-[30px] text-[#000929] font-[700] leading-[33px] tracking-[-0.3px] mb-[20px]">
          Main title
        </h2>
        <p className="text-[16px] text-[#3B4858] font-[500] leading-[25.6px] tracking-[-0.08px] mb-[20px]">
          Omnis animi necessitatibus sit dolorum perspiciatis consequatur
          <br /> suscipit.
        </p>
        <div className="flex items-center mb-[20px]">
          <LocationIcon />
          <span className="text-[16px] text-[#000929]/[0.5] font-[500] leading-[24px] ml-[10px]">
            00231 Clemmie Ferry
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[14px]">
            <div className="text-[18px] text-white font-[500] leading-[26.1px] tracking-[-0.09px] bg-[#1EAFCA] rounded-[7px] border border-[#50D2EB]  h-[34px] w-[86px] flex items-center justify-center">
              Rent
            </div>
            <div className="text-[16px] text-[#000929] font-[400] leading-[17px] tracking-[-0.09px] bg-[#fff] rounded-[7px] border border-[##C4D9F2]  h-[34px] w-[86px] flex items-center justify-center gap-[10px]">
              <VillaIcon color="#0A62CC" /> Villa
            </div>
            <div className="text-[18px] text-[#0A62CC] font-[500] leading-[26.1px] tracking-[-0.09px] bg-[#fff] rounded-[7px] border border-[#C4D9F2B]  h-[34px] w-[86px] flex items-center justify-center gap-[10px]">
              <HeartIcon /> 4.5 K
            </div>
            <div className="text-[18px] text-[#0A62CC] font-[500] leading-[26.1px] tracking-[-0.09px] bg-[#fff] rounded-[7px] border border-[#C4D9F2B]  h-[34px] w-[86px] flex items-center justify-center gap-[10px]">
              <MouseIcon /> 800
            </div>
            <div className="text-[18px] text-[#0A62CC] font-[500] leading-[26.1px] tracking-[-0.09px] bg-[#fff] rounded-[7px] border border-[#C4D9F2B]  h-[34px] w-[86px] flex items-center justify-center gap-[10px]">
              <EyeIcon width="24px" height="24px" color="#0A62CC" /> 1.5K
            </div>
            <div className="text-[18px] text-[#000929] font-[500] leading-[27px] tracking-[-0.09px] bg-[#fff] rounded-[7px] border border-[#C4D9F2B]  h-[34px] w-[103px] flex items-center justify-center gap-[10px]">
              <CheckIcon /> Verified
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[30px] text-[#0A62CC] font-[800] leading-[45px] tracking-[-1px]">
              $1,500,000
            </span>
            <span className="text-[20px] text-[#000929]/[0.5] font-[500] leading-[30px] tracking-[-1px]">
              /month
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] mb-[20px]">
        <div className="p-[10px] bg-white rounded-2xl w-[60%]">
          <img
            src={houseImg1}
            alt=""
            className="border-[1.5px] border-[#C6CED4] rounded-2xl  overflow-hidden"
          />
          <div className="flex items-center gap-[10px] mt-[10px]">
            <img src={houseImg2} alt="" className="" />
            <img src={houseImg3} alt="" className="" />
            <img src={houseImg4} alt="" className="" />
            <div className="relative rounded-2xl border-[1.5px] border-[#C6CED4] w-[120px] h-[120px] overflow-hidden">
              <img
                src={houseImg1}
                alt=""
                className="h-full w-full object-cover absolute z-10"
              />
              <div className="absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-r from-[#4BDCD5]/60 via-[#1EAFCA]/60 to-[#0A62CC]/60"></div>
              <span className="relative z-30 flex items-center justify-center h-full w-full text-[20px] text-white font-[700] leading-[22px] tracking-[-0.2px]">
                25+
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 w-[40%]">
          <div className="flex justify-between mb-[10px]">
            <div className="flex items-center gap-[16px] flex-1">
              <img src={OfficeMan} alt="" className="mb-5" />
              <div>
                <h3 className="text-[20px] text-[#000929] font-[700] leading-[22px] tracking-[-0.2px] mb-[10px]">
                  Jesus Harber
                </h3>
                <span className="text-[14px] text-[#3B4858] font-[500] leading-[22.4px] tracking-[-0.07px]">
                  From 06/22/2024 to 06/30/2024
                </span>
              </div>
            </div>
            <InfoIcon />
          </div>
          <h2 className="text-[25px] text-[#000929] font-[700] leading-[27.5px] tracking-[-0.25px] mb-[10px]">
            Office name
          </h2>
          <p className="text-[13px] text-[#3B4858] font-[500] leading-[20.8px] tracking-[-0.065px] mb-[10px]">
            Dignissimos similique aspernatur ut pariatur. Architecto vel
            delectus similique eaque non est placeat iste. Corrupti dolor unde
            voluptates optio in et sed repellendus. Rem dolorem eum aliquid
            similique odit cupiditate. Nulla est quod ullam et omnis non
            delectus.
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <div className="h-[44px] w-[44px] flex items-center justify-center bg-white/50 border-2 border-[#C4D9F2] rounded-md">
                <PhoneIcon />
              </div>
              <span className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
                431-869-7862
              </span>
            </div>
            <div className="flex items-center gap-[10px] mb-[10px]">
              <div className="h-[44px] w-[44px] flex items-center justify-center bg-white/50 border-2 border-[#C4D9F2] rounded-md">
                <EnvelopeIcon />
              </div>
              <span className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
                Ethyl_Strosin38@hotmail.com
              </span>
            </div>
            <div className="flex items-center gap-[10px] mb-[10px]">
              <LocationIcon />
              <span className="text-[16px] text-[#000929]/[0.5] font-[500] leading-[24px]">
                00231 Clemmie Ferry
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-[27px] mt-[10px]">
            <div className="text-[15px] text-[#fff] font-[600] leading-[16.5px] tracking-[-0.15px] bg-gradient-to-r from-[#4BDCD5] via-[#1EAFCA] to-[#0A62CC] rounded-[16px]  flex-1 h-[66px] flex items-center justify-center">
              <WhatsAppIcon color="#fff" width="34px" height="34px" />{" "}
              <span className="ml-[10px]">WhatsApp</span>
            </div>
            <div className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px] bg-[#F7F7FD] rounded-[16px] border border-[#C4D9F2] flex-1 h-[66px] flex items-center justify-center">
              Send an email
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[30px] mb-[20px]">
        <div className="p-[20px] bg-white rounded-2xl">
          <h2 className="text-[20px] text-[#000929] font-[700] leading-[22px] tracking-[-0.2px] pb-[17px] border-b border-[#E2E8F0] mb-[20px]">
            Features
          </h2>
          <div className="grid grid-cols-2 gap-[20px]">
            <div className="flex items-center gap-[15px]">
              <span className="w-[60px] h-[60px] rounded-[16px] bg-[#0A62CC1A] flex justify-center items-center">
                <BedRoomIcon />
              </span>
              <div className="flex flex-col gap-[10px]">
                <span className="text-[12px] text-[#00092980] font-[400] leading-[17px]">
                  Bedroom
                </span>
                <span className="text-[20px] text-[#000929] font-[600] leading-[19px]">
                  4 Rooms
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <span className="w-[60px] h-[60px] rounded-[16px] bg-[#0A62CC1A] flex justify-center items-center">
                <ParkingIcon />
              </span>
              <div className="flex flex-col gap-[10px]">
                <span className="text-[12px] text-[#00092980] font-[400] leading-[17px]">
                  Car garage
                </span>
                <span className="text-[20px] text-[#000929] font-[600] leading-[19px]">
                  1 Garage
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <span className="w-[60px] h-[60px] rounded-[16px] bg-[#0A62CC1A] flex justify-center items-center">
                <BathRoomIcon />
              </span>
              <div className="flex flex-col gap-[10px]">
                <span className="text-[12px] text-[#00092980] font-[400] leading-[17px]">
                  Bathrooms
                </span>
                <span className="text-[20px] text-[#000929] font-[600] leading-[19px]">
                  2 Toilet
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <span className="w-[60px] h-[60px] rounded-[16px] bg-[#0A62CC1A] flex justify-center items-center">
                <NearPlaceIcon />
              </span>
              <div className="flex flex-col gap-[10px]">
                <span className="text-[12px] text-[#00092980] font-[400] leading-[17px]">
                  Total area
                </span>
                <span className="text-[20px] text-[#000929] font-[600] leading-[19px]">
                  5x7.5 m²
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <span className="w-[60px] h-[60px] rounded-[16px] bg-[#0A62CC1A] flex justify-center items-center">
                <RecipitionIcon />
              </span>
              <div className="flex flex-col gap-[10px]">
                <span className="text-[12px] text-[#00092980] font-[400] leading-[17px]">
                  Lounge
                </span>
                <span className="text-[20px] text-[#000929] font-[600] leading-[19px]">
                  1 Lounge
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <span className="w-[60px] h-[60px] rounded-[16px] bg-[#0A62CC1A] flex justify-center items-center">
                <KitchenIcon />
              </span>
              <div className="flex flex-col gap-[10px]">
                <span className="text-[12px] text-[#00092980] font-[400] leading-[17px]">
                  Kitchen
                </span>
                <span className="text-[20px] text-[#000929] font-[600] leading-[19px]">
                  1 Kitchen
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[20px] bg-white rounded-2xl">
          <h2 className="text-[20px] text-[#000929] font-[700] leading-[22px] tracking-[-0.2px] pb-[17px] border-b border-[#E2E8F0] mb-[20px]">
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
            <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
              Maids Room
            </div>
            <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
              Shared Spa
            </div>
            <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
              Concierge Service
            </div>
            <div className="text-[16px] text-[#0A62CC] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] bg-white rounded-[6px] border-2 border-[#0A62CC]">
              Shared Gym
            </div>
          </div>
        </div>
      </div>
      <div className="p-[20px] bg-white rounded-2xl mb-[20px]">
        <h2 className="text-[20px] text-[#000929] font-[700] leading-[22px] tracking-[-0.2px] pb-[17px] border-b border-[#E2E8F0] mb-[10px]">
          Address
        </h2>
        <div className="flex items-center mb-[10px]">
          <LocationIcon />
          <span className="text-[16px] text-[#000929]/[0.5] font-[500] leading-[24px] ml-[10px]">
            00231 Clemmie Ferry
          </span>
        </div>
        <div className="flex gap-[10px] mb-[20px]">
          <div className="flex flex-col">
            <span className="text-[#00092980] text-[12px] font-[400] leading-[17px] mb-[10px]">
              City
            </span>
            <h3 className="text-[#000929] text-[20px] font-[600] leading-[19px]">
              Muqdisho
            </h3>
          </div>
          <div className="flex flex-col">
            <span className="text-[#00092980] text-[12px] font-[400] leading-[17px] mb-[10px]">
              State
            </span>
            <h3 className="text-[#000929] text-[20px] font-[600] leading-[19px]">
              Banadir area
            </h3>
          </div>
          <div className="flex flex-col">
            <span className="text-[#00092980] text-[12px] font-[400] leading-[17px] mb-[10px]">
              Country
            </span>
            <h3 className="text-[#000929] text-[20px] font-[600] leading-[19px]">
              Muqdisho
            </h3>
          </div>
        </div>
        <div className="">
          <img src={MapImg} />
        </div>
      </div>
    </div>
  );
};

export default AdsDetails;
