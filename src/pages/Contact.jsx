import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050018] to-black text-white font-[Poppins] px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-[0_0_60px_rgba(0,198,255,0.35)]">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4 text-center">
          Contact Us
        </h1>

        <p className="text-gray-300 text-center mb-10">
         Reach out to us directly via WhatsApp 🚀
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/40 outline-none transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 py-3 rounded-2xl font-semibold text-lg bg-gradient-to-r from-[#00C6FF] via-[#6D00FF] to-[#FF00AA] hover:scale-[1.03] transition-transform shadow-[0_0_30px_rgba(0,255,255,0.6)]"
          >
            Send via WhatsApp 💬
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          By submitting this form, you’ll be redirected to WhatsApp to send your
          message.
        </p>
      </div>
    </div>
  );
}
