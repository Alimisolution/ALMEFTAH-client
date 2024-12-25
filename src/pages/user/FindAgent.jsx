import React from "react";
import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import houseImg1 from "../../assets/images/real-estate/img1.png";
import { Link } from "react-router-dom";
import OfficeCard from "../../components/user/find-agent/OfficeCard";
import FilterCard from "../../components/user/real-state/FilterCard";
import officeImg1 from "../../assets/images/find-agent/office-img.png";
import officeImg2 from "../../assets/images/find-agent/office-img.png";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import SearchForCompanyCard from "../../components/user/find-agent/SearchForCompanyCard";
const FindAgent = () => {
  const offices = [
    {
      officeName: "Office One",
      description: "Dignissimos similique aspernatur ut pariatur.",
      type: "Real estate office",
      forSale: 1,
      forRent: 0,
      image: officeImg1,
    },
    {
      officeName: "Office Two",
      description:
        "Architecto vel delectus similique eaque non est placeat iste.",
      type: "Commercial office",
      forSale: 2,
      forRent: 3,
      image: officeImg2,
    },
    {
      officeName: "Office One",
      description: "Dignissimos similique aspernatur ut pariatur.",
      type: "Real estate office",
      forSale: 1,
      forRent: 0,
      image: officeImg1,
    },
    {
      officeName: "Office Two",
      description:
        "Architecto vel delectus similique eaque non est placeat iste.",
      type: "Commercial office",
      forSale: 2,
      forRent: 3,
      image: officeImg2,
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
          <div className="flex items-center gap-[10px] mb-[14px]">
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
              Find agent
            </Link>
          </div>
          <h3 className="text-[#fff] text-[40px] font-[700] leading-[44px] tracking-[-0.4px] mb-[20px] text-center">
            Find the best real estate companies{" "}
          </h3>
        </div>
      </div>
      <section className="grid grid-cols-3 gap-[40px] z-10 relative -mt-[120px] mb-[50px] px-[20px]">
        <div className="col-span-2">
          <div className="bg-white p-[30px] rounded-[16px]">
            <div className="grid grid-cols-2 gap-[30px]">
              {offices.map((office, index) => (
                <OfficeCard
                  key={index}
                  officeName={office.officeName}
                  description={office.description}
                  type={office.type}
                  forSale={office.forSale}
                  forRent={office.forRent}
                  image={office.image}
                />
              ))}
            </div>
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
        <div className="bg-white col-span-1 px-[15px] py-[20px] rounded-[16px]">
          <SearchForCompanyCard />
        </div>
      </section>
    </section>
  );
};

export default FindAgent;
