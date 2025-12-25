import React from "react";
import { motion } from "framer-motion";

export default function Festival() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  // 🎄 Christmas only
  const isChristmas = day === 25 && month === 12;
  if (!isChristmas) return null;

  return (
    <>
      {/* 🌌 Night Sky Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#020024] via-[#050018] to-black" />

      {/* ⭐ Stars */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-starTwinkle"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* ❄️ Optimized Snowfall */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute text-white opacity-70 animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-20 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
              fontSize: `${10 + Math.random() * 14}px`,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* 🌟 Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[36rem] h-[36rem] bg-red-500/20 blur-[220px] animate-floatSlow" />
        <div className="absolute bottom-[-25%] right-[-20%] w-[40rem] h-[40rem] bg-green-500/20 blur-[240px] animate-floatSlow delay-[2s]" />
      </div>

      {/* 🎄 Trees */}
      <div className="fixed bottom-0 left-6 z-20 text-6xl opacity-80 select-none">
        🎄
      </div>
      <div className="fixed bottom-0 right-6 z-20 text-6xl opacity-80 select-none">
        🎄
      </div>

      {/* 🎨 Animations */}
      <style>{`
        @keyframes snow {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(140vh);
            opacity: 0;
          }
        }
        .animate-snow {
          animation: snow linear infinite;
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-starTwinkle {
          animation: starTwinkle 3.5s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-28px); }
        }
        .animate-floatSlow {
          animation: floatSlow 14s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
