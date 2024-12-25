import { useState } from "react";
import faqImg from "../../../assets/images/dashboard/faq.png";

const CompanyFaqCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Where can I watch?",
      answer:
        "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
    },
    {
      question: "Mauris id nibh eu fermentum mattis purus?",
      answer: "This is the answer to the question.",
    },
    {
      question: "Eros imperdiet rhoncus?",
      answer: "This is the answer to the question.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center gap-[5px] border-b-2 border-b-[#E0E4EC]">
        <div>
          <span className="text-[17px] text-[#0F74CC] font-[700] leading-[26px] tracking-[0.5px] bg-[#F8F9FE] py-[12px] px-[24px] flex items-center justify-center w-[130px]">
            FAQ{" "}
          </span>
          <h2 className="text-[30px] text-[#1F2744] font-[600] leading-[74px] tracking-[0.075px]">
            Frequently Asked Questions{" "}
          </h2>
        </div>
        <img src={faqImg} alt="" />
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b-2 border-[#D7DEF0] last:border-none"
        >
          <div
            className="flex justify-between items-center  py-[24px] cursor-pointer hover:bg-gray-100"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-[18px] text-[#000] font-[700] leading-[21.6px]">
              {faq.question}
            </h3>
            <button className="text-[#0A62CC] text-[24px]">
              {activeIndex === index ? "×" : "+"}
            </button>
          </div>
          {activeIndex === index && faq.answer && (
            <div className="text-[16px] text-[#3c3c43d9] font-[400] leading-[22.4px] mb-[24px]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CompanyFaqCard;
