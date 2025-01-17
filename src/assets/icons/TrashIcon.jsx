const TrashIcon = ({stroke="#000929",width="15", height="15"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M1.875 3.75H3.125H13.125"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.875 3.75V12.5C11.875 12.8315 11.7433 13.1495 11.5089 13.3839C11.2745 13.6183 10.9565 13.75 10.625 13.75H4.375C4.04348 13.75 3.72554 13.6183 3.49112 13.3839C3.2567 13.1495 3.125 12.8315 3.125 12.5V3.75M5 3.75V2.5C5 2.16848 5.1317 1.85054 5.36612 1.61612C5.60054 1.3817 5.91848 1.25 6.25 1.25H8.75C9.08152 1.25 9.39946 1.3817 9.63388 1.61612C9.8683 1.85054 10 2.16848 10 2.5V3.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 6.875V10.625"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 6.875V10.625"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
