import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo/favicon.png";
import Button from "../common/Button";
import GooglePlayIcon from "../../assets/icons/GooglePlayIcon";
import AppStoreIcon from "../../assets/icons/AppStoreIcon";
import FacebookLogoIcon from "../../assets/icons/FacebookLogoIcon";
import InstagramLogoIcon from "../../assets/icons/InstagramLogoIcon";
import YoutubeLogoIcon from "../../assets/icons/YoutubeLogoIcon";
import styles from "../../styles/styles";
const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-[#575757] text-[16px] font-[400] leading-[24px] block"
  >
    {children}
  </Link>
);

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-[#000929] text-[20px] font-[500] leading-[28px]">
      {title}
    </h2>
    {links.map((link, idx) => (
      <FooterLink key={idx} to={link.to}>
        {link.text}
      </FooterLink>
    ))}
  </div>
);

const SocialIcon = ({ children }) => (
  <div className="w-[49px] h-[49px] rounded-full bg-[#f8f9f9] flex justify-center items-center cursor-pointer">
    {children}
  </div>
);

const Footer = () => {
  const almeftahLinks = [
    { to: "/about", text: "About us" },
    { to: "/contact", text: "FAQ" },
    { to: "/contact", text: "Terms & Conditions" },
    { to: "/contact", text: "Privacy & Policy" },
  ];

  const siteMapLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "Buy" },
    { to: "/contact", text: "Rent" },
    { to: "/contact", text: "New projects" },
    { to: "/contact", text: "Find agent" },
    { to: "/contact", text: "Blog" },
  ];

  return (
    <footer className={`bg-white ${styles.paddingX}`}>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-0 gap-y-[20px]  lg:gap-x-[50px] lg:gap-y-0 pt-[59px] pb-[31px]">
        <section className="col-span-3 lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img src={logoImg} alt="Logo" className="w-[50px] h-[55px]" />
            <div className="flex flex-col">
              <h2 className="text-[20px] font-[700] text-[#0F74CC] leading-[28px]">
                ALMEFTAH
              </h2>
              <h3 className="text-[17px] font-[400] text-[#748392] leading-[23.8px]">
                Real Estate
              </h3>
            </div>
          </div>
          <p className="text-[#1F2744] text-[16px] font-[400] leading-[26px] tracking-[0.04px] mb-6">
            Discover your perfect property without the hassle
          </p>
          <h2 className="text-[#000929] text-[20px] font-[500] leading-[28px] mb-4">
            Newsletter
          </h2>
          <div className="relative">
            <input
              placeholder="Enter your email"
              className="text-[#000] text-[16px] font-[400] leading-[26px] w-full focus:outline-none bg-white border border-black/[0.1] rounded-lg pl-4 py-3 placeholder:text-[#D7D7D7] pr-28"
            />
            <div className="absolute top-0 right-0 bottom-0">
              <Button
                text="Send"
                variant="primary"
                className="!bg-[#0F74CC] !font-[500] h-full px-4"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 col-span-3 sm:col-span-2 lg:gap-x-[50px]">
          <FooterSection title="ALMEFTAH" links={almeftahLinks} />
          <FooterSection title="Site map" links={siteMapLinks} />
        </section>

        <section className="grid grid-cols-2 sm:grid-cols-1 col-span-3 sm:col-span-1 lg:col-span-2">
          <article>
            <h2 className="text-[#000929] text-[20px] font-[500] leading-[28px] mb-4">
              Follow us on
            </h2>
            <div className="flex items-center gap-4">
              <SocialIcon>
                <FacebookLogoIcon />
              </SocialIcon>
              <SocialIcon>
                <YoutubeLogoIcon />
              </SocialIcon>
              <SocialIcon>
                <InstagramLogoIcon />
              </SocialIcon>
            </div>
          </article>
          <article>
            <h2 className="text-[#000929] text-[20px] font-[500] leading-[28px] mb-4">
              Download the app
            </h2>
            <div className="flex items-center gap-4">
              <GooglePlayIcon />
              <AppStoreIcon />
            </div>
          </article>
        </section>
      </div>

      <section className="text-[#596780] text-[16px] font-[500] leading-[24px] tracking-[-0.32px] h-[80px] flex items-center justify-center relative bg-white">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full bg-gradient-to-r from-[#F9C379] to-[#FC895C] to-[#D40F7B]"></span>
        &copy; Othman_haamda2024
      </section>
    </footer>
  );
};

export default Footer;
