import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import { Link } from "react-router-dom";
const AuthHeader = ({ breadcrumbText, title, subtitle, AuthTitle, path }) => {
  console.log(path);
  return (
    <>
      <div className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px] flex items-center gap-[10px] mb-[50px]">
        <HomeIcon /> <span>Home</span>{" "}
        <ChevronRightIcon color="#0A62CC" width="16px" height="16px" />{" "}
        <span>{breadcrumbText}</span>
      </div>

      {/* Welcome Message */}
      <div className="flex justify-between mb-[20px]">
        <div className="text-[21px] text-[#000] font-[400]">
          Welcome to
          <span className="text-[#0A62CC] font-[600]"> ALMEFTAH</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] text-[#8D8D8D] font-[400]">{title}</span>
          <Link className="text-[13px] text-[#0A62CC] font-[700]"to={path}>
            {subtitle}
          </Link>
        </div>
      </div>

      {/* Sign Up Title */}
      <Link
        className="text-[55px] text-[#000] font-[500] mb-[20px]"
      >
        {AuthTitle}
      </Link>
    </>
  );
};

export default AuthHeader;
