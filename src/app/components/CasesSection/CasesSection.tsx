'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './CasesSection.module.css';

const CasesSection: React.FC = () => {
  // Массив вкладок с кейсами
  const tabsData = [
    {
      id: 1,
      title: 'Агентство недвижимости',
      cases: [
        {
          id: 1,
          image: 'images/CasesImage.jpg',
          altText: 'Строители в желтых жилетах на участке',
          title: 'Как за 3 месяца превратить хаотичные продажи в систему с высокой конверсией',
          description: 'Агентство недвижимости страдало от отсутствия структурированного подхода к продажам, информационного хаоса и недостатка формализованных скриптов продаж и процессов. Внедрили продуманную структуру, что позволило систематизировать бизнес-процессы, обеспечить прирост, а качественную аналитику по выстроенным коммуникациям на разных этапах.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'Бизнес получил удобный инструмент для централизованного хранения данных о клиентах'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Обработка сделок стала легче и быстрее, что в разы повысило конверсию из заявок в сделки'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'Стратегические решения стали приниматься на основе данных и показателей, а не ощущений и предположений'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Всего через месяц владелец был готов масштабироваться и попросил нас создать улучшенный отдел продаж'
            }
          ]
        }
      ]
    },
    // Остальные вкладки с данными (скопированы из вашего кода)
    {
      id: 2,
      title: 'Название компании',
        cases: [
          {
          id: 2,
          image: 'images/CasesImage.jpg',
          altText: 'Строители в желтых жилетах на участке',
          title: 'Как за 3 месяца превратить хаотичные продажи в систему с высокой конверсией',
          description: 'Агентство недвижимости страдало от отсутствия структурированного подхода к продажам, информационного хаоса и недостатка формализованных скриптов продаж и процессов. Внедрили продуманную структуру, что позволило систематизировать бизнес-процессы, обеспечить прирост, а качественную аналитику по выстроенным коммуникациям на разных этапах.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'Бизнес получил удобный инструмент для централизованного хранения данных о клиентах'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Обработка сделок стала легче и быстрее, что в разы повысило конверсию из заявок в сделки'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'Стратегические решения стали приниматься на основе данных и показателей, а не ощущений и предположений'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Всего через месяц владелец был готов масштабироваться и попросил нас создать улучшенный отдел продаж'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Яркий проект',
        cases: [
          {
          id: 3,
          image: 'images/CasesImage.jpg',
          altText: 'Строители в желтых жилетах на участке',
          title: 'Как за 3 месяца превратить хаотичные продажи в систему с высокой конверсией',
          description: 'Агентство недвижимости страдало от отсутствия структурированного подхода к продажам, информационного хаоса и недостатка формализованных скриптов продаж и процессов. Внедрили продуманную структуру, что позволило систематизировать бизнес-процессы, обеспечить прирост, а качественную аналитику по выстроенным коммуникациям на разных этапах.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'Бизнес получил удобный инструмент для централизованного хранения данных о клиентах'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Обработка сделок стала легче и быстрее, что в разы повысило конверсию из заявок в сделки'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'Стратегические решения стали приниматься на основе данных и показателей, а не ощущений и предположений'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Всего через месяц владелец был готов масштабироваться и попросил нас создать улучшенный отдел продаж'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Название компании',
        cases: [
          {
          id: 4,
          image: 'images/CasesImage.jpg',
          altText: 'Строители в желтых жилетах на участке',
          title: 'Как за 3 месяца превратить хаотичные продажи в систему с высокой конверсией',
          description: 'Агентство недвижимости страдало от отсутствия структурированного подхода к продажам, информационного хаоса и недостатка формализованных скриптов продаж и процессов. Внедрили продуманную структуру, что позволило систематизировать бизнес-процессы, обеспечить прирост, а качественную аналитику по выстроенным коммуникациям на разных этапах.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'Бизнес получил удобный инструмент для централизованного хранения данных о клиентах'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Обработка сделок стала легче и быстрее, что в разы повысило конверсию из заявок в сделки'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'Стратегические решения стали приниматься на основе данных и показателей, а не ощущений и предположений'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Всего через месяц владелец был готов масштабироваться и попросил нас создать улучшенный отдел продаж'
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Название компании',
      cases: [{
          id: 5,
          image: 'images/CasesImage.jpg',
          altText: 'Строители в желтых жилетах на участке',
          title: 'Как за 3 месяца превратить хаотичные продажи в систему с высокой конверсией',
          description: 'Агентство недвижимости страдало от отсутствия структурированного подхода к продажам, информационного хаоса и недостатка формализованных скриптов продаж и процессов. Внедрили продуманную структуру, что позволило систематизировать бизнес-процессы, обеспечить прирост, а качественную аналитику по выстроенным коммуникациям на разных этапах.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'Бизнес получил удобный инструмент для централизованного хранения данных о клиентах'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Обработка сделок стала легче и быстрее, что в разы повысило конверсию из заявок в сделки'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'Стратегические решения стали приниматься на основе данных и показателей, а не ощущений и предположений'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Всего через месяц владелец был готов масштабироваться и попросил нас создать улучшенный отдел продаж'
            }
          ]
        }]
    },
  ];
  
  // Состояние для активной вкладки
  const [activeTab, setActiveTab] = useState(1);
  // Состояние для контроля анимации
  const [isAnimating, setIsAnimating] = useState(false);
  // Состояние для направления анимации
  const [direction, setDirection] = useState(0);
  
  // Референсы для контейнера табов и активной кнопки
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabButtonRef = useRef<HTMLButtonElement>(null);
  
  // Получаем активные данные таба
  const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];
  
  // Функция для плавного скролла к активной вкладке
  const scrollToActiveTab = () => {
    if (tabsContainerRef.current && activeTabButtonRef.current) {
      // Получаем размеры и позиции
      const tabsContainer = tabsContainerRef.current;
      const activeTabButton = activeTabButtonRef.current;
      
      const containerWidth = tabsContainer.clientWidth;
      const tabWidth = activeTabButton.clientWidth;
      const tabLeft = activeTabButton.offsetLeft;
      
      // Вычисляем центральную позицию для активной вкладки
      const centerPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      // Ограничиваем прокрутку, чтобы не выходить за границы контейнера
      const maxScroll = tabsContainer.scrollWidth - containerWidth;
      const newOffset = Math.max(0, Math.min(centerPosition, maxScroll));
      
      // Устанавливаем новое смещение с плавной анимацией
      tabsContainer.scrollTo({
        left: newOffset,
        behavior: 'smooth'
      });
    }
  };
  
  // Обработчик для переключения вкладок
  const handleTabClick = (tabId: number) => {
    if (tabId !== activeTab && !isAnimating) {
      // Устанавливаем направление анимации
      setDirection(tabId > activeTab ? 1 : -1);
      // Устанавливаем флаг анимации
      setIsAnimating(true);
      // Устанавливаем новую активную вкладку
      setActiveTab(tabId);
    }
  };
  
  // Переход к следующей вкладке
  const nextTab = () => {
    if (!isAnimating) {
      const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);
      const nextIndex = (currentIndex + 1) % tabsData.length;
      
      setDirection(1);
      setIsAnimating(true);
      setActiveTab(tabsData[nextIndex].id);
    }
  };
  
  // Переход к предыдущей вкладке
  const prevTab = () => {
    if (!isAnimating) {
      const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);
      const prevIndex = (currentIndex - 1 + tabsData.length) % tabsData.length;
      
      setDirection(-1);
      setIsAnimating(true);
      setActiveTab(tabsData[prevIndex].id);
    }
  };
  
  // Эффект для скролла к активной вкладке при её изменении
  useEffect(() => {
    scrollToActiveTab();
  }, [activeTab]);
  
  // Эффект для сброса состояния анимации
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Длительность анимации
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);
  
  return (
    <section className={styles.section} id="cases-section">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>НАШИ КЕЙСЫ</h2>
          <p className={styles.subtitle}>Это небольшая часть наших проектов, которыми мы гордимся</p>
        </div>
        
        {/* Вкладки с референсами для анимации */}
        <div ref={tabsContainerRef} className={styles.tabs}>
          {tabsData.map(tab => (
            <button
              key={tab.id}
              ref={tab.id === activeTab ? activeTabButtonRef : null}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        {/* Карусель с контентом и анимацией */}
        <div className={styles.carouselContainer}>
          <div 
            className={`
              ${styles.carouselWrapper} 
              ${isAnimating ? (direction > 0 ? styles.slideInRight : styles.slideInLeft) : ''}
            `}
          >
            {activeTabData.cases.map(caseItem => (
              <div key={caseItem.id} className={styles.carouselSlide}>
                <div className={styles.caseContent}>
                  {/* Левая секция: изображение и текст */}
                  <div className={styles.caseLeftSection}>
                    <div className={styles.caseImageContainer}>
                      <img
                        src={caseItem.image}
                        alt={caseItem.altText}
                        className={styles.caseImage}
                      />
                    </div>
                    <div className={styles.caseCategory}>
                      {activeTabData.title}
                    </div>
                    <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                    <p className={styles.caseDescription}>{caseItem.description}</p>
                  </div>
                  
                  {/* Правая секция: сетка карточек */}
                  <div className={styles.statsGridContainer}>
                    <div className={styles.statsGrid}>
                      {caseItem.stats.map(stat => (
                        <div key={stat.id} className={styles.statItem}>
                          <div className={styles.statIconContainer}>
                            <img
                              src={stat.icon}
                              alt=""
                              className={styles.statIcon}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <p className={styles.statText}>{stat.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Навигация карусели */}
        <div className={styles.carouselNavigation}>
          <button
            className={styles.navButton}
            onClick={prevTab}
            disabled={isAnimating}
            aria-label="Предыдущая вкладка"
          >
            &lt;
          </button>
          
          <div className={styles.dots}>
            {tabsData.map(tab => (
              <button
                key={tab.id}
                className={`${styles.dot} ${activeTab === tab.id ? styles.activeDot : ''}`}
                onClick={() => handleTabClick(tab.id)}
                aria-label={`Перейти к вкладке ${tab.title}`}
              />
            ))}
          </div>
          
          <button
            className={styles.navButton}
            onClick={nextTab}
            disabled={isAnimating}
            aria-label="Следующая вкладка"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;