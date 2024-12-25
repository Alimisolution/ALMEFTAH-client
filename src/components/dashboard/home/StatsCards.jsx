import StatsCard from "./StatsCard";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
const StatsCards = () => {
  const data = [
    {
      id: 1,
      title: "Customers",
      value: "2000",
      icon: <ArrowUpIcon />,
      bgColor: "bg-[#FF9A3E]",
      boxColor: "bg-[#FFC087]",
    },
    {
      id: 2,
      title: "Properties",
      value: "1500",
      icon: <ArrowDownIcon />,
      bgColor: "bg-[#FC895C]",
      boxColor: "bg-[#FFC087]",
    },
    {
      id: 3,
      title: "Rent",
      value: "20",
      icon: <ArrowUpIcon />,
      bgColor: "bg-[#D40F7B]",
      boxColor: "bg-[#FF7193]",
    },
    {
      id: 4,
      title: "Sell",
      value: "110K",
      icon: <ArrowDownIcon />,
      bgColor: "bg-[#1EAFCA]",
      boxColor: "bg-[#A2E2DF]",
    },
  ];

  return (
    <div className="grid rounded-[20px] p-[30px] grid-cols-1 gap-[25px] sm:grid-cols-2 lg:grid-cols-4 bg-white mb-[30px]">
      {data.map((item) => (
        <StatsCard
          key={item.id}
          title={item.title}
          value={item.value}
          icon={item.icon}
          bgColor={item.bgColor}
          boxColor={item.boxColor}
        />
      ))}
    </div>
  );
};

export default StatsCards;
