import React from "react";
import { motion } from "framer-motion";
import { useNavigate ,Link} from "react-router-dom";
import logo from "./assets/logo121.png";
import Festival from "./pages/Festival";

export default function App() {
  const navigate = useNavigate();

  const handleClick = (label) => {
    if (label === "B.Tech / BCA") navigate("/btech");
    if (label === "Notes") navigate("/notes");
    if (label === "Syllabus")
      window.open(
        "https://docs.google.com/spreadsheets/d/1DfpB5GWRi9mrf0j18rJ50sdhEWU1XDSr/htmlview",
        "_blank"
      );
    if (label === "Student Performance Report")
      window.open(
        "https://docs.google.com/spreadsheets/d/1cYcUdF0ZPAWk_5YyDBIt23pLRT70DyPGPBagd41-cdc/htmlview",
        "_blank"
      );
  };

  const menuItems = [
    { text: "B.Tech / BCA", icon: "🎓" },
    { text: "Syllabus", icon: "📘" },
    { text: "Notes", icon: "📝" },
    { text: "Student Performance Report", icon: "" },
  ];

  return (
    <div className="relative">
      <Festival />
    <div className="relative min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#050018] to-[#000000] text-white font-[Poppins] overflow-hidden">

      {/* 🌌 Neon Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-15%] w-[28rem] h-[28rem] bg-[#5B00FF]/40 rounded-full blur-[160px] animate-floatSlow" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[32rem] h-[32rem] bg-[#00C6FF]/35 rounded-full blur-[180px] animate-floatSlow delay-[2.5s]" />
        <div className="absolute top-[35%] right-[25%] w-72 h-72 bg-[#FF00AA]/30 rounded-full blur-[140px] animate-floatSlow delay-[1.2s]" />
      </div>

      {/* ✨ Header */}
      <header className="relative text-center py-12 z-10 select-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/10 backdrop-blur-2xl p-3 rounded-full border border-white/30 shadow-[0_0_40px_#ffffff1a]">
            <img
              src={logo}
              alt="University Logo"
              className="w-16 h-16 rounded-full shadow-[0_0_15px_#00eaff55]"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00D1FF] via-[#6D00FF] to-[#FF0099] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(109,0,255,0.6)]"
        >
          Apex University, Jaipur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 inline-block bg-white/10 px-7 py-2.5 rounded-full text-sm md:text-lg tracking-wide border border-white/20 shadow-lg backdrop-blur-xl"
        >
          Design for Developers (UI/UX) 🚀
        </motion.p>
      </header>

      {/* 💫 Menu Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-[0_0_60px_rgba(0,255,255,0.3)] w-full max-w-sm md:max-w-lg flex flex-col items-center space-y-8"
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(item.text)}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 0 40px rgba(0,255,255,0.7)",
              }}
              whileTap={{ scale: 0.96 }}
              className="relative w-56 md:w-72 py-3.5 rounded-2xl overflow-hidden border border-cyan-300/40 backdrop-blur-xl shadow-lg font-semibold transition-all"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,#00C6FF,#6D00FF,#FF00AA,#00C6FF)] bg-[length:340%_340%] animate-gradientShift opacity-90" />
              <span className="absolute inset-0 bg-black/20 mix-blend-soft-light" />

              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                {item.icon && <span className="text-2xl">{item.icon}</span>}
                {item.text}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </main>

      {/* ⚙️ Footer */}
      <footer className="relative text-center py-10 z-10">
        <motion.p
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyan-300 font-semibold tracking-widest"
        >
          Coded with 💙
        </motion.p>
        <p className="text-gray-400 mt-2 text-xs md:text-sm">
          © 2025 Apex University | Designed for all devices
        </p>

      <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
  <Link
    to="/privacy-policy"
    className="hover:text-cyan-300 transition"
  >
    Privacy Policy
  </Link>

  <Link
    to="/about"
    className="hover:text-purple-300 transition"
  >
    About
  </Link>

  <Link
    to="/contact"
    className="hover:text-cyan-300 transition"
  >
    Contact
  </Link>
</div>
      </footer>

      {/* 🎨 Animation CSS */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientShift {
          animation: gradientShift 4s ease infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-28px) scale(1.05); }
        }
        .animate-floatSlow {
          animation: floatSlow 11s ease-in-out infinite;
        }
      `}</style>
    </div>
  </div>
  );
}
