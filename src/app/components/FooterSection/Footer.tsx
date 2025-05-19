import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  // Menu structure with sections and links
  const menuSections = [
    {
      title: 'Меню',
      links: [
        { name: 'Продукты', href: '/products' },
        { name: 'Команда', href: '/team' },
        { name: 'Кейсы', href: '/cases' },
        { name: 'Технологии', href: '/technologies' },
        { name: 'Контакты', href: '/contacts' }
      ]
    },
    {
      title: 'Комплексные решения',
      links: [
        { name: 'Решения для бизнеса c нуля', href: '/solutions/new-business' },
        { name: 'Решения для масштабируемого бизнеса', href: '/solutions/scalable-business' },
        { name: 'Решения для бизнеса требующего помощи', href: '/solutions/business-help' }
      ]
    },
    {
      title: '',
      links: [
        { name: 'Политика конфиденциальности', href: '/privacy' },
        { name: 'Организация размещения информации', href: '/info-placement' },
        { name: 'Пользовательское соглашение', href: '/terms' }
      ]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link href="/">
              <div className={styles.logo}>
                <Image 
                  src="images/footer-logo.svg" 
                  alt="B-Tools Logo" 
                  width={224} 
                  height={54}
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Menu sections */}
          <div className={styles.menuContainer}>
            {menuSections.map((section, index) => (
              <div key={index} className={styles.menuSection}>
                {section.title && <h3 className={styles.menuTitle}>{section.title}</h3>}
                <ul className={styles.menuLinks}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className={styles.menuItem}>
                      <Link href={link.href} className={styles.menuLink}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
          </div>
          {/* Copyright */}
        <div className={styles.copyright}>
          <p>B-Tools © 2020-2024</p>
        </div>
    </footer>
  );
};

export default Footer;