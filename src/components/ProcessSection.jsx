import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiClipboard, FiFileText, FiMapPin } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    title: "Contact Us",
    desc: "Reach out to our team to express your interest in starting a VPRINT franchise.",
    icon: FiClipboard
  },
  {
    title: "Site Review",
    desc: "We analyze your location to ensure maximum business potential.",
    icon: FiMapPin
  },
  {
    title: "Paperwork",
    desc: "Complete simple documentation and finalize partnership terms.",
    icon: FiFileText
  },
  {
    title: "Launch within 1 Week",
    desc: "Get your VPRINT setup installed and start earning quickly.",
    icon: LuRocket
  }
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  // 🔥 Auto step highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper
      id="process"
      title="Become a Partner in 4 Simple Steps"
      subtitle="A quick and streamlined onboarding process designed for fast launch."
    >
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeStep;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}

              // 🔥 Active highlight animation
              animate={{
                scale: isActive ? 1.08 : 1,
                boxShadow: isActive
                  ? "0 10px 30px rgba(0,0,0,0.15)"
                  : "0 0px 0px rgba(0,0,0,0)",
              }}

              className={`relative card-base text-center transition-all duration-500 ${
                isActive
                  ? "border-2 border-teal-500 bg-gradient-to-br from-teal-50 to-orange-50"
                  : "border border-gray-200"
              }`}
            >

              {/* Step Number */}
              <span className="absolute left-3 top-2 text-7xl font-extrabold bg-gradient-to-r from-teal-200 to-orange-200 bg-clip-text text-transparent opacity-40">
                {index + 1}
              </span>

              {/* Icon */}
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  rotate: isActive ? 5 : 0
                }}
                className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-orange-100"
              >
                <Icon className="text-2xl text-teal-600" />
              </motion.div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 relative z-10">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-500 relative z-10">
                {step.desc}
              </p>

            </motion.div>
          );
        })}

      </div>
    </SectionWrapper>
  );
};

export default ProcessSection;
