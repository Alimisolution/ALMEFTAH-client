import Button from "../../common/Button";
import ArrowDownRightIcon from "../../../assets/icons/ArrowDownRightIcon";
import img1 from "../../../assets/images/add-property/img1.png";
import img2 from "../../../assets/images/add-property/img2.png";

const AddPropertySection = () => {
  return (
    <section className="grid grid-cols-5 gap-[100px] sm:gap-[90px] md:px-[80px] px-[8px] mb-[115px]">
      <div className="col-span-5 lg:col-span-3 grid grid-cols-3  gap-[14px] relative">
        <div className="col-span-2 h-full">
          <img
            src={img1}
            alt=""
            className="rounded-[10px] block w-full h-full object-cover"
          />
        </div>
        <div className="mt-[32px] col-span-1 h-full">
          <img
            src={img2}
            alt=""
            className="rounded-[10px] block w-full h-full object-cover"
          />
        </div>
        <div className="absolute -left-[33px] -z-10 -bottom-[41px] w-[209px] h-[146px] px-[24px] py-[12px] bg-gradient-to-r from-[#4BDCD5] via-[#1EAFCA] to-[#0A62CC] text-white text-[16px] font-[700] rounded-lg transform transition-all duration-300 ease-in-out hover:scale-100 hover:shadow-lg"></div>
      </div>
      <div className="col-span-5 lg:col-span-2">
        <div className="flex items-center gap-[22px] mb-[42.84]">
          <ArrowDownRightIcon />
          <span className="text-[#000] text-[19.158px] font-[700] leading-[21.074px] tracking-[2.299px] uppercase">
            Add your property
          </span>
        </div>
        <p className="text-[#000929] text-[50px] font-[400] leading-[61.5px] tracking-[-2.75px] mb-[20px]">
          Are you interested in listing your property on our{" "}
          <span className="text-[#0A62CC] font-[700]">ALMEFTAH</span> platform
        </p>
        <div className="flex justify-between items-center gap-[15px]">
          <p className="text-[#010101] text-[18px] font-[400] leading-[27.364px]">
            Our experts can provide valuable <br /> insights and assist you .
          </p>
          <Button
            text="Join Us Agency"
            variant="primary"
            type="submit"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default AddPropertySection;
