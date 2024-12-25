import img from "../../../assets/images/privacy-policy/img.png";

const PrivacyPolicyCard = () => {
  return (
    <section className="grid grid-cols-6 gap-[50px] mb-[56px]">
        <div className="col-span-6 lg:col-span-3">
        <h2 className="text-[32px] text-[#000] font-[700] leading-[38.4px] mb-[30px]">
        Your information is protected on our platform        </h2>
        <p className="text-[20px] text-[#73788C] font-[400] leading-[36px]  tracking-[0.05px] text-with-ellipsis">
          Last Revised: December 16, 2024 <br /> Welcome to www.lorem-ipsum.info. This
          site is provided as a service to our visitors and may be used for
          informational purposes only. Because the Terms and Conditions contain
          legal obligations, please read them carefully. 1. YOUR AGREEMENT <br /> By
          using this Site, you agree to be bound by, and to comply with, these
          Terms and Conditions. If you do not agree to these Terms and
          Conditions, please do not use this site.<br /> PLEASE NOTE: We reserve the
          right, at our sole discretion, to change, modify or otherwise alter
          these Terms and Conditions at any time. Unless otherwise indicated,
          amendments will become effective immediately. Please review these
          Terms and Conditions periodically. Your continued use of the Site
          following the posting of changes and/or modifications will constitute
          your acceptance of the revised Terms and Conditions and the
          reasonableness of these standards for notice of changes. For your
          information, this page was last updated as of the date at the top of
          these terms and conditions. 2. PRIVACY
        </p>
      </div>
      <div className="col-span-3 hidden lg:block">
      <img src={img} alt="" className="block w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default PrivacyPolicyCard;
