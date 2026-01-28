'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <img 
                src="/images/logo-icon.png" 
                alt="Empower Capital Logo" 
                width={44} 
                height={44} 
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.companyName}>EMPOWER CAPITAL</span> 
              <span className={styles.tagline}>Startup Growth Partner</span>
            </div>
          </Link>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            
           {/* ❌ CLOSE BUTTON – MOBILE ONLY */}
              {isMobileMenuOpen && (
                <button
                  className={styles.closeBtn}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              )}

            
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={styles.navLink}>Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={styles.navLink}>About</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={styles.navLink}>Services</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={styles.navLink}>Contact Us</Link>
          </nav>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}