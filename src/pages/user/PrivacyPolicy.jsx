import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";
import PrivacyPolicyCard from "../../components/user/privacy-policy/PrivacyPolicyCard";
const TermsConditions = () => {
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
          Privacy & Policy
        </Link>
      </div>
      <div className="flex items-center justify-center  py-[12px] px-[24px] text-[20px] text-[#0F74CC] font-[700] leading-[26px] tracking-[0.5px] bg-white w-fit mb-[32px]">
      Privacy & Policy
      </div>
      <PrivacyPolicyCard /> 
    </section>
  );
};

export default TermsConditions;

