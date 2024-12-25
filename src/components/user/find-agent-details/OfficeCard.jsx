import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import WhatsAppIcon from "../../../assets/icons/WhatsAppIcon";
import officeImg from "../../../assets/images/offices/office.png";
import LocationIcon from "../../../assets/icons/LocationIcon";

const OfficeCard = () => {
  return (
    <div className="bg-white mb-[30px] p-[10px] rounded-[16px] border-[1.5px] border-[#C6CED4]">
      <div className="flex justify-between mb-[10px]">
        <div className="grid grid-cols-2 gap-[10px] flex-1">
          <img src={officeImg} alt="" className="mb-5 block w-full h-full" />
          <div>
            <h3 className="text-[24px] text-[#000929] font-[700] leading-[26.4px] tracking-[-0.24px] mb-[20px]">
              Office name
            </h3>
            <span className="text-[15px] text-[#3B4858] font-[600] leading-[16.5px] tracking-[-0.15px] block mb-[10px]">
              Office address{" "}
            </span>
            <div className="flex items-center gap-[10px] mb-[10px]">
              <div className="h-[44px] w-[44px] flex items-center justify-center bg-white/50 ">
                <LocationIcon />
              </div>
              <span className="text-[16px] text-[#000929]/[0.5] font-[500] leading-[24px] ">
                00231 Clemmie Ferry
              </span>
            </div>
            <div className="flex items-center gap-[10px] mb-[10px]">
              <div className="h-[44px] w-[44px] flex items-center justify-center bg-white/50 border-2 border-[#C4D9F2] rounded-md">
                <PhoneIcon />
              </div>
              <span className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
                431-869-7862
              </span>
            </div>
            <div className="flex items-center gap-[10px] mb-[10px]">
              <div className="h-[44px] w-[44px] flex items-center justify-center bg-white/50 border-2 border-[#C4D9F2] rounded-md">
                <EnvelopeIcon />
              </div>
              <span className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px]">
                Ethyl_Strosin38@...
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[13px] text-[#3B4858] font-[300] leading-[22.4px] tracking-[0.07px] mt-[57px] mb-[20px]">
        Dignissimos similique aspernatur ut pariatur. Architecto vel delectus
        similique eaque non est placeat iste. Corrupti dolor unde voluptates
        optio in et sed repellendus. Rem dolorem eum aliquid similique odit
        cupiditate. Nulla est quod ullam et omnis non delectus.
      </p>
      <strong className="text-[14px] text-[#0A62CC] font-[500] leading-[15.4px] tracking-[-0.14px] mb-[15px] block">
        Real estate office
      </strong>
      <div className="flex gap-[20px] items-center mb-[30px]">
        <span className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] py-[10px] px-[12px] text-center bg-[#fff] rounded-[6px] border-2 border-[#C4D9F2]">
          for sale: 10
        </span>
        <span className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] py-[10px] px-[12px] text-center bg-[#fff] rounded-[6px] border-2 border-[#C4D9F2]">
          for rent: 9
        </span>
      </div>
      <div className="flex items-center justify-between gap-[27px] mt-[10px] mb-[20px]">
        <div className="text-[15px] text-[#fff] font-[600] leading-[16.5px] tracking-[-0.15px] bg-gradient-to-r from-[#4BDCD5] via-[#1EAFCA] to-[#0A62CC] rounded-[16px]  flex-1 h-[66px] flex items-center justify-center">
          <WhatsAppIcon color="#fff" />{" "}
          <span className="ml-[10px]">WhatsApp</span>
        </div>
        <div className="text-[15px] text-[#000929] font-[600] leading-[16.5px] tracking-[-0.15px] bg-[#F7F7FD] rounded-[16px] border border-[#C4D9F2] flex-1 h-[66px] flex items-center justify-center">
          Send an email
        </div>
      </div>
    </div>
  );
};

export default OfficeCard;
