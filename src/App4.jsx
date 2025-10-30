import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-[#f9f7f5] via-[#f3ece6] to-[#e8e0d8] text-gray-900 font-[Poppins] overflow-hidden">

      {/* ✨ Floating Light Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[25rem] h-[25rem] bg-[#fceabb]/40 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[10%] w-[28rem] h-[28rem] bg-[#ffd1dc]/50 blur-[150px] rounded-full animate-pulse-slow delay-[3s]" />
        <div className="absolute top-[50%] right-[40%] w-[20rem] h-[20rem] bg-[#fff5e1]/60 blur-[100px] rounded-full animate-pulse-slow delay-[1.5s]" />
      </div>

      {/* 🪶 Header */}
      <header className="relative text-center py-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/50 backdrop-blur-2xl p-3 rounded-full border border-white/70 shadow-[0_0_30px_rgba(255,255,255,0.7)]">
            <img
              src="https://www.apexuniversity.co.in/logo121.png"
              alt="University Logo"
              className="w-14 h-14 rounded-full"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#d4af37] via-[#b8860b] to-[#ffd700] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
        >
          Apex University, Jaipur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 inline-block bg-white/50 backdrop-blur-md text-gray-700 px-6 py-2 rounded-full text-sm md:text-base font-semibold border border-white/70 shadow-md"
        >
          Design for Developers (UI/UX)✨
        </motion.p>
      </header>

      {/* 🌟 Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white/60 backdrop-blur-2xl border border-white/80 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.5)] w-full max-w-md flex flex-col items-center space-y-7"
        >
          {[
            { text: "B.Tech / BCA", icon: "🎓" },
            { text: "Syllabus", icon: "📘" },
            { text: "Notes", icon: "📝" },
            { text: "Play Quiz", icon: "🎯" },
          ].map((item, i) => (
            <motion.button
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 35px rgba(212,175,55,0.6)",
                y: -3,
              }}
              whileTap={{ scale: 0.96 }}
              className="relative w-56 md:w-64 flex items-center justify-center gap-3 text-gray-900 font-semibold py-3 rounded-2xl shadow-lg border border-[#d4af37]/40 overflow-hidden transition-all duration-500"
            >
              <span className="absolute inset-0 bg-[linear-gradient(270deg,#fceabb,#ffd700,#fceabb)] bg-[length:300%_300%] animate-gradientShift opacity-90 rounded-2xl" />
              <span className="absolute inset-0 bg-white/20 mix-blend-overlay rounded-2xl" />
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                {item.text}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </main>

      {/* 💎 Footer */}
      <footer className="relative text-center py-8 text-sm z-10">
        <motion.p
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#b8860b] font-semibold tracking-wide"
        >
          Made with 💛 by ...
        </motion.p>
        <p className="text-gray-600 mt-2">
          © 2025 Apex University | Designed by ...
        </p>
      </footer>

      {/* 🎬 Animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientShift {
          animation: gradientShift 8s ease infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
