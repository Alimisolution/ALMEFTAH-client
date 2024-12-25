import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";
import faqImg from "../../assets/images/faq/img.png";
import FaqCard from "../../components/user/faq/FaqCard";
const Faq = () => {
  return (
    <section className="md:px-[80px] px-[8px] mt-[30px]">
      <div className="flex items-center gap-[10px] mb-[30px]">
        <HomeIcon />
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
          FAQ
        </Link>
      </div>
      <div className="flex items-center justify-center  py-[12px] px-[24px] text-[20px] text-[#0F74CC] font-[700] leading-[26px] tracking-[0.5px] bg-white w-fit mb-[32px]">
        FAQ
      </div>
      <section className="grid grid-cols-6 gap-[50px] mb-[56px]">
        <div className="col-span-6 lg:col-span-3">
          <h2 className="text-[32px] text-[#000] font-[700] leading-[38.4px] pb-[43px] border-b-2 border-[#D7DEF0]">
            Frequently Asked Questions
          </h2>
          <FaqCard />
        </div>
        <div className="col-span-3 hidden lg:block">
          <img src={faqImg} alt="" className="block w-full h-full" />
        </div>
      </section>
    </section>
  );
};

export default Faq;
