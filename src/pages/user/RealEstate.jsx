import React from "react";
import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import houseImg1 from "../../assets/images/real-estate/img1.png";
import { Link } from "react-router-dom";
import RealEstateCard from "../../components/user/real-state/RealEstateCard";
import FilterCard from "../../components/user/real-state/FilterCard";
import img1 from "../../assets/images/property/img.png";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
const RealEstate = () => {
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
      <div className="relative z-[5] rounded-2xl border-[1.5px] border-[#C6CED4] w-full h-[322px] overflow-hidden">
        {/* Image Layer */}
        <img
          src={houseImg1}
          alt="House"
          className="h-full w-full object-cover absolute z-10"
        />
        {/* Gradient Layer */}
        <div className="absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-r from-[#4BDCD5E5]/90 via-[#1EAFCAE5]/90 to-[#0A62CCE5]/90"></div>
        {/* Content Layer */}
        <div className="relative z-30 p-[28px]">
          <div className="flex items-center gap-[10px] mb-[22px]">
            <HomeIcon color="#fff" />
            <Link
              to="/"
              className="text-[20px] text-[#fff] font-[600] leading-[22px] tracking-[-0.2px]"
            >
              Home
            </Link>
            <ChevronLeftIcon color="#fff" width="16px" height="16px" />
            <Link
              to="/"
              className="text-[20px] text-[#fff] font-[600] leading-[22px] tracking-[-0.2px]"
            >
              Real Estate
            </Link>
          </div>
          <h3 className="text-[#fff] text-[30px] font-[700] leading-[33px] tracking-[-0.3px] mb-[20px]">
            Search for Real estate
          </h3>
          <p className="text-[#fff] text-[25px] font-[400] leading-[27.5px] tracking-[-0.25px]">
            Get the best results based on your location
          </p>
        </div>
      </div>
      <section className="grid grid-cols-3 gap-[40px] z-10 relative -mt-[120px] mb-[50px] px-[20px]">
        <div className="col-span-3 lg:col-span-2">
          <div className="bg-white px-[15px] py-[30px] rounded-[16px] border-[1.5px] border-[#C6CED4]">
            <h2 className="text-[#000929] text-[24px] font-[600] leading-[26.4px] tracking-[-0.24px] mb-[20px]">
              Best options ...
            </h2>
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
        <div className="bg-white col-span-3 lg:col-span-1 px-[15px] py-[30px] rounded-[16px] border-[1.5px] border-[#C6CED4]">
          <FilterCard />
        </div>
      </section>
    </section>
  );
};

export default RealEstate;
