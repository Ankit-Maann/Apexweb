import React from "react";
import { motion } from "framer-motion";
import styles from "./Notes.module.css";

export default function Notes() {
  const notes = [
    { no: 1, topic: "What is UI & UX ?", link: "https://drive.google.com/file/d/1unCs_aevupY3RXKs3UmqyGLhpGHV9iq_/view?usp=sharing" },
    { no: 2, topic: "Design Thinking Process – 5 stages explained with examples", link: "https://drive.google.com/file/d/1h1PJlLTe7indNirbWQ59tn8rCjEZdrDH/view?usp=sharing" },
    { no: 3, topic: "Understanding Users", link: "https://drive.google.com/file/d/1YQ6D_D3ZI3GlUIbOZWZ94_HWPmDpP5mb/view?usp=sharing" },
    { no: 4, topic: "Usability Testing", link: "https://drive.google.com/file/d/1SrqbFIpRySmtpWFACIaKTn6uYW6oObbg/view?usp=sharing" },
    { no: 5, topic: "UI Design Principles", link: "https://drive.google.com/file/d/1uEfcCCjHEtDejDFBTL4rATwst6qobFtA/view?usp=sharing" },
    { no: 6, topic: "Tools Overview (Figma focus)", link: "https://drive.google.com/file/d/1MzCY7cbLWAaygl-0qR5MnnyY3cBy3CN7/view?usp=sharing" },
    { no: 7, topic: "Research Types", link: "https://drive.google.com/file/d/1jgYJBKSHExUf5JH6astXZNE-lidKiQzv/view?usp=sharing" },
    { no: 8, topic: "User Interviews", link: "https://drive.google.com/file/d/1l9iJohADGCnH_KrybsiSyhwazjbmV9sE/view?usp=sharing" },
    { no: 9, topic: "Surveys & Questionnaires", link: "https://drive.google.com/file/d/1DsguzxXogsnZ8p2Hjoq55LslSPPZxCRh/view?usp=sharing" },
    { no: 10, topic: "Competitor Analysis", link: "https://drive.google.com/file/d/1FXynl1o_Ce2y2eDht0eMFcvcv1Yxlokd/view?usp=drive_link" },
    { no: 11, topic: "Creating User Personas", link: "https://drive.google.com/file/d/1llg4RnSRNITXPLiN9oKlYIbqeJNOCAw8/view?usp=sharing" },
    { no: 12, topic: "Customer Journey Mapping", link: "https://drive.google.com/file/d/1Yj_lowHm4FTp6XHG5NS0GAeXy47dewp9/view?usp=sharing" },
    { no: 13, topic: "Introduction to Information Architecture", link: "https://drive.google.com/file/d/1ubNZqnuTwxhZCEY_0B9o-sJSc1gbZM7I/view?usp=sharing" },
    { no: 14, topic: "Organization Systems in IA", link: "https://drive.google.com/file/d/19sp_wAtPdtqHM0Bjev75ntm6hfUZsvqK/view?usp=sharing" },
    { no: 15, topic: "Site Maps", link: "https://drive.google.com/file/d/1ybKsf_Xg_7qAJ7LLXUIRLQbYhk73jMrj/view?usp=sharing" },
    { no: 16, topic: "Card Sorting", link: "https://drive.google.com/file/d/1I7hvXRITmdM5vici-B1dGMHs9EJ0wHCV/view?usp=sharing" },
    { no: 17, topic: "User Flows & Task Flows", link: "https://drive.google.com/file/d/1EF0mUZkKwqvT0T_rSjzvWsVTLCYNM4jo/view?usp=sharing" },
    { no: 18, topic: "IA Hands-On Mini Project", link: "#" },
    { no: 19, topic: "Paper Prototyping", link: "https://drive.google.com/file/d/1iRwiFcLUmL_ry_CpVTJKReVSn2VCwkzO/view?usp=sharing" },
    { no: 20, topic: "Low-fidelity Wireframes", link: "https://drive.google.com/file/d/1wTT_K9el8D7FLr5T-jFz7HdMtqR__iMg/view?usp=sharing" },
    { no: 21, topic: "High-fidelity Wireframes", link: "https://drive.google.com/file/d/1wTT_K9el8D7FLr5T-jFz7HdMtqR__iMg/view?usp=sharing" },
    { no: 22, topic: "Prototype in Figma", link: "https://drive.google.com/file/d/1qoj1N7OH7NrrZazGKYZz3PXg_uGAJgZS/view?usp=sharing" },
    { no: 23, topic: "Responsive Wireframes", link: "https://drive.google.com/file/d/1PgehCvBvZuDTA5f2b-D8zZCfPd7OoZWY/view?usp=sharing" },
    { no: 24, topic: "Wireframe Review Session", link: "#" },
    { no: 25, topic: "Visual Hierarchy", link: "https://drive.google.com/file/d/1pmLviqnrcZCZmWerwgDWVnzi-dB5S7Ut/view?usp=sharing" },
    { no: 26, topic: "Whitespace & Layout", link: "https://drive.google.com/file/d/16HB2pXoPsiTntbTptkMyjPr5ECCBBbdH/view?usp=sharing" },
    { no: 27, topic: "Color Theory", link: "https://drive.google.com/file/d/1LFZGJPBdZ07PVGuSNvEZKqi6FO1yax3S/view?usp=sharing" },
    { no: 28, topic: "Typography Basics", link: "https://drive.google.com/file/d/1BKSNzm3kQgM1q2VAJ7M5FB4yLf2-6v_s/view?usp=sharing" },
    { no: 29, topic: "UI Components", link: "https://drive.google.com/file/d/1GgvCrKU8Kn0RcW2i-lVvQI2G7BaxFb1g/view?usp=sharing" },
    { no: 30, topic: "Design Systems Basics", link: "https://drive.google.com/file/d/148RxL5esRulF9TwxL9Gabzee9-F1mqr1/view?usp=sharing" },
    { no: 31, topic: "Why Prototypes Matter", link: "https://drive.google.com/file/d/1B842iau7w14URrmxTlYzRofQQ640piLr/view?usp=sharing" },
    { no: 32, topic: "Creating Interactive Prototypes", link: "https://drive.google.com/file/d/1Ngn3dqIAIC_91g8JnqAfLh7uE6xnfXq0/view?usp=sharing" },
    { no: 33, topic: "Microinteractions", link: "https://drive.google.com/file/d/1tGgxPSwXjg02H8JMK8_DmB8QBgxv3VwR/view?usp=sharing" },
    { no: 34, topic: "Mobile Prototype Creation", link: "https://drive.google.com/file/d/1LsJu7pErptGy1PXaHPl9PQrv5KeiR6kw/view?usp=sharing" },
    { no: 35, topic: "Web Prototype Creation", link: "https://drive.google.com/file/d/1sxmbj6m3fOXVfYd8PB4ySt2MGviQnMB1/view?usp=sharing" },
    { no: 36, topic: "Mid Project Review", link: "#" },
    { no: 37, topic: "Usability Testing Basics", link: "https://drive.google.com/file/d/1mhisKKZcMnj-NwPn5lin7kjaQVzoRa9M/view?usp=sharing" },
    { no: 38, topic: "Test Planning", link: "https://drive.google.com/file/d/1AACF8oUFoi03Z8ElMLY3mgSfpg63_efO/view?usp=sharing" },
    { no: 39, topic: "Moderated vs Unmoderated Testing", link: "https://drive.google.com/file/d/1gNckUcVhImxGD6bXtGUjs2NY_xswVpdk/view?usp=sharing" },
    { no: 40, topic: "AB Testing", link: "https://drive.google.com/file/d/15soo7iMWb3Sz7oZZV4_6dTi9-2pCFyLC/view?usp=sharing" },
    { no: 41, topic: "Analyzing Test Results", link: "https://drive.google.com/file/d/1WAJtzrMZBJrAPEwKQnqkEn3JexHwwI6t/view?usp=sharing" },
    { no: 42, topic: "Iteration After Testing", link: "https://drive.google.com/file/d/1YbjcUtpmLhC0NRf7Ki640rtmKCTd3_MU/view?usp=sharing" },
    { no: 43, topic: "Intro to Accessibility (WCAG)", link: "https://drive.google.com/file/d/1tJxL-C5R-EdjCl5CVsGha4GAqfbJUfW5/view?usp=sharing" },
    { no: 44, topic: "Creating Moodboard", link: "https://drive.google.com/file/d/1WYRFZLAEUsxtRunYQGUT_V_nRlKHUmtn/view?usp=sharing" },
    { no: 45, topic: "Keyboard Navigation & Screen Readers", link: "https://drive.google.com/file/d/1t3zGF-t2aCNV_uaAxP0HxFKsskXxbg4d/view?usp=sharing" },
    { no: 46, topic: "Accessible Typography & Colors", link: "https://drive.google.com/file/d/1DI6s5OxcUh0rtZq0qwb4M-cnGvVoK-kU/view?usp=sharing" },
    { no: 47, topic: "Accessible Navigation", link: "https://drive.google.com/file/d/1RN1QyQ9GoP1oN4PG7q8BAILdy6MwOWru/view?usp=sharing" },
    { no: 48, topic: "Inclusive Design Examples", link: "https://drive.google.com/file/d/17eo7QdzYupEqtssRS2FlqZRY1abriivk/view?usp=sharing" },
    { no: 49, topic: "Dark Mode Design", link: "https://drive.google.com/file/d/1c-ikPjNSIYNJbEk3xHtQF7hHtUTi9zgV/view?usp=sharing" },
    { no: 50, topic: "Modern UI Trends", link: "https://drive.google.com/file/d/1w5eAUcO9ehgE6SPJywO6AUa4uXzgpSHk/view?usp=sharing" },
    { no: 51, topic: "Responsive & Adaptive Design", link: "https://drive.google.com/file/d/1veNOe-ll06RoTIsZKsofi4y7h-8XP-Lm/view?usp=sharing" },
    { no: 52, topic: "Collaboration with Developers", link: "https://drive.google.com/file/d/18T4u-8F5yCbuKMmMvEQ1vAfDvc3RtAFK/view?usp=sharing" },
    { no: 53, topic: "UI Animation Basics", link: "https://drive.google.com/file/d/1VGAaZJGAjxZ7IsoulgArhvaBK9d6jrJb/view?usp=sharing" },
    { no: 54, topic: "HTML Overview", link: "https://drive.google.com/file/d/1SpLmqa04tDaikJVXDBfytnY-4Pag50BE/view?usp=sharing" },
    { no: 55, topic: "CSS Overview", link: "https://drive.google.com/file/d/1gA2LfY2j5Zs1GsadSuEp5E3o79B0WS5x/view?usp=sharing" },
    { no: 56, topic: "Portfolio Building", link: "#" },
    { no: 57, topic: "Project Kickoff", link: "#" },
    { no: 58, topic: "Wireframe Phase", link: "#" },
    { no: 59, topic: "Prototype Phase", link: "#" },
    { no: 60, topic: "Usability Testing Phase", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050018] to-black text-white p-6 font-[Poppins] flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
      >
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] via-[#6D00FF] to-[#FF00AA] drop-shadow-lg">
            Notes — UI & UX
          </h1>
        </header>

        <div className="flex flex-col gap-8">
          {notes.map((note) => (
            <motion.div
              key={note.no}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 w-full max-w-xl mx-auto flex flex-col items-center gap-6 border border-white/20 shadow-[0_5px_25px_rgba(0,0,0,0.4)] transition-all"
            >
              <h2
                className={`text-center text-lg md:text-xl font-extrabold ${
                  note.link === "#" ? "text-rose-400" : "text-white"
                }`}
              >
                {note.no}. {note.topic}
              </h2>

              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${note.link === "#" ? styles.staticBtn : styles.glowBtn} w-full max-w-[400px]`}
              >
                {note.link === "#" ? "Coming Soon" : "Open Notes"}
              </a>
            </motion.div>
          ))}
        </div>

        <footer className="mt-10 text-center text-gray-400 text-sm">
          © 2025 Apex University | Designed for all devices
        </footer>
      </motion.div>
    </div>
  );
}
