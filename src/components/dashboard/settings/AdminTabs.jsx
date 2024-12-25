const AdminTabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div>
      {tabs.map((item) => (
        <div
          key={item.id}
          className={`flex items-center gap-[10px] border-2 cursor-pointer rounded-[16px] mb-[20px] bg-[#F7F7FD] h-[64px] py-[13px] px-[10px] ${
            activeTab === item.id ? "border-[#0A62CC]" : "border-[#C4D9F2]"
          }`}
          onClick={() => onTabClick(item.id)}
        >
          <div className="w-[38px] h-[38px] flex items-center justify-center bg-white/60 border-2 border-[#C4D9F2] rounded-[6px]">
            {item.icon}
          </div>
          <span
            className={`text-[16px] text-[#000929] leading-[24px] ${
              activeTab === item.id ? "font-[600]" : "font-[500]"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AdminTabs;
