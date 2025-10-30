import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  LineChart,
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
  const containerRef = useRef(null);

  // Auto move from slide 0 → 1
  useEffect(() => {
    if (slide === 0) {
      const timer = setTimeout(() => setSlide(1), 3000);
      return () => clearTimeout(timer);
    }
  }, [slide]);

  // Show nav buttons on mouse move / click
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

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight")
        setSlide((s) => Math.min(s + 1, slides.length - 1));
      if (e.key === "ArrowLeft") setSlide((s) => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Robust pointer-based swipe (attached to containerRef)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let isDown = false;
    let isDragging = false;

    const onPointerDown = (e) => {
      // only left mouse button or touch
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isDown = true;
      isDragging = false;
      startX = e.clientX;
      startY = e.clientY;
      lastX = startX;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      lastX = e.clientX;

      // If vertical movement is larger than horizontal, treat as scroll => ignore swipe
      if (!isDragging && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
        // cancel swipe detection for this gesture
        isDown = false;
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {}
        return;
      }

      // mark dragging only when horizontal movement exceeds small threshold
      if (Math.abs(dx) > 10) isDragging = true;
    };

    const onPointerUp = (e) => {
      if (!isDragging) {
        isDown = false;
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {}
        return;
      }

      const diff = e.clientX - startX;
      const threshold = 80; // px to consider as a swipe

      if (Math.abs(diff) > threshold) {
        if (diff < 0) {
          // swipe left -> next
          setSlide((s) => Math.min(s + 1, slides.length - 1));
        } else {
          // swipe right -> prev
          setSlide((s) => Math.max(s - 1, 0));
        }
      }

      isDown = false;
      isDragging = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, [/* no slide dependency here on purpose */]);

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

  // ✨ Particle Background
  const Particles = () => {
    const particleCount = window.innerWidth > 768 ? 40 : 20;
    const particles = Array.from({ length: particleCount });
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
    // 🟣 0 — Let’s Start
    {
      content: (
        <motion.div
          className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-indigo-5 to-indigo-100 relative overflow-hidden"
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
          className="flex flex-col items-center justify-center relative px-4 text-center max-w-[95vw] overflow-hidden"
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
            onClick={() => setSlide((s) => Math.min(s + 1, slides.length - 1))}
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
          className="text-lg text-gray-600 max-w-xl mx-auto px-4 text-center"
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
          className="text-lg text-gray-600 max-w-xl mx-auto px-4 text-center"
        >
          A transparent hiring platform — where clients post projects, developers
          apply, and AI matches them based on skill, cost, and delivery history.
        </motion.p>
      ),
    },

    // 🟣 4 — Costing & Budget
    {
      title: "Costing & Budget",
      content: (
        <motion.div variants={textVariant} initial="hidden" animate="visible">
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto px-4 text-center">
            Our cost structure covers infrastructure, developer verification,
            and marketing. Revenue is earned via small service fees.
          </p>
          <ResponsiveContainer width="90%" height={250} className="mx-auto">
            <BarChart data={resourcesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="resource" />
              <YAxis />
              <Tooltip />
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.8} />
                </linearGradient>
              </defs>

              <Bar
                dataKey="count"
                fill="url(#blueGradient)"
                radius={10}
                animationBegin={0}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      ),
    },

    // 🟣 5 — Profit Ratio
    {
      title: "Profit Ratio",
      content: (
        <motion.div variants={textVariant} initial="hidden" animate="visible">
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto px-4 text-center">
            With strong adoption, Hirevo’s profitability grows year by year —
            reflecting trust, returning clients, and scalable systems.
          </p>
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
      ),
    },

    // 🟣 6 — Risk Management
    {
      title: "Risk Management",
      content: (
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="max-w-xl mx-auto text-gray-700 px-4 text-center relative"
        >
          <p className="text-lg mb-6">
            Hirevo minimizes risks through verified developers, milestone-based
            payments, and automated code review systems.
          </p>

          {/* Animated Emojis One-by-One */}
          <motion.div
            className="flex justify-center gap-8 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.4, // each emoji appears after the previous
                },
              },
            }}
          >
            {["🛡️", "💰", "🤝"].map((icon, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{ scale: 1.3, rotate: 5 }}
                className="text-5xl md:text-6xl text-indigo-600 drop-shadow-sm"
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },

    // 🟣 7 — Thank You Outro
    {
      content: (
        <motion.div
          className="relative flex flex-col items-center justify-center h-screen w-full text-center overflow-hidden px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Subtle glowing radial background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-transparent blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
          />

          {/* Floating spark particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-indigo-500/70"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: ["0%", "100%"],
                  opacity: [0.8, 0.2, 0.8],
                  x: [`${Math.random() * 40 - 20}%`, `${Math.random() * 40 - 20}%`],
                }}
                transition={{
                  duration: 5 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main Thank You text */}
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: [0, 1], y: [50, 0], scale: [0.95, 1] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Thank You!
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 mb-10 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Let’s build the future of hiring together. 🚀
          </motion.p>

          {/* Glowing credit button */}
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-lg shadow-xl hover:scale-105 transition-all"
            whileHover={{ scale: 1.1 }}
            animate={{
              opacity: [1, 0.6, 1],
              boxShadow: [
                "0 0 10px #6366F1",
                "0 0 20px #A855F7",
                "0 0 10px #6366F1",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            Made by <span className="font-bold">Ankit Maan 🚀</span>
          </motion.button>
        </motion.div>
      ),
    },
  ];

  const current = slides[slide];

  return (
    <div
  className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 overflow-hidden relative"
  onTouchStart={(e) => {
    window._touchStartX = e.touches[0].clientX;
    window._touchStartTime = Date.now();
  }}
  onTouchEnd={(e) => {
    const diff = e.changedTouches[0].clientX - window._touchStartX;
    const time = Date.now() - window._touchStartTime;

    // 💫 Swipe detection (horizontal movement)
    if (Math.abs(diff) > 80 && time < 600) {
      if (diff < 0 && slide < slides.length - 1) setSlide(slide + 1); // swipe left → next
      else if (diff > 0 && slide > 0) setSlide(slide - 1); // swipe right → previous
      return;
    }

    // 👆 Single tap detection (short, small movement)
    if (Math.abs(diff) < 10 && time < 300) {
      // Tap right half → next, Tap left half → back
      const tapX = e.changedTouches[0].clientX;
      const screenMid = window.innerWidth / 2;

      if (tapX > screenMid && slide < slides.length - 1) setSlide(slide + 1);
      else if (tapX < screenMid && slide > 0) setSlide(slide - 1);
    }
  }}
>
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

      {/* Navigation Buttons */}
      {showButton && (
        <>
          {slide > 0 && (
            <motion.button
              onClick={() => setSlide((s) => Math.max(s - 1, 0))}
              className="absolute bottom-6 left-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
            >
              <ArrowLeft size={22} />
            </motion.button>
          )}
          {slide < slides.length - 1 && (
            <motion.button
              onClick={() => setSlide((s) => Math.min(s + 1, slides.length - 1))}
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
