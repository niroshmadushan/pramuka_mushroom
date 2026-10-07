"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Home page uses transparent/white text nav initially, other pages use dark text nav
  const isDark = pathname !== '/';

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${isDark || isScrolled ? 'navbar-dark' : ''} ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="logo-container">
          <div className="logo-icon">🍄</div>
          <div className="logo-text">
            <div className="logo-title">Pramuka Mushroom</div>
            <div className="logo-subtitle">TRADITIONAL SRI LANKAN FARM</div>
          </div>
        </div>
        
        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/ourstory">Our Story</Link></li>
          <li><Link href="/benefits">Benefits</Link></li>
          <li><Link href="/ourprocess">Our Process</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
        </ul>
        
        <Link href="/#order" className="btn-primary desktop-only">Order fresh</Link>

        {/* Hamburger Icon */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-overlay-header">
          <div className="logo-container" style={{color: 'white'}}>
            <div className="logo-icon">🍄</div>
            <div className="logo-text">
              <div className="logo-title" style={{fontSize: '1.2rem'}}>Pramuka Mushroom</div>
            </div>
          </div>
          <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="mobile-menu-content">
          <ul>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/ourstory" onClick={closeMenu}>Our Story</Link></li>
            <li><Link href="/benefits" onClick={closeMenu}>Benefits</Link></li>
            <li><Link href="/ourprocess" onClick={closeMenu}>Our Process</Link></li>
            <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
          </ul>
          <Link href="/#order" className="btn-primary mobile-order-btn" onClick={closeMenu}>Order fresh</Link>
        </div>
      </div>
    </>
  );
}
