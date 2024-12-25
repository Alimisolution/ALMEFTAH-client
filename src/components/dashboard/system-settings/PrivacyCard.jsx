import CameraIcon from "../../../assets/icons/CameraIcon";
const PrivacyCard = () => {
  return (
    <div className="p-4 bg-white rounded-[20px]">
    <div className="flex gap-[20px] items-center mb-[20px]">
      <label className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
        <CameraIcon />
        Upload your photo
      </label>
      <div>
        <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
          Image{" "}
        </h3>
        <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
          Please attach a photo of the Image in PNG or JPG format{" "}
        </strong>
      </div>
    </div>
    <h3 className="text-[#000] text-[16px] font-[700] mb-[9px]">
      About us
    </h3>
  </div>
  );
};

export default PrivacyCard;
