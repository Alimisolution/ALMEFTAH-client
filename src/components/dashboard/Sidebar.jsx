import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.svg";
import img from "../../assets/images/admin-sidebar/img.png";
import avarImg from "../../assets/images/admin-sidebar/avatar.png";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";

const Sidebar = ({ open, toggleDrawer, sidebarItems,isCompanyDashboard }) => {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`absolute h-full left-5 top-5 bottom-5 transition-all duration-300 z-[7] t-[68px] ${
        open ? "w-[280px]" : "w-[76px]"
      }`}
    >
      <div className="bg-white pb-6 rounded-[16px] shadow-lg">
        <button
          onClick={toggleDrawer}
          className={`absolute top-7 -right-3 p-2 rounded-full w-6 h-6 flex items-center justify-center bg-white border border-[#E2E8F0] duration-500 ${
            open && "rotate-180"
          }`}
        >
          <ChevronLeftIcon color="#081021" width="17" height="16" strokeWidth="2" />
        </button>

        <div className={`flex items-center gap-4 !mb-12 ${open ? "p-6" : "p-4"}`}>
          <img
            src={logo}
            alt="Logo"
            className={`${open ? "w-[50px] h-[55px]" : "w-[44px] h-[49px]"} transition-all `}
          />
          {open && (
            <div className="mr-[10px]">
              <h2 className="text-[#0F74CC] text-[20px] leading-[28px] font-[700]">ALMEFTAH</h2>
              <h3 className="text-[#748392] text-[17px] leading-[32.8px] font-[400]">Real Estate</h3>
            </div>
          )}
        </div>

        <ul className="flex flex-col h-fit relative">
          {sidebarItems.map(({ text, icon, path }, index) => (
            <Link
              to={path}
              key={text}
              onClick={() => setActive(index)}
              className={`flex items-center gap-3 cursor-pointer h-[44px] ${
                index === sidebarItems.length - 1 && !isCompanyDashboard && "mt-12"
              } ${
                open
                  ? "justify-start px-4 py-3 rounded-[99px] mx-6 mb-1"
                  : "justify-center px-3 rounded-full m-4"
              } ${active === index ? "bg-[#EEF2FF] text-[#0A62CC]" : "text-[#64748B]"}`}
            >
              <span className="text-[12px] block">
                {React.cloneElement(icon, {
                  color: active === index ? "#0A62CC" : "#64748B",
                })}
              </span>
              {open && <span className="leading-[20px] font-[500]">{text}</span>}
              {index === sidebarItems.length - 1 && !isCompanyDashboard && (
                <div
                  className={`absolute left-0 right-0 w-[280px] h-[1px] bg-[#E2E8F0] ${
                    open ? "w-[280px] bottom-[68px]" : "w-[76px] bottom-[92px]"
                  }`}
                ></div>
              )}
            </Link>
          ))}
        </ul>

        <div className="flex flex-col justify-center px-6">
          {open && <img src={img} alt="" className="mb-6" />}
          <div className="flex justify-between gap-[12px] items-center mt-6">
            <img src={avarImg} alt="" className="" />
            {open && (
              <div className="flex-1">
                <span className="text-[12px] font-[500] leading-5 text-[#64748B]">Welcome back 👋</span>
                <span className="text-[14px] font-[500] leading-5 text-[#081021]">Johnathan</span>
              </div>
            )}
            {open && <ChevronLeftIcon color="#081021" width="20" height="20" strokeWidth="2" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

