const EditIcon = ({ width = "15", height = "15" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
    >
      <g clipPath="url(#clip0_306_2735)">
        <path
          d="M6.875 3H2.5C2.16848 3 1.85054 3.1317 1.61612 3.36612C1.3817 3.60054 1.25 3.91848 1.25 4.25V13C1.25 13.3315 1.3817 13.6495 1.61612 13.8839C1.85054 14.1183 2.16848 14.25 2.5 14.25H11.25C11.5815 14.25 11.8995 14.1183 12.1339 13.8839C12.3683 13.6495 12.5 13.3315 12.5 13V8.625"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5625 2.06264C11.8111 1.814 12.1484 1.67432 12.5 1.67432C12.8516 1.67432 13.1889 1.814 13.4375 2.06264C13.6861 2.31128 13.8258 2.64851 13.8258 3.00014C13.8258 3.35177 13.6861 3.689 13.4375 3.93764L7.5 9.87514L5 10.5001L5.625 8.00014L11.5625 2.06264Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_306_2735">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EditIcon;
