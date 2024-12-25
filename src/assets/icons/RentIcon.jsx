const RentIcon = ({ color = "#0A62CC" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.4916 12.4417C14.775 14.1501 12.3166 14.6751 10.1583 14.0001L6.23331 17.9167C5.94998 18.2084 5.39165 18.3834 4.99165 18.3251L3.17498 18.0751C2.57498 17.9917 2.01665 17.4251 1.92498 16.8251L1.67498 15.0084C1.61665 14.6084 1.80831 14.0501 2.08331 13.7667L5.99998 9.85006C5.33331 7.68339 5.84998 5.22506 7.56665 3.51672C10.025 1.05839 14.0166 1.05839 16.4833 3.51672C18.95 5.97506 18.95 9.98339 16.4916 12.4417Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.74164 14.575L7.6583 16.4916"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0833 9.16663C12.7737 9.16663 13.3333 8.60698 13.3333 7.91663C13.3333 7.22627 12.7737 6.66663 12.0833 6.66663C11.393 6.66663 10.8333 7.22627 10.8333 7.91663C10.8333 8.60698 11.393 9.16663 12.0833 9.16663Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RentIcon;
