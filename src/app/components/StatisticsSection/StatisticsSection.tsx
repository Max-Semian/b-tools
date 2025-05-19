'use client';

import React from 'react';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './StatisticsSection.module.css';

const StatisticsSection: React.FC = () => {
  const stats = [
    {
      id: 1,
      value: '3',
      suffix_A: 'года',
      description: 'На рынке Польши'
    },
    {
      id: 2,
      value: '>50',
      description: 'Успешных проектов'
    },
    {
      id: 3,
      value: '>100',
      description: 'Начатых сделок'
    },
    {
      id: 4,
      suffix_B: 'до',
      value: '200%',
      description: 'Рост конверсий продавцов'
    },
    {
      id: 5,
      suffix_B: 'до',
      value: '550%',
      description: 'Рост выручки у клиентов'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.quoteContainer}>
          <blockquote className={styles.quote}>
            "В работе мы опираемся на данные, а не на ощущения. 
            <br />Наши цифры говорят сами за себя"
          </blockquote>
          
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <img 
                src="/images/statisticsImage.png" 
                alt="Витольд Ануш" 
                className={styles.authorImage}
                onError={(e) => {
                  const imgElement = e.currentTarget as HTMLImageElement;
                  imgElement.style.display = 'none';
                  
                  // Создаем элемент для инициалов
                  const initialsElement = document.createElement('div');
                  initialsElement.style.width = '32px';
                  initialsElement.style.height = '32px';
                  initialsElement.style.backgroundColor = '#E4002B';
                  initialsElement.style.borderRadius = '50%';
                  initialsElement.style.display = 'flex';
                  initialsElement.style.alignItems = 'center';
                  initialsElement.style.justifyContent = 'center';
                  initialsElement.style.color = 'white';
                  initialsElement.style.fontWeight = 'bold';
                  initialsElement.textContent = 'ВА';
                  
                  // Добавляем элемент с инициалами вместо изображения
                  if (imgElement.parentElement) {
                    imgElement.parentElement.appendChild(initialsElement);
                  }
                }}
              />
            </div>
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>— Витольд Ануш</p>
              <p className={styles.authorPosition}>B-Tools</p>
            </div>
          </div>
        </div>
        
        <div className={styles.statisticsContainer}>
          {stats.map(stat => (
            <div key={stat.id} className={styles.statItem}>
              {stat.suffix_B && (
                <div className={styles.statValueContainer}>
                  <span className={styles.statSuffixB}>{stat.suffix_B}</span>
                  <span className={styles.statValue}>{stat.value}</span>
                </div>
              )}
              {!stat.suffix_B && (
                <h3 className={styles.statValue}>
                  {stat.value}
                  {stat.suffix_A && <span className={styles.statSuffixA}>{' ' + stat.suffix_A}</span>}
                </h3>
              )}
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;