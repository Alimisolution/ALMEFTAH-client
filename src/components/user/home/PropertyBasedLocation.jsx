import HeadingSection from "./HeadingSection";
import RentIcon from "../../../assets/icons/RentIcon";
import NewProjectIcon from "../../../assets/icons/NewProjectIcon";
import BuyIcon from "../../../assets/icons/BuyIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import LocationPinIcon from "../../../assets/icons/LocationPinIcon";
import Button from "../../common/Button";
import PropertyBasedLocationCard from "./PropertyBasedLocationCard";
import img1 from "../../../assets/images/property/img.png";

const PropertyBasedLocation = () => {
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
    <section className="md:px-[80px] px-[8px] mb-[85px]">
      <HeadingSection
        title="Based on your location"
        subTitle="Some of our picked properties near you location."
        learnMore={false}
      />
      <div className="flex justify-center md:justify-between items-center gap-[30px] flex-wrap md:flex-nowrap  mt-[50px] mb-[50px] w-full">
        <div className="bg-white flex gap-[8px] rounded-[16px] py-[8px] px-[10px] w-full lg:w-fit max-h-[64px]">
          <div className="text-[#0A62CC] text-[18px] font-[700] leading-[26.1px] tracking-[-0.09px] py-[11px] px-[22px] border-2 border-[#BED5EF] shadow-[0px_3px_40px_0px_#0e08540d] rounded-[6px] flex justify-center items-center gap-[8px]">
            <RentIcon /> Rent
          </div>
          <div className="text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] py-[11px] px-[22px] flex justify-center items-center gap-[8px]">
            <BuyIcon /> Buy
          </div>
          <div className="text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] py-[11px] px-[22px] flex justify-center items-center gap-[8px]">
            <NewProjectIcon /> New projects
          </div>
        </div>
        <div className="w-full lg:w-fit min-h-[64px]">
          <div className="relative flex-1 w-full h-full">
            <div className="absolute top-1/2 left-[10px] -translate-y-1/2 w-[38px] h-[38px] flex justify-center items-center">
              <LocationPinIcon />
            </div>
            <input
              placeholder="City..."
              className="text-[#000] text-[16px] font-[500] leading-[24px] tracking-[0.5px] block focus:outline-none bg-[#F7F7FD] border-2 border[#C4D9F2]  rounded-[16px] px-[56px] py-[13px] placeholder:text-[#000929]/50 w-full lg:w-fit min-h-[64px]"
            />
            <div className="absolute top-1/2 right-[10px] -translate-y-1/2 w-[38px] h-[38px] rounded-[6px] bg-white/60 shadow-[0px_3px_40px_0px_#0e08540d] flex justify-center items-center">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px]">
        {properties.map((property, index) => (
          <PropertyBasedLocationCard key={index} {...property} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-[63px]">
        <Button text="Browse more properties" variant="primary" type="submit" />
      </div>
    </section>
  );
};

export default PropertyBasedLocation;
