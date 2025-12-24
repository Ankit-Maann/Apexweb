import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";          
import Btech from "./components/Btech";
import Notes from "./components/Notes";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Optional: simple NotFound route
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#050018] to-black text-white font-[Poppins]">
      <div className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">404 — Page Not Found</h2>
        <p className="text-sm md:text-base text-gray-300">Go back - 404</p>
      </div>
    </div>
  );
}

const Root = () => (
  <BrowserRouter>
    <Routes>
       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<App />} />
      <Route path="/btech" element={<Btech />} />
       <Route path="/notes" element={<Notes/
>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />);
