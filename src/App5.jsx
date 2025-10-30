import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#0d1222] via-[#111a2e] to-[#1a2342] text-gray-100 font-[Poppins] overflow-hidden">

      {/* 🌠 Parallax Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 70 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full animate-starBlink"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: "white",
              opacity: 0.85,
              boxShadow: `
                0 0 ${Math.random() * 10 + 6}px rgba(255,255,255,0.9),
                0 0 ${Math.random() * 25 + 10}px rgba(130,180,255,0.7)
              `,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
            animate={{
              x: mousePos.x * (i % 5),
              y: mousePos.y * (i % 5),
            }}
            transition={{ type: "spring", stiffness: 20, damping: 10 }}
          />
        ))}
      </div>

      {/* 🪩 Glow Orbs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[25rem] md:w-[32rem] h-[25rem] md:h-[32rem] bg-indigo-500/25 blur-[100px] rounded-full"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[26rem] md:w-[34rem] h-[26rem] md:h-[34rem] bg-fuchsia-500/25 blur-[120px] rounded-full"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* Header */}
      <header className="relative text-center py-8 md:py-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-4"
        >
          <img
            src="https://www.apexuniversity.co.in/logo121.png"
            alt="University Logo"
            className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 p-2 shadow-lg backdrop-blur-sm"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(120,180,255,1)]"
        >
          Apex University, Jaipur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-3 inline-block bg-white/10 backdrop-blur-md text-blue-100 px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold border border-white/20 shadow-md"
        >
          Design for Developers (UI/UX)
        </motion.p>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(255,255,255,0.15)] w-full max-w-xs sm:max-w-sm md:max-w-lg flex flex-col items-center space-y-5 sm:space-y-6 overflow-hidden"
        >
          {/* stars visible through glass */}
          <div className="absolute inset-0 bg-transparent pointer-events-none z-0">
            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full animate-starBlink"
                style={{
                  width: `${Math.random() * 2 + 1.5}px`,
                  height: `${Math.random() * 2 + 1.5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  backgroundColor: "rgba(255,255,255,0.8)",
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {[
            { text: "B.Tech / BCA", icon: "🎓" },
            { text: "Syllabus", icon: "📘" },
            { text: "Notes", icon: "📝" },
            { text: "Play Quiz", icon: "🎯" },
          ].map((item, i) => (
            <motion.button
              key={i}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 30px rgba(140,200,255,0.8)",
              }}
              whileTap={{ scale: 0.96 }}
              className="relative w-48 sm:w-56 md:w-64 flex items-center justify-center gap-2 sm:gap-3 text-white font-semibold py-2.5 sm:py-3 md:py-3.5 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[linear-gradient(270deg,#6ee7ff,#a78bfa,#f472b6,#60a5fa,#6ee7ff)] bg-[length:400%_400%] animate-colorShift opacity-90 rounded-2xl" />
              <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base md:text-lg">
                <span className="text-lg sm:text-xl">{item.icon}</span>
                {item.text}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative bg-transparent text-center py-5 sm:py-6 text-xs sm:text-sm mt-8 z-10">
        <div className="border-t border-white/10 pt-3 sm:pt-4">
          <motion.p
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-blue-200"
          >
            Made with ❤️
          </motion.p>
          <p className="text-white/60 mt-1">
            © 2025 Apex University | Designed by You ✨
          </p>
        </div>
      </footer>

      {/* ✨ Animations */}
      <style>{`
        @keyframes colorShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-colorShift {
          animation: colorShift 7s ease infinite;
        }
        @keyframes starBlink {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        .animate-starBlink {
          animation: starBlink infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
