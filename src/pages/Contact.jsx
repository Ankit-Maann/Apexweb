import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Enter your name";
    } else if (!email.trim()) {
      newErrors.email = "Enter your email";
    } else if (!message.trim()) {
      newErrors.message = "Enter your message";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const whatsappMessage = `
👋 New Contact Form Message

👤 Name: ${name}
📧 Email: ${email}
📝 Message: ${message}
    `;

    const whatsappURL = `https://wa.me/918441976095?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const shakeAnimation = {
    x: [0, -8, 8, -6, 6, 0],
    transition: { duration: 0.4 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050018] to-black text-white font-[Poppins] px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-[0_0_60px_rgba(0,198,255,0.35)]">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4 text-center">
          Contact Us
        </h1>

        <p className="text-gray-300 text-center mb-10">
          Reach out to us directly via WhatsApp 🚀
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Name */}
          <motion.div animate={errors.name ? shakeAnimation : {}}>
            <label className="block text-sm mb-2 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({});
              }}
              placeholder="Enter your name"
              className={`w-full px-5 py-3 rounded-xl bg-black/40 border outline-none transition
                ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500/40"
                    : "border-white/20 focus:border-cyan-400 focus:ring-cyan-400/40"
                }`}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div animate={errors.email ? shakeAnimation : {}}>
            <label className="block text-sm mb-2 text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({});
              }}
              placeholder="Enter your email"
              className={`w-full px-5 py-3 rounded-xl bg-black/40 border outline-none transition
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500/40"
                    : "border-white/20 focus:border-purple-400 focus:ring-purple-400/40"
                }`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div animate={errors.message ? shakeAnimation : {}}>
            <label className="block text-sm mb-2 text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors({});
              }}
              placeholder="Write your message..."
              className={`w-full px-5 py-3 rounded-xl bg-black/40 border outline-none transition resize-none
                ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500/40"
                    : "border-white/20 focus:border-pink-400 focus:ring-pink-400/40"
                }`}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.12,
              boxShadow: "0 0 50px rgba(0,198,255,0.8)",
            }}
            whileTap={{ scale: 0.96 }}
            className="relative w-full md:w-72 py-3.5 rounded-2xl overflow-hidden border border-cyan-300/40 backdrop-blur-xl shadow-[0_0_40px rgba(0,198,255,0.3)] font-semibold"
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,#00C6FF,#6D00FF,#FF00AA,#00C6FF)] bg-[length:340%_340%] animate-gradientShift opacity-90" />
            <span className="absolute inset-0 bg-black/20 mix-blend-soft-light" />
            <span className="relative z-10 flex items-center justify-center gap-3 text-lg text-white">
              Send via WhatsApp 💬
            </span>
          </motion.button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          By submitting this form, you’ll be redirected to WhatsApp to send your
          message.
        </p>
      </div>

      {/* Gradient animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientShift {
          animation: gradientShift 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
