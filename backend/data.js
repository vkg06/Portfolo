/* ─── PORTFOLIO DATA ───────────────────────────────────
   Everything that used to live as constants inside the React
   component now lives here. Edit this file to update your
   site's content — no frontend rebuild/deploy needed, just
   restart (or hot-reload) this server.
──────────────────────────────────────────────────────── */

const nav = ["Home", "About", "Skills", "Experience", "Projects", "Certificates", "Contact"];

const about = {

  name: "Vikas Gupta",

  introBefore: "Hi, I'm ",

  introAfter: " — a B.Tech graduate in Electronics & Communication Engineering passionate about software development and building real-world applications.",

  description: "I specialize in full-stack web development using the MERN stack and Python, with hands-on experience building scalable web applications, REST APIs, authentication systems, databases, and AI-powered features. I enjoy turning real-world problems into practical, user-focused software solutions while continuously improving my problem-solving skills through Data Structures & Algorithms.",

};


 
// `cat` now only ever takes one of three values so the Skills section can
// render as three fixed groups instead of a filterable tag cloud:
// "SDE", "ECE Core", "Data Science".
const skills = [

  // ── SDE ──
  { name: "C++", cat: "SDE" },
  { name: "Python", cat: "SDE" },
  { name: "JavaScript", cat: "SDE" },
  { name: "OOP", cat: "SDE" },
  { name: "Data Structures & Algorithms", cat: "SDE" },
  { name: "Node.js", cat: "SDE" },
  { name: "Express.js", cat: "SDE" },
  { name: "REST APIs", cat: "SDE" },
  { name: "Git", cat: "SDE" },
  { name: "Linux", cat: "SDE" },
  { name: "Docker", cat: "SDE" },
  { name: "Postman", cat: "SDE" },

  // ── ECE Core ──
  { name: "Digital Signal Processing", cat: "ECE Core" },
  { name: "Arduino", cat: "ECE Core" },
  { name: "ESP32", cat: "ECE Core" },
  { name: "STM32", cat: "ECE Core" },
  { name: "Interrupts", cat: "ECE Core" },
  { name: "Optical Sensor Interfacing", cat: "ECE Core" },
  { name: "Arduino IDE", cat: "ECE Core" },
  { name: "MATLAB / Simulink", cat: "ECE Core" },

  // ── Data Science ──
  { name: "Machine Learning", cat: "Data Science" },
  { name: "scikit-learn", cat: "Data Science" },
  { name: "OpenCV", cat: "Data Science" },
  { name: "SVM", cat: "Data Science" },
  { name: "Random Forest", cat: "Data Science" },
  { name: "FFT Feature Extraction", cat: "Data Science" },
  { name: "OpenAI API", cat: "Data Science" },
  { name: "LLM Integration", cat: "Data Science" },
  { name: "SQL", cat: "Data Science" },
  { name: "PostgreSQL", cat: "Data Science" },
  { name: "MongoDB", cat: "Data Science" },
  { name: "Redis", cat: "Data Science" },
  { name: "MS Excel", cat: "Data Science" },

];
 
const experience = [
  {
    role: "Web Development Intern",
    company: "CodeCraft",
    location: "Remote",
    period: "Jul 2025 – Aug 2025",
    type: "Internship",
    icon: "💻",
    metrics: [
      { value: "5+", label: "Projects Delivered" },
      { value: "10+", label: "Responsive Pages Built" },
      { value: "15+", label: "UI Enhancements" },
    ],
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Git", "REST APIs", "Responsive Design"],
    points: [
      "Built responsive and user-friendly web applications using HTML, CSS, JavaScript, and React.js.",
      "Integrated REST APIs and implemented reusable UI components to improve application functionality.",
      "Collaborated remotely using Git and GitHub, participating in code reviews and feature development.",
      "Optimized website performance, fixed UI bugs, and ensured cross-browser compatibility in an Agile development environment.",
    ],
  },
  {
    role: "Quality Assurance Engineer",
    company: "Garg Associates Pvt. Ltd.",
    location: "Ghaziabad, UP",
    period: "Jan 2026 – Aug 2026",
    type: "Full-time",
    icon: "🏭",
    metrics: [
      { value: "500+", label: "ERP Records Validated" },
      { value: "100%", label: "Data Compliance" },
      { value: "30+", label: "Reports Prepared" },
    ],
    tags: ["ERP Systems", "Test Planning", "BOM Management", "FAI Reports", "LQC", "ECN", "Quality Assurance"],
    points: [
      "Validated and managed 500+ ERP records for wire & cable specs, ensuring data integrity and compliance.",
      "Designed structured test plans and executed validation workflows to identify defects and improve reliability.",
      "Maintained BOM data and supported ECN implementation through controlled configuration management.",
      "Prepared LQC and FAI reports while collaborating with engineering, production, and quality teams.",
    ],
  },
];
 
const cseProjects = [
  {
    title: "To-Do App",
    desc: "Built a task management application with task creation, editing, and priority tagging. Implemented drag-and-drop reordering and localStorage persistence to manage 500+ tasks seamlessly across sessions.",
    link: "https://github.com/vkg06",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Tic-Tac-Toe",
    desc: "Created an interactive two-player game with real-time win detection and score tracking. Enhanced user experience through animations, responsive design, and intuitive gameplay mechanics.",
    link: "https://github.com/vkg06",
    tags: ["JS", "CSS"],
  },
  {
    title: "Portfolio Website",
    desc: "A modern, fully responsive portfolio showcasing my projects, technical skills, and experience. Built with smooth animations, dark mode, and optimized performance to deliver a fast and engaging user experience.",
    link: "https://github.com/vkg06",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "E-commerce Clone",
    desc: "Designed a shopping platform featuring 50+ products with category-based filtering and cart management. Built a responsive checkout flow to simulate a real-world online shopping experience.",
    link: "https://github.com/vkg06",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Finance Backend System",
    desc: "Designed and developed a secure backend platform for financial transaction processing using Node.js and MongoDB. Implemented JWT authentication, RBAC, Redis caching, and rate limiting. Optimized database queries and caching strategies to improve API performance and scalability under high load.",
    link: "https://github.com/vkg06",
    tags: ["Node.js", "Express", "MongoDB", "Redis"],
  },
  {
    title: "MedKart (AI-Powered Online Pharmacy Platform)",
    desc: "A full-stack AI-powered online pharmacy that digitizes handwritten prescriptions with Claude Vision OCR, enabling secure medicine ordering, prescription uploads, and real-time order tracking.",
    link: "https://github.com/vkg06",
    tags: ["MERN Stack", "AI Vision OCR", "MongoDB Atlas", "REST APIs"],
  },
];
 
const eceProjects = [
  {
    title: "Fire Alarm System",
    desc: "Engineered an Arduino-based fire detection system using IR sensors for continuous monitoring. The system detects flames within seconds and triggers instant alarms to improve safety and response time.",
    link: "https://github.com/vkg06",
    tags: ["Arduino", "IoT", "C++"],
  },
  {
    title: "Parking Module",
    desc: "Developed a smart parking solution using ultrasonic sensors and microcontroller-based processing. The system monitors 20+ parking slots in real time and provides accurate occupancy detection.",
    link: "https://github.com/vkg06",
    tags: ["Arduino", "Sensors"],
  },
  {
    title: "Driver Anti-Sleep Device",
    desc: "Built a drowsiness detection system using computer vision and eye-tracking techniques. Achieved over 90% detection accuracy and generated immediate alerts to help prevent accidents.",
    link: "https://github.com/vkg06",
    tags: ["IoT", "Python", "CV"],
  },
  {
    title: "IoT Traffic Controller",
    desc: "Implemented an adaptive traffic management system powered by IoT and cloud connectivity. Monitors traffic density across multiple lanes and dynamically optimizes signal timing for smoother flow.",
    link: "https://github.com/vkg06",
    tags: ["IoT", "Cloud", "Arduino"],
  },
  {
    title: "Biometric Attendance System",
    desc: "Developed an end-to-end attendance management system using face recognition and fingerprint authentication. Achieved 97% face recognition accuracy across 50 enrolled users and integrated Arduino-based biometric hardware. Automated attendance tracking for 30+ students while maintaining reliable data storage and reporting.",
    link: "https://github.com/vkg06",
    tags: ["Python", "OpenCV", "Arduino", "ML"],
  },
];
 
/* Certificate image files go in your FRONTEND project's
   public/certificates/ folder — i.e. portfolio/public/certificates/,
   not the backend. Vite serves anything in public/ directly from the
   site root, so a file at public/certificates/html.jpg is reachable at
   "/certificates/html.jpg" — that's exactly the path to put below.
   File names use dashes instead of spaces to keep URLs simple.
   PDFs are supported too; the frontend shows a "View Certificate" link
   for those instead of an inline image preview. */
const certificates = [
  {
    title: "Front End Development",
    issuer: "Great Learning",
    date: "2023",
    credentialUrl: "",
    image: "/certificates/html.jpg",
  },
  {
    title: "CSS Tutorial",
    issuer: "Great Learning",
    date: "2023",
    credentialUrl: "",
    image: "/certificates/css.jpg",
  },
  {
    title: "3D Printing",
    issuer: "ABES AICTE IDEA Lab",
    date: "2024",
    credentialUrl: "",
    image: "/certificates/3d-printing.jpg",
  },
  {
    title: "WROS Workshop",
    issuer: "iNurture Foundation",
    date: "2024",
    credentialUrl: "",
    image: "/certificates/ros-certificate.jpg",
  },
  {
    title: "Social Entrepreneurship",
    issuer: "HP LIFE",
    date: "December 2025",
    credentialUrl: "",
    image: "/certificates/entrepreneurship-certificate.jpg",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage",
    date: "September 2026",
    credentialUrl: "",
    image: "/certificates/data-analyst-job-simulation.jpg",
  },
  {
    title: "Deloitte Australia Technology Job Simulation",
    issuer: "Forage",
    date: "September 2026",
    credentialUrl: "",
    image: "/certificates/technology-job-simulation.jpg",
  },
  {
    title: "Py-Quest: Python Intermediate Challenge",
    issuer: "RANKUP",
    date: "September 2026",
    credentialUrl: "",
    image: "/certificates/python.jpg",
  },
];
 
module.exports = { nav, about, skills, experience, cseProjects, eceProjects, certificates };
 