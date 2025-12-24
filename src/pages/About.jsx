import React from "react";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#050018] to-black text-white font-[Poppins] px-6 py-20 flex justify-center overflow-hidden">

      {/* 🌌 Neon glow background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-15%] w-96 h-96 bg-purple-600/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[28rem] h-[28rem] bg-cyan-500/25 rounded-full blur-[180px]" />
      </div>

      {/* 💎 Card */}
      <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-12
        shadow-[0_0_45px_rgba(109,0,255,0.35),0_0_90px_rgba(0,198,255,0.15)]">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-center mb-8
          bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
          About This Platform
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          This platform is built for developers and students who are passionate
          about design, usability, and user experience. It focuses on
          <span className="text-white font-medium">
            {" "}UI/UX concepts, design thinking, and practical learning
          </span>
          — explained in a simple, developer-friendly way.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          The goal is to bridge the gap between design and development by
          providing clear notes, structured explanations, and real-world
          examples that help learners understand not just how things look, but
          how they work.
        </p>

        <p className="text-gray-300 leading-relaxed">
          This platform will continue to evolve with tutorials, design systems,
          UI/UX projects, and resources tailored for developers who want to
          create meaningful and user-centered digital experiences.
        </p>

        <p className="text-xs text-gray-400 mt-10 text-center tracking-wider">
          Designed with a focus on clarity, usability, and modern UI principles.
        </p>
      </div>
    </div>
  );
}
