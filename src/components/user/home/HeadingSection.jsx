import ChevronRightCircleIcon from "../../../assets/icons/ChevronRightCircleIcon";

const HeadingSection = ({ title, subTitle, learnMore }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <h2 className="text-primary text-[30px] font-[700] leading-[45px] tracking-[-0.3px] mb-[26px] relative">
        <span className="absolute top-1/2 -translate-y-1/2 -left-[60px] sm:-left-[120px] h-[3px] w-[50px] sm:w-[80px] md:w-[100px] bg-gradient-to-r from-[#F9C379] to-[#FC895C] to-[#D40F7B]"></span>
        {title}
        <span className="absolute top-1/2 -translate-y-1/2  -right-[60px] sm:-right-[120px] h-[3px] w-[50px] sm:w-[80px] md:w-[100px] bg-gradient-to-l from-[#F9C379] to-[#FC895C] to-[#D40F7B]"></span>
      </h2>

      <span className="text-[#3B4858] text-[20px] font-[500] leading-[32px] tracking-[-0.1px] mb-[28px]">
        {subTitle}
      </span>
      {learnMore && (
        <div className="text-[#1EAFCA] text-[18px] font-[500] leading-[26px] tracking-[0.5px] flex items-center gap-[8px] mb-[70px]">
          Learn More
          <span className="shadow-[0px_0px_20px_0px_#69b99d94] rounded-full">
            <ChevronRightCircleIcon color="#1EAFCA" />
          </span>
        </div>
      )}
    </div>
  );
};

export default HeadingSection;
