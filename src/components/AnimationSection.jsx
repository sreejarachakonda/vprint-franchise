import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiCreditCard, FiFileText } from "react-icons/fi";
import { LuQrCode } from "react-icons/lu";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    title: "Scan QR",
    desc: "Scan the QR code on the printer",
    icon: LuQrCode,
    color: "text-teal-500",
    lottieSrc: "https://assets3.lottiefiles.com/packages/lf20_jtbfg2nb.json"
  },
  {
    title: "Upload File",
    desc: "Upload your document or image",
    icon: FiFileText,
    color: "text-sky-500",
    lottieSrc: "https://assets9.lottiefiles.com/private_files/lf30_8z6ubjgj.json"
  },
  {
    title: "Make Payment",
    desc: "Secure online payment instantly",
    icon: FiCreditCard,
    color: "text-indigo-500",
    lottieSrc: "https://assets3.lottiefiles.com/packages/lf20_4kx2q32n.json"
  },
  {
    title: "Collect Print",
    desc: "Get your printout immediately",
    icon: FiCheckCircle,
    color: "text-emerald-500",
    lottieSrc: "https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json"
  }
];

const AnimationSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <SectionWrapper
      id="animation"
      title="Print in 4 Simple Steps"
      subtitle="A seamless experience from your phone to printer."
    >
      <div className="grid items-center gap-12 md:grid-cols-2">

        {/* 🍎 iPhone Mockup */}
        <div className="flex justify-center">
          <div className="relative w-[280px]">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-teal-200 via-transparent to-orange-200 blur-2xl opacity-40" />

            {/* Phone Body */}
            <div className="relative rounded-[3rem] bg-black p-[6px] shadow-2xl">

              {/* Screen */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white">

                {/* Notch */}
                <div className="absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />

                {/* Screen Content */}
                <div className="flex min-h-[500px] flex-col items-center justify-center p-6 text-center">

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={steps[activeStep].title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center"
                    >
                      <lottie-player
                        src={steps[activeStep].lottieSrc}
                        background="transparent"
                        speed="1"
                        style={{ width: "140px", height: "140px" }}
                        loop
                        autoplay
                      />

                      <ActiveIcon className={`mt-4 text-5xl ${steps[activeStep].color}`} />

                      <h3 className="mt-3 text-xl font-bold text-gray-800">
                        {steps[activeStep].title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        {steps[activeStep].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 Steps List */}
        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const active = index === activeStep;

            return (
              <motion.div
                key={step.title}
                whileHover={{ scale: 1.04 }}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-xl border p-4 transition ${
                  active
                    ? "border-teal-400 bg-teal-50 shadow-md"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 ${step.color}`}
                  >
                    <Icon className="text-xl" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default AnimationSection;