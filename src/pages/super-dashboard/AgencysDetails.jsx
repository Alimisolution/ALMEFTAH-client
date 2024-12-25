import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import TrashIcon from "../../assets/icons/TrashIcon";
import UnlockIcon from "../../assets/icons/UnlockIcon";
import { Link } from "react-router-dom";
import Select from "../../components/common/Select";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import HouseImg from "../../assets/images/offices/house.png";
import LocationIcon from "../../assets/icons/LocationIcon";
import HeartIcon from "../../assets/icons/HeartIcon";
import MouseIcon from "../../assets/icons/MouseIcon";
import BathIcon from "../../assets/icons/BathIcon";
import BedIcon from "../../assets/icons/BedIcon";
import NearPlaceIcon from "../../assets/icons/NearPlaceIcon";
import Pagination from "../../components/dashboard/Pagination";
import OfficeImg from "../../assets/images/offices/office.png";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon";
import PackagesIcon from "../../assets/icons/PackagesIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import ownerImg from "../../assets/images/offices/owner.png";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon";
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const handleSelectionChange = (selected) => {
  console.log("Selected option:", selected);
};
const AgencysDetails = () => {
  return (
    <div>
      <div className="bg-white flex justify-between rounded-[20px] p-5 mb-[40px]">
        <div className="flex items-center gap-[10px]">
          <HomeIcon  stroke = "white" />
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
            Offices
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
          <div className="min-h-[38px] min-w-[38px] flex items-center justify-center bg-white/50 border-2 border-[#C4D9F2] rounded-md">
            <TrashIcon stroke="#BF0E11" width="24px" height="24px" />
          </div>
          <div className="min-h-[38px] min-w-[38px] flex items-center justify-center bg-white/50 border-2 border-[#C4D9F2] rounded-md">
            <UnlockIcon width="24px" height="24px" />
          </div>
          <Select
            options={options}
            placeholder="Processing"
            onChange={handleSelectionChange}
            icon={ChevronDownIcon}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="col-span-2">
          <div className="bg-white p-[10px] rounded-[16px] border-[1.5px] border-[#C6CED4]">
            <div className="bg-[#d9d9d91a] border-[1.5px] border-[rgba(217, 217, 217, 0.10)]  p-[10px] rounded-[16px] flex justify-between gap-[10px]">
              <img src={HouseImg} alt="" />

              <div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center mb-[10px]">
                    <span className="text-[24px] text-[#0A62CC] font-[800] leading-[36px] tracking-[-1px]">
                      $1,500,000
                    </span>
                    <span className="text-[16px] text-[#000929]/[0.5] font-[500] leading-[24px] tracking-[-1px]">
                      /month
                    </span>
                  </div>
                  <div className="text-[11px] text-[#8EA0AE] font-[500] leading-[15.95px] tracking-[-0.055px] w-[60px] h-[27px] bg-[#8EA0AE99] rounded-[14px] border border-[rgba(142, 160, 174, 0.60)]  flex items-center justify-center">
                    House
                  </div>
                </div>
                <h2 className="text-[24px] text-[#000929] font-[700] leading-[36px] tracking-[-0.24px] mb-[5px]">
                  Main title
                </h2>
                <p className="text-[16px] text-[#3B4858] font-[500] leading-[24px]  mb-[10px]">
                  Omnis animi necessitatibus sit dolorum perspiciatis
                  consequatur suscipit.
                </p>
                <div className="flex items-center mb-[10px] pb-[18px] border-b-[1.5px] border-[#F0EFFB]">
                  <LocationIcon />
                  <span className="text-[15px] text-[#000929]/[0.5] font-[500] leading-[22.5px] ml-[10px] ">
                    00231 Clemmie Ferry
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <div className="text-[18px] text-[#0A62CC] font-[500] leading-[26.1px] tracking-[-0.09px] bg-[#fff] rounded-[7px] border border-[#C4D9F2]  h-[34px] p-[5px] flex items-center justify-center gap-[1px]">
                      <HeartIcon /> 4.5K
                    </div>
                    <div className="text-[18px] text-[#0A62CC] font-[500] leading-[26.1px] tracking-[-0.09px] bg-[#fff] rounded-[7px] border border-[#C4D9F2]  h-[34px] p-[5px] flex items-center justify-center gap-[1px]">
                      <MouseIcon /> 1.5K
                    </div>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <div className="flex items-center gap-[8px]">
                      <BedIcon />
                      <span className="text-[14px] text-[#000929]/[0.7] font-[500] leading-[19.6px]">
                        2 Beds
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <BathIcon />
                      <span className="text-[14px] text-[#000929]/[0.7] font-[500] leading-[19.6px]">
                        1 Bathrooms
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <NearPlaceIcon />
                      <span className="text-[14px] text-[#000929]/[0.7] font-[500] leading-[19.6px]">
                        5x7.5 m²{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-[20px]">
            <Pagination />
          </div>
        </div>
        <div className="bg-white p-[10px] rounded-[16px] border-[1.5px] border-[#C6CED4] col-span-1">
          <img src={OfficeImg} className="mb-[20px] block" alt="" />
          <h2 className="text-[24px] text-[#000929] font-[700] leading-[26.4px] tracking-[-0.24px] mb-[10px]">
            Office name
          </h2>
          <p className="text-[14px] text-[#3B4858] font-[300] leading-[22.4px] tracking-[-0.07px] mb-[10px] pb-[20px] border-b border-[#E2E8F0]">
            Dignissimos similique aspernatur ut pariatur. Architecto vel
            delectus similique eaque non est placeat iste. Corrupti dolor unde
            voluptates optio in et sed repellendus. Rem dolorem eum aliquid
            similique odit cupiditate. Nulla est quod ullam et omnis non
            delectus.
          </p>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <span className="min-h-[44px] min-w-[44px] gap-[10px] flex items-center justify-center bg-white border-2 border-[#C4D9F2] rounded-md">
              <PhoneIcon />
            </span>
            <strong className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
              431-869-7862
            </strong>
          </div>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <span className="min-h-[44px] min-w-[44px] gap-[10px] flex items-center justify-center bg-white border-2 border-[#C4D9F2] rounded-md">
              <EnvelopeIcon />
            </span>
            <strong className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
              Ethyl_Strosin38@hotmail.com{" "}
            </strong>
          </div>
          <h3 className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px] mb-[10px]">
            Office address
          </h3>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <span className="min-h-[44px] min-w-[44px] gap-[10px] flex items-center justify-center bg-white border-2 border-[#C4D9F2] rounded-md">
              <LocationIcon />
            </span>
            <strong className="text-[15px] text-[#000929]/[0.5] font-[500] leading-[16.5px] tracking-[-0.15px]">
              Muqdisho,00231 Clemmie Ferry
            </strong>
          </div>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <span className="min-h-[44px] min-w-[44px] gap-[10px] flex items-center justify-center bg-white border-2 border-[#C4D9F2] rounded-md">
              <PackagesIcon color="#0A62CC" />
            </span>
            <strong className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
              Package name
            </strong>
          </div>
          <div className="flex items-center gap-[10px] mb-[10px]">
            <span className="min-h-[44px] min-w-[44px] gap-[10px] flex items-center justify-center bg-white border-2 border-[#C4D9F2] rounded-md">
              <CalendarIcon />
            </span>
            <strong className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
              22/12/2023
            </strong>
          </div>
          <div className="flex items-center gap-[10px] pb-[20px] border-b border-[#E2E8F0] mb-[10px]">
            <div className="text-[16px] text-[#000929] font-[500] leading-[17.6px] tracking-[-0.16px] bg-white p-[10px] rounded-[6px] flex items-center justify-center h-[38px] border-2 border-[#C4D9F2]">
              for sale: 10
            </div>
            <div className="text-[16px] text-[#000929] font-[500] leading-[17.6px] tracking-[-0.16px] bg-white p-[10px] rounded-[6px] flex items-center justify-center h-[38px] border-2 border-[#C4D9F2]">
              for rent: 9
            </div>
          </div>
          <h3 className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px] mb-[10px]">
            Owner info
          </h3>
          <div className="flex items-center gap-[12px] mb-[30px]">
            <img src={ownerImg} alt="" />
            <div className="flex flex-col">
              <h4 className="text-[20px] text-[#000929] font-[700] leading-[22px] tracking-[-0.2px] mb-[10px]">
                Susie Jast
              </h4>
              <h3 className="text-[14px] text-[#0A62CC] font-[500] leading-[15.4px] tracking-[-0.14px] mb-[10px]">
                Real estate office
              </h3>
              <div className="flex flex-wrap items-center gap-[10px]">
                <div className="gap-[10px] flex items-center flex-1">
                  <WhatsAppIcon />
                  <span className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
                    +970567-408-830
                  </span>
                </div>
                <div className="gap-[10px] flex items-center flex-1">
                  <EnvelopeIcon />
                  <span className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
                    Julie.Huels@gmail.com{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AgencysDetails