const ReportsIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
    >
      <path
        d="M5.66667 8.83334V8M9 8.83334V6.33334M12.3333 8.83334V4.66667M5.66667 15.5L9 12.1667L12.3333 15.5M1.5 1.33334H16.5M2.33333 1.33334H15.6667V11.3333C15.6667 11.7936 15.2936 12.1667 14.8333 12.1667H3.16667C2.70643 12.1667 2.33333 11.7936 2.33333 11.3333V1.33334Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ReportsIcon;
