const PropertyCard = ({ title, subTitle, active, setActive, id, icon }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[16px] p-[30px] min-h-[304px]
        ${
          active === id
            ? "border-3 border-[#1EAFCA] bg-[#1eafca66] shadow-[0px_4px_9px_0px_#00000026]"
            : "border-2 border-[#D9D9D9] bg-[#d9d9d933]"
        }`}
      onClick={() => setActive(id)}
    >
      <div
        className={`w-[111px] h-[111px] rounded-full bg-white flex items-center justify-center mb-[20px] transition-all duration-300 ${
          active === id ? "border-[3px] border-[#1EAFCA]" : "border-0"
        }`}
      >
        {icon}
      </div>
      <h3
        className={`text-[30px] font-[600] leading-[45px] tracking-[-0.3px] mb-[10px] transition-all duration-300 text-center ${
          active === id ? "text-[#1EAFCA]" : "text-[#000929]"
        }`}
      >
        {title}
      </h3>
      <span
        className={`text-[20px] font-[500] leading-[30px] tracking-[-0.2px] transition-all duration-300 text-center ${
          active === id ? "text-[#1EAFCA]" : "text-[#8EA0AE]/[0.7]"
        }`}
      >
        {subTitle}
      </span>
    </div>
  );
};

export default PropertyCard;
