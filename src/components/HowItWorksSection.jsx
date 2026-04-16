import { motion } from "framer-motion";
import { FiCheckCircle, FiCreditCard, FiFilePlus } from "react-icons/fi";
import { LuQrCode } from "react-icons/lu";
import SectionWrapper from "./SectionWrapper";

const cards = [
  {
    title: "Scan QR Code",
    text: "Scan the QR code on the printer",
    icon: LuQrCode,
    color: "from-teal-400 to-teal-600"
  },
  {
    title: "Upload File",
    text: "Upload your document or photo",
    icon: FiFilePlus,
    color: "from-sky-400 to-blue-600"
  },
  {
    title: "Payment",
    text: "Secure online payment",
    icon: FiCreditCard,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "Collect Print",
    text: "Instantly get your printout",
    icon: FiCheckCircle,
    color: "from-emerald-400 to-green-600"
  }
];

const HowItWorksSection = () => (
  <SectionWrapper
    id="how-it-works"
    title="How It Works"
    subtitle="Print your documents in seconds with a simple 4-step process."
  >
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition"
          >
            {/* 🔥 Gradient Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 blur-xl transition duration-300 group-hover:opacity-20`}
            />

            {/* 🔹 Icon */}
            <div
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg`}
            >
              <Icon className="text-2xl" />
            </div>

            {/* 🔹 Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h3>

            {/* 🔹 Description */}
            <p className="mt-2 text-sm text-gray-500">
              {card.text}
            </p>

            {/* 🔹 Step Number */}
            <span className="absolute top-4 right-4 text-xs font-bold text-gray-300">
              0{index + 1}
            </span>
          </motion.div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default HowItWorksSection;