'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getImagePath } from '@/app/utils/paths.js';
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { useNavigation } from "@/app/hooks/useNavigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Добавляем состояние для отслеживания скролла
  const { handleAnchorNavigation } = useNavigation();
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Функция для отслеживания скролла
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle empty space clicks in the nav menu
  const handleNavBackgroundClick = (e: React.MouseEvent) => {
    // Only stop propagation if clicking directly on the nav element (background)
    // and not on a child element like a link
    if (e.target === e.currentTarget) {
      e.stopPropagation();
    }
  };

  // Close menu when clicking outside and prevent body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) {
        const nav = document.querySelector(`.${styles.nav}`);
        const mobileMenuButton = document.querySelector(`.${styles.mobileMenu} button`);
        
        // Check if the click is outside both the navigation menu AND the mobile menu button
        // Only close if the click is outside both elements
        if (
          (nav && !nav.contains(event.target as Node)) && 
          (mobileMenuButton && !mobileMenuButton.contains(event.target as Node))
        ) {
          setMobileMenuOpen(false);
        }
      }
    };

    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [mobileMenuOpen]);

  // Handle page navigation with menu closing
  const handlePageClick = (path: string) => {
    setMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="images/logo-b-tools.png" alt="B-Tools" />
        </Link>
        
        <nav className={styles.desktopNav}>
          <ul>
            <li>
              <Link href="/услуги" onClick={(e) => handleAnchorNavigation(e, "услуги")}>Услуги</Link>
            </li>
            <li>
              <Link href="/клиенты" onClick={(e) => handleAnchorNavigation(e, "клиенты")}>Клиенты</Link>
            </li>
            <li>
              <Link href="/кейсы" onClick={(e) => handleAnchorNavigation(e, "кейсы")}>Кейсы</Link>
            </li>
            <li>
              <Link href="/инструменты" onClick={(e) => handleAnchorNavigation(e, "инструменты")}>Инструменты</Link>
            </li>
            <li>
              <Link href="/контакты" onClick={(e) => handleAnchorNavigation(e, "контакты")}>Контакты</Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.rightActions}>
          <button className={styles.themeToggle}>
            <img 
              src="images/phone-icon.png" 
              alt="Phone" 
              width={19} 
              height={19} 
              className={styles.phoneIcon}
            />
          </button>
          <button className={styles.langButton}>EN</button>
          <button className={styles.ctaButton}>Оставить заявку</button>
          <button 
            className={styles.mobileMenuButton} 
            onClick={toggleMobileMenu}
            ref={menuButtonRef}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav ref={navRef} onClick={handleNavBackgroundClick}>
            <ul>
              <li>
                <Link href="#услуги" onClick={(e) => handleAnchorNavigation(e, "услуги")}>Услуги</Link>
              </li>
              <li>
                <Link href="#клиенты" onClick={(e) => handleAnchorNavigation(e, "клиенты")}>Клиенты</Link>
              </li>
              <li>
                <Link href="#кейсы" onClick={(e) => handleAnchorNavigation(e, "кейсы")}>Кейсы</Link>
              </li>
              <li>
                <Link href="#инструменты" onClick={(e) => handleAnchorNavigation(e, "инструменты")}>Инструменты</Link>
              </li>
              <li>
                <Link href="#контакты" onClick={(e) => handleAnchorNavigation(e, "контакты")}>Контакты</Link>
              </li>
            </ul>
            <div className={styles.mobileActions}>
              <button className={styles.langButton}>EN</button>
              <button className={styles.ctaButton}>Оставить заявку</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;