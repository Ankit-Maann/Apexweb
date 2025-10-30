import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#050018] via-[#0a0430] to-[#000000] text-white font-[Poppins] overflow-hidden">

      {/* 🌌 Animated Neon Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#5B00FF]/40 rounded-full blur-[140px] animate-floatSlow" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[28rem] h-[28rem] bg-[#00C6FF]/40 rounded-full blur-[150px] animate-floatSlow delay-[3s]" />
        <div className="absolute top-[35%] right-[30%] w-60 h-60 bg-[#FF00AA]/30 rounded-full blur-[120px] animate-floatSlow delay-[1.5s]" />
      </div>

      {/* ✨ Header */}
      <header className="relative text-center py-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/10 backdrop-blur-3xl p-3 rounded-full border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.2)]">
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
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00C6FF] via-[#5B00FF] to-[#FF00AA] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(91,0,255,0.8)]"
        >
          Apex University, Jaipur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 inline-block bg-white/10 backdrop-blur-lg text-blue-100 px-6 py-2 rounded-full text-sm md:text-base font-medium border border-white/20 shadow-lg"
        >
          Design for Developers (UI/UX)🚀
        </motion.p>
      </header>

      {/* 💫 Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-[0_0_50px_rgba(0,255,255,0.2)] w-full max-w-md flex flex-col items-center space-y-7"
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
                boxShadow: "0 0 35px rgba(0,255,255,0.6)",
              }}
              whileTap={{ scale: 0.96 }}
              className="relative w-56 md:w-64 flex items-center justify-center gap-3 text-white font-semibold py-3 rounded-2xl shadow-lg border border-cyan-400/40 overflow-hidden transition-all duration-500"
            >
              <span className="absolute inset-0 bg-[linear-gradient(270deg,#00C6FF,#5B00FF,#FF00AA,#00C6FF)] bg-[length:300%_300%] animate-gradientShift opacity-90 rounded-2xl" />
              <span className="absolute inset-0 bg-white/10 mix-blend-overlay rounded-2xl" />
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                {item.text}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </main>

      {/* ⚙️ Footer */}
      <footer className="relative text-center py-8 text-sm z-10">
        <motion.p
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyan-400 font-semibold tracking-wide"
        >
          Made with 💙 by ...
        </motion.p>
        <p className="text-gray-400 mt-2">
          © 2025 Apex University | Designed By .....
        </p>
      </footer>

      {/* 🌈 Animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientShift {
          animation: gradientShift 5s ease infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        .animate-floatSlow {
          animation: floatSlow 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
