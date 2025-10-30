import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";                                   import {                                      LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function App() {
  const [slide, setSlide] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (slide === 0) {
      const timer = setTimeout(() => setSlide(1), 3000);
      return () => clearTimeout(timer);
    }
  }, [slide]);

  useEffect(() => {
    let timer;
    const handleMouseMove = () => {
      setShowButton(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowButton(false), 2000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const profitData = [
    { year: 2025, profit: 10 },
    { year: 2026, profit: 18 },
    { year: 2027, profit: 25 },
    { year: 2028, profit: 32 },
    { year: 2029, profit: 40 },
  ];

  const resourcesData = [
    { resource: "Developers", count: 50 },
    { resource: "Clients", count: 80 },
    { resource: "AI Tools", count: 30 },
    { resource: "Servers", count: 10 },
  ];

  // ✨ Parallax Particle Background (thicker + smooth)
  const Particles = () => {
    const particles = Array.from({ length: 40 });
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-indigo-400/90"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            initial={{
              opacity: 0.7,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.2 + 0.6,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 14 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const GlowingLine = () => (
    <motion.div
      className="relative w-40 h-1 mt-3 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 rounded-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      />
    </motion.div>
  );

  const slides = [
    // 🟣 0 — Let's Start
    {
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-indigo to-indigo-100 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Particles />
          <motion.h1
            className="text-6xl font-extrabold text-indigo-700 mb-6 tracking-wide"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Let’s Start
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>
      ),
    },

    // 🟣 1 — Hirevo Intro
    {
      content: (
        <motion.div
          className="flex flex-col items-center justify-center relative"
          initial="hidden"
          animate="visible"
        >
          <Particles />
          <motion.h1
            variants={textVariant}
            className="text-7xl font-extrabold text-indigo-700 mb-2 tracking-tight drop-shadow-sm"
          >
            Hirevo
          </motion.h1>
          <GlowingLine />
          <motion.h2
            variants={textVariant}
            custom={2}
            className="text-2xl text-gray-700 mb-8 italic mt-4"
          >
            Evolution in Hiring
          </motion.h2>
          <motion.p
            variants={textVariant}
            custom={3}
            className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed"
          >
            Connecting clients with verified developers for web, app, and AI
            projects — with transparent pricing, proven skills, and instant
            collaboration.
          </motion.p>
          <motion.div
            className="mt-10 bg-indigo-600 px-8 py-3 rounded-full text-white text-lg shadow-lg cursor-pointer hover:bg-indigo-700 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
            onClick={() => setSlide(slide + 1)}
          >
            Enter App →
          </motion.div>
        </motion.div>
      ),
    },

    // 🟣 2 — Intro & Management
    {
      title: "Intro & Management",
      content: (
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-600 max-w-xl mx-auto"
        >
          Managed by passionate developers, Hirevo bridges the gap between
          clients and coders through trust, fair pay, and verified collaboration.
        </motion.p>
      ),
    },

    // 🟣 3 — Business Proposal
    {
      title: "Business Proposal",
      content: (
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-600 max-w-xl mx-auto"
        >
          A transparent hiring platform — where clients post projects,
          developers apply, and AI matches them based on skill, cost, and
          delivery history.
        </motion.p>
      ),
    },

    // 🟣 4 — Costing Graph
    {
      title: "Costing & Budget",
      content: (
        <motion.div variants={textVariant} initial="hidden" animate="visible">
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            Our cost structure covers infrastructure, developer verification,
            and marketing. Revenue is earned via small service fees.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <ResponsiveContainer width="90%" height={250} className="mx-auto">
              <BarChart data={resourcesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="resource" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#4F46E5"
                  radius={10}
                  animationBegin={0}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      ),
    },

    // 🟣 5 — Profit Graph
    {
      title: "Profit Ratio",
      content: (
        <motion.div variants={textVariant} initial="hidden" animate="visible">
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            With strong adoption, Hirevo’s profitability grows year by year —
            reflecting trust, returning clients, and scalable systems.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <ResponsiveContainer width="90%" height={250}>
              <LineChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#6366F1"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      ),
    },

    // 🟣 6 — Risk Management (New)
   {
  title: "Risk Management",
  content: (
    <motion.div
      variants={textVariant}
      initial="hidden"
      animate="visible"
      className="max-w-xl mx-auto text-gray-700"
    >
      <p className="text-lg mb-6">
        Hirevo minimizes risks through verified developers, milestone-based payments,
        and automated code review systems.
      </p>
      <motion.div
        className="flex justify-center gap-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.2 }} className="text-indigo-600 text-4xl">🛡️</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="text-indigo-600 text-4xl">💰</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="text-indigo-600 text-4xl">🤝</motion.div>
      </motion.div>
    </motion.div>
  ),
}
  ];

  const current = slides[slide];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          className="text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {current.title && (
            <motion.h1
              className="text-5xl font-bold text-indigo-700 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {current.title}
            </motion.h1>
          )}
          {current.subtitle && (
            <motion.p
              className="text-2xl text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {current.subtitle}
            </motion.p>
          )}
          {current.content}
        </motion.div>
      </AnimatePresence>

      {/* Hidden Navigation Buttons */}
      {showButton && slide > 0 && (
        <>
          {slide > 1 && (
            <motion.button
              onClick={() => setSlide(slide - 1)}
              className="absolute bottom-6 left-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
            >
              <ArrowLeft size={22} />
            </motion.button>
          )}
          {slide < slides.length - 1 && (
            <motion.button
              onClick={() => setSlide(slide + 1)}
              className="absolute bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
            >
              <ArrowRight size={22} />
            </motion.button>
          )}
        </>
      )}
    </div>
  );
}
