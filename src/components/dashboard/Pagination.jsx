import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
const Pagination = () => {
  return (
    <div className="flex items-center gap-5">
      <button className="w-6 h-6 rounded-md border-2 bg-white border-[#0A62CC] flex justify-center items-center">
        <ChevronRightIcon
          color={"#0A62CC"}
          width="12.8px"
          height="12.8px"
          strokeWidth="2"
        />
      </button>
      <div className="flex items-center gap-[5px]">
        <span className="text-[13px] text-[#0A62CC] bg-white font-[500] tracking-[-0.13px] leading-[14.3px] w-6 h-6 rounded-md border-2 border-[#0A62CC] flex justify-center items-center">
          1
        </span>
        <span className="text-[13px] text-[#0A62CC] bg-white font-[500] tracking-[-0.13px] leading-[14.3px] w-6 h-6 rounded-md border-2 border-[#C4D9F2] flex justify-center items-center">
          2
        </span>
        <span className="text-[13px] text-[#0A62CC] bg-white font-[500] tracking-[-0.13px] leading-[14.3px] w-6 h-6 rounded-md border-2 border-[#C4D9F2] flex justify-center items-center">
          3
        </span>
      </div>
      <button className="w-6 h-6 rounded-md border-2 bg-white border-[#0A62CC] flex justify-center items-center">
        <ChevronLeftIcon
          color={"#0A62CC"}
          width="12.8px"
          height="12.8px"
          strokeWidth="2"
        />
      </button>
    </div>
  );
};

export default Pagination;
