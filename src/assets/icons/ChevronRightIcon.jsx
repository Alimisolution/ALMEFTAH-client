const ChevronRightIcon = ({
  color,
  width = "20",
  height = "20",
  strokeWidth = "2",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M8.86665 3.26668L5.13332 7.00001L8.86665 10.7333"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRightIcon;
