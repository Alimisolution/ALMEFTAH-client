
const Button = ({ type = "button", text, variant = "primary", onClick,className = "" }) => {
  const styles = {
    primary:
      "px-[24px] py-[12px] bg-gradient-to-r from-[#4BDCD5] via-[#1EAFCA] to-[#0A62CC] text-white text-[16px] font-[700] rounded-lg transform transition-all duration-300 ease-in-out hover:scale-100 hover:shadow-lg",
    secondary:
      "px-[24px] py-[12px] bg-white text-[16px] font-[700]  rounded-lg bg-transparent text-[#000929] border-2 border-[#E0DEF7] transform transition-all duration-300 ease-in-out hover:scale-100 hover:shadow-lg",
  };

  return (
    <button type={type} className={`${styles[variant]} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
