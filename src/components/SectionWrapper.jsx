import { motion } from "framer-motion";

const SectionWrapper = ({ id, title, subtitle, children }) => (
  <section
    id={id}
    className="mx-auto w-full max-w-6xl px-4 py-20 md:py-24"
  >
    {(title || subtitle) && (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        {/* 🔥 Title */}
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        )}

        {/* 🔥 Gradient underline */}
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-orange-500" />

        {/* 🔥 Subtitle */}
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-gray-500 text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
    )}

    {/* 🔥 Content */}
    <div className="w-full">
      {children}
    </div>
  </section>
);

export default SectionWrapper;