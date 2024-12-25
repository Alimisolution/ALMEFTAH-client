import React from "react";

const ChevronLeftIcon = ({
  color = "#0A62CC",
  width = "14",
  height = "14",
  strokeWidth = "2",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.66663 12.6666L10.3333 7.99996L5.66663 3.33329"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
