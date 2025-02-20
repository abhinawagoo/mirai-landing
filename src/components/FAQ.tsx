"use client";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How many interviews can be done in a day?",
    answer:
      "Our AI recruitment agents can handle multiple interviews simultaneously, significantly reducing hiring time while maintaining high-quality evaluations.",
  },
  {
    question: "Will the agent understand my company's needs?",
    answer:
      "Yes, Mirai AI adapts to your industry, company culture, and job roles, ensuring precise assessments that align with your hiring standards.",
  },
  {
    question: "Can the agent integrate with my workflows?",
    answer:
      "Absolutely! Mirai connects with Applicant Tracking Systems (ATS), CRMs, and other tools, automating scheduling, interview analysis, and reporting.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const faqSection = document.getElementById("faq-section");
      if (faqSection) {
        const rect = faqSection.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="faq-section"
      className={`h-screen w-full flex items-center justify-center bg-black transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-[85%] md:w-[70%] flex flex-col md:flex-row gap-20">
        {/* Left - Full FAQ Title */}
        <div className="w-full md:w-1/3 flex justify-start md:justify-center">
          <h2 className="text-xl md:text-2xl font-light tracking-wide text-gray-400 leading-tight">
            frequently <br /> asked <br /> questions
          </h2>
        </div>

        {/* Right - FAQ Questions */}
        <div className="w-full md:w-1/2 space-y-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer hover:text-blue-400 transition duration-300 pl-6"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-medium text-gray-200 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-400 text-base" />
                ) : (
                  <FaChevronDown className="text-blue-400 text-base" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-500 mt-2 text-base md:text-lg leading-relaxed pr-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
