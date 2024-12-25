import React, { useState } from "react";
import SettingIcon from "../../assets/icons/SettingIcon.jsx";
import ComputerSetting from "../../assets/icons/ComputerSetting.jsx";
import AiPhoneIcon from "../../assets/icons/AiPhoneIcon.jsx";
import PaintBoardIcon from "../../assets/icons/PaintBoardIcon.jsx";
import NotificationIcon from "../../assets/icons/NotificationIcon.jsx";
import CustomerSupportIcon from "../../assets/icons/CustomerSupportIcon.jsx";
import HouseIcon from "../../assets/icons/HouseIcon";
import UnlockIcon from "../../assets/icons/UnlockIcon";
import TrashIcon from "../../assets/icons/TrashIcon";
import EditIcon from "../../assets/icons/EditIcon";
import VillaIcon from "../../assets/icons/VillaIcon.jsx";
import BanglowIcon from "../../assets/icons/BanglowIcon.jsx";
import PlotIcon from "../../assets/icons/PlotIcon.jsx";
import LandIcon from "../../assets/icons/LandIcon.jsx";
import CommericalIcon from "../../assets/icons/CommericalIcon.jsx";
import PentHouseIcon from "../../assets/icons/PentHouseIcon.jsx";
import CondoIcon from "../../assets/icons/CondoIcon.jsx";
import TownHouseIcon from "../../assets/icons/TownHouseIcon.jsx";
import BedRoomIcon from "../../assets/icons/BedRoomIcon.jsx";
import BathRoomIcon from "../../assets/icons/BathRoomIcon.jsx";
import NearPlaceIcon from "../../assets/icons/NearPlaceIcon.jsx";
import RecipitionIcon from "../../assets/icons/RecipitionIcon.jsx";
import ParkingIcon from "../../assets/icons/ParkingIcon.jsx";
import KitchenIcon from "../../assets/icons/KitchenIcon.jsx";
import SearchIcon from "../../assets/icons/SearchIcon.jsx";
import Table from "../../components/dashboard/Table.jsx";
import Select from "../../components/common/Select.jsx";
import avarImg from "../../assets/images/admin-sidebar/avatar.png";
import logoImg from "../../assets/images/logo/logo.png";
import favIconImg from "../../assets/images/logo/favicon.png";
import adsImg from "../../assets/images/system-settings/img.png";
import realStateImg from "../../assets/images/system-settings/img2.png";
import EyeIcon from "../../assets/icons/EyeIcon.jsx";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import ProfilePropertyCard from "../../components/user/profile/ProfilePropertyCard.jsx";
import HeartIcon from "../../assets/icons/HeartIcon.jsx";
import AccountIcon from "../../assets/icons/AccountIcon.jsx";
import PasswordIcon from "../../assets/icons/PasswordIcon.jsx";
import JoinIcon from "../../assets/icons/JoinIcon.jsx";
import Input from "../../components/common/Input";
import CameraIcon from "../../assets/icons/CameraIcon";
import img1 from "../../assets/images/property/img.png";

const Profile = () => {
  const [activeGlobalTab, setActiveGlobalTab] = useState("1");

  const [profileActivationSection, setProfileActivationSection] = useState(1);
  const profileSection = [
    { id: 1, label: "My account", icon: <AccountIcon /> },
    { id: 2, label: "Favorites", icon: <HeartIcon /> },
    { id: 3, label: "Password", icon: <PasswordIcon /> },
    { id: 4, label: "Join Us Agency", icon: <JoinIcon /> },
  ];
  const properties = [
    {
      imageUrl: img1,
      price: "$1,500",
      priceUnit: "/month",
      rentType: "Rent",
      title: "Luxury Apartment",
      location: "San Francisco, CA",
      beds: 2,
      bathrooms: 1,
      size: "5x7.5 m²",
    },
    {
      imageUrl: img1,
      price: "$3,000",
      priceUnit: "/month",
      rentType: "Rent",
      title: "Modern House",
      location: "Los Angeles, CA",
      beds: 3,
      bathrooms: 2,
      size: "10x12 m²",
    },
    {
      imageUrl: img1,
      price: "$1,500",
      priceUnit: "/month",
      rentType: "Rent",
      title: "Luxury Apartment",
      location: "San Francisco, CA",
      beds: 2,
      bathrooms: 1,
      size: "5x7.5 m²",
    },
    {
      imageUrl: img1,
      price: "$3,000",
      priceUnit: "/month",
      rentType: "Rent",
      title: "Modern House",
      location: "Los Angeles, CA",
      beds: 3,
      bathrooms: 2,
      size: "10x12 m²",
    },
  ];
  return (
    <div className="grid grid-cols-7 gap-x-[30px] mt-[80px] mb-[50px] md:px-[80px] px-[8px]">
      <div className="bg-white rounded-[20px] py-[30px] px-[20px] mb-[40px] col-span-7 lg:col-span-2">
        <div className="">
          <h2 className="text-[20px] text-[#000929] font-[600] leading-[26.4px] tracking-[-0.24px] mb-[26px]">
            Profile sections{" "}
          </h2>

         <div className="flex flex-col">
         {profileSection.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-[10px] border-2 cursor-pointer rounded-[16px] mb-[20px] bg-[#F7F7FD] h-[64px] py-[13px] px-[10px] ${
                profileActivationSection === item.id
                  ? "border-[#0A62CC]"
                  : "border-[#C4D9F2]"
              }`}
              onClick={() => setProfileActivationSection(item.id)}
            >
              <div className="w-[38px] h-[38px] flex items-center justify-center bg-white/60 border-2 border-[#C4D9F2] rounded-[6px]">
                {item.icon}
              </div>
              <span
                className={`text-[16px] text-[#000929] leading-[24px] 
                ${
                  profileActivationSection === item.id
                    ? "font-[600]"
                    : "font-[500]"
                }
                `}
              >
                {item.label}
              </span>
            </div>
          ))}
         </div>
        </div>
      </div>
      <div className="col-span-7 lg:col-span-5">
        {/* Notifications */}
        {profileActivationSection === 1 && (
          <div className="p-5 bg-white rounded-2xl">
            <div className="flex gap-[20px] items-center mb-[18px]">
              <label className="text-[12px] text-[#4C535F] font-[500] p-[10px] w-[110px] h-[112px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
                <CameraIcon />
                Upload your photo
              </label>
              <div>
                <h3 className="text-[25px] text-[#000] font-[500] mb-[26px]">
                  Personal photo{" "}
                </h3>
                <strong className="text-[12px] text-[#0A62CC] font-[500]">
                  Please attach a photo of the property in PNG or JPG format
                </strong>
              </div>
            </div>
            <form>
              <div className="grid grid-cols-2 gap-x-[30px]">
                <Input
                  label="First Name"
                  placeholder="Enter your First Name"
                  name=""
                  type="text"
                  value={""}
                  onChange={""}
                />
                <Input
                  label="Last Name"
                  placeholder="Enter your Last Name"
                  name=""
                  type="text"
                  value={""}
                  onChange={""}
                />
                <Input
                  label="Phone Number"
                  placeholder="Enter your Phone Number"
                  name=""
                  type="text"
                  value={""}
                  onChange={""}
                />
                <Input
                  label="Email"
                  placeholder="Enter your Email"
                  name=""
                  type="text"
                  value={""}
                  onChange={""}
                />
                <div className="col-span-2 mb-[104px]">
                  <Input
                    label="City"
                    placeholder="Enter the City"
                    name=""
                    type="text"
                    value={""}
                    onChange={""}
                  />
                </div>
              </div>
            </form>
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
        )}
        {profileActivationSection === 2 && (
          <>
            <div className="p-5 bg-white rounded-2xl mb-[30px] gap-[30px] grid grid-cols-1 md:grid-cols-2">
            {properties.map((property, index) => (
              <ProfilePropertyCard key={index} {...property} />
            ))}
            </div>
          </>
        )}
     
        {profileActivationSection === 3 && (
          <>
            <div className="p-5 bg-white rounded-2xl mb-[30px] grid grid-cols-2">
           <div className="col-span-1">
           <Input
                label="Old Password"
                placeholder="Enter your Old Password"
                type="password"
              />
                 <Input
                label="New Password"
                placeholder="Enter your New Password"
                type="password"
              />
                 <Input
                label="Confirm New Password"
                placeholder="Enter your Confirm New Password"
                type="password"
              />
                 <div className="flex w-full justify-end">
              <Link
                to="/forgot-password"
                className="text-[13px] text-[#0A62CC] font-[400] w-full text-right"
              >
                Forgot Password
              </Link>
              {" "}
            </div>
            <div className="flex items-center gap-[20px]  mt-[208px]">
              <Button
                text="Update Password"
                variant="primary"
                type="submit"
                className="flex-1"
              />
              <Button
                text="Reset"
                variant="secondary"
                type="submit"
                className="flex-1"
              />
            </div>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
