import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const categories = [
    { id: 1, name: 'Аудит и усиление' },
    { id: 2, name: 'Отдел продаж под ключ' },
    { id: 3, name: 'Удаленное управление' },
    { id: 4, name: 'Найм команды' },
    { id: 5, name: 'Внедрение CRM' },
    { id: 6, name: 'Тренинги' },
    { id: 7, name: 'Экспресс-консультации' },
    { id: 8, name: 'AI-ассистент B-Sales' },
  ];

  // Разделение категорий на два ряда по 4 кнопки
  const firstRowCategories = categories.slice(0, 4);
  const secondRowCategories = categories.slice(4);

  return (
    <section className={styles.heroSection} id="услуги">
      <div className={styles.backgroundContainer}>
        <Image 
          src="images/first-block-bg1.jpg"
          alt="Фон командной работы"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            ПОВЫШАЕМ 
            <span className={styles.iconWrapper}>
              <Image 
                src="images/Frame 533.png"
                alt="Иконка графика"
                width={123}
                height={63.26}
                className={styles.titleIcon}
              />
            </span>
            <br />
            <span className={styles.highlight}>ЭФФЕКТИВНОСТЬ ПРОДАЖ</span>
          </h1>
          
          <div className={styles.categories}>
            <div className={styles.categoryRow}>
              {firstRowCategories.map((category) => (
                <button key={category.id} className={styles.categoryButton}>
                  {category.name}
                </button>
              ))}
            </div>
            <div className={styles.categoryRow}>
              {secondRowCategories.map((category) => (
                <button key={category.id} className={styles.categoryButton}>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className={styles.contactSection}>
            <p className={styles.contactText}>
              Хотите продавать больше?<br />
              Свяжитесь с нами
            </p>
            <div className={styles.buttons}>
              <button className={`${styles.button} ${styles.primaryButton}`}>
                Оставить заявку
              </button>
              <button className={`${styles.button} ${styles.secondaryButton}`}>
                Бесплатная консультация
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;