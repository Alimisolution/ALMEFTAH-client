import { useState } from "react";

const FaqCard = () => {
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
    {
      question: "Fames imperdiet quam fermentum?",
      answer: "This is the answer to the question.",
    },
    {
      question: "Varius vitae, convallis amet lacus sit aliquet nibh?",
      answer: "This is the answer to the question.",
    },
    {
      question: "Tortor nisl pellentesque sit quis orci dolor?",
      answer: "This is the answer to the question.",
    },
    {
      question:
        "Vestibulum mauris mauris elementum enim ac auctor ipsum nibh sollicitudin?",
      answer: "This is the answer to the question.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto">
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

export default FaqCard;
