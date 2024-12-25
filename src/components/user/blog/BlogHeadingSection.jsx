import HomeIcon from "../../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../../assets/icons/ChevronLeftIcon";
import houseImg1 from "../../../assets/images/blog/blog-header-img.png";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo/favicon.png";
const BlogHeadingSection = () => {
  return (
    <div className="md:px-[80px] px-[8px] mt-[30px]">
      <div className="relative z-[5] rounded-2xl border-[1.5px] border-[#C6CED4] w-full h-[322px] overflow-hidden">
        <img
          src={houseImg1}
          alt="House"
          className="h-full w-full object-cover absolute z-10"
        />
        <div
          className="absolute z-20 top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(267deg, rgba(20, 22, 36, 0.50) 1.32%, rgba(20, 22, 36, 0.50) 100%)",
          }}
        ></div>{" "}
        <div className="relative z-30 p-[28px] flex flex-col justify-between h-full">
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
              Blog
            </Link>
          </div>
          <div>
            <span className="text-[14px] text-[#fff] font-[500] leading-[20px] py-[4px] px-[10px] bg-[#0A62CC] rounded-[6px] block mb-[20px] w-fit">
              Legal operations
            </span>
            <h2 className="text-[24px] text-[#fff] font-[700] leading-[26.4px] tracking-[-0.24px] mb-[12px]">
              Your comprehensive guide on real estate ownership transfers
            </h2>
            <div className="flex gap-[35px] items-end">
              <div className="flex items-center gap-[10px]">
                <div className="w-[48px] h-[48px] bg-white border border-[#000]/[0.20] rounded-full flex items-center justify-center">
                  <img
                    className="w-[28px] h-[31px] block"
                    src={logoImg}
                    alt="Author"
                  />
                </div>
                <div>
                  <span className="text-[16px] block text-[#fff] font-[700] leading-[22.4px] mb-[3px]">
                    ALMEFTAH
                  </span>
                  <span className="text-[13px] block text-[#fff] font-[400] leading-[18.2px]">
                    Real Estate
                  </span>
                </div>
              </div>
              <span className="text-[16px] text-[#fff] font-[400] leading-[24px]">
                August 20, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeadingSection;
