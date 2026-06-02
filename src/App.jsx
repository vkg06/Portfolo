import { useState, useEffect, useRef, useCallback } from "react";
import profileImg from "./assets/bg1.webp";
import GithubIcon from "./assets/github.png";
import LinkedInIcon from "./assets/linkedin.png";
import InstagramIcon from "./assets/ig.png";
import Icon from "./assets/icon.jpg";
/* ─── DATA ─────────────────────────────────────────── */
const SKILLS_DATA = [
  // Programming Languages
  { name: "C", level: 85, cat: "Programming" },
  { name: "C++", level: 88, cat: "Programming" },
  { name: "Python", level: 85, cat: "Programming" },
  { name: "JavaScript", level: 82, cat: "Programming" },

  // Core Concepts
  { name: "OOP", level: 85, cat: "Core CS" },
  { name: "Data Structures & Algorithms", level: 85, cat: "Core CS" },
  { name: "Machine Learning", level: 75, cat: "Core CS" },
  { name: "Digital Signal Processing", level: 75, cat: "Core CS" },

  // Backend
  { name: "Node.js", level: 80, cat: "Backend" },
  { name: "Express.js", level: 78, cat: "Backend" },
  { name: "REST APIs", level: 82, cat: "Backend" },

  // Embedded Systems
  { name: "Arduino", level: 90, cat: "Embedded" },
  { name: "ESP32", level: 85, cat: "Embedded" },
  { name: "STM32", level: 75, cat: "Embedded" },
  { name: "Interrupts", level: 80, cat: "Embedded" },
  { name: "Optical Sensor Interfacing", level: 80, cat: "Embedded" },

  // ML & AI
  { name: "scikit-learn", level: 80, cat: "ML & AI" },
  { name: "OpenCV", level: 82, cat: "ML & AI" },
  { name: "SVM", level: 75, cat: "ML & AI" },
  { name: "Random Forest", level: 75, cat: "ML & AI" },
  { name: "FFT Feature Extraction", level: 70, cat: "ML & AI" },
  { name: "OpenAI API", level: 75, cat: "ML & AI" },
  { name: "LLM Integration", level: 72, cat: "ML & AI" },
  { name: "Prompt Engineering", level: 80, cat: "ML & AI" },

  // Databases
  { name: "SQL", level: 80, cat: "Database" },
  { name: "PostgreSQL", level: 75, cat: "Database" },
  { name: "MongoDB", level: 82, cat: "Database" },
  { name: "Redis", level: 78, cat: "Database" },

  // Tools
  { name: "Git", level: 85, cat: "Tools" },
  { name: "Linux", level: 75, cat: "Tools" },
  { name: "Docker", level: 70, cat: "Tools" },
  { name: "Arduino IDE", level: 85, cat: "Tools" },
  { name: "MATLAB / Simulink", level: 75, cat: "Tools" },
  { name: "Postman", level: 80, cat: "Tools" },
  { name: "MS Excel", level: 80, cat: "Tools" },


  // Soft Skills
  { name: "Communication", level: 85, cat: "Soft Skills" },
  { name: "Team Collaboration", level: 90, cat: "Soft Skills" },
  { name: "Analytical Thinking", level: 88, cat: "Soft Skills" },
];

const TIMELINE = [
  { year: "2022", title: "Started B.Tech ECE", org: "ABES Engineering College, Ghaziabad", desc: "Began Electronics & Communication Engineering with a focus on embedded systems and IoT.", icon: "🎓" },
  { year: "2023", title: "Frontend Cert — Great Learning", org: "Great Learning Platform", desc: "Completed certified courses in Front End Development and CSS. Built first responsive portfolio.", icon: "📜" },
  { year: "2023", title: "IoT & Embedded Systems Training", org: "ABES AICTE IDEA Lab", desc: "Hands-on training designing fire alarms, parking sensors, and microcontroller automation projects.", icon: "🔧" },
  { year: "2024", title: "ROS Workshop", org: "INurture Foundation", desc: "Participated in robotics and wireless systems workshop, expanding real-time application skills.", icon: "🤖" },
  { year: "2025", title: "Full Portfolio Launch", org: "Self-initiated", desc: "Launched professional developer portfolio showcasing CSE and ECE projects to global audience.", icon: "🚀" },
  { year: "2026", title: "Quality Assurance Engineer", org: "Garg Associates Pvt. Ltd., Ghaziabad", desc: "Validating 500+ ERP records for wire & cable specs, designing test plans, maintaining BOM data, and preparing LQC & FAI reports while collaborating across engineering and production teams.", icon: "🏭" },
];


const EXPERIENCE = [
  {
    role: "Quality Assurance Engineer",
    company: "Garg Associates Pvt. Ltd.",
    location: "Ghaziabad, UP",
    period: "Jan 2026 – Present",
    type: "Full-time",
    icon: "🏭",
    metrics: [
      { value: "500+", label: "ERP Records Validated" },
      { value: "100%", label: "Data Compliance" },
      { value: "30+",  label: "Reports Prepared" },
    ],
    tags: ["ERP Systems", "Test Planning", "BOM Management",
           "FAI Reports", "LQC", "ECN", "Quality Assurance"],
    points: [
      "Validated and managed 500+ ERP records for wire & cable specs, ensuring data integrity and compliance.",
      "Designed structured test plans and executed validation workflows to identify defects and improve reliability.",
      "Maintained BOM data and supported ECN implementation through controlled configuration management.",
      "Prepared LQC and FAI reports while collaborating with engineering, production, and quality teams.",
    ],
  },
];



const CSE_PROJECTS = [
  {
    title: "To-Do App",
    desc: "Built a task management application with task creation, editing, and priority tagging. Implemented drag-and-drop reordering and localStorage persistence to manage 500+ tasks seamlessly across sessions.",
    link: "https://github.com/vkg06",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: "Portfolio Website",
    desc: "Developed a fully responsive portfolio website showcasing projects, skills, and achievements. Added smooth scrolling, dark mode support, and performance optimizations for faster page loads.",
    link: "https://github.com/vkg06",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: "Tic-Tac-Toe",
    desc: "Created an interactive two-player game with real-time win detection and score tracking. Enhanced user experience through animations, responsive design, and intuitive gameplay mechanics.",
    link: "https://github.com/vkg06",
    tags: ["JS", "CSS"]
  },
  {
    title: "E-commerce Clone",
    desc: "Designed a shopping platform featuring 50+ products with category-based filtering and cart management. Built a responsive checkout flow to simulate a real-world online shopping experience.",
    link: "https://github.com/vkg06",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: "Finance Backend System",
  desc: "Designed and developed a secure backend platform for financial transaction processing using Node.js and MongoDB. Implemented JWT authentication, RBAC, Redis caching, and rate limiting. Optimized database queries and caching strategies to improve API performance and scalability under high load.",
  link: "https://github.com/vkg06",
  tags: ["Node.js", "Express", "MongoDB", "Redis"]
  }
];

const ECE_PROJECTS = [
  {
    title: "Fire Alarm System",
    desc: "Engineered an Arduino-based fire detection system using IR sensors for continuous monitoring. The system detects flames within seconds and triggers instant alarms to improve safety and response time.",
    link: "https://github.com/vkg06",
    tags: ["Arduino", "IoT", "C++"]
  },
  {
    title: "Parking Module",
    desc: "Developed a smart parking solution using ultrasonic sensors and microcontroller-based processing. The system monitors 20+ parking slots in real time and provides accurate occupancy detection.",
    link: "https://github.com/vkg06",
    tags: ["Arduino", "Sensors"]
  },
  {
    title: "Driver Anti-Sleep Device",
    desc: "Built a drowsiness detection system using computer vision and eye-tracking techniques. Achieved over 90% detection accuracy and generated immediate alerts to help prevent accidents.",
    link: "https://github.com/vkg06",
    tags: ["IoT", "Python", "CV"]
  },
  {
    title: "IoT Traffic Controller",
    desc: "Implemented an adaptive traffic management system powered by IoT and cloud connectivity. Monitors traffic density across multiple lanes and dynamically optimizes signal timing for smoother flow.",
    link: "https://github.com/vkg06",
    tags: ["IoT", "Cloud", "Arduino"]
  },
    {
  title: "Biometric Attendance System",
  desc: "Developed an end-to-end attendance management system using face recognition and fingerprint authentication. Achieved 97% face recognition accuracy across 50 enrolled users and integrated Arduino-based biometric hardware. Automated attendance tracking for 30+ students while maintaining reliable data storage and reporting.",
  link: "https://github.com/vkg06",
  tags: ["Python", "OpenCV", "Arduino", "ML"]
}
  
];

/*const CSE_PROJECTS = [
  { title: "To-Do App", desc: "Task manager with localStorage persistence, drag-to-reorder, and priority tagging.", link: "https://github.com/vkg06", tags: ["HTML", "CSS", "JS"] },
  { title: "Portfolio Website", desc: "Fully responsive personal portfolio with smooth scroll and dark theme.", link: "https://github.com/vkg06", tags: ["HTML", "CSS", "JS"] },
  { title: "Tic-Tac-Toe", desc: "Two-player game with win detection, score tracking, and animated transitions.", link: "https://github.com/vkg06", tags: ["JS", "CSS"] },
  { title: "E-commerce Clone", desc: "Mock shopping site with cart functionality, product filtering, and checkout UI.", link: "https://github.com/vkg06", tags: ["HTML", "CSS", "JS"] },
];"""

"""const ECE_PROJECTS = [
  { title: "Fire Alarm System", desc: "IR sensor-based flame detection with real-time alarm for prompt hazard alerts.", link: "#", tags: ["Arduino", "IoT", "C++"] },
  { title: "Parking Module", desc: "Ultrasonic sensor system for automated slot detection with MCU-based processing.", link: "#", tags: ["Arduino", "Sensors"] },
  { title: "Driver Anti-Sleep Device", desc: "Drowsiness detection via eye-tracking with alarm/vibration safety alerts.", link: "#", tags: ["IoT", "Python", "CV"] },
  { title: "IoT Traffic Controller", desc: "Cloud-connected adaptive traffic signal monitoring system.", link: "#", tags: ["IoT", "Cloud", "Arduino"] },
];*/







const STATS = [
  { label: "Projects Built", value: 8, suffix: "+" },
  { label: "Certificates", value: 4, suffix: "" },
  { label: "Technologies", value: 12, suffix: "+" },
  { label: "GitHub Repos", value: 10, suffix: "+" },
];
const NAV = ["Home", "About", "Skills", "Timeline", "Experience", "Projects", "Contact"];


/* ─── HOOKS ─────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useCounter(target, inView, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return count;
}

/* ─── PARTICLES ─────────────────────────────────────── */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; const ctx = c.getContext("2d");
    let W = c.width = window.innerWidth, H = c.height = window.innerHeight;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.4,
      dx: (Math.random() - .5) * .25, dy: (Math.random() - .5) * .25,
      o: Math.random() * .35 + .08,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,120,${p.o})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(56,189,120,${.06 * (1 - d / 110)})`; ctx.lineWidth = .5; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

/* ─── CURSOR SPOTLIGHT ──────────────────────────────── */
function CursorSpotlight() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) ref.current.style.cssText = `left:${e.clientX}px;top:${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div ref={ref} style={{
      position: "fixed", width: 400, height: 400, borderRadius: "50%", pointerEvents: "none", zIndex: 0,
      transform: "translate(-50%,-50%)",
      background: "radial-gradient(circle, rgba(56,189,120,0.055) 0%, transparent 70%)",
      transition: "left .08s ease, top .08s ease",
    }} />
  );
}

/* ─── SCROLL PROGRESS BAR ───────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const h = () => {
      const el = document.documentElement;
      setPct((window.scrollY / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, height: 3, width: `${pct}%`, background: "linear-gradient(90deg,#38bd78,#a3e9c2)", transition: "width .1s linear", borderRadius: "0 2px 2px 0" }} />
  );
}

/* ─── BACK TO TOP ───────────────────────────────────── */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
      position: "fixed", bottom: 32, right: 32, zIndex: 999,
      width: 48, height: 48, borderRadius: 14, border: "1.5px solid rgba(56,189,120,0.4)",
      background: "rgba(10,15,12,0.85)", backdropFilter: "blur(16px)",
      color: "#38bd78", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 8px 32px rgba(56,189,120,0.2)", transition: "transform .2s, box-shadow .2s",
    }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(56,189,120,0.35)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(56,189,120,0.2)"; }}>
      ↑
    </button>
  );
}

/* ─── LOADING SCREEN ────────────────────────────────── */
function LoadingScreen({ done }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPct(p => { if (p >= 100) { clearInterval(t); return 100; } return p + 4; }), 30);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{
      position: "fixed", inset: 0, background: "#050a07", zIndex: 10000, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 28,
      opacity: done ? 0 : 1, pointerEvents: done ? "none" : "all",
      transition: "opacity .6s ease",
    }}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 36, fontWeight: 800, color: "#fff", letterSpacing: 2 }}>
        VK<span style={{ color: "#38bd78" }}>.</span>
      </div>
      <div style={{ width: 200, height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#38bd78,#a3e9c2)", transition: "width .05s linear", borderRadius: 2 }} />
      </div>
      <span style={{ fontFamily: "'Space Grotesk',sans-serif", color: "rgba(255,255,255,0.3)", fontSize: 13, letterSpacing: 3 }}>
        {pct < 100 ? "LOADING..." : "READY"}
      </span>
    </div>
  );
}

/* ─── NAVBAR ────────────────────────────────────────── */
function NavBar({ active, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const bg = theme === "dark"
    ? (scrolled ? "rgba(5,10,7,0.92)" : "transparent")
    : (scrolled ? "rgba(240,248,243,0.95)" : "transparent");
  const border = scrolled ? `1px solid rgba(56,189,120,${theme === "dark" ? ".12" : ".2"})` : "none";
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000, background: bg, backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: border, transition: "all .4s ease", padding: "0 5vw", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <a href="#home" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: theme === "dark" ? "#fff" : "#0a2017", textDecoration: "none", letterSpacing: 2 }}>
          VK<span style={{ color: "#38bd78" }}>.</span>
        </a>
        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }} className="nav-ul">
          {NAV.map(n => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} style={{
                color: active === n.toLowerCase() ? "#38bd78" : (theme === "dark" ? "rgba(255,255,255,.65)" : "rgba(10,32,23,.7)"),
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 13.5,
                textDecoration: "none", letterSpacing: 1.2, textTransform: "uppercase",
                paddingBottom: 4, borderBottom: active === n.toLowerCase() ? "2px solid #38bd78" : "2px solid transparent",
                transition: "color .3s, border-color .3s",
              }}>{n}</a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button onClick={() => setTheme(t => t === "dark" ? "light" : "dark")} style={{ background: "rgba(56,189,120,.1)", border: "1px solid rgba(56,189,120,.25)", borderRadius: 10, color: "#38bd78", width: 38, height: 38, cursor: "pointer", fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s" }} title="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <a href="#" download onClick={e => e.preventDefault()} style={{ padding: "9px 20px", background: "#38bd78", color: "#050a07", borderRadius: 30, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13, textDecoration: "none", letterSpacing: .5, transition: "all .2s", whiteSpace: "nowrap", boxShadow: "0 0 24px rgba(56,189,120,.3)" }} className="resume-btn"
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 40px rgba(56,189,120,.55)"; e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 24px rgba(56,189,120,.3)"; e.currentTarget.style.transform = "scale(1)"; }}>
            ↓ Resume
          </a>
          <button className="ham-btn" onClick={() => setMenuOpen(o => !o)} style={{ display: "none", background: "none", border: "none", color: theme === "dark" ? "#fff" : "#0a2017", fontSize: 24, cursor: "pointer" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div style={{ position: "fixed", top: 70, left: 0, width: "100%", background: theme === "dark" ? "rgba(5,10,7,0.97)" : "rgba(240,248,243,0.98)", backdropFilter: "blur(20px)", zIndex: 998, padding: "24px 5vw 32px", borderBottom: "1px solid rgba(56,189,120,.1)" }}>
          {NAV.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "14px 0", color: theme === "dark" ? "rgba(255,255,255,.75)" : "#0a2017", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 16, textDecoration: "none", borderBottom: "1px solid rgba(56,189,120,.07)", letterSpacing: 1, textTransform: "uppercase" }}>{n}</a>
          ))}
        </div>
      )}
      <style>{`
        @media(max-width:900px){.nav-ul{display:none!important}.ham-btn{display:flex!important}.resume-btn{display:none!important}}
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
    </>
  );
}

/* ─── HERO ──────────────────────────────────────────── */
function Hero({ theme }) {
  const words = ["QA Engineer.", "ECE Engineer.", "IoT Enthusiast.", "Problem Solver."];
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const w = words[wi]; let t;
    if (!del && ci < w.length) t = setTimeout(() => { setTyped(w.slice(0, ci + 1)); setCi(c => c + 1); }, 75);
    else if (!del && ci === w.length) t = setTimeout(() => setDel(true), 1800);
    else if (del && ci > 0) t = setTimeout(() => { setTyped(w.slice(0, ci - 1)); setCi(c => c - 1); }, 42);
    else { setDel(false); setWi(i => (i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [ci, del, wi]);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "0 6vw", position: "relative", zIndex: 1,
      justifyContent: "space-between", gap: 40,
    }}>

      {/* ── LEFT: text ── */}
      <div style={{ maxWidth: 580, flex: 1 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22, animation: "vfadeUp .7s .1s both" }}>
          <div style={{ width: 40, height: 2, background: "#38bd78", borderRadius: 1 }} />
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", color: "#38bd78", fontSize: 12, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>
            QA Engineer & ECE Developer
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(50px,8.5vw,100px)", fontWeight: 800,
          color: theme === "dark" ? "#fff" : "#0a2017",
          lineHeight: 1.02, margin: "0 0 12px", animation: "vfadeUp .7s .2s both",
        }}>
          Vikas<br />
          <span style={{ color: "#38bd78" }}>Gupta</span>
        </h1>

        <div style={{ height: 52, display: "flex", alignItems: "center", marginBottom: 24, animation: "vfadeUp .7s .35s both" }}>
          <span style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: "clamp(18px,3vw,28px)",
            color: theme === "dark" ? "rgba(255,255,255,.5)" : "rgba(10,32,23,.5)",
            fontWeight: 400,
          }}>
            {typed}<span style={{ color: "#38bd78", animation: "blink 1s step-end infinite" }}>|</span>
          </span>
        </div>

        <p style={{
          color: theme === "dark" ? "rgba(255,255,255,.4)" : "rgba(10,32,23,.5)",
          fontSize: 16, lineHeight: 1.9, maxWidth: 500, marginBottom: 40,
          animation: "vfadeUp .7s .5s both", fontFamily: "'Space Grotesk',sans-serif",
        }}>
          B.Tech ECE student at ABES Engineering College & QA Engineer at
          Garg Associates. Bridging software with hardware — from IoT systems
          to ERP validation.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "vfadeUp .7s .65s both" }}>
          <a href="#projects" style={{
            padding: "14px 36px", background: "#38bd78", color: "#050a07",
            borderRadius: 50, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700,
            fontSize: 14, textDecoration: "none", letterSpacing: .8,
            boxShadow: "0 0 32px rgba(56,189,120,.4)", transition: "all .22s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 0 52px rgba(56,189,120,.6)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(56,189,120,.4)"; }}>
            Explore Work ↓
          </a>
          <a href="#contact" style={{
            padding: "14px 36px", background: "transparent", color: "#38bd78",
            borderRadius: 50, border: "1.5px solid rgba(56,189,120,.5)",
            fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14,
            textDecoration: "none", letterSpacing: .8, transition: "all .22s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,120,.08)"; e.currentTarget.style.borderColor = "#38bd78"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(56,189,120,.5)"; }}>
            Hire Me →
          </a>
        </div>

        {/* Social icons — below buttons, no overlap */}
        <div style={{ display: "flex", gap: 12, marginTop: 36, animation: "vfadeUp .7s .8s both" }}>
          {[
            { icon: GithubIcon, href: "https://github.com/vkg06", label: "GitHub" },
            { icon: LinkedInIcon, href: "https://www.linkedin.com/in/vikas-gupta-2078a524b/", label: "LinkedIn" },
            { icon: InstagramIcon, href: "#", label: "Instagram" },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} title={label} style={{
              width: 42, height: 42, borderRadius: 12,
              border: "1px solid rgba(56,189,120,.2)",
              background: "rgba(56,189,120,.05)",
              display: "flex", alignItems: "center", justifyContent: "center",
              textDecoration: "none", transition: "all .2s", padding: 9,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#38bd78"; e.currentTarget.style.background = "rgba(56,189,120,.12)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(56,189,120,.2)"; e.currentTarget.style.background = "rgba(56,189,120,.05)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <img src={icon} alt={label} style={{
                width: "100%", height: "100%", objectFit: "contain",
                filter: theme === "dark" ? "invert(1) brightness(0.65)" : "invert(0) brightness(0.3)",
              }} />
            </a>
          ))}
        </div>

      </div>

      {/* ── RIGHT: profile image ── */}
      <div className="hero-img-wrap" style={{ animation: "vfadeUp .9s .5s both", position: "relative", flexShrink: 0 }}>

        {/* spinning dashed ring */}
        <div style={{
          position: "absolute", inset: -16, pointerEvents: "none",
          borderRadius: "38% 62% 55% 45% / 45% 45% 55% 55%",
          border: "2px dashed rgba(56,189,120,.3)",
          animation: "spinRing 14s linear infinite",
        }} />

        {/* green glow behind */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(circle at 60% 40%, rgba(56,189,120,.2) 0%, transparent 70%)",
          borderRadius: "38% 62% 55% 45% / 45% 45% 55% 55%",
          filter: "blur(20px)",
        }} />

        {/* image frame */}
        <div style={{
          width: 320, height: 390,
          borderRadius: "38% 62% 55% 45% / 45% 45% 55% 55%",
          overflow: "hidden",
          border: "2px solid rgba(56,189,120,.3)",
          boxShadow: "0 0 60px rgba(56,189,120,.15), inset 0 0 40px rgba(56,189,120,.05)",
          position: "relative", zIndex: 1,
        }}>
          <img src={Icon} alt="Vikas Gupta" style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center top", display: "block",
          }} />
        </div>

        {/* floating badge — top left */}
        <div style={{
          position: "absolute", top: 28, left: -50, zIndex: 2,
          background: theme === "dark" ? "rgba(5,10,7,.88)" : "rgba(240,248,243,.95)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(56,189,120,.25)", borderRadius: 14,
          padding: "10px 16px", animation: "float 3s ease-in-out infinite",
          boxShadow: "0 8px 28px rgba(0,0,0,.2)",
        }}>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 10, color: "#38bd78", fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>QA Engineer</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 12, color: theme === "dark" ? "rgba(255,255,255,.75)" : "#0a2017", marginTop: 3, fontWeight: 500 }}>Garg Associates</div>
        </div>

        {/* floating badge — bottom right */}
        <div style={{
          position: "absolute", bottom: 36, right: -44, zIndex: 2,
          background: "#38bd78", borderRadius: 14,
          padding: "10px 18px",
          boxShadow: "0 8px 32px rgba(56,189,120,.5)",
          animation: "float 3s 1.5s ease-in-out infinite",
        }}>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: "#050a07", fontWeight: 700, letterSpacing: 1, whiteSpace: "nowrap" }}>Open to Work ✓</div>
        </div>

      </div>

      <style>{`
        @keyframes vfadeUp { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes blink { 50% { opacity:0 } }
        @keyframes spinRing { to { transform:rotate(360deg) } }
        @keyframes float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-8px) } }
        @media(max-width:900px) { .hero-img-wrap { display:none !important } }
      `}</style>
    </section>
  );
}

/* ─── ABOUT ─────────────────────────────────────────── */
function About({ theme }) {
  const [ref, inView] = useInView();
  const tc = theme === "dark";
  return (
    <section id="about" ref={ref} style={{ padding: "120px 6vw", position: "relative", zIndex: 1 }}>
      <SectionTitle theme={theme}>About Me</SectionTitle>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }} className="about-grid">
        <div style={{ transform: inView ? "translateX(0)" : "translateX(-40px)", opacity: inView ? 1 : 0, transition: "all .8s ease" }}>
          <div style={{ position: "relative", width: 280, height: 280, margin: "0 auto" }}>
            <div style={{width:"100%",height:"100%",borderRadius:"30px 12px 30px 12px",background:"linear-gradient(135deg,rgba(56,189,120,.15),rgba(56,189,120,.03))",border:"1px solid rgba(56,189,120,.2)",overflow:"hidden"}}><img src={profileImg} alt="Vikas Gupta" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"30px 12px 30px 12px"}}/></div>
            
          </div>
        </div>
        <div style={{ transform: inView ? "translateX(0)" : "translateX(40px)", opacity: inView ? 1 : 0, transition: "all .8s .15s ease" }}>
  <p style={{ color: tc ? "rgba(255,255,255,.7)" : "rgba(10,32,23,.7)", fontSize: 16, lineHeight: 1.9, marginBottom: 28, fontFamily: "'Space Grotesk',sans-serif" }}>
    Hi, I'm <span style={{ color: "#38bd78", fontWeight: 600 }}>Vikas Gupta</span> — a final-year Electronics & Communication Engineering student passionate about software engineering, embedded systems, artificial intelligence, and intelligent automation. I specialize in building end-to-end solutions that combine modern software development with real-world hardware integration.
  </p>

  <p style={{ color: tc ? "rgba(255,255,255,.5)" : "rgba(10,32,23,.5)", fontSize: 15, lineHeight: 1.9, marginBottom: 36, fontFamily: "'Space Grotesk',sans-serif" }}>
    My expertise spans full-stack web development, machine learning, IoT, and embedded systems, with hands-on experience in technologies such as React, Node.js, Python, C++, Arduino, ESP32, OpenCV, and cloud-based AI tools. I enjoy transforming complex problems into efficient, scalable, and user-centric solutions while continuously exploring emerging technologies.
  </p>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}

/* ─── STATS ─────────────────────────────────────────── */
function StatCard({ label, value, suffix, theme, inView }) {
  const count = useCounter(value, inView);
  return (
    <div style={{
      textAlign: "center", padding: "32px 20px", borderRadius: 20,
      background: theme === "dark" ? "rgba(56,189,120,.05)" : "rgba(56,189,120,.06)",
      border: "1px solid rgba(56,189,120,.15)",
      transition: "all .3s",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(56,189,120,.4)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(56,189,120,.1)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(56,189,120,.15)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 48, fontWeight: 800, color: "#38bd78", lineHeight: 1 }}>{count}{suffix}</div>
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: theme === "dark" ? "rgba(255,255,255,.45)" : "rgba(10,32,23,.5)", marginTop: 8, letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

/* ─── SKILLS ─────────────────────────────────────────── */
function Skills({ theme }) {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState("All");
  const cats = [
  "All",
  "Programming",
  "Core CS",
  "Backend",
  "Embedded",
  "ML & AI",
  "Database",
  "Tools",
  "Soft Skills"
];
  const filtered = filter === "All" ? SKILLS_DATA : SKILLS_DATA.filter(s => s.cat === filter);
  const tc = theme === "dark";
  return (
    <section id="skills" ref={ref} style={{ padding: "120px 6vw", position: "relative", zIndex: 1 }}>
      <SectionTitle theme={theme}>Skills</SectionTitle>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 900, margin: "0 auto 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16 }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ transform: inView ? "translateY(0)" : "translateY(24px)", opacity: inView ? 1 : 0, transition: `all .5s ${i * .1}s ease` }}>
                <StatCard {...s} theme={theme} inView={inView} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              padding: "9px 22px", borderRadius: 50, cursor: "pointer",
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: .5,
              background: filter === c ? "#38bd78" : "transparent",
              color: filter === c ? "#050a07" : (tc ? "rgba(255,255,255,.55)" : "rgba(10,32,23,.55)"),
              border: `1.5px solid ${filter === c ? "#38bd78" : "rgba(56,189,120,.2)"}`,
              transition: "all .25s",
            }}>{c}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
          {filtered.map((s, i) => (
            <div key={s.name} style={{ padding: "20px 24px", borderRadius: 16, background: tc ? "rgba(255,255,255,.03)" : "rgba(10,32,23,.04)", border: "1px solid rgba(56,189,120,.1)", transform: inView ? "translateY(0)" : "translateY(20px)", opacity: inView ? 1 : 0, transition: `all .5s ${i * .08}s ease` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: tc ? "rgba(255,255,255,.85)" : "#0a2017" }}>{s.name}</span>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: "#38bd78", fontWeight: 700 }}>{inView ? s.level : 0}%</span>
              </div>
              <div style={{ height: 7, background: tc ? "rgba(255,255,255,.07)" : "rgba(10,32,23,.1)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: "100%", width: inView ? `${s.level}%` : "0%", background: "linear-gradient(90deg,#38bd78,#a3e9c2)", borderRadius: 4, transition: `width 1.2s ${i * .08 + .2}s cubic-bezier(.17,.67,.41,1.1)` }} />
              </div>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: "rgba(56,189,120,.7)", letterSpacing: 1, textTransform: "uppercase", marginTop: 8, display: "block" }}>{s.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TIMELINE ──────────────────────────────────────── */
function Timeline({ theme }) {
  const [ref, inView] = useInView(0.1);
  const tc = theme === "dark";
  return (
    <section id="timeline" ref={ref} style={{ padding: "120px 6vw", position: "relative", zIndex: 1 }}>
      <SectionTitle theme={theme}>Journey</SectionTitle>
      <div style={{ maxWidth: 750, margin: "0 auto", position: "relative" }}>
        <div style={{ position: "absolute", left: 22, top: 0, bottom: 0, width: 2, background: "rgba(56,189,120,.15)", borderRadius: 1 }} />
        {TIMELINE.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 28, marginBottom: 44, transform: inView ? "translateX(0)" : "translateX(-30px)", opacity: inView ? 1 : 0, transition: `all .6s ${i * .12}s ease` }}>
            <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: "50%", background: tc ? "rgba(56,189,120,.1)" : "rgba(56,189,120,.12)", border: "2px solid rgba(56,189,120,.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, boxShadow: "0 0 20px rgba(56,189,120,.15)", position: "relative", zIndex: 1 }}>
              {item.icon}
            </div>
            <div style={{ flex: 1, paddingTop: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 12, color: "#38bd78", fontWeight: 700, letterSpacing: 1.5, background: "rgba(56,189,120,.1)", padding: "3px 10px", borderRadius: 20 }}>{item.year}</span>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: tc ? "#fff" : "#0a2017", margin: 0 }}>{item.title}</h3>
              </div>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: "#38bd78", margin: "0 0 8px", fontWeight: 500 }}>{item.org}</p>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: tc ? "rgba(255,255,255,.5)" : "rgba(10,32,23,.55)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ───────────────────────────────────── */
function Experience({ theme }) {
  const [ref, inView] = useInView(0.1);
  const tc = theme === "dark";

  return (
    <section id="experience" ref={ref}
      style={{ padding:"120px 6vw", position:"relative", zIndex:1 }}>
      <SectionTitle theme={theme}>Experience</SectionTitle>

      <div style={{ maxWidth:960, margin:"0 auto" }}>
        {EXPERIENCE.map((exp, i) => (
          <div key={exp.role} style={{
            transform: inView ? "translateY(0)" : "translateY(40px)",
            opacity: inView ? 1 : 0,
            transition: `all .7s ${i*.15}s ease`,
            position:"relative",
          }}>

            {/* ── green left glow accent ── */}
            <div style={{
              position:"absolute", left:-2, top:32, bottom:32, width:3,
              background:"linear-gradient(180deg,transparent,#38bd78 30%,#38bd78 70%,transparent)",
              borderRadius:2,
            }} />

            {/* ── main card ── */}
            <div style={{
              marginLeft:20,
              background: tc ? "rgba(255,255,255,.03)" : "rgba(10,32,23,.03)",
              border:"1px solid rgba(56,189,120,.18)",
              borderRadius:28, overflow:"hidden",
              backdropFilter:"blur(24px)",
              boxShadow:"0 0 80px rgba(56,189,120,.07)",
              transition:"box-shadow .3s, border-color .3s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 0 100px rgba(56,189,120,.14)";e.currentTarget.style.borderColor="rgba(56,189,120,.32)";}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 0 80px rgba(56,189,120,.07)";e.currentTarget.style.borderColor="rgba(56,189,120,.18)";}}>

              {/* ── header strip ── */}
              <div style={{
                padding:"28px 36px 24px",
                borderBottom:"1px solid rgba(56,189,120,.1)",
                background:"rgba(56,189,120,.03)",
                display:"flex", justifyContent:"space-between",
                alignItems:"flex-start", flexWrap:"wrap", gap:16,
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:18 }}>
                  {/* icon circle */}
                  <div style={{
                    width:56, height:56, borderRadius:16,
                    background:"rgba(56,189,120,.1)",
                    border:"1.5px solid rgba(56,189,120,.3)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:26, flexShrink:0,
                  }}>{exp.icon}</div>

                  <div>
                    <h3 style={{
                      fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:22,
                      color: tc ? "#fff" : "#0a2017", margin:"0 0 6px",
                    }}>{exp.role}</h3>
                    <div style={{ display:"flex", gap:10, flexWrap:"wrap", alignItems:"center" }}>
                      <span style={{
                        fontFamily:"'Space Grotesk',sans-serif", fontSize:14,
                        color:"#38bd78", fontWeight:600,
                      }}>{exp.company}</span>
                      <span style={{ color:"rgba(56,189,120,.4)", fontSize:12 }}>•</span>
                      <span style={{
                        fontFamily:"'Space Grotesk',sans-serif", fontSize:13,
                        color: tc ? "rgba(255,255,255,.4)" : "rgba(10,32,23,.45)",
                      }}>📍 {exp.location}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                  <span style={{
                    padding:"7px 16px", borderRadius:50,
                    background:"rgba(56,189,120,.12)", color:"#38bd78",
                    fontFamily:"'Space Grotesk',sans-serif", fontSize:12, fontWeight:700,
                    letterSpacing:.5,
                  }}>{exp.period}</span>
                  <span style={{
                    padding:"7px 16px", borderRadius:50,
                    background:"rgba(56,189,120,.08)",
                    border:"1px solid rgba(56,189,120,.2)",
                    color:"#38bd78", fontFamily:"'Space Grotesk',sans-serif",
                    fontSize:12, fontWeight:600,
                  }}>● {exp.type}</span>
                </div>
              </div>

              {/* ── metrics row ── */}
              <div style={{
                display:"grid",
                gridTemplateColumns:`repeat(${exp.metrics.length}, 1fr)`,
                borderBottom:"1px solid rgba(56,189,120,.08)",
              }}>
                {exp.metrics.map((m, mi) => (
                  <div key={m.label} style={{
                    padding:"22px 24px", textAlign:"center",
                    borderRight: mi < exp.metrics.length-1
                      ? "1px solid rgba(56,189,120,.08)" : "none",
                    transition:"background .25s",
                  }}
                    onMouseEnter={e=>{e.currentTarget.style.background="rgba(56,189,120,.05)";}}
                    onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}>
                    <div style={{
                      fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:28,
                      color:"#38bd78", lineHeight:1,
                    }}>{m.value}</div>
                    <div style={{
                      fontFamily:"'Space Grotesk',sans-serif", fontSize:12,
                      color: tc ? "rgba(255,255,255,.4)" : "rgba(10,32,23,.45)",
                      marginTop:6, letterSpacing:.5,
                    }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* ── body ── */}
              <div style={{ padding:"28px 36px 32px" }}>

                {/* bullet points */}
                <ul style={{ margin:"0 0 24px", padding:0, listStyle:"none" }}>
                  {exp.points.map((pt, pi) => (
                    <li key={pi} style={{
                      display:"flex", gap:14, marginBottom:14,
                      fontFamily:"'Space Grotesk',sans-serif", fontSize:15, lineHeight:1.75,
                      color: tc ? "rgba(255,255,255,.65)" : "rgba(10,32,23,.65)",
                    }}>
                      <span style={{
                        width:20, height:20, borderRadius:6,
                        background:"rgba(56,189,120,.12)",
                        border:"1px solid rgba(56,189,120,.25)",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        color:"#38bd78", fontSize:11, fontWeight:700,
                        flexShrink:0, marginTop:3,
                      }}>✓</span>
                      <span dangerouslySetInnerHTML={{__html: pt}} />
                    </li>
                  ))}
                </ul>

                {/* skill tags */}
                <div>
                  <div style={{
                    fontFamily:"'Space Grotesk',sans-serif", fontSize:11,
                    color:"rgba(56,189,120,.6)", letterSpacing:2,
                    textTransform:"uppercase", fontWeight:600, marginBottom:12,
                  }}>Technologies & Tools</div>
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily:"'Space Grotesk',sans-serif", fontSize:12,
                        fontWeight:600, letterSpacing:.5,
                        padding:"6px 14px", borderRadius:50,
                        background:"rgba(56,189,120,.08)",
                        border:"1px solid rgba(56,189,120,.18)",
                        color: tc ? "rgba(255,255,255,.7)" : "rgba(10,32,23,.7)",
                        transition:"all .2s",
                      }}
                        onMouseEnter={e=>{e.currentTarget.style.background="rgba(56,189,120,.15)";e.currentTarget.style.color="#38bd78";e.currentTarget.style.borderColor="rgba(56,189,120,.4)";}}
                        onMouseLeave={e=>{e.currentTarget.style.background="rgba(56,189,120,.08)";e.currentTarget.style.color=tc?"rgba(255,255,255,.7)":"rgba(10,32,23,.7)";e.currentTarget.style.borderColor="rgba(56,189,120,.18)";}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── PROJECT CARD ──────────────────────────────────── */
function ProjCard({ title, desc, link, tags, i, theme }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);
  const tc = theme === "dark";
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      padding: "28px", borderRadius: 20, cursor: "pointer",
      background: hov ? (tc ? "rgba(56,189,120,.07)" : "rgba(56,189,120,.08)") : (tc ? "rgba(255,255,255,.025)" : "rgba(10,32,23,.03)"),
      border: `1px solid ${hov ? "rgba(56,189,120,.35)" : "rgba(56,189,120,.1)"}`,
      transform: `${inView ? "translateY(0)" : "translateY(24px)"} ${hov ? "translateY(-6px)" : ""}`,
      opacity: inView ? 1 : 0, transition: `all .5s ${(i % 4) * .09}s ease`,
      boxShadow: hov ? "0 20px 56px rgba(56,189,120,.1)" : "none",
      display: "flex", flexDirection: "column",
    }}>
      <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: hov ? "#38bd78" : (tc ? "#fff" : "#0a2017"), margin: "0 0 10px", transition: "color .3s" }}>{title}</h4>
      <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: tc ? "rgba(255,255,255,.48)" : "rgba(10,32,23,.5)", lineHeight: 1.7, flex: 1, margin: "0 0 18px" }}>{desc}</p>
      <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 18 }}>
        {tags.map(t => <span key={t} style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: .8, padding: "4px 10px", borderRadius: 20, background: "rgba(56,189,120,.1)", color: "#38bd78", textTransform: "uppercase" }}>{t}</span>)}
      </div>
      <a href={link} target="_blank" rel="noreferrer" style={{ color: "#38bd78", fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: 1, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6, width: "fit-content" }}>
        View <span style={{ transition: "transform .2s", transform: hov ? "translateX(5px)" : "translateX(0)", display: "inline-block" }}>→</span>
      </a>
    </div>
  );
}

/* ─── PROJECTS ──────────────────────────────────────── */
function Projects({ theme }) {
  const [tab, setTab] = useState("cse");
  const tc = theme === "dark";
  const proj = tab === "cse" ? CSE_PROJECTS : ECE_PROJECTS;
  return (
    <section id="projects" style={{ padding: "120px 6vw", position: "relative", zIndex: 1 }}>
      <SectionTitle theme={theme}>Projects</SectionTitle>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 52 }}>
          {[{ id: "cse", label: "💻 CSE Projects" }, { id: "ece", label: "⚡ ECE Projects" }].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "12px 32px", borderRadius: 50, cursor: "pointer",
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: .5,
              background: tab === t.id ? "#38bd78" : "transparent",
              color: tab === t.id ? "#050a07" : (tc ? "rgba(255,255,255,.6)" : "rgba(10,32,23,.6)"),
              border: `1.5px solid ${tab === t.id ? "#38bd78" : "rgba(56,189,120,.2)"}`,
              transition: "all .25s", boxShadow: tab === t.id ? "0 0 28px rgba(56,189,120,.3)" : "none",
            }}>{t.label}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
          {proj.map((p, i) => <ProjCard key={p.title} {...p} i={i} theme={theme} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ───────────────────────────────────────── */
function Contact({ theme }) {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const tc = theme === "dark";
  function handleSubmit(e) {
    e.preventDefault(); setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); setForm({ name: "", email: "", subject: "", message: "" }); setTimeout(() => setSent(false), 5000); }, 1400);
  }
  const iStyle = {
    width: "100%", padding: "13px 18px",
    background: tc ? "rgba(255,255,255,.04)" : "rgba(10,32,23,.04)",
    border: `1px solid rgba(56,189,120,.18)`,
    borderRadius: 12, color: tc ? "#fff" : "#0a2017",
    fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, outline: "none",
    boxSizing: "border-box", transition: "border-color .25s",
  };
  return (
    <section id="contact" ref={ref} style={{ padding: "120px 6vw 80px", position: "relative", zIndex: 1 }}>
      <SectionTitle theme={theme}>Get In Touch</SectionTitle>
      <div style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "start" }} className="contact-grid">
        <div style={{ transform: inView ? "translateX(0)" : "translateX(-30px)", opacity: inView ? 1 : 0, transition: "all .7s ease" }}>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, color: tc ? "rgba(255,255,255,.55)" : "rgba(10,32,23,.55)", lineHeight: 1.9, marginBottom: 40 }}>
            I'm currently open to internships and freelance frontend projects. Whether you have a question, a project idea, or just want to say hi — feel free to reach out!
          </p>
          {[
            { icon: "📧", label: "Email", val: "vg437474@gmail.com", href: "mailto:vg437474@gmail.com" },
            { icon: "📍", label: "Location", val: "Ghaziabad, Uttar Pradesh", href: "#" },
            { icon: "🐙", label: "GitHub", val: "github.com/vkg06", href: "https://github.com/vkg06" },
          ].map(({ icon, label, val, href }, i) => (
            <a key={label} href={href} style={{
              display: "flex", gap: 16, padding: "16px 20px", borderRadius: 14, marginBottom: 14,
              background: tc ? "rgba(56,189,120,.04)" : "rgba(56,189,120,.05)", border: "1px solid rgba(56,189,120,.1)",
              textDecoration: "none", transition: "all .25s",
              transform: inView ? "translateX(0)" : "translateX(-20px)", opacity: inView ? 1 : 0, transition: `all .5s ${i * .1 + .2}s ease`,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(56,189,120,.35)"; e.currentTarget.style.background = tc ? "rgba(56,189,120,.08)" : "rgba(56,189,120,.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(56,189,120,.1)"; e.currentTarget.style.background = tc ? "rgba(56,189,120,.04)" : "rgba(56,189,120,.05)"; }}>
              <span style={{ fontSize: 22 }}>{icon}</span>
              <div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: "#38bd78", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600, marginBottom: 3 }}>{label}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: tc ? "rgba(255,255,255,.7)" : "rgba(10,32,23,.7)" }}>{val}</div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ transform: inView ? "translateX(0)" : "translateX(30px)", opacity: inView ? 1 : 0, transition: "all .7s .15s ease" }}>
          <div style={{ background: tc ? "rgba(255,255,255,.03)" : "rgba(10,32,23,.03)", backdropFilter: "blur(20px)", border: "1px solid rgba(56,189,120,.1)", borderRadius: 28, padding: "44px 40px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(56,189,120,.12)", border: "2px solid #38bd78", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 24px" }}>✓</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: "#38bd78", marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", color: tc ? "rgba(255,255,255,.45)" : "rgba(10,32,23,.5)", fontSize: 15 }}>Thanks for reaching out, I'll respond within 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: tc ? "rgba(255,255,255,.4)" : "rgba(10,32,23,.45)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Name</label>
                    <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Vikas Gupta" required style={iStyle} onFocus={e => e.target.style.borderColor = "#38bd78"} onBlur={e => e.target.style.borderColor = "rgba(56,189,120,.18)"} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: tc ? "rgba(255,255,255,.4)" : "rgba(10,32,23,.45)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Email</label>
                    <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@example.com" required style={iStyle} onFocus={e => e.target.style.borderColor = "#38bd78"} onBlur={e => e.target.style.borderColor = "rgba(56,189,120,.18)"} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: tc ? "rgba(255,255,255,.4)" : "rgba(10,32,23,.45)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Subject</label>
                  <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="Internship / Project / Hello" required style={iStyle} onFocus={e => e.target.style.borderColor = "#38bd78"} onBlur={e => e.target.style.borderColor = "rgba(56,189,120,.18)"} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: tc ? "rgba(255,255,255,.4)" : "rgba(10,32,23,.45)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 7 }}>Message</label>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} placeholder="Tell me about your project or opportunity..." required style={{ ...iStyle, resize: "vertical" }} onFocus={e => e.target.style.borderColor = "#38bd78"} onBlur={e => e.target.style.borderColor = "rgba(56,189,120,.18)"} />
                </div>
                <button type="submit" disabled={loading} style={{ padding: "15px", background: loading ? "rgba(56,189,120,.5)" : "#38bd78", color: "#050a07", border: "none", borderRadius: 14, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer", letterSpacing: .5, boxShadow: "0 0 32px rgba(56,189,120,.25)", transition: "all .22s", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 0 52px rgba(56,189,120,.45)"; } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(56,189,120,.25)"; }}>
                  {loading ? <><span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span> Sending…</> : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:36px!important}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </section>
  );
}

/* ─── SECTION TITLE ─────────────────────────────────── */
function SectionTitle({ children, theme }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 64 }}>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(30px,5vw,50px)", fontWeight: 800, color: theme === "dark" ? "#fff" : "#0a2017", margin: 0 }}>{children}</h2>
      <div style={{ width: 56, height: 3.5, background: "linear-gradient(90deg,#38bd78,#a3e9c2)", borderRadius: 2, margin: "14px auto 0" }} />
    </div>
  );
}

/* ─── FOOTER ─────────────────────────────────────────── */
function Footer({ theme }) {
  const tc = theme === "dark";
  return (
    <footer style={{ padding: "48px 6vw 36px", borderTop: "1px solid rgba(56,189,120,.08)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: tc ? "#fff" : "#0a2017", letterSpacing: 2 }}>VK<span style={{ color: "#38bd78" }}>.</span></span>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", color: tc ? "rgba(255,255,255,.3)" : "rgba(10,32,23,.4)", fontSize: 13, marginTop: 6 }}>Frontend Developer & ECE Engineer</p>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
         {[
  { icon: GithubIcon, href: "https://github.com/vkg06", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/vikas-gupta-2078a524b/", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" }
].map(({ icon, href, label }) => (
  <a key={label} href={href} title={label} style={{
    width: 42, height: 42, borderRadius: 12,
    border: "1px solid rgba(56,189,120,.18)",
    background: "rgba(56,189,120,.05)",
    display: "flex", alignItems: "center", justifyContent: "center",
    textDecoration: "none", transition: "all .2s",
    padding: 8,
  }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "#38bd78"; e.currentTarget.style.background = "rgba(56,189,120,.1)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(56,189,120,.18)"; e.currentTarget.style.background = "rgba(56,189,120,.05)"; }}>
    <img src={icon} alt={label} style={{
      width: "100%", height: "100%", objectFit: "contain",
      filter: tc ? "invert(1) brightness(0.6)" : "invert(0) brightness(0.4)",
      transition: "filter .2s",
    }} />
  </a>
))}
        </div>
        <p style={{ fontFamily: "'Space Grotesk',sans-serif", color: tc ? "rgba(255,255,255,.25)" : "rgba(10,32,23,.35)", fontSize: 13 }}>© 2025 Vikas Gupta. Built with React.</p>
      </div>
    </footer>
  );
}

/* ─── ROOT APP ──────────────────────────────────────── */
export default function App() {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("home");
  const [loaded, setLoaded] = useState(false);
  const tc = theme === "dark";

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { threshold: 0.35 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <div style={{ background: tc ? "#050a07" : "#f4faf7", minHeight: "100vh", overflowX: "hidden", transition: "background .4s ease" }}>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth;scroll-padding-top:80px}
        ::selection{background:rgba(56,189,120,.25);color:${tc ? "#fff" : "#050a07"}}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:${tc ? "#050a07" : "#f4faf7"}}::-webkit-scrollbar-thumb{background:#38bd78;border-radius:2px}
      `}</style>
      <LoadingScreen done={loaded} />
      <ScrollProgress />
      <Particles />
      <CursorSpotlight />
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar active={active} theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Timeline theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
      <BackToTop />
    </div>
  );
}