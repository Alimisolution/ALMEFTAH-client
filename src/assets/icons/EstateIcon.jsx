const EstateIcon = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M17.5002 18.3332V6.23725C17.5002 5.32265 17.5002 4.86535 17.2372 4.47943C16.9742 4.0935 16.4898 3.83984 15.5211 3.33251L14.2884 2.68701C12.7676 1.89061 12.0072 1.49242 11.4203 1.7391C10.8335 1.9858 10.8335 2.70366 10.8335 4.13939V7.49984"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.3332 18.3335H1.6665"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5002 6.6665H15.8335M17.5002 9.1665H15.8335M17.5002 11.6665H15.8335"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6665 10.8333C6.6665 9.262 6.6665 8.47633 7.15466 7.98816C7.64281 7.5 8.4285 7.5 9.99984 7.5C11.5712 7.5 12.3568 7.5 12.845 7.98816C13.3332 8.47633 13.3332 9.262 13.3332 10.8333V18.3333H6.6665V10.8333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5835 10.8335H10.4168M9.5835 13.3335H10.4168"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.9165 13.3333C3.60686 13.3333 4.1665 12.5871 4.1665 11.6667C4.1665 10.7462 3.60686 10 2.9165 10C2.22615 10 1.6665 10.7462 1.6665 11.6667C1.6665 12.5871 2.22615 13.3333 2.9165 13.3333Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M2.9165 13.3335V18.3335"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default EstateIcon;
