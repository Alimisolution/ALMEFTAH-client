import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about/img.png";
const AboutUs = () => {
  return (
    <section className="md:px-[80px] px-[8px] mt-[30px]">
      <div className="flex items-center gap-[10px] mb-[30px]">
        <HomeIcon />
        <Link
          to="/"
          className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
        >
          Home
        </Link>
        <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
        <Link
          to="/"
          className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
        >
          About us
        </Link>
      </div>
      <div className="flex items-center justify-center  py-[12px] px-[24px] text-[20px] text-[#0F74CC] font-[700] leading-[26px] tracking-[0.5px] bg-white w-fit mb-[32px]">
        About us
      </div>
      <section className="grid grid-cols-6 gap-[50px] mb-[56px]">
        <div className="col-span-6 lg:col-span-3">
          <h2 className="text-[54px] text-[#1F2744] font-[600] leading-[74px] tracking-[0.135px] mb-[30px]">
            Experience the fastest real estate search
            <br /> with our platform
          </h2>
          <p className="text-[20px] text-[#73788C] font-[400] leading-[36px] racking-[0.05px]">
            Incidunt qui qui aliquam repudiandae ea ipsam. Occaecati et sint
            consectetur suscipit qui ullam aut vitae. Quas ea quia harum.
            Repellat qui rerum aut aperiam aliquam. Ipsa excepturi eaque <br />{" "}
            quis atque et. Necessitatibus dolor eius illum vero laboriosam
            debitis commodi itaque omnis. Adipisci distinctio blanditiis aut
            pariatur rerum et. Debitis eaque voluptas modi quasi in aperiam.
            Consequatur voluptatem rem laudantium cumque dolor consequatur.
            Repellendus repellendus ut cupiditate at consequuntur repellat.
            <br /> Dolorem in repellat perspiciatis quam illo modi in est
            voluptatem. Et deserunt consectetur sit corporis quas. Quia quis quo
            et odit laboriosam tempora temporibus eum laborum. In quo ut
            expedita cum eveniet laborum pariatur.
          </p>
        </div>
        <div className="col-span-3 hidden lg:block">
          <img src={aboutImg} alt="" className="block w-full h-full" />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
