import HeroImg from "../../../assets/images/hero/img.jpg";
import Button from "../../common/Button";
import KeyIcon from "../../../assets/icons/KeyIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import EstateIcon from "../../../assets/icons/EstateIcon";
import PeopleIcon from "../../../assets/icons/PeopleIcon";
const Hero = () => {
  return (
    <main className="flex flex-wrap h-full mb-[80px]">
      <section className="w-full md:w-1/2 flex flex-col items-start justify-center  pl-4 md:pl-[80px]">
        <section className="mt-[40px] md:mt-[70px]">
          <h1 className="text-primary text-[36px] md:text-[64px] xl:text-[74px] font-[700] leading-[50px] md:leading-[81.4px] tracking-[-0.74px] mb-[35px]">
            Buy, rent, or sell your property easily{" "}
          </h1>
          <p className="text-[#3B4858] text-[16px] md:text-[20px] font-[500] leading-[32px] tracking-[-0.1px] md:leading-[32px] mb-[40px] md:mb-[70px]">
            A great platform to buy, sell, or rent your properties without any
            commissions.
          </p>
        </section>
        <section>
          <div className="bg-white flex items-center border-b border-[#E0DEF7] rounded-tl-[8px] rounded-tr-[8px] w-fit">
            <div className="my-[25px] px-[20px] text-[#0A62CC] text-[18px] font-[700] leading-[26.1px] tracking-[-0.09px]">
              Rent
            </div>
            <div className="my-[25px] px-[20px] text-[#000929] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px]">
              Buy
            </div>
            <div className="my-[25px] px-[20px] text-[#000929] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px]">
              New projects
            </div>
          </div>
          <div className="bg-white flex items-center rounded-bl-[8px] rounded-br-[8px] w-full xl:w-max relative">
            <div className="flex flex-col justify-center my-[25px] px-[20px] border-r-2 border-[#E0DEF7]">
              <label
                htmlFor="city"
                className="text-[#001619b3] text-[16px] font-[500] leading-[24px]"
              >
                City, community or building
              </label>
              <input
                type="text"
                id="city"
                value="Muqdisho"
                className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#000929] text-[18px] font-[600] focus:outline-none"
              />
            </div>
            <div className="flex flex-col justify-center my-[25px] px-[20px] border-r-2 border-[#E0DEF7]">
              <label
                htmlFor="city"
                className="text-[#001619b3] text-[16px] font-[500] leading-[24px]"
              >
                City, community or building
              </label>
              <input
                type="text"
                id="city"
                value="Muqdisho"
                className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#000929] text-[18px] font-[600] focus:outline-none"
              />
            </div>
            <div className="flex flex-col justify-center my-[25px] px-[20px] border-r-2 border-[#E0DEF7]">
              <label
                htmlFor="city"
                className="text-[#001619b3] text-[16px] font-[500] leading-[24px]"
              >
                City, community or building
              </label>
              <input
                type="text"
                id="city"
                value="Muqdisho"
                className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#000929] text-[18px] font-[600] focus:outline-none"
              />
            </div>
            <div className="my-[25px] px-[20px]">
              <Button text={"Browse Properties"} />
            </div>
          </div>
        </section>
        <section className="mt-[70px] flex justify-between gap-[80px]">
          <div className="flex flex-col gap-[24px]">
            <div className="w-[56px] h-[56px] bg-[#E0DEF7] outline-1 outline-[#E0DEF7] relative border border-white rounded-full flex items-center justify-center">
              <EstateIcon />
              <span className="absolute -right-[6px] bottom-0 w-[24px] h-[24px] custom-gradient flex items-center justify-center rounded-[8px]">
                <KeyIcon />
              </span>
            </div>
            <div>
              <p className="text-[#0A62CC] text-[24px] font-[700] leading-[36px] tracking-[-0.24px] mb-[4px]">
                50k+ Real estate
              </p>
              <p className="text-[#3B4858] text-[16px] font-[500] leading-[24px]">
                If you're looking to buy or rent, we have new listings every day
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="w-[56px] h-[56px] bg-[#E0DEF7] outline-1 outline-[#E0DEF7] relative border border-white rounded-full flex items-center justify-center">
              <PeopleIcon />
              <span className="absolute -right-[6px] bottom-0 w-[24px] h-[24px] custom-gradient flex items-center justify-center rounded-[8px]">
                <SearchIcon color="#fff"width="16"height="16" />
              </span>
            </div>
            <div>
              <p className="text-[#0A62CC] text-[24px] font-[700] leading-[36px] tracking-[-0.24px] mb-[4px]">
              10k+ Visitor              </p>
              <p className="text-[#3B4858] text-[16px] font-[500] leading-[24px]">
              Numerous visitors are on the hunt for real estate              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full md:w-1/2 relative hidden md:block  -mt-[176px] -z-50">
        <img
          src={HeroImg}
          alt="Property Showcase"
          className="w-full h-full object-cover rounded-lg"
        />
      </section>
    </main>
  );
};

export default Hero;
