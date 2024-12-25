import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import FilterIcon from "../../assets/icons/FilterIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import avarImg from "../../assets/images/admin-sidebar/avatar.png";
import PhoneIcon from "../../assets/icons/PhoneIcon.jsx";
import TrashIcon from "../../assets/icons/TrashIcon";
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon";
const SendAnEmail = () => {
  return (
    <div className="grid grid-cols-10 gap-x-[30px]">
      <div className="col-span-4 bg-white rounded-[20px] p-[20px]">
        <div className="flex items-center gap-[10px] mb-[30px]">
          <HomeIcon stroke="white" />
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
            Customer
          </Link>
          <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
          <Link
            to="/"
            className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
          >
            Send an email
          </Link>
        </div>
        <div className=" pb-[20px] mb-[20px] border-b border-b-[#000]/[0.11]">
          <div className="bg-[#efefef42] border border-[#C4D9F2] h-[50px] rounded-[40px] px-5 items-center hidden md:flex">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for Customer"
              className="ml-[15px] bg-transparent text-[#8BA3CB] text-[13px] font-[500] focus:outline-none w-full"
            />
            <div
              className="border-l-[1.5px] border-[#BEBEBE] pl-[15.75px] cursor-pointer"
              onClick={() => console.log("")}
            >
              <FilterIcon />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[10px] mb-[10px] relative border border-[#C4D9F2] bg-white rounded-[16px] p-[10px]">
          <img src={avarImg} alt="" width="65px" height="65px" />
          <div className="">
            <h3 className="text-[18px] text-[#000929] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[12px]">
              Ron Champlin
            </h3>
            <div className="flex items-center gap-[20px] flex-wrap">
              <div className="text-[12px] text-[#000929] font-[600] leading-[13.2px] tracking-[-0.12px] flex items-center gap-[10px]">
                <PhoneIcon width="20" height="20" /> 624-714-7112
              </div>
              <div className="text-[12px] text-[#000929] font-[600] leading-[13.2px] tracking-[-0.12px] flex items-center gap-[10px]">
                <EnvelopeIcon width="20" height="20" />{" "}
                Eloisa.Carroll74@gmail.com
              </div>
            </div>
            <div className="flex items-center gap-[20px] absolute right-[10px] top-[10px]">
              <TrashIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 bg-white rounded-[20px] p-[20px]">
        <h3 className="text-[#000] text-[16px] font-[600] mb-[20px]">
          Announcement created
        </h3>
        <div className="flex items-center gap-[20px] mt-[50px]">
          <Button text="Send" variant="primary" type="submit" />
          <Button
            text=" Restore to default"
            variant="secondary"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default SendAnEmail;
