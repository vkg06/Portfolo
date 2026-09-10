const express = require("express");
const cors = require("cors");
const path = require("path");
const data = require("./data");

const app = express();

// Allow your frontend (dev server or deployed domain) to call this API.
// Tighten this to your actual frontend origin(s) before going to production.
app.use(cors());

// Serve certificate (and any other) images straight from the backend.
// Drop image files in public/certificates/ and reference them in data.js
// as "/certificates/filename.jpg" — they'll be reachable at
// http://localhost:5000/certificates/filename.jpg
app.use(express.static(path.join(__dirname, "public")));

// Single combined endpoint — the frontend fetches this once on load.
app.get("/api/portfolio", (req, res) => {
  res.json(data);
});

// Individual endpoints, in case you want to fetch sections separately
// or reuse them elsewhere later.
app.get("/api/nav", (req, res) => res.json(data.nav));
app.get("/api/about", (req, res) => res.json(data.about));
app.get("/api/stats", (req, res) => res.json(data.stats));
app.get("/api/skills", (req, res) => res.json(data.skills));
app.get("/api/experience", (req, res) => res.json(data.experience));
app.get("/api/projects/cse", (req, res) => res.json(data.cseProjects));
app.get("/api/projects/ece", (req, res) => res.json(data.eceProjects));
app.get("/api/certificates", (req, res) => res.json(data.certificates));

app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});