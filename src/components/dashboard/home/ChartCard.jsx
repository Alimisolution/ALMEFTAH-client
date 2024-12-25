import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCard = () => {
  const values = [25, 15, 35];
  const total = values.reduce((sum, val) => sum + val, 0);
  const remaining = 100 - total;

  const percentages = values.map((value) => ((value / 100) * 100).toFixed(2));

  const createGradient = (ctx, color1, color2) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  const data = {
    labels: [
      `150 Property (${percentages[0]}%)`,
      `150 Watching (${percentages[1]}%)`,
      `150K Clicks (${percentages[2]}%)`,
    ],
    datasets: [
      {
        data: [...values, remaining],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return [
            createGradient(ctx, "#FFE985", "#FA742B"),
            createGradient(ctx, "#FFF6B7", "#F6416C"),
            createGradient(ctx, "#CE9FFC", "#7367F0"),
            "#EFF3FE",
          ];
        },
        borderColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          return [
            createGradient(ctx, "#FFE985", "#FA742B"),
            createGradient(ctx, "#FFF6B7", "#F6416C"),
            createGradient(ctx, "#CE9FFC", "#7367F0"),
            "#EFF3FE",
          ];
        },
        borderWidth: 7,
        cutout: "50%",
      },
    ],
  };

  const sliceThickness = {
    id: "sliceThickness",
    beforeDraw(chart) {
      const { width } = chart.chartArea;
      const sliceThicknessPixel = [100, 100, 100, 90];

      sliceThicknessPixel.forEach((thickness, index) => {
        const slice = chart.getDatasetMeta(0).data[index];
        if (slice) {
          slice.outerRadius = width * (thickness / 230);
          if (index === 3) {
            slice.borderRadius = 15;
          } else {
            slice.borderRadius = 5;
          }
        }
      });
    },
  };

  const plugins = [
    sliceThickness,
    {
      id: "centerText",
      beforeDraw: function (chart) {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;
        const fontSizeAds = "18px";
        ctx.font = `700 ${fontSizeAds} Poppins, sans-serif`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        const text2 = "55 Ads";
        const textX2 = Math.round(width / 2);
        const textY2 = Math.round(height / 2) - 15;

        ctx.fillStyle = "#121212";
        ctx.fillText(text2, textX2, textY2);

        const fontSizeTotal = "12.15px";
        ctx.font = `700 ${fontSizeTotal} Poppins, sans-serif`;
        const text = `(${total}%)`;
        const textX = Math.round(width / 2);
        const textY = Math.round(height / 2) + 10;

        ctx.fillStyle = "#BEBEBE";
        ctx.fillText(text, textX, textY);

        ctx.save();
      },
    },
  ];
  const options = {
    responsive: true,
    interaction: {
      mode: "none",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const renderCustomLegend = () => {
    const colors = [
      "from-[#FFE985] to-[#FA742B]",
      "from-[#FFF6B7] to-[#F6416C]",
      "from-[#CE9FFC] to-[#7367F0]",
    ];
    const mainLabels = ["150 property", "150 Watching", "150K Clicks"];
    const subLabels = ["Sell", "Rent", "New Project"];

    return (
      <div className="flex items-center justify-center gap-[10px]">
        {mainLabels.map((label, index) => (
          <div key={index} className="flex items-center gap-[10px]">
            <div
              className={`bg-gradient-to-r ${colors[index]} rotate-[90deg] w-[10px] h-[10px]`}
            ></div>

            <div className="flex justify-center items-center flex-col">
              <div className="text-[#121212] text-[16px] font-[700] mb-[5px]">
                {label}
              </div>

              <div className="text-[#BEBEBE] text-[12.15px] font-[500] text-center">
                {subLabels[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-[20px] px-5 py-[17px] col-span-1 lg:col-span-3 flex flex-col items-center">
      <div className="flex justify-between items-center gap-[10px] mb-[30px]">
        <h2 className="text-[#121212] text-[20px] font-[600] tracking-[0.5px] text-center">
          Ads status
        </h2>
        <div className="flex items-center gap-[10px]">
          <div className="w-[85px] h-[30px] bg-[#fff] rounded-[6px] border-[1.5px] border-[#C4D9F2] text-[#000929] text-[14px] font-[400] leading-[17px] flex items-center justify-center">
            Monthly
          </div>
          <div className="w-[85px] h-[30px] bg-[#fff] rounded-[6px] border-[1.5px] border-[#C4D9F2] text-[#000929] text-[14px] font-[400] leading-[17px] flex items-center justify-center">
            Weekly
          </div>
          <div className="w-[85px] h-[30px] bg-[#fff] rounded-[6px] border-[1.5px] border-[#C4D9F2] text-[#000929] text-[14px] font-[400] leading-[17px] flex items-center justify-center">
            Daily
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Doughnut data={data} options={options} plugins={plugins} />
        {renderCustomLegend()}
      </div>
    </div>
  );
};

export default ChartCard;
