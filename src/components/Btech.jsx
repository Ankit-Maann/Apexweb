import React from "react";
import { motion } from "framer-motion";
import styles from "./Btech.module.css";

export default function Btech() {
  const rows = [
    { no: 1, topic: "What is UI & UX ?", assignment: "https://drive.google.com/file/d/1tLNp1GAHvOq_VsglwWhUyUUwZP5ni6HA/view?usp=drive_link", forms: ["UI_UX Case Study|https://forms.gle/ye7psvmcAKdwtBVr8"], responses: ["View Responses|https://docs.google.com/spreadsheets/d/1FMG9O0xjN-g_Tbu53Yi1dC3ob0BCtLYavgFr08kezoM/edit?usp=sharing"] },
    { no: 2, topic: "Design Thinking Process – 5 stages explained with examples", forms: [], responses: [] },
    { no: 3, topic: "Understanding Users", forms: ["User Journey Map|https://forms.gle/wbC4HYm1r4zYy7gy7"], responses: ["View Responses|https://docs.google.com/spreadsheets/d/1Ena_6zPK8R7ELV7TfqKTYQBPLvxKxEvVeEQSDOBrZ3Y/edit?usp=sharing"] },
    { no: 4, topic: "Usability Testing", forms: [], responses: [] },
    { no: 5, topic: "UI Design Principles", forms: [], responses: [] },
    { no: 6, topic: "Tools Overview (Figma focus)", forms: ["Figma Link Form|https://forms.gle/8Mhaqd2mRRmkKocr7"], responses: ["View Responses|https://docs.google.com/spreadsheets/d/1WBHoVefTMjj_FgMZeS1q5P0OTVPsXjRQgK9w4U3A2NY/edit?usp=sharing"] },
    { no: 7, topic: "Research Types", forms: [], responses: [] },
    { no: 8, topic: "User Interviews", forms: [], responses: [] },
    { no: 9, topic: "Surveys & Questionnaires", forms: ["Freshers Party Invitation Form|https://forms.gle/4gEpyd1sXYQhheuw7", "Campus Cafeteria Experience Feedback Survey|https://forms.gle/VAJTsoga68cVEeu8A"], responses: ["View Responses (a)|https://docs.google.com/spreadsheets/d/1Bq5_o56eUcCQSTNRynPYp23bBg4UllIjmATeqKAMXng/edit?usp=sharing", "View Responses (b)|https://docs.google.com/spreadsheets/d/1eilU844_eJkafO7xHR1237w34B2NKjv8fpMnYeLwejA/edit?usp=sharing"] },
    { no: 10, topic: "Competitor Analysis", forms: [], responses: [] },
    { no: 11, topic: "Creating User Personas", forms: ["User Personas Figma Project|https://forms.gle/x9k9MNy5PE15yj76A"], responses: ["View Responses|https://docs.google.com/spreadsheets/d/1rfLOQB75xhpQd2wwrL5UTirIQpI6UflUyQqY3iNtjwI/edit?resourcekey=&gid=992161981#gid=992161981"] },
    { no: 12, topic: "Customer Journey Mapping", forms: ["Customer Journey Mapping Project|https://forms.gle/SCoj6VFdyg8ebNpV7"], responses: ["View Responses|https://docs.google.com/spreadsheets/d/1LKTbFLzUvrjSIPdd7lY_sk2jjyOnSseQjcTtKqr2_fE/edit?usp=sharing"] },
    { no: 13, topic: "Introduction to Information Architecture", forms: ["Information Architecture Project Link|https://forms.gle/cubKmkyZZ9qHbNEe6"], responses: ["View Responses|https://docs.google.com/spreadsheets/d/1EWc3SIh1susmRJbaOfUleQ1yn8-O1IXYrNS6tjEmzWs/edit?usp=sharing"] },
    { no: 14, topic: "Organization Systems in IA", forms: [], responses: [] },
    { no: 15, topic: "Site Maps", forms: [], responses: [] },
    { no: 16, topic: "Card Sorting", forms: [], responses: [] },
    { no: 17, topic: "User Flows & Task Flows", forms: [], responses: [] },
    { no: 18, topic: "IA Hands-On Mini Project", forms: [], responses: [], important: true },
    { no: 19, topic: "Paper Prototyping", forms: [], responses: [] },
    { no: 20, topic: "Low-fidelity Wireframes", forms: [], responses: [] },
    { no: 21, topic: "High-fidelity Wireframes", forms: [], responses: [] },
    { no: 22, topic: "Prototype in Figma", forms: [], responses: [] },
    { no: 23, topic: "Responsive Wireframes", forms: [], responses: [] },
    { no: 24, topic: "Wireframe Review Session", forms: [], responses: [] },
    { no: 25, topic: "Visual Hierarchy", forms: [], responses: [] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050018] to-black text-white p-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] via-[#6D00FF] to-[#FF00AA] drop-shadow-lg">
            BTech / BCA
          </h1>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rows.map((row) => (
            <motion.div
              key={row.no}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-4 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(0,198,255,0.4)] transition-all"
            >
              <h2 className={`text-center text-lg md:text-xl font-extrabold ${row.important ? "text-rose-400" : "text-white"} drop-shadow-sm`}>
                {row.topic}
              </h2>

              {row.assignment && (
                <a
                  href={row.assignment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-lg font-semibold ${styles.staticBtn}`}
                >
                  View Assignment
                </a>
              )}

              {row.forms.length > 0 &&
                row.forms.map((f, idx) => {
                  const [label, url] = f.split("|");
                  return (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.glowBtn} w-full text-center py-3 rounded-lg font-semibold`}
                      style={{ animationDelay: `${idx * 0.3}s` }}
                    >
                      {label}
                    </a>
                  );
                })}

              {row.responses.length > 0 &&
                row.responses.map((r, idx) => {
                  const [label, url] = r.split("|");
                  return (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.glowBtn} w-full text-center py-3 rounded-lg font-semibold`}
                      style={{ animationDelay: `${idx * 0.5}s` }}
                    >
                      {label}
                    </a>
                  );
                })}
            </motion.div>
          ))}
        </motion.section>

        <footer className="mt-10 text-center text-gray-400 text-sm">
          © 2025 Apex University | Designed for all devices
        </footer>
      </div>
    </div>
  );
}
