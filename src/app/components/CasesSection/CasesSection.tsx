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
      title: 'Риэлторская компания',
        cases: [
          {
          id: 2,
          image: 'images/CasesImage.jpg',
          altText: 'Совещание в офисе, где менеджеры работают за ноутбуками',
          title: 'Как перестроить хаотичный отдел продаж в эффективную систему всего за 3 месяца',
          description: 'Риэлторская компания сталкивалась с отсутствием CRM, хаосом в переписках и необученными менеджерами, что приводило к потере заявок и низкой конверсии. Мы провели аудит, выстроили структуру, внедрили CRM и систему контроля, наняли и обучили сотрудников. Через 3 месяца продажи стали управляемыми и эффективными.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'Конверсия заявок в сделки выросла в 2,5 раза'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Менеджеры стали самостоятельными, владельцы вышли из операционки'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'CRM исключила потери заявок и повысила прозрачность'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Контроль и скрипты обеспечили выполнение планов'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Монтаж зимних садов',
        cases: [
          {
          id: 3,
          image: 'images/CasesImage.jpg',
          altText: 'Фото зимнего сада или террасы с навесом в современном стиле',
          title: 'Как превратить поток лидов в реальный рост продаж и загрузку бригад за 3 месяца',
          description: 'Компания по продаже зимних садов теряла заявки, работала без системы и с одним менеджером. Мы построили отдел продаж с нуля: внедрили CRM, наняли сотрудников, провели обучение, внедрили контроль и мотивацию. Это позволило полностью загрузить монтажные бригады и увеличить конверсию в 4 раза.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'Рост продаж и полная загрузка двух монтажных бригад'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Конверсия выросла в 4 раза'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'CRM улучшила аналитику и исключила потери заявок'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Сотрудники работают по стандартам, отдел продаж стал управляемым'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Бухгалтерская компания',
        cases: [
          {
          id: 4,
          image: 'images/CasesImage.jpg',
          altText: 'Современный офис с графиками и планёркой команды',
          title: 'Как выйти из убытков и выстроить эффективный отдел продаж всего за 3 месяца',
          description: 'Компания по легализации и бухгалтерскому обслуживанию ежемесячно генерировала убытки, работала с одним неэффективным продавцом и хаосом в CRM. Мы провели аудит, рассчитали точку безубыточности, разработали мотивацию, внедрили CRM и KPI, наняли и обучили нового сотрудника, заменив старого. Уже через 3 месяца продажи выросли в 4 раза, компания вышла на прибыль.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'В первый месяц новый сотрудник перевыполнил план и закрыл точку безубыточности'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Через 3 месяца продажи выросли в 4 раза, через 5 месяцев — в 5,5 раза'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'Отдел вырос до 4 сотрудников, проведены 3 тренинга по продажам'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Владелец вышел на прибыль и запустил новый проект'
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Студия аппаратного массажа',
      cases: [{
          id: 5,
          image: 'images/CasesImage.jpg',
          altText: 'Интерьер уютного массажного кабинета или процедуры',
          title: 'Как вывести студию из кризиса и обеспечить 100% загрузку за счёт обучения и мотивации',
          description: 'Студия аппаратного массажа работала в убыток, владельцы были в состоянии выгорания, команда — демотивирована. Мы разработали скрипты, провели тренинги для менеджеров и массажистов, заменили маркетолога и внедрили персональные мотивации. Результатом стали 100% загрузка, открытие собственного салона и выход владельца из кризиса.',
          stats: [
            {
              id: 1,
              icon: 'images/Frame 553.svg',
              text: 'Загрузка выросла до 100% на месяц вперёд'
            },
            {
              id: 2,
              icon: 'images/Frame 554.svg',
              text: 'Открыт собственный салон, бизнес вышел из минуса'
            },
            {
              id: 3,
              icon: 'images/Frame 555.svg',
              text: 'Внедрены персональные рычаги мотивации для каждого сотрудника'
            },
            {
              id: 4,
              icon: 'images/Frame 453.svg',
              text: 'Владелец восстановил энергию и уехал на отдых'
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