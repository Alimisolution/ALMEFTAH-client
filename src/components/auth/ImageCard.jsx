import authImg from "../../assets/images/auth/auth.png";
import LogoIcon from "../../assets/icons/LogoIcon";

const ImageCard = () => {
  return (
    <div
      className="w-full h-full relative bg-black rounded-[15px] overflow-hidden"
      style={{
        backgroundImage: `url(${authImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#141624B2]"></div>

      <div className="flex flex-col items-center gap-2 pt-[258px] text-center relative z-10">
        <div className="mb-[57px]">
          <LogoIcon />
        </div>
        <h2 className="text-[60px] text-white font-[600] leading-[84px] mb-[8px]">
          ALMEFTAH
        </h2>
        <span className="text-[37px] text-[#E4E4E4] font-[300] leading-[51.8px] mb-[31px]">
          Real Estate
        </span>
        <span className="text-[37px] text-[#E4E4E4] font-[300] leading-[51.8px]">
          Your one-stop shop for real estate
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
