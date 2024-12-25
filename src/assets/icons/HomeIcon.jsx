const Home = ({ color = "#0A62CC", stroke = "#0A62CC" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <g clipPath="url(#clip0_58_4715)">
        <path
          d="M23.7496 10.8874L17.0834 5.70241C16.4983 5.24729 15.7783 5.0002 15.0371 5.0002C14.2959 5.0002 13.5759 5.24729 12.9909 5.70241L6.32336 10.8874C5.92266 11.199 5.59848 11.5981 5.37555 12.0541C5.15263 12.5101 5.03687 13.0111 5.03711 13.5187V22.5187C5.03711 23.1817 5.3005 23.8176 5.76934 24.2864C6.23818 24.7553 6.87407 25.0187 7.53711 25.0187H22.5371C23.2002 25.0187 23.836 24.7553 24.3049 24.2864C24.7737 23.8176 25.0371 23.1817 25.0371 22.5187V13.5187C25.0371 12.4899 24.5621 11.5187 23.7496 10.8874Z"
          fill={color}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18.75C17.2375 20.4163 12.76 20.4163 10 18.75"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_58_4715">
          <rect width="30" height="30" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Home;
