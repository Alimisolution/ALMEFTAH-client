import StatsCard from "./StatsCard";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
const CompanyStatsCards = () => {
  const data = [
    {
      id: 1,
      title: "Ads",
      value: "1500",
      icon: <ArrowDownIcon />,
      bgColor: "bg-[#FC895C]",
      boxColor: "bg-[#FFC087]",
    },
    {
      id: 2,
      title: "Real estate",
      value: "20",
      icon: <ArrowUpIcon />,
      bgColor: "bg-[#D40F7B]",
      boxColor: "bg-[#FF7193]",
    },
    {
      id: 3,
      title: "Visitors",
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

export default CompanyStatsCards;
