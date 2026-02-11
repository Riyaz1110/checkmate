import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    
    <div style={styles.page}>
      {/* Decorative Gradient Overlay */}
      <div style={styles.gradientOverlay}></div>
      
      {/* Header Section with Glassmorphism and Shadow */}
      <div style={styles.header}>
      <h1 style={styles.labTitle}>
        <span style={styles.mainTitle}>
          Smart Neurocognitive Knowledge and Data Intelligence
        </span>
        <br />
        <span style={styles.subTitle}>
          Research Lab – SNKDIR
        </span>
      </h1>
    </div>


      {/* Introduction Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Introduction</h2>
        <p style={styles.introText}>
          Welcome to Laboratory <i>"Smart Neurocognitive Knowledge and Data Intelligence Research Lab"</i> led by Dr. Neelakandan S in the Department of Computer Science Engineering at R.M.K. Engineering College, Chennai, India.
        </p>
        <p style={styles.sectionText}>
          The <b>Smart Neurocognitive Knowledge and Data Intelligence Research Lab (SNKDIR)</b> at RMK Engineering College is a multidisciplinary research initiative focused on exploring the frontiers of intelligent systems, cognitive computing, and data-driven innovations. Our lab brings together a vibrant community of undergraduate students, postgraduate scholars, and research professionals working collaboratively to address real-world challenges through smart, data-centric approaches.
        </p>
        <p style={styles.sectionText}>
          At SNKDIR, we aim to bridge the gap between neuroscience-inspired models, artificial intelligence, and data intelligence. Our research spans across diverse domains including machine learning, brain-computer interfacing, cognitive computing, natural language processing, and data analytics. By integrating neurocognitive principles with modern AI techniques, we aspire to build intelligent systems that learn, adapt, and evolve.
        </p>
        <p style={styles.sectionText}>
          We foster a collaborative and inclusive environment that encourages innovation, critical thinking, and hands-on problem solving. Our lab not only focuses on academic excellence but also on developing practical solutions with societal impact, nurturing future-ready technologists and researchers.
        </p>
      </div>

      {/* Focus Section with Card Effect and Animation */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Focus</h2>
        <p style={styles.sectionText}>
          The <b>Smart Neurocognitive Knowledge and Data Intelligence Research Lab (SNKDIR)</b> at RMK Engineering College is dedicated to advancing research at the intersection of cognitive science, artificial intelligence, and data intelligence.
        </p>
        <ul style={styles.focusList}>
          {focusItems.map((item, idx) => (
            <li
              key={item.title}
              style={{
                ...styles.focusItem,
                animationDelay: `${idx * 0.1}s`
              }}
            >
              <span style={styles.focusIcon}>{item.icon}</span>
              <b>{item.title}:</b> {item.desc}
            </li>
          ))}
        </ul>
        <p style={styles.sectionText}>
          Our lab serves as a collaborative research hub encouraging innovation, critical thinking, and problem-solving through hands-on projects, guided mentorship, and cross-disciplinary learning.
        </p>
      </div>
      {/* Navigation Section */}
<div style={styles.navSection}>
  <div style={styles.navCard} onClick={() => navigate("/people")}>
    <div style={styles.navIcon}>👥</div>
    <h3 style={styles.navTitle}>Lab Members</h3>
    <p style={styles.navDesc}>Meet our researchers & scholars</p>
  </div>

  <div style={styles.navCard} onClick={() => navigate("/projects")}>
    <div style={styles.navIcon}>🚀</div>
    <h3 style={styles.navTitle}>Projects</h3>
    <p style={styles.navDesc}>Explore innovative research works</p>
  </div>

  <div style={styles.navCard} onClick={() => navigate("/news")}>
    <div style={styles.navIcon}>📰</div>
    <h3 style={styles.navTitle}>News</h3>
    <p style={styles.navDesc}>Latest updates & achievements</p>
  </div>
</div>

    </div>
  );
}

const focusItems = [
  {
    icon: "🧠",
    title: "Neurocognitive Computing",
    desc: "Designing models inspired by the brain’s neural architecture to enhance learning, memory, and reasoning in machines."
  },
  {
    icon: "📊",
    title: "Data-Driven Intelligence",
    desc: "Developing intelligent algorithms and data-centric approaches for pattern recognition, prediction, and automated decision-making."
  },
  {
    icon: "🤖",
    title: "Human-Centered AI",
    desc: "Exploring how machines can learn from and adapt to human behavior for improved interaction and assistive technologies."
  },
  {
    icon: "🗂️",
    title: "Knowledge Engineering",
    desc: "Structuring and extracting actionable knowledge from large, unstructured datasets using semantic technologies and knowledge graphs."
  },
  {
    icon: "🏥",
    title: "Smart Systems & Applications",
    desc: "Prototyping AI solutions in domains like healthcare, education, neuro informatics, and smart environments."
  }
];

const styles = {
  
  page: {
    position: "relative",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #dde5f1 0%, #b7c2da 50%, #d5ecec 100%)",
    fontFamily: "Segoe UI, Arial, sans-serif",
    color: "#222",
    boxSizing: "border-box",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
//   header: {
//   width: "100%",
//   padding: "60px 20px 40px",
//   textAlign: "center",
//   background: "linear-gradient(135deg,#f8fafc,#e2e8f0)",
//   borderBottom: "1px solid #e5e7eb",
//   boxShadow: "0 6px 24px rgba(0,0,0,0.06)"
// },


mainTitle: {
  fontSize: "3.2rem",
  fontWeight: 900,
  color: "#0f172a",
  letterSpacing: "0.04em"
},

subTitle: {
  fontSize: "1.7rem",
  fontWeight: 700,
  color: "#2563eb",
  letterSpacing: "0.12em",
  textTransform: "uppercase"
},


  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    background: "radial-gradient(circle at 75% 18%, #adbcce40 0%, #e0f7fa 65%, #b7c2da00 100%)",
    zIndex: 0
  },

  header: {
    width: "100%",
    background: "rgba(62,87,125,0.32)",
    backdropFilter: "blur(8px)",
    padding: "42px 20px 26px 20px",
    textAlign: "center",
    borderRadius: "0 0 22px 22px",
    boxShadow: "0 7px 32px rgba(60,80,160,0.12)"
  },

  labTitle: {
    fontSize: "2.8rem",
    fontWeight: 800,
    lineHeight: 1.3,
    textAlign: "center",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  greenText: {
    color: "#22c55e",
    letterSpacing: ".04em"
  },

  blueText: {
    color: "#388fcf"
  },

  section: {
    background: "rgba(255,255,255,0.98)",
    margin: "38px auto",
    padding: "40px 50px",
    borderRadius: "22px",
    boxShadow: "0 7px 32px rgba(48,60,120,0.10)",
    maxWidth: "900px",
    width: "92%",
    position: "relative",
    zIndex: 1
  },

  sectionTitle: {
    color: "#476d92",
    fontSize: "2.1rem",
    fontWeight: 700,
    marginBottom: "22px",
    textAlign: "center"
  },

  introText: {
    fontSize: "1.18rem",
    marginBottom: "18px",
    textAlign: "justify",
    lineHeight: 1.8
  },

  sectionText: {
    fontSize: "1.1rem",
    margin: "14px 0",
    textAlign: "justify",
    lineHeight: 1.8
  },

  focusList: {
    fontSize: "1.08rem",
    paddingLeft: 0,
    marginBottom: "25px",
    listStyle: "none"
  },

  focusItem: {
    display: "flex",
    alignItems: "start",
    gap: "13px",
    background: "linear-gradient(90deg, #f5fafd 0%, #e9f5f6 100%)",
    padding: "14px 18px",
    marginBottom: "14px",
    borderRadius: "16px",
    boxShadow: "0 3px 8px #c5dbe8",
    borderLeft: "5px solid #adcaf2",
    textAlign: "justify",
    lineHeight: 1.7
  },
  navSection: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
  width: "92%",
  maxWidth: "1000px",
  margin: "50px auto",
  zIndex: 1
},

navCard: {
  background: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(10px)",
  padding: "30px 25px",
  borderRadius: "20px",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  border: "1px solid rgba(255,255,255,0.6)"
},

navIcon: {
  fontSize: "2.5rem",
  marginBottom: "10px"
},

navTitle: {
  fontSize: "1.3rem",
  fontWeight: "700",
  marginBottom: "6px",
  color: "#2b4a6f"
},

navDesc: {
  fontSize: "0.95rem",
  color: "#555"
},


  focusIcon: {
    fontSize: "1.72rem",
    flexShrink: 0,
    marginTop: "3px"
  }
};

