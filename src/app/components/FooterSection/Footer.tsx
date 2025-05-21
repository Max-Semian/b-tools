import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  // Данные для первой колонки (логотип)
  const logoData = {
    src: "images/logo-b-tools.png",
    alt: "B-Tools Logo",
    width: 224,
    height: 54
  };

  // Данные для второй колонки (Меню и Комплексные решения)
  const firstColumnLinks = [
    { 
      title: 'Меню',
      items: [
        { name: 'Продукты', href: '/products' },
        { name: 'Команда', href: '/team' },
        { name: 'Кейсы', href: '/cases' },
        { name: 'Технологии', href: '/technologies' },
        { name: 'Контакты', href: '/contacts' }
      ]
    },
    { 
      title: 'Комплексные решения',
      items: [
        { name: 'Решение для бизнеса c нуля', href: '/solutions/new-business' },
        { name: 'Решение для масштабируемого бизнеса', href: '/solutions/scalable-business' },
        { name: 'Решение для бизнеса требующего помощи', href: '/solutions/business-help' }
      ]
    }
  ];

  // Данные для третьей колонки (Правовая информация)
  const legalLinks = [
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Основания размещения информации', href: '/info-placement' },
    { name: 'Пользовательское соглашение', href: '/terms' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Колонка 1: Логотип */}
          <div className={styles.logoContainer}>
            <Link href="/">
              <div className={styles.logo}>
                <Image 
                  src={logoData.src}
                  alt={logoData.alt}
                  width={logoData.width}
                  height={logoData.height}
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Колонка 2: Меню и Комплексные решения */}
          <div className={styles.menuColumn}>
            {firstColumnLinks.map((section, index) => (
              <div key={index} className={styles.menuSection}>
                <h3 className={styles.menuTitle}>{section.title}</h3>
                <ul className={styles.menuLinks}>
                  {section.items.map((link, linkIndex) => (
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
          
          {/* Колонка 3: Правовая информация */}
          <div className={styles.legalColumn}>
            <div className={styles.menuSection}>
              <ul className={styles.menuLinks}>
                {legalLinks.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.menuItem}>
                    <Link href={link.href} className={styles.menuLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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