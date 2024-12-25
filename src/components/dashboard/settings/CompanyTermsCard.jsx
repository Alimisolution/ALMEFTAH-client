import termsImg from "../../../assets/images/dashboard/terms.png";

const CompanyTermsCard = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center gap-[5px] border-b-2 border-b-[#E0E4EC]">
        <div>
          <span className="text-[17px] text-[#0F74CC] font-[700] leading-[26px] tracking-[0.5px] bg-[#F8F9FE] py-[12px] px-[24px] flex items-center justify-center w-[130px]">
            Terms & Conditions
          </span>
          <h2 className="text-[30px] text-[#1F2744] font-[600] leading-[74px] tracking-[0.075px]">
            Platform Advertising Guidelines{" "}
          </h2>
        </div>
        <img src={termsImg} alt="" />
      </div>
      <p className="text-[20px] text-[#73788C] font-[400] leading-[46px] tracking-[0.05px]">
        Incidunt qui qui aliquam repudiandae ea ipsam. Occaecati et sint
        consectetur suscipit qui ullam aut vitae. Quas ea quia harum. Repellat
        qui rerum aut aperiam aliquam. Ipsa excepturi eaque quis atque et.
        Necessitatibus dolor eius illum vero laboriosam debitis commodi itaque
        omnis. Adipisci distinctio blanditiis aut pariatur rerum et. Debitis
        eaque voluptas modi quasi in aperiam. Consequatur voluptatem rem
        laudantium cumque dolor consequatur. Repellendus repellendus ut
        cupiditate at consequuntur repellat. Dolorem in repellat perspiciatis
        quam illo modi in est voluptatem. Et deserunt consectetur sit corporis
        quas. Quia quis quo et odit laboriosam tempora temporibus eum laborum.
        In quo ut expedita cum eveniet laborum pariatur.
      </p>
    </div>
  );
};

export default CompanyTermsCard;
