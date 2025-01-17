const SearchIcon = ({ color = "#0A62CC", width = "20", height = "20" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.58329 17.5001C13.9555 17.5001 17.5 13.9557 17.5 9.58341C17.5 5.21116 13.9555 1.66675 9.58329 1.66675C5.21104 1.66675 1.66663 5.21116 1.66663 9.58341C1.66663 13.9557 5.21104 17.5001 9.58329 17.5001Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 18.3334L16.6666 16.6667"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
