import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  { q: "What is VPRINT?", a: "VPRINT is a smart self-service printing system that allows users to print documents instantly using a QR-based process." },
  { q: "Investment Required?", a: "The investment depends on the location, demand, and partnership model. Contact us for a customized estimate." },
  { q: "Need Experience?", a: "No prior experience is needed. We provide full setup and guidance." },
  { q: "Is it profitable?", a: "Yes, VPRINT is highly profitable especially in student and high-footfall areas." },
  { q: "Support Provided?", a: "We provide complete technical setup, maintenance support, and onboarding assistance." }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setSubmitted(true);
    setQuestion("");
  };

  return (
    <SectionWrapper
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about VPRINT franchise."
    >
      <div className="max-w-3xl mx-auto space-y-4">

        {/* 🔥 FAQ Accordion */}
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50"
            >
              {faq.q}
              <FiChevronDown
                className={`transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-4 text-gray-600 text-sm"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* 🔥 Ask Question Box */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">
            Still have questions?
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Drop your question and we’ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="input-style flex-1"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-teal-500 to-orange-500 px-5 text-white font-semibold"
            >
              Ask
            </button>
          </form>

          {submitted && (
            <p className="mt-3 text-sm text-green-600">
              ✅ Your question has been submitted!
            </p>
          )}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default FaqSection;