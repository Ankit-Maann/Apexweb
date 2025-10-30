import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-orange-200 via-rose-300 to-purple-400 font-[Poppins] text-gray-800 overflow-hidden">

      {/* ✨ Floating Glass Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-400/40 blur-[100px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-15%] right-[-10%] w-80 h-80 bg-purple-500/40 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute top-[40%] right-[25%] w-60 h-60 bg-orange-300/40 blur-[90px] rounded-full animate-pulse-slow" />
      </div>

      {/* Header */}
      <header className="relative text-center py-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-4"
        >
          <div className="bg-white/20 backdrop-blur-xl p-3 rounded-full shadow-lg border border-white/30">
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
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,180,100,0.9)]"
        >
          Apex University, Jaipur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 inline-block bg-white/20 backdrop-blur-md text-gray-900 px-6 py-2 rounded-full text-base font-semibold border border-white/30 shadow-md"
        >
          Design for Developers (UI/UX)
        </motion.p>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-2xl bg-white/20 border border-white/40 rounded-3xl p-10 shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full max-w-md flex flex-col items-center space-y-6"
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
                scale: 1.07,
                boxShadow: "0 0 30px rgba(255,200,100,0.6)",
                y: -3,
              }}
              whileTap={{ scale: 0.96 }}
              className="relative w-56 md:w-64 flex items-center justify-center gap-3 text-white font-semibold py-3 rounded-2xl overflow-hidden shadow-lg border border-white/40 transition-all duration-300 backdrop-blur-md"
            >
              <span className="absolute inset-0 bg-[linear-gradient(270deg,#ff7b00,#ff0077,#9d00ff,#ff7b00)] bg-[length:300%_300%] animate-gradientMove opacity-90 rounded-2xl" />
              <span className="absolute inset-0 bg-white/20 mix-blend-overlay rounded-2xl" />
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                {item.text}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative text-center py-6 text-sm z-10 text-gray-800">
        <div className="border-t border-white/40 pt-4 backdrop-blur-md bg-white/10 w-full">
          <motion.p
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-orange-700 font-semibold"
          >
            Made with ❤️ 
          </motion.p>
          <p className="text-gray-700 mt-1">
           
          </p>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          animation: gradientMove 6s ease infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
