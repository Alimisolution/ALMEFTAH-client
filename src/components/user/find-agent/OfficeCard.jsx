const OfficeCard = ({
  officeName,
  description,
  type,
  forSale,
  forRent,
  image,
}) => {
  return (
    <div className="bg-[#d9d9d91a] rounded-[16px] border border-[#C6CED4] p-[10px] flex gap-[15px]">
      <div className="rounded-[10px] w-[214px] h-[214px] border border-[#C6CED4] overflow-hidden flex-1">
        <img src={image} alt="Office" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h2 className="text-[24px] text-[#000929] font-[700] leading-[26.4px] tracking-[-0.24px] mb-[10px]">
          {officeName}
        </h2>
        <p className="text-[14px] text-[#3B4858] font-[300] leading-[22.4px] tracking-[-0.07px] mb-[10px]">
          {description}
        </p>
        <strong className="text-[14px] text-[#0A62CC] font-[500] leading-[15.4px] tracking-[-0.14px] block mb-[15px]">
          {type}
        </strong>
        <div className="flex gap-[20px] items-center">
          <span className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] py-[10px] px-[12px] text-center bg-[#fff] rounded-[6px] border-2 border-[#C4D9F2]">
            for sale: {forSale}
          </span>
          <span className="text-[16px] text-[#000] font-[500] leading-[17.6px] tracking-[-0.16px] py-[10px] px-[12px] text-center bg-[#fff] rounded-[6px] border-2 border-[#C4D9F2]">
            for rent: {forRent}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfficeCard;
