import { motion } from "framer-motion";
import { FiShield, FiUsers, FiZap } from "react-icons/fi";
import { MdOutlineTimer } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import SectionWrapper from "./SectionWrapper";

const points = [
  {
    text: "No Queues",
    desc: "Skip long waiting lines completely",
    icon: FiUsers,
    color: "from-teal-400 to-teal-600"
  },
  {
    text: "Fully Automated",
    desc: "No human interaction required",
    icon: FiZap,
    color: "from-sky-400 to-blue-600"
  },
  {
    text: "Secure Documents",
    desc: "Your files stay private & safe",
    icon: FiShield,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    text: "Fast Printing",
    desc: "Get prints in seconds",
    icon: MdOutlineTimer,
    color: "from-orange-400 to-orange-600"
  },
  {
    text: "Perfect for Students",
    desc: "Best solution for campuses & colleges",
    icon: PiStudent,
    color: "from-emerald-400 to-green-600"
  }
];

const WhyVprintSection = () => (
  <SectionWrapper
    id="franchise"
    title="Why Choose VPRINT?"
    subtitle="A smarter alternative to traditional print shops."
  >
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {points.map((point, index) => {
        const Icon = point.icon;

        return (
          <motion.div
            key={point.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition"
          >
            {/* 🔥 Glow Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 blur-xl transition duration-300 group-hover:opacity-20`}
            />

            {/* 🔹 Icon */}
            <div
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${point.color} text-white shadow-lg`}
            >
              <Icon className="text-2xl" />
            </div>

            {/* 🔹 Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {point.text}
            </h3>

            {/* 🔹 Description */}
            <p className="mt-2 text-sm text-gray-500">
              {point.desc}
            </p>
          </motion.div>
        );
      })}
    </div>

    {/* 🔥 Highlight Line */}
    <div className="mt-12 text-center">
      <p className="text-lg font-semibold text-gray-700">
        Traditional print shops are outdated.
      </p>
      <p className="mt-2 text-xl font-bold bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
        VPRINT is the future of printing 🚀
      </p>
    </div>
  </SectionWrapper>
);

export default WhyVprintSection;