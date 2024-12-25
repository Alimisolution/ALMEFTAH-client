import EyeOffIcon from "../../assets/icons/EyeOffIcon";

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) => {
  return (
    <div className="flex flex-col gap-[14px] mb-[18px] flex-1 relative">
      <label htmlFor={name} className="text-[#000] text-[16px] font-[500] w-full">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[500] font-[400] focus:outline-none rounded-2xl border-2 h-[57px] px-[20px] py-[18px] pr-[40px] 
            focus:border-black border-[#C4D9F2]
          `}
        />
        {type === "password" && (
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
            <EyeOffIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
