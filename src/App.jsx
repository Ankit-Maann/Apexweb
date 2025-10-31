import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";

export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [selectedImg, setSelectedImg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);

  const products = [
    {
      title: "Speech Model",
      desc: "AI converts gestures into natural speech for real-time conversations.",
      img: "https://static.wixstatic.com/media/5b4122_e09b8ce1132b4d35873ac0ca21013187~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/5b4122_e09b8ce1132b4d35873ac0ca21013187~mv2.jpg",
      price: "$399",
    },
    {
      title: "Text Display",
      desc: "Real-time captions appear on the lens using integrated LED micro-display.",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWFq62EiTc-RUCiugdn3b7b6nID-1ZV-ynWcjbYs3bu0aUVKdUpvR2KnSWCrt3jzwwp0I0mwMWf8aH7-agsi3uL1Q2p7Et6PNXFqEwqIW9xywIdPv0dVxpkg",
      price: "$499",
    },
    {
      title: "Dual Mode",
      desc: "Combines speech and text interpretation seamlessly in one premium frame.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDEyHSOb_k0enzdq8kPP1gOadbDHkdW-h8ZgGKuYAhdSMCbJTPus3Piyk&s=10",
      price: "$599",
    },
    {
      title: "Hawasi Glasses (On-Demand Edition)",
      desc: "Ye H Hawasi Glasses , tum jese hawas se bhare huye logon ke liye , abe dallon , isi ka intizaar tha na , dekh kese muskuraa rha h",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoM4MRNkEQl9t3pn7PSHm94ln_Xs2Nq7SmQH3lGi_idTXVJMj6qxXFh5DMYye4w1tcsI&usqp=CAU",
      price: "$20000",
    },
  ];

  // 🛒 Handle Buy
  const handleBuy = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // 💬 Handle Chat Messages
  const handleChat = (msg) => {
    if (!msg || !msg.trim()) return;
    const newMessage = { sender: "user", text: msg };
    setChatMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const reply = {
        sender: "bot",
        text:
          "I'm Aura 🤖 — your AI assistant! I can help with pricing, shipping, or product info. Try asking: 'Tell me more about Dual Mode'.\n\nDeveloped by Ankit Maan 🚀",
      };
      setChatMessages((prev) => [...prev, reply]);
    }, 700);
  };

  return (
    <div ref={ref} className="bg-[#0B0C10] text-gray-200 font-inter overflow-x-hidden relative">
      {/* Floating gradient blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-20"
          style={{ y }}
        />
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6"
        >
          AI-Powered Communication Glasses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-8"
        >
          Empowering the deaf and mute community with real-time speech and gesture translation powered by AI.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-pink-500/40 transition-all flex items-center gap-2"
          href="#product"
        >
          Explore Now <ArrowRight size={22} />
        </motion.a>
      </section>

      {/* Products */}
      <section id="product" className="py-28 bg-gradient-to-b from-[#0B0C10] to-[#111217]">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400">
          Products
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.18 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-[#15161b] to-[#1e1f25] rounded-3xl p-8 border border-gray-700/50 shadow-lg hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-2xl mb-6 cursor-pointer">
                <img
                  onClick={() => setSelectedImg(p.img)}
                  src={p.img}
                  alt={p.title}
                  className="rounded-2xl w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <p className="text-pink-400 font-semibold mb-4">{p.price}</p>
              <button
                onClick={() => handleBuy(p)}
                className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition"
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-gradient-to-b from-[#111217] to-[#0B0C10] text-center">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Core Technology
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left px-6">
          {[
            "🧠 AI Vision Engine interprets gestures and facial cues.",
            "🎙️ Speech Synthesis Module generates realistic voices.",
            "💬 Text Projection Lens for live captions.",
            "📱 Companion App for personalization and updates.",
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#16171d]/70 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-md hover:border-purple-500/30 hover:shadow-purple-500/10 transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-gradient-to-b from-[#0B0C10] to-[#111217] text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg mb-10">Interested in collaboration or investment?</p>
        <a
          href="mailto:contact@aiglasses.com"
          className="bg-gradient-to-r from-indigo-500 to-pink-500 px-10 py-4 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-pink-500/40 transition-all"
        >
          contact@aiglasses.com
        </a>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-700/40">
        © 2025 AI Communication Glasses — Built for a Smarter Tomorrow
      </footer>

      {/* Image Preview */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
        >
          <img src={selectedImg} className="max-h-[80vh] rounded-2xl shadow-2xl" />
        </div>
      )}

      {/* Buy Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#15161b] p-8 rounded-3xl max-w-md w-full border border-gray-700 relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X />
            </button>
            <img src={selectedProduct?.img} alt="" className="rounded-2xl w-full h-48 object-cover mb-6" />
            <h3 className="text-2xl font-semibold mb-3">{selectedProduct?.title}</h3>
            <p className="text-gray-400 mb-3">{selectedProduct?.desc}</p>
            <p className="text-pink-400 font-semibold mb-6">{selectedProduct?.price}</p>
            <button
              onClick={() => {
                setShowThankYou(true);
                setTimeout(() => {
                  setShowThankYou(false);
                  setShowModal(false);
                }, 2000);
              }}
              className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 py-3 rounded-full font-semibold text-white hover:scale-105 transition"
            >
              Confirm Purchase
            </button>

            {/* Thank You Animation */}
            {showThankYou && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-3xl"
              >
                <CheckCircle2 size={60} className="text-green-400 mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold text-green-300">Thank You for Your Purchase!</h3>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* Chat Assistant */}
      <div>
        {!showChat && (
          <button
            onClick={() => setShowChat(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 z-40"
          >
            💬
          </button>
        )}

        {showChat && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-6 right-6 bg-[#16171d] w-80 h-96 rounded-2xl border border-gray-700 shadow-2xl flex flex-col z-50"
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
              <h3 className="font-semibold text-pink-400">Aura AI Assistant</h3>
              <button onClick={() => setShowChat(false)} className="text-gray-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
              {chatMessages.map((m, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl max-w-[80%] ${
                    m.sender === "user"
                      ? "ml-auto bg-pink-500/20 text-pink-300"
                      : "bg-indigo-500/20 text-indigo-300"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <ChatInput onSend={handleChat} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ChatInput({ onSend }) {
  const [msg, setMsg] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend(msg);
        setMsg("");
      }}
      className="p-3 border-t border-gray-700 flex gap-2"
    >
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500"
        placeholder="Ask me anything..."
      />
      <button type="submit" className="text-pink-400 font-semibold hover:text-pink-300 transition">
        Send
      </button>
    </form>
  );
}
