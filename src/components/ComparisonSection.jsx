import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const rows = [
  {
    feature: "Waiting Time",
    traditional: "Long Queues",
    vprint: "Instant"
  },
  {
    feature: "Human Interaction",
    traditional: "Required",
    vprint: "None"
  },
  {
    feature: "Privacy",
    traditional: "Low",
    vprint: "High"
  },
  {
    feature: "Speed",
    traditional: "Slow",
    vprint: "Fast"
  },
  {
    feature: "Convenience",
    traditional: "Limited Hours",
    vprint: "24/7 Access"
  }
];

const ComparisonSection = () => (
  <SectionWrapper
    id="comparison"
    title="Traditional vs VPRINT"
    subtitle="See why VPRINT is a smarter, faster alternative."
  >
    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
      <table className="w-full border-collapse bg-white">

        {/* 🔥 HEADER */}
        <thead>
          <tr className="bg-gradient-to-r from-teal-500 via-sky-500 to-orange-500 text-white">
            <th className="px-6 py-4 text-left">Feature</th>
            <th className="px-6 py-4 text-left">Traditional</th>
            <th className="px-6 py-4 text-left">VPRINT</th>
          </tr>
        </thead>

        {/* 🔹 BODY */}
        <tbody>
          {rows.map((row, index) => (
            <motion.tr
              key={row.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >
              {/* Feature */}
              <td className="px-6 py-4 font-medium text-gray-800">
                {row.feature}
              </td>

              {/* Traditional ❌ */}
              <td className="px-6 py-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <FiXCircle className="text-red-500" />
                  {row.traditional}
                </div>
              </td>

              {/* VPRINT ✅ */}
              <td className="px-6 py-4 font-semibold text-teal-600">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-green-500" />
                  {row.vprint}
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* 🔥 BOTTOM TEXT */}
    <div className="mt-10 text-center">
      <p className="text-lg font-semibold text-gray-700">
        Why choose outdated methods?
      </p>
      <p className="mt-2 text-xl font-bold bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
        Upgrade to VPRINT — Fast, Smart, Automated 🚀
      </p>
    </div>
  </SectionWrapper>
);

export default ComparisonSection;