import React from "react";
import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";
import RealEstateCard from "../../components/user/real-state/RealEstateCard";
import FilterAgentCard from "../../components/user/find-agent-details/FilterAgentCard";
import img1 from "../../assets/images/property/img.png";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import OfficeCard from "../../components/user/find-agent-details/OfficeCard";
const FindAgentDetails = () => {
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
    <section className="md:px-[80px] px-[8px] mt-[30px]">
      <div className="flex items-center gap-[10px] mb-[30px]">
        <HomeIcon stroke="#fff" />
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
          Find agent
        </Link>
        <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
        <Link
          to="/"
          className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
        >
          Details
        </Link>
      </div>
      <section className="grid grid-cols-3 gap-[20px] relative mb-[50px]">
        <div className="col-span-3 lg:col-span-2">
          <div className="bg-white px-[30px] py-[17px] rounded-[16px] border-[1.5px] border-[#C6CED4]">
            {properties.map((property, index) => (
              <RealEstateCard key={index} {...property} />
            ))}
          </div>

          <div className="flex justify-between items-center mt-[30px]">
            <span className="text-[#0A62CC] text-[16px] font-[700] leading-[17.6px] tracking-[-0.16px] min-h-[38px] w-[38px] rounded-[6px] bg-white border-2 border-[#0A62CC] flex justify-center items-center">
              <ChevronRightIcon
                color="#0A62CC"
                width="16"
                height="16"
                strokeWidth="2"
              />
            </span>
            <div className="flex items-center gap-[10px]">
              <span className="text-[#0A62CC] text-[16px] font-[700] leading-[17.6px] tracking-[-0.16px] min-h-[38px] w-[38px] rounded-[6px] bg-white border-2 border-[#0A62CC] flex justify-center items-center">
                1
              </span>
              <span className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] min-h-[38px] w-[38px] rounded-[6px] bg-white border-2 border-[#0A62CC] flex justify-center items-center">
                2
              </span>
              <span className="text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] min-h-[38px] w-[38px] rounded-[6px] bg-white border-2 border-[#0A62CC] flex justify-center items-center">
                3
              </span>
            </div>
            <span className="text-[#0A62CC] text-[16px] font-[700] leading-[17.6px] tracking-[-0.16px] min-h-[38px] w-[38px] rounded-[6px] bg-white border-2 border-[#0A62CC] flex justify-center items-center">
              <ChevronLeftIcon
                color="#0A62CC"
                width="16"
                height="16"
                strokeWidth="2"
              />
            </span>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <OfficeCard />
          <FilterAgentCard />
        </div>
      </section>
    </section>
  );
};

export default FindAgentDetails;
