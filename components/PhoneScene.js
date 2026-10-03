"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Rounded rectangle shape for 3D extruded phone body */
function roundedRect(w, h, r) {
  const x = -w / 2;
  const y = -h / 2;
  const s = new THREE.Shape();
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.absarc(x + w - r, y + r, r, -Math.PI / 2, 0);
  s.lineTo(x + w, y + h - r);
  s.absarc(x + w - r, y + h - r, r, 0, Math.PI / 2);
  s.lineTo(x + r, y + h);
  s.absarc(x + r, y + h - r, r, Math.PI / 2, Math.PI);
  s.lineTo(x, y + r);
  s.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
  return s;
}

/* Helper to draw rounded rectangle on 2D canvas */
function fillRoundRect(ctx, x, y, w, h, r, fillStyle) {
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.rect(x, y, w, h);
  }
  if (fillStyle) ctx.fillStyle = fillStyle;
  ctx.fill();
}

/* Helper to stroke rounded rectangle on 2D canvas */
function strokeRoundRect(ctx, x, y, w, h, r, strokeStyle, lineWidth = 1) {
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.rect(x, y, w, h);
  }
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

/* Realistic Native Mobile UI Screen Painter for 3D Phone */
function drawScreen(canvas, app, font) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;   // 480
  const H = canvas.height;  // 1040

  // 1. Device Screen Background
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#070b14");
  bg.addColorStop(0.5, "#0d1527");
  bg.addColorStop(1, "#080c16");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // 2. Status Bar (Time, Dynamic Island, Network & Battery)
  ctx.fillStyle = "#ffffff";
  ctx.font = `600 22px ${font}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("9:41", 36, 42);

  // Dynamic Island Notch
  fillRoundRect(ctx, W / 2 - 65, 26, 130, 32, 16, "#000000");
  // Camera lens dot inside dynamic island
  ctx.beginPath();
  ctx.arc(W / 2 + 38, 42, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#1e293b";
  ctx.fill();

  // Status icons (Cellular, WiFi, Battery)
  // Cellular bars
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(W - 130 + i * 7, 46 - (i + 1) * 3, 4, (i + 1) * 3);
  }
  // WiFi arcs representation
  ctx.fillStyle = "#ffffff";
  ctx.font = `18px ${font}`;
  ctx.fillText("5G", W - 94, 42);

  // Battery icon
  strokeRoundRect(ctx, W - 62, 33, 30, 16, 4, "rgba(255,255,255,0.7)", 2);
  fillRoundRect(ctx, W - 60, 35, 20, 12, 2, "#10b981"); // 85% charge
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.fillRect(W - 32, 38, 3, 6);

  // 3. App Header Bar
  const brandColor = app.accent || "#3b82f6";

  // Header background blur card
  fillRoundRect(ctx, 24, 76, W - 48, 68, 20, "rgba(255, 255, 255, 0.05)");
  strokeRoundRect(ctx, 24, 76, W - 48, 68, 20, "rgba(255, 255, 255, 0.08)", 1);

  // App mini icon
  const iconGrad = ctx.createLinearGradient(40, 86, 88, 134);
  iconGrad.addColorStop(0, brandColor);
  iconGrad.addColorStop(1, "#8b5cf6");
  fillRoundRect(ctx, 40, 88, 44, 44, 12, iconGrad);

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.font = `800 24px ${font}`;
  ctx.fillText(app.n.charAt(0), 62, 110);

  // App Title in Header
  ctx.textAlign = "left";
  ctx.font = `700 24px ${font}`;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(app.n, 98, 102);

  // Subtitle / category
  ctx.font = `500 15px ${font}`;
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.fillText(app.category || app.t, 98, 124);

  // 4. Render App-Specific Native Screens
  const mockType = app.mockType || "academic";

  if (mockType === "academic") {
    // === SMART ACADEMIC SYSTEM SCREEN ===
    // Student card
    fillRoundRect(ctx, 24, 160, W - 48, 140, 24, "rgba(30, 41, 59, 0.7)");
    strokeRoundRect(ctx, 24, 160, W - 48, 140, 24, "rgba(59, 130, 246, 0.25)", 1.5);

    ctx.font = `600 16px ${font}`;
    ctx.fillStyle = "#60a5fa";
    ctx.fillText("STUDENT PROFILE", 48, 192);

    ctx.font = `800 26px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Aarav Hasan", 48, 226);

    ctx.font = `500 16px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Grade 10-A • Roll #04 • Shift Morning", 48, 254);

    // Attendance badge
    fillRoundRect(ctx, W - 160, 185, 112, 34, 17, "rgba(16, 185, 129, 0.15)");
    strokeRoundRect(ctx, W - 160, 185, 112, 34, 17, "#10b981", 1);
    ctx.textAlign = "center";
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#34d399";
    ctx.fillText("Present 96%", W - 104, 202);

    // Quick Actions 4 Grid
    const actions = [
      { t: "Attendance", sub: "Daily log", col: "#3b82f6" },
      { t: "Routine", sub: "Exam schedule", col: "#8b5cf6" },
      { t: "Grades", sub: "Report card", col: "#10b981" },
      { t: "Fee Dues", sub: "Paid in full", col: "#f59e0b" },
    ];
    actions.forEach((act, idx) => {
      const colIdx = idx % 2;
      const rowIdx = Math.floor(idx / 2);
      const ax = 24 + colIdx * ((W - 48 - 14) / 2 + 14);
      const ay = 316 + rowIdx * 110;
      const aw = (W - 48 - 14) / 2;

      fillRoundRect(ctx, ax, ay, aw, 96, 20, "rgba(30, 41, 59, 0.5)");
      strokeRoundRect(ctx, ax, ay, aw, 96, 20, "rgba(255, 255, 255, 0.06)", 1);

      fillRoundRect(ctx, ax + 16, ay + 18, 36, 36, 10, act.col);
      ctx.textAlign = "left";
      ctx.font = `700 18px ${font}`;
      ctx.fillStyle = "#ffffff";
      ctx.fillText(act.t, ax + 16, ay + 74);
    });

    // Upcoming Exam Card
    fillRoundRect(ctx, 24, 552, W - 48, 140, 24, "rgba(30, 41, 59, 0.6)");
    strokeRoundRect(ctx, 24, 552, W - 48, 140, 24, "rgba(255, 255, 255, 0.08)", 1);

    ctx.font = `700 16px ${font}`;
    ctx.fillStyle = "#f59e0b";
    ctx.fillText("UPCOMING EXAM • TOMORROW", 44, 582);

    ctx.font = `800 24px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Higher Mathematics - Paper II", 44, 616);

    ctx.font = `500 16px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Hall: 402 • Time: 10:00 AM - 1:00 PM", 44, 646);

    // Recent Institutional Notice
    fillRoundRect(ctx, 24, 706, W - 48, 130, 22, "rgba(30, 41, 59, 0.4)");
    ctx.font = `700 18px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Notice Board", 44, 740);
    ctx.font = `500 15px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Annual Science Fair registration closes Friday.", 44, 770);
    ctx.fillText("Submit your working models to the science lab.", 44, 796);

  } else if (mockType === "jobs") {
    // === BDJOBS LIVE SCREEN ===
    // Search input bar
    fillRoundRect(ctx, 24, 160, W - 48, 56, 18, "rgba(30, 41, 59, 0.8)");
    strokeRoundRect(ctx, 24, 160, W - 48, 56, 18, "rgba(14, 165, 233, 0.3)", 1);
    ctx.font = `500 18px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("🔍 Search React Native, Kotlin, AI...", 44, 188);

    // Filter tags
    const filters = ["All (148)", "Remote", "Dhaka", "Tech", "Salary: ৳100K+"];
    let fx = 24;
    filters.forEach((f, i) => {
      const active = i === 0;
      fillRoundRect(ctx, fx, 230, active ? 80 : 76, 36, 18, active ? "#0ea5e9" : "rgba(30, 41, 59, 0.5)");
      ctx.textAlign = "center";
      ctx.font = `600 14px ${font}`;
      ctx.fillStyle = active ? "#ffffff" : "#94a3b8";
      ctx.fillText(f, fx + (active ? 40 : 38), 248);
      fx += (active ? 88 : 84);
    });

    // Job Card 1 (Highlighted)
    fillRoundRect(ctx, 24, 282, W - 48, 170, 24, "rgba(30, 41, 59, 0.75)");
    strokeRoundRect(ctx, 24, 282, W - 48, 170, 24, "rgba(14, 165, 233, 0.4)", 1.5);

    fillRoundRect(ctx, 44, 302, 48, 48, 14, "#0ea5e9");
    ctx.textAlign = "center";
    ctx.font = `800 24px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("ST", 68, 326);

    ctx.textAlign = "left";
    ctx.font = `800 22px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Lead Mobile App Engineer", 106, 322);
    ctx.font = `500 15px ${font}`;
    ctx.fillStyle = "#38bdf8";
    ctx.fillText("SparkTech Solutions • Banani, Dhaka", 106, 344);

    // Salary pill & tags
    fillRoundRect(ctx, 44, 368, 130, 32, 16, "rgba(14, 165, 233, 0.15)");
    ctx.textAlign = "center";
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#38bdf8";
    ctx.fillText("৳120K - ৳160K", 109, 384);

    fillRoundRect(ctx, 184, 368, 100, 32, 16, "rgba(255, 255, 255, 0.08)");
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("React Native", 234, 384);

    // 1-Tap Apply Button
    fillRoundRect(ctx, W - 140, 408, 96, 34, 17, "#0ea5e9");
    ctx.font = `700 14px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("1-Tap Apply", W - 92, 425);

    // Job Card 2
    fillRoundRect(ctx, 24, 468, W - 48, 160, 24, "rgba(30, 41, 59, 0.5)");
    strokeRoundRect(ctx, 24, 468, W - 48, 160, 24, "rgba(255, 255, 255, 0.06)", 1);

    fillRoundRect(ctx, 44, 488, 48, 48, 14, "#6366f1");
    ctx.textAlign = "center";
    ctx.font = `800 24px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("SS", 68, 512);

    ctx.textAlign = "left";
    ctx.font = `800 22px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Senior Android SDK Dev", 106, 508);
    ctx.font = `500 15px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Smart Software Ltd • Gulshan, Dhaka", 106, 530);

    fillRoundRect(ctx, 44, 554, 120, 32, 16, "rgba(99, 102, 241, 0.15)");
    ctx.textAlign = "center";
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#a5b4fc";
    ctx.fillText("৳90K - ৳130K", 104, 570);

    // Job Card 3
    fillRoundRect(ctx, 24, 644, W - 48, 150, 24, "rgba(30, 41, 59, 0.4)");
    ctx.textAlign = "left";
    ctx.font = `800 20px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Full-Stack Mobile Architect", 44, 680);
    ctx.font = `500 15px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Global FinTech Client • Remote", 44, 706);

  } else if (mockType === "islamic") {
    // === ISLAMIC LIFE SCREEN ===
    // Location bar
    ctx.font = `600 16px ${font}`;
    ctx.fillStyle = "#34d399";
    ctx.fillText("📍 Dhaka, Bangladesh (Hanafi Calculation)", 44, 178);

    // Current Prayer Card (Rich Emerald Gradient)
    const emeraldGrad = ctx.createLinearGradient(24, 196, W - 24, 410);
    emeraldGrad.addColorStop(0, "#065f46");
    emeraldGrad.addColorStop(1, "#047857");
    fillRoundRect(ctx, 24, 196, W - 48, 200, 28, emeraldGrad);
    strokeRoundRect(ctx, 24, 196, W - 48, 200, 28, "rgba(52, 211, 153, 0.4)", 2);

    ctx.textAlign = "left";
    ctx.font = `700 16px ${font}`;
    ctx.fillStyle = "#a7f3d0";
    ctx.fillText("CURRENT PRAYER", 52, 230);

    ctx.font = `900 48px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("ASR", 52, 276);

    ctx.font = `600 20px ${font}`;
    ctx.fillStyle = "#d1fae5";
    ctx.fillText("04:18 PM – 05:44 PM", 52, 312);

    // Next prayer countdown pill
    fillRoundRect(ctx, 52, 334, 210, 36, 18, "rgba(0, 0, 0, 0.35)");
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#6ee7b7";
    ctx.fillText("Next: Maghrib in 1h 26m", 68, 352);

    // Prayer Schedule Timeline Card
    fillRoundRect(ctx, 24, 412, W - 48, 120, 22, "rgba(30, 41, 59, 0.65)");
    const prayers = [
      { p: "Fajr", t: "04:45" },
      { p: "Dhuhr", t: "12:02" },
      { p: "Asr", t: "04:18", cur: true },
      { p: "Maghrib", t: "05:46" },
      { p: "Isha", t: "07:05" },
    ];
    prayers.forEach((pr, i) => {
      const px = 44 + i * 80;
      if (pr.cur) {
        fillRoundRect(ctx, px - 6, 426, 72, 90, 14, "rgba(16, 185, 129, 0.25)");
        strokeRoundRect(ctx, px - 6, 426, 72, 90, 14, "#10b981", 1);
      }
      ctx.textAlign = "center";
      ctx.font = `700 15px ${font}`;
      ctx.fillStyle = pr.cur ? "#34d399" : "#94a3b8";
      ctx.fillText(pr.p, px + 30, 456);

      ctx.font = `800 17px ${font}`;
      ctx.fillStyle = pr.cur ? "#ffffff" : "#cbd5e1";
      ctx.fillText(pr.t, px + 30, 488);
    });

    // 4 Quick Utilities Grid
    const tools = [
      { name: "Qibla Compass", sub: "Sensor 281° NW" },
      { name: "Digital Tasbih", sub: "Count: 33" },
      { name: "Audio Quran", sub: "114 Surahs" },
      { name: "Daily Duas", sub: "Authentic Hisnul" },
    ];
    tools.forEach((tl, i) => {
      const tx = 24 + (i % 2) * ((W - 48 - 14) / 2 + 14);
      const ty = 548 + Math.floor(i / 2) * 106;
      const tw = (W - 48 - 14) / 2;

      fillRoundRect(ctx, tx, ty, tw, 92, 20, "rgba(30, 41, 59, 0.5)");
      strokeRoundRect(ctx, tx, ty, tw, 92, 20, "rgba(52, 211, 153, 0.15)", 1);

      ctx.textAlign = "left";
      ctx.font = `700 17px ${font}`;
      ctx.fillStyle = "#ffffff";
      ctx.fillText(tl.name, tx + 16, ty + 38);

      ctx.font = `500 14px ${font}`;
      ctx.fillStyle = "#34d399";
      ctx.fillText(tl.sub, tx + 16, ty + 64);
    });

    // Daily Quran Verse Card
    fillRoundRect(ctx, 24, 772, W - 48, 90, 20, "rgba(30, 41, 59, 0.5)");
    ctx.textAlign = "left";
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#6ee7b7";
    ctx.fillText("AYAH OF THE DAY • SURAH AR-RA'D (13:28)", 44, 802);
    ctx.font = `500 14px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText('"Unquestionably, by the remembrance of Allah hearts find rest."', 44, 832);

  } else if (mockType === "restaurant") {
    // === SMART RESTAURANT POS SCREEN ===
    // Table banner
    fillRoundRect(ctx, 24, 160, W - 48, 86, 22, "rgba(249, 115, 22, 0.15)");
    strokeRoundRect(ctx, 24, 160, W - 48, 86, 22, "#f97316", 1.5);

    ctx.textAlign = "left";
    ctx.font = `800 24px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Table #06 • 4 Guests", 44, 196);

    ctx.font = `600 15px ${font}`;
    ctx.fillStyle = "#fb923c";
    ctx.fillText("Order #9482 • Server: Kabir • Kitchen Active", 44, 224);

    // Active Order Items
    fillRoundRect(ctx, 24, 260, W - 48, 300, 24, "rgba(30, 41, 59, 0.7)");
    strokeRoundRect(ctx, 24, 260, W - 48, 300, 24, "rgba(255, 255, 255, 0.08)", 1);

    ctx.font = `700 16px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("ORDER ITEMS", 44, 292);

    const items = [
      { n: "1x Grilled Wagyu Ribeye", d: "Medium Rare • Truffle Butter", p: "$34.00" },
      { n: "2x Passionfruit Spritz", d: "Chilled • Zero Alcohol", p: "$16.00" },
      { n: "1x Truffle Parmesan Fries", d: "Crispy • Garlic Aioli Dip", p: "$9.50" },
      { n: "1x Classic Tiramisu", d: "Espresso Soaked Ladyfingers", p: "$8.50" },
    ];

    items.forEach((it, i) => {
      const iy = 328 + i * 56;
      ctx.textAlign = "left";
      ctx.font = `700 17px ${font}`;
      ctx.fillStyle = "#ffffff";
      ctx.fillText(it.n, 44, iy);

      ctx.font = `500 13px ${font}`;
      ctx.fillStyle = "#94a3b8";
      ctx.fillText(it.d, 44, iy + 20);

      ctx.textAlign = "right";
      ctx.font = `700 17px ${font}`;
      ctx.fillStyle = "#fb923c";
      ctx.fillText(it.p, W - 44, iy);
    });

    // Billing summary card
    fillRoundRect(ctx, 24, 576, W - 48, 160, 22, "rgba(30, 41, 59, 0.85)");
    strokeRoundRect(ctx, 24, 576, W - 48, 160, 22, "rgba(249, 115, 22, 0.3)", 1);

    ctx.textAlign = "left";
    ctx.font = `500 16px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Subtotal", 44, 610);
    ctx.fillText("Service Tax (10%)", 44, 640);
    ctx.font = `800 22px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Total Payable", 44, 690);

    ctx.textAlign = "right";
    ctx.font = `600 16px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("$68.00", W - 44, 610);
    ctx.fillText("$6.80", W - 44, 640);
    ctx.font = `800 24px ${font}`;
    ctx.fillStyle = "#f97316";
    ctx.fillText("$74.80", W - 44, 690);

    // Thermal Printer Action Button
    fillRoundRect(ctx, 24, 752, (W - 56) / 2, 54, 20, "rgba(249, 115, 22, 0.2)");
    strokeRoundRect(ctx, 24, 752, (W - 56) / 2, 54, 20, "#f97316", 1);
    ctx.textAlign = "center";
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#fb923c";
    ctx.fillText("🖨️ Print KOT", 24 + (W - 56) / 4, 779);

    fillRoundRect(ctx, 24 + (W - 56) / 2 + 8, 752, (W - 56) / 2, 54, 20, "#f97316");
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Collect Cash / Card", 24 + (W - 56) / 2 + 8 + (W - 56) / 4, 779);

  } else if (mockType === "hotel") {
    // === SMART HOTEL PMS SCREEN ===
    fillRoundRect(ctx, 24, 160, W - 48, 130, 24, "rgba(139, 92, 246, 0.15)");
    strokeRoundRect(ctx, 24, 160, W - 48, 130, 24, "#8b5cf6", 1.5);

    ctx.textAlign = "left";
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#c4b5fd";
    ctx.fillText("HOTEL OCCUPANCY TODAY", 44, 192);

    ctx.font = `900 40px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("91%", 44, 236);

    ctx.font = `600 15px ${font}`;
    ctx.fillStyle = "#a78bfa";
    ctx.fillText("44 Rooms Occupied • 4 Available Today", 44, 268);

    // Active Check-in Card
    fillRoundRect(ctx, 24, 306, W - 48, 200, 24, "rgba(30, 41, 59, 0.75)");
    strokeRoundRect(ctx, 24, 306, W - 48, 200, 24, "rgba(255, 255, 255, 0.08)", 1);

    fillRoundRect(ctx, 44, 326, 80, 28, 14, "rgba(139, 92, 246, 0.2)");
    ctx.textAlign = "center";
    ctx.font = `700 13px ${font}`;
    ctx.fillStyle = "#c4b5fd";
    ctx.fillText("VIP GUEST", 84, 340);

    ctx.textAlign = "left";
    ctx.font = `800 24px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Deluxe King Suite 402", 44, 386);

    ctx.font = `600 16px ${font}`;
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("Guest: Jonathan Miller • Stay: 3 Nights", 44, 418);

    ctx.font = `500 14px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Digital Key Card: Synced via BLE • QR Check-in Complete", 44, 448);

    // Action quick buttons
    fillRoundRect(ctx, 44, 464, 140, 32, 16, "#8b5cf6");
    ctx.textAlign = "center";
    ctx.font = `700 14px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Generate Folio", 114, 480);

    // Housekeeping Status Card
    fillRoundRect(ctx, 24, 522, W - 48, 140, 22, "rgba(30, 41, 59, 0.5)");
    ctx.textAlign = "left";
    ctx.font = `700 18px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Housekeeping & Maintenance", 44, 554);
    ctx.font = `500 15px ${font}`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Floor 4 sanitized and ready for guest check-in.", 44, 584);
    ctx.fillText("Room 305 service request: extra towels dispatched.", 44, 610);

  } else if (mockType === "skillcare") {
    // === SKILL CARE LMS SCREEN ===
    fillRoundRect(ctx, 24, 160, W - 48, 100, 22, "rgba(236, 72, 153, 0.15)");
    strokeRoundRect(ctx, 24, 160, W - 48, 100, 22, "#ec4899", 1.5);

    ctx.textAlign = "left";
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#f472b6";
    ctx.fillText("TIMED LIVE EXAMINATION", 44, 192);

    ctx.font = `800 22px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Advanced React Native Architecture", 44, 224);

    // Timer pill
    fillRoundRect(ctx, W - 150, 178, 106, 32, 16, "#ec4899");
    ctx.textAlign = "center";
    ctx.font = `700 14px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("⏱️ 14:32 Left", W - 97, 194);

    // Question Progress Bar
    fillRoundRect(ctx, 24, 276, W - 48, 8, 4, "rgba(255, 255, 255, 0.1)");
    fillRoundRect(ctx, 24, 276, (W - 48) * 0.65, 8, 4, "#ec4899");

    // Question Card
    fillRoundRect(ctx, 24, 300, W - 48, 400, 24, "rgba(30, 41, 59, 0.75)");
    strokeRoundRect(ctx, 24, 300, W - 48, 400, 24, "rgba(255, 255, 255, 0.08)", 1);

    ctx.textAlign = "left";
    ctx.font = `700 15px ${font}`;
    ctx.fillStyle = "#f472b6";
    ctx.fillText("QUESTION 13 OF 20", 44, 332);

    ctx.font = `700 18px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("What is the main performance benefit of React Native", 44, 364);
    ctx.fillText("TurboModules over traditional bridge architecture?", 44, 390);

    // Options
    const opts = [
      { text: "Direct synchronous C++ memory call via JSI", selected: true },
      { text: "Asynchronous JSON string serialization", selected: false },
      { text: "Runs only on background web worker threads", selected: false },
    ];

    opts.forEach((op, idx) => {
      const oy = 420 + idx * 74;
      if (op.selected) {
        fillRoundRect(ctx, 44, oy, W - 88, 62, 16, "rgba(236, 72, 153, 0.2)");
        strokeRoundRect(ctx, 44, oy, W - 88, 62, 16, "#ec4899", 1.5);
      } else {
        fillRoundRect(ctx, 44, oy, W - 88, 62, 16, "rgba(255, 255, 255, 0.04)");
        strokeRoundRect(ctx, 44, oy, W - 88, 62, 16, "rgba(255, 255, 255, 0.06)", 1);
      }

      ctx.beginPath();
      ctx.arc(68, oy + 31, 10, 0, Math.PI * 2);
      ctx.fillStyle = op.selected ? "#ec4899" : "rgba(255,255,255,0.2)";
      ctx.fill();

      ctx.textAlign = "left";
      ctx.font = `600 15px ${font}`;
      ctx.fillStyle = op.selected ? "#ffffff" : "#94a3b8";
      ctx.fillText(op.text, 92, oy + 31);
    });

    // Next Question Button
    fillRoundRect(ctx, 24, 716, W - 48, 54, 20, "#ec4899");
    ctx.textAlign = "center";
    ctx.font = `700 16px ${font}`;
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Submit & Next Question ➔", W / 2, 743);
  }

  // 5. Bottom Mobile Navigation Bar
  fillRoundRect(ctx, 20, H - 110, W - 40, 72, 26, "rgba(15, 23, 42, 0.95)");
  strokeRoundRect(ctx, 20, H - 110, W - 40, 72, 26, "rgba(255, 255, 255, 0.12)", 1);

  const tabs = ["Home", "Browse", "Analytics", "Profile"];
  tabs.forEach((tab, i) => {
    const tx = 20 + i * ((W - 40) / 4) + ((W - 40) / 8);
    const active = i === 0;

    // Glowing dot or icon
    ctx.beginPath();
    ctx.arc(tx, H - 84, active ? 6 : 4, 0, Math.PI * 2);
    ctx.fillStyle = active ? brandColor : "rgba(255, 255, 255, 0.3)";
    ctx.fill();

    ctx.textAlign = "center";
    ctx.font = `600 13px ${font}`;
    ctx.fillStyle = active ? "#ffffff" : "rgba(255, 255, 255, 0.5)";
    ctx.fillText(tab, tx, H - 60);
  });

  // Home Indicator Bar (iPhone/Android gesture bar)
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  fillRoundRect(ctx, W / 2 - 60, H - 24, 120, 5, 3, "rgba(255, 255, 255, 0.5)");
}

export default function PhoneScene({ app, onUnsupported }) {
  const host = useRef(null);
  const api = useRef(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      onUnsupported?.();
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
    camera.position.set(0, 0, 8.8);

    // Lighting setup for sleek metallic & glass aesthetics
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(3, 5, 6);
    scene.add(keyLight);

    const cyanRim = new THREE.PointLight(0x06b6d4, 45, 25);
    cyanRim.position.set(-4, -2, 3);
    scene.add(cyanRim);

    const indigoRim = new THREE.PointLight(0x6366f1, 40, 25);
    indigoRim.position.set(4, -3, 3);
    scene.add(indigoRim);

    /* Phone body geometry (Sleek flagship smartphone proportions) */
    const bodyGeo = new THREE.ExtrudeGeometry(roundedRect(1.68, 3.48, 0.28), {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 5,
      curveSegments: 28,
    });
    bodyGeo.center();
    bodyGeo.computeBoundingBox();
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0b1329,
      metalness: 0.85,
      roughness: 0.25,
    });

    /* Screen (canvas texture) */
    const canvas = document.createElement("canvas");
    canvas.width = 480;
    canvas.height = 1040;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const screenGeo = new THREE.PlaneGeometry(1.56, 3.36);
    const screenMat = new THREE.MeshBasicMaterial({ map: tex });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.z = bodyGeo.boundingBox.max.z + 0.002;

    const phone = new THREE.Group();
    phone.add(new THREE.Mesh(bodyGeo, bodyMat), screen);
    phone.rotation.y = -0.25;
    scene.add(phone);

    /* Screen font */
    const cssFont = getComputedStyle(document.body).getPropertyValue("--font-display").trim();
    const font = cssFont ? `${cssFont}, system-ui, sans-serif` : "system-ui, sans-serif";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const state = { tx: 0, ty: 0, visible: true, raf: 0 };

    const render = () => renderer.render(scene, camera);

    let current = null;
    api.current = {
      redraw(next) {
        current = next;
        drawScreen(canvas, next, font);
        tex.needsUpdate = true;
        render();
      },
    };

    document.fonts?.ready.then(() => current && api.current?.redraw(current));

    /* Animation loop with smooth floating motion and cursor tilt */
    const tick = (t) => {
      state.raf = requestAnimationFrame(tick);
      if (!state.visible) return;
      phone.rotation.y += (-0.25 + state.tx * 0.5 + Math.sin(t / 2000) * 0.1 - phone.rotation.y) * 0.06;
      phone.rotation.x += (state.ty * 0.25 - phone.rotation.x) * 0.06;
      phone.position.y = Math.sin(t / 1400) * 0.07;
      render();
    };
    if (!reduce) state.raf = requestAnimationFrame(tick);

    /* Pointer tilt */
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      state.tx = Math.max(-1, Math.min(1, nx));
      state.ty = Math.max(-1, Math.min(1, ny));
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    /* Resize + intersection observer */
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      render();
    });
    ro.observe(el);

    const io = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
    });
    io.observe(el);

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
      io.disconnect();
      bodyGeo.dispose();
      screenGeo.dispose();
      bodyMat.dispose();
      screenMat.dispose();
      tex.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      api.current = null;
    };
  }, [onUnsupported]);

  useEffect(() => {
    api.current?.redraw(app);
  }, [app]);

  return <div ref={host} className="stage" role="img" aria-label={`3D phone showing ${app.n}`} />;
}