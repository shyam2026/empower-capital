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
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 L70 30 L60 30 L60 50 L80 50 L80 40 L90 50 L80 60 L80 50 L60 50 L60 70 L70 70 L50 90 L30 70 L40 70 L40 50 L20 50 L20 60 L10 50 L20 40 L20 50 L40 50 L40 30 L30 30 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.companyName}>EMPOWER CAPITAL</span>
              <span className={styles.tagline}>Startup Growth Partner</span>
            </div>
          </Link>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/contact" className={styles.navLink}>Contact Us</Link>
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