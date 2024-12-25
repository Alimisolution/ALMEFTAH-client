const StatsCard = ({ title, value, icon, bgColor, boxColor }) => {
  return (
    <div
      className={`relative z-[6] overflow-hidden w-full ${bgColor} rounded-[20px] `}
    >
      <div className="absolute -top-[70px] z-20 -right-[32px] w-[220px] h-[110px] border border-[rgba(255, 255, 255, 0.30)] rounded-[50px] rotate-90"></div>
      <div
        className={`absolute -bottom-[70px] ${boxColor}  z-10 -right-[45px] w-[220px] h-[110px]  rounded-[50px] rotate-90`}
      ></div>
      <div className="absolute top-[15px]  -right-[135px] z-30 bg-[#ffffff]/[0.3] w-[220px] h-[110px] rounded-[50px] rotate-180"></div>

      <div className="px-[20px] py-[30px]  h-[177px] max-w-[308px] relative z-30">
        <h2 className="text-[30px] font-[500] tracking-[0.5px] text-[#fff] mb-4">
          {title}
        </h2>
        <div className="flex items-center gap-[10px]">
          <span className="text-[35px] font-[600] tracking-[0.5px] text-[#fff]">
            {value}
          </span>
          <span>{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
