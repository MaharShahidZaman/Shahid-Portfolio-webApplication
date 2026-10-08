"use client";

import { useEffect, useState } from "react";

const links = ["Home", "About", "Experience", "Skills", "Projects", "Education", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top - 120) - Math.abs(b.boundingClientRect.top - 120));

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateNavbar = () => setScrolled(window.scrollY > 12);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setOpen(false);
  };

  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Shahid Zaman home">
          <span className="brand-mark" aria-hidden="true">SZ</span>
          <span className="brand-name">Shahid Zaman</span>
        </a>
        <button className="menu-button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-controls="primary-links" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i><i></i></button>
        <div id="primary-links" className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;
            return <a key={link} className={isActive ? "active" : undefined} href={`#${sectionId}`} aria-current={isActive ? "page" : undefined} onClick={() => handleLinkClick(sectionId)}>{link}</a>;
          })}
          <a className="resume-link" href="/resume/Shahid_Zaman_FullStackDeveloper.pdf" download>Download Resume <span aria-hidden="true">↓</span></a>
        </div>
      </nav>
    </header>
  );
}
