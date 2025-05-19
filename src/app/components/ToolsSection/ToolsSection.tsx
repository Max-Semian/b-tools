'use client';

import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './ToolsSection.module.css';

const ToolsSection: React.FC = () => {
  // Данные об инструментах с обновленными изображениями
  const tools = [
    {
      id: 1,
      name: 'Bitrix 24',
      logo: '/images/bitrix24.svg', // Убедитесь, что файл существует
      description: 'Многозадачность и интеграция с командными коммуникациями',
      isFeatured: true,
      hasButton: true,
      gridArea: 'bitrix'
    },
    {
      id: 2,
      name: 'Kommo',
      logo: '/images/kommo1.svg', // Обновленный красный логотип
      description: 'Продвинутые воронки продаж и кастомизация клиентских путей',
      isFeatured: true,
      hasButton: true,
      gridArea: 'kommo'
    },
    {
      id: 3,
      name: 'Albato',
      logo: '/images/albato1.svg', // Красный логотип
      description: '',
      isFeatured: true,
      hasButton: false,
      gridArea: 'albato'
    },
    {
      id: 4,
      name: 'Zadarma',
      logo: '/images/zadarma.svg', // Красный логотип
      description: 'Интеграция IP-телефонии',
      isFeatured: true,
      hasButton: false,
      gridArea: 'zadarma'
    },
    {
      id: 5,
      name: 'KeepinCRM',
      logo: '/images/keepincrm.svg', // Красный логотип
      description: '',
      isFeatured: true,
      hasButton: false,
      gridArea: 'keepincrm'
    },
    {
      id: 6,
      name: 'KeyCRM',
      logo: '/images/keycrm.svg', // Красный логотип
      description: '',
      isFeatured: false,
      hasButton: false,
      gridArea: 'keycrm'
    },
    {
      id: 7,
      name: 'Perfectum',
      logo: '/images/perfectum.svg', // Красный логотип
      description: '',
      isFeatured: false,
      hasButton: false,
      gridArea: 'perfectum'
    },
    {
      id: 8,
      name: 'OneBox',
      logo: '/images/onebox.svg', // Красный логотип
      description: '',
      isFeatured: false,
      hasButton: false,
      gridArea: 'onebox'
    },
    {
      id: 9,
      name: 'ZOHO CRM',
      logo: '/images/zoho.svg', // Красный логотип
      description: '',
      isFeatured: false,
      hasButton: false,
      gridArea: 'zoho'
    }
  ];

  return (
  <section className={styles.toolsSection} id="tools">
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>ИНСТРУМЕНТЫ</h2>
        <div className={styles.circleIcon}>
          <img 
            src="/images/tools.png"
            alt="Инструменты"
            width={102}
            height={56}
            className={styles.icon}
          />
        </div>
      </div>
      
      <p className={styles.subtitle}>
        Мы помогаем подключать инструменты, которые делают продажи системными
      </p>
      
      <div className={styles.toolsGrid}>
        {/* Bitrix 24 */}
        <div key={tools[0].id} className={`${styles.toolCard} ${styles.bitrix}`}>
          <div className={styles.toolLogo}>
            <Image 
              src={tools[0].logo}
              alt={tools[0].name}
              width={191}
              height={158}
              className={styles.logoImage}
            />
          </div>
          
          {tools[0].description && (
            <p className={styles.toolDescription}>{tools[0].description}</p>
          )}
          
          {tools[0].hasButton && (
            <button className={styles.detailButton}>Подробнее</button>
          )}
        </div>
        
        {/* Kommo */}
        <div key={tools[1].id} className={`${styles.toolCard} ${styles.kommo}`}>
          <div className={styles.toolLogo}>
            <Image 
              src={tools[1].logo}
              alt={tools[1].name}
              width={211}
              height={158}
              className={styles.logoImage}
            />
          </div>
          
          <div className={styles.toolContent}>
            <h3 className={styles.toolName}>{tools[1].name}</h3>
            {tools[1].description && (
              <p className={styles.toolDescription}>{tools[1].description}</p>
            )}
            
            {tools[1].hasButton && (
              <button className={styles.detailButton}>Подробнее</button>
            )}
          </div>
        </div>
        
        {/* Albato */}
        <div key={tools[2].id} className={`${styles.toolCard} ${styles.albato}`}>
          <div className={styles.toolLogo}>
            <Image 
              src={tools[2].logo}
              alt={tools[2].name}
              width={101}
              height={92}
              className={styles.logoImage}
            />
          </div>
          
          <h3 className={styles.toolName}>{tools[2].name}</h3>
        </div>
        
        {/* Zadarma */}
        <div key={tools[3].id} className={`${styles.toolCard} ${styles.zadarma}`}>
          <div className={styles.toolLogo}>
            <Image 
              src={tools[3].logo}
              alt={tools[3].name}
              width={118}
              height={120}
              className={styles.logoImage}
            />
          </div>
          
          <div className={styles.toolContent}>
            <h3 className={styles.toolName}>{tools[3].name}</h3>
            {tools[3].description && (
              <p className={styles.toolDescription}>{tools[3].description}</p>
            )}
          </div>
        </div>
        
        {/* KeepinCRM */}
        <div key={tools[4].id} className={`${styles.toolCard} ${styles.keepincrm}`}>
          <div className={styles.toolLogo}>
            <Image 
              src={tools[4].logo}
              alt={tools[4].name}
              width={123}
              height={109}
              className={styles.logoImage}
            />
          </div>
          
          <h3 className={styles.toolName}>{tools[4].name}</h3>
        </div>
        
        {/* Нижний ряд карточек */}
        <div className={styles.bottomRow}>
          {/* KeyCRM */}
          <div key={tools[5].id} className={`${styles.toolCard} ${styles.keycrm}`}>
            <div className={styles.toolLogo}>
              <Image 
                src={tools[5].logo}
                alt={tools[5].name}
                width={78}
                height={79}
                className={styles.logoImage}
              />
            </div>
            
            <h3 className={styles.toolName}>{tools[5].name}</h3>
          </div>
          
          {/* Perfectum */}
          <div key={tools[6].id} className={`${styles.toolCard} ${styles.perfectum}`}>
            <div className={styles.toolLogo}>
              <Image 
                src={tools[6].logo}
                alt={tools[6].name}
                width={79}
                height={79}
                className={styles.logoImage}
              />
            </div>
            
            <h3 className={styles.toolName}>{tools[6].name}</h3>
          </div>
          
          {/* OneBox */}
          <div key={tools[7].id} className={`${styles.toolCard} ${styles.onebox}`}>
            <div className={styles.toolLogo}>
              <Image 
                src={tools[7].logo}
                alt={tools[7].name}
                width={78}
                height={79}
                className={styles.logoImage}
              />
            </div>
            
            <h3 className={styles.toolName}>{tools[7].name}</h3>
          </div>
          
          {/* ZOHO CRM */}
          <div key={tools[8].id} className={`${styles.toolCard} ${styles.zoho}`}>
            <div className={styles.toolLogo}>
              <Image 
                src={tools[8].logo}
                alt={tools[8].name}
                width={101}
                height={92}
                className={styles.logoImage}
              />
            </div>
            
            <h3 className={styles.toolName}>{tools[8].name}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default ToolsSection;