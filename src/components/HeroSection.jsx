import { motion } from "framer-motion";

const HeroSection = ({ onGetFranchise }) => (
  <section
    id="hero"
    className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50"
  >
    <div className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center">

      {/* 🔹 Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-semibold text-teal-600"
      >
        ⚡ India’s Fastest Smart Printing Solution
      </motion.p>

      {/* 🔥 Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl"
      >
        Scan. Upload. Pay. <br />
        <span className="bg-gradient-to-r from-teal-500 via-sky-500 to-orange-500 bg-clip-text text-transparent">
          Print Anywhere.
        </span>
      </motion.h1>

      {/* 🔹 Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-6 max-w-2xl text-lg text-gray-600"
      >
        Fast, secure, and fully automated printing. No queues. No human interaction.
      </motion.p>

      {/* 🔥 Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href="https://smartprinter.in/printer/c09a0217-8770-4e78-bdb3-d3427c1035b3"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gray-900 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
        >
          Print Now →
        </a>

        <button
          onClick={onGetFranchise}
          className="rounded-full border border-gray-300 px-8 py-3 font-semibold transition hover:bg-gray-100"
        >
          Get Franchise
        </button>
      </motion.div>

      {/* 🔹 Trust Line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-6 text-sm text-gray-400"
      >
        Trusted by students & professionals across India 🚀
      </motion.p>

    </div>
  </section>
);

export default HeroSection;