const BanglowIcon = ({
  color = "#0A62CC",
  width = "20",
  height = "20",
  active,
  itemId,
}) => {
  const newColor = active === itemId ? "#1EAFCA" : color;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_306_2785)">
        <path
          d="M18.3333 18.3343H1.66666V17.3576H2.78584V17.1168C2.78584 13.1873 2.78444 9.25787 2.78167 5.32843C2.78167 5.14676 2.82415 5.07843 3.01248 5.05509C3.31165 5.02426 3.60751 4.96012 3.91417 4.90846V1.66846H9.37082V4.00178L10.4908 3.81928V6.15261H17.2192V17.3618H18.3333V18.3343ZM3.77501 5.92342V17.3451H5.03168V15.121H8.25001V17.3484H9.50001V4.96842L3.77501 5.92342ZM16.23 7.13594H10.5V17.3459H16.2325L16.23 7.13594ZM4.89664 4.74595L8.38414 4.16261V2.64344H4.89664V4.74595ZM7.25666 17.3476V16.0976H6.01251V17.3476H7.25666Z"
          fill={newColor}
        />
        <path
          d="M7.2825 6.15674H8.23165V7.11173H7.2825V6.15674Z"
          fill={newColor}
        />
        <path
          d="M5.03497 13.8368V12.8843H5.98666V13.8368H5.03497Z"
          fill={newColor}
        />
        <path
          d="M7.27917 12.8794H8.23331V13.8335H7.27917V12.8794Z"
          fill={newColor}
        />
        <path
          d="M5.03415 9.35079V8.40332H5.99082V9.35079H5.03415Z"
          fill={newColor}
        />
        <path
          d="M8.23497 9.35143H7.27835V8.39893H8.23497V9.35143Z"
          fill={newColor}
        />
        <path
          d="M5.98832 11.5899H5.03668V10.6357H5.98832V11.5899Z"
          fill={newColor}
        />
        <path
          d="M7.27835 10.6392H8.23416V11.5925H7.27835V10.6392Z"
          fill={newColor}
        />
        <path
          d="M11.7666 12.876H12.72V13.8292H11.7666V12.876Z"
          fill={newColor}
        />
        <path
          d="M14.965 12.8877V13.8294H14.0067V12.8877H14.965Z"
          fill={newColor}
        />
        <path
          d="M12.72 15.1265V16.0815H11.7658V15.1265H12.72Z"
          fill={newColor}
        />
        <path
          d="M14.965 15.1289V16.0806H14.0075V15.1289H14.965Z"
          fill={newColor}
        />
        <path
          d="M12.7184 8.39941V9.35105H11.76V8.39941H12.7184Z"
          fill={newColor}
        />
        <path
          d="M14.9634 8.3999V9.34824H14.0067V8.3999H14.9634Z"
          fill={newColor}
        />
        <path
          d="M11.765 10.6392H12.72V11.5917H11.765V10.6392Z"
          fill={newColor}
        />
        <path
          d="M14.0058 11.595V10.645H14.965V11.595H14.0058Z"
          fill={newColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_306_2785">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BanglowIcon;
