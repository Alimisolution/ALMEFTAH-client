import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import avarImg from "../../assets/images/admin-sidebar/avatar.png";
import NotifyIcon from "../../assets/icons/NotifyIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import logoImg from "../../assets/images/logo/favicon.png";
import { Link } from "react-router-dom";
import UserAccountIcon from "../../assets/icons/UserAccountIcon";
import SetUpIcon from "../../assets/icons/SetUpIcon";
import VerifiedIdIcon from "../../assets/icons/VerifiedIdIcon";
const Header = ({ open, title, isCompanyDashboard }) => {
  const [showModalNotification, setShowModalNotification] = useState(false);

  return (
    <>
      <header
        className={`h-[68px] rounded-2xl ${
          open
            ? "w-[calc(100%-60px) left-[30px]"
            : "w-[calc(100%-156px)] left-[126px]"
        } absolute top-5 right-[30px] h-16 flex items-center bg-white shadow-md transition-all duration-300 z-[5]`}
      >
        <div className="px-6 flex items-center justify-between w-full gap-5">
          <h1 className="text-[25px] font-[600] leading-[27.5px] tracking-[-0.25px] text-[#000929]">
            {title}
          </h1>
          {isCompanyDashboard && (
            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[48px] h-[48px] rounded-full custom-gradient2 flex items-center justify-center">
                  <UserAccountIcon />
                </div>
                <div className="w-[102px] h-[4px] bg-gradient-to-r from-[#4BDCD5] via-[#1EAFCA] to-[#0A62CC] rounded-xl"></div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[48px] h-[48px] rounded-full custom-gradient2 flex items-center justify-center">
                  <SetUpIcon />
                </div>
                <div className="w-[102px] h-[4px] bg-[#C4D9F2] rounded-xl">
                  <div className="w-[50%] h-[100%]  bg-gradient-to-r from-[#4BDCD5] via-[#1EAFCA] to-[#0A62CC] rounded-xl"></div>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                  <VerifiedIdIcon />
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center gap-5">
            <div className="bg-[#F5F7FA] h-[50px] w-[255px] rounded-[40px] px-5 items-center hidden md:flex">
              <SearchIcon />

              <input
                type="text"
                placeholder="Search"
                className="ml-[15px] bg-[#F6F6F6] text-[#8BA3CB] text-[13px] font-[400] focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-[15px]">
              <Link to="/super-dashboard/settings">
                <img src={avarImg} alt="" className="" />
              </Link>
              <div
                className="w-[35px] h-[35px] border border-[rgba(0, 0, 0, 0.15)] flex items-center justify-center rounded-full relative cursor-pointer"
                onClick={() => setShowModalNotification(true)}
              >
                <NotifyIcon />
                <span className="absolute bottom-[5px] left-[8px] w-[6px] h-[6px] bg-[#D40F7B] rounded-full"></span>
              </div>
              <div className="w-[35px] h-[35px] border border-[rgba(0, 0, 0, 0.15)] flex items-center justify-center rounded-full cursor-pointer">
                <LogoutIcon />
              </div>
            </div>
          </div>
        </div>
      </header>
      {showModalNotification && (
        <div className="fixed w-full inset-0  h-full z-[999] bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white absolute z-[1000] top-[88px] right-[30px] transform  w-[470px] p-[15px] rounded-[15px]">
            <div className="flex items-center gap-[10px] mb-[20px]">
              <span
                onClick={() => setShowModalNotification(false)}
                className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center border border-[#E8ECF4] cursor-pointer"
              >
                {" "}
                <ChevronRightIcon
                  width="13px"
                  height="13px"
                  color="#1E232C"
                  strokeWidth="2"
                />
              </span>
              <h2 className="text-[#000929] text-[12px] font-[600] leading-[13.2px] tracking-[-0.12px]">
                Notifications
              </h2>
            </div>
            <div className="mb-[20px] p-[16px] bg-white border overflow-hidden border-[#0A62CC] rounded-[4px] relative">
              <span className="absolute top-0 left-0  bg-[#0A62CC]/[0.4] w-[8px] h-full"></span>
              <div className="flex items-center gap-[16px]">
                <div className=" flex justify-center items-center gap-[10px] w-[30px] h-[30px] border border-[#C4D9F2] rounded-full relative">
                  <img
                    src={logoImg}
                    alt="logo"
                    className="w-[17.5px] h-[18.333px] block"
                  />
                  <span className="absolute bottom-0 left-0  bg-[#0A62CC] w-[5.833px] h-[5.833px] rounded-full"></span>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <span className="text-[#000]/[0.56] text-[10px] font-[600] leading-[16px] tracking-[0.125px uppercase]">
                      ALMEFTAH
                    </span>
                    <span className="text-[#000]/[0.56] text-[10px] font-[600] leading-[16px] tracking-[0.125px uppercase]">
                      •
                    </span>
                    <span className="text-[#000]/[0.56] text-[10px] font-[600] leading-[16px] tracking-[0.125px uppercase]">
                      9.56 AM
                    </span>
                  </div>
                  <h3 className="text-[#373737] text-[14px] font-[400] leading-[20px] mb-[8px]">
                    Dolorem sit consequatur sed consequatur.{" "}
                  </h3>
                  <p className="text-[#000]/[0.56] text-[12px] font-[400] leading-[18px]">
                    Do ullamco ex velit anim do proident exercitation et anim
                    tempor. Lorem sunt deserunt labore non excepteur veniam enim
                    quis officia magna ani...
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-[20px] p-[16px] bg-white border overflow-hidden border-[#0A62CC] rounded-[4px] relative">
              <span className="absolute top-0 left-0  bg-[#0A62CC]/[0.4] w-[8px] h-full"></span>
              <div className="flex items-center gap-[16px]">
                <div className=" flex justify-center items-center gap-[10px] w-[30px] h-[30px] border border-[#C4D9F2] rounded-full relative">
                  <img
                    src={logoImg}
                    alt="logo"
                    className="w-[17.5px] h-[18.333px] block"
                  />
                  <span className="absolute bottom-0 left-0  bg-[#0A62CC] w-[5.833px] h-[5.833px] rounded-full"></span>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <span className="text-[#000]/[0.56] text-[10px] font-[600] leading-[16px] tracking-[0.125px uppercase]">
                      ALMEFTAH
                    </span>
                    <span className="text-[#000]/[0.56] text-[10px] font-[600] leading-[16px] tracking-[0.125px uppercase]">
                      •
                    </span>
                    <span className="text-[#000]/[0.56] text-[10px] font-[600] leading-[16px] tracking-[0.125px uppercase]">
                      9.56 AM
                    </span>
                  </div>
                  <h3 className="text-[#373737] text-[14px] font-[400] leading-[20px] mb-[8px]">
                    Dolorem sit consequatur sed consequatur.{" "}
                  </h3>
                  <p className="text-[#000]/[0.56] text-[12px] font-[400] leading-[18px]">
                    Do ullamco ex velit anim do proident exercitation et anim
                    tempor. Lorem sunt deserunt labore non excepteur veniam enim
                    quis officia magna ani...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
