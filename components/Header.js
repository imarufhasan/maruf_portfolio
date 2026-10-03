"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/portfolio";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-container">
        <a href="#top" className="brand" aria-label="Md Maruf Hasan - Home">
          <span className="brand-badge">📱</span>
          <span className="brand-name">
            Maruf<b>.dev</b>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main Navigation">
          <a href="#apps" onClick={() => setMenuOpen(false)}>
            Live Apps
          </a>
          <a href="#showcase" onClick={() => setMenuOpen(false)}>
            3D Showcase
          </a>
          <a href="#architecture" onClick={() => setMenuOpen(false)}>
            Architecture
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            href={profile.resumePdf || "/Md_Maruf_Hasan_Resume.pdf"}
            download="Md_Maruf_Hasan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-outline resume-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
