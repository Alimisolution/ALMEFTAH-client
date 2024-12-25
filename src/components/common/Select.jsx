import  { useState } from "react";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";

const Select = ({
  options,
  placeholder,
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div
      className={`relative flex min-w-[270px] bg-[#F7F7FD] pl-[16px] pr-[8px] max-h-[57px] justify-center py-[18px] cursor-pointer border-2 border-[#C4D9F2] rounded-[16px] flex-col ${className}`}
    >
      {" "}
      <div
        className="flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[500]">
          {selectedOption ? selectedOption.label : placeholder || "Select..."}
        </span>
        <span className="min-w-[36px] min-h-[36px] bg-white/[0.05] border-2 border-[#C4D9F2] rounded-[6px] flex items-center justify-center">
          <ChevronDownIcon />
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white shadow-black rounded-lg max-h-60 overflow-y-auto z-10 ">
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                selectedOption?.value === option.value ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
