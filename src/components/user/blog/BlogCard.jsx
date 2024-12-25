const BlogCard = ({ 
  image, 
  category, 
  title, 
  authorLogo, 
  authorName, 
  date 
}) => {
  return (
    <div className="p-[16px] rounded-[12px] bg-white border border-[#E8E8EA] overflow-hidden w-full">
      <img src={image} className="rounded-[6px] mb-[16px]" alt="Blog" />
      <span className="text-[14px] text-[#4B6BFB] font-[500] leading-[20px] py-[4px] px-[10px] bg-[#4b6bfb0d] rounded-[6px] block mb-[16px] w-fit">
        {category}
      </span>
      <h3 className="text-[24px] text-[#181A2A] font-[600] leading-[28px] mb-[20px]">
        {title}
      </h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[6px]">
          <div className="w-[36px] h-[36px] border border-[#000]/[0.20] rounded-full flex items-center justify-center">
            <img className="w-[21px] h-[23.25px] block" src={authorLogo} alt="Author" />
          </div>
          <span className="text-[16px] text-[#97989F] font-[500] leading-[24px]">
            {authorName}
          </span>
        </div>
        <span className="text-[16px] text-[#97989F] font-[400] leading-[24px]">
          {date}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
