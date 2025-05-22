
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './IntroSection.module.css';

const CARD_DATA = [
  {
    id: 1,
    icon: "images/news_line.svg",
    title: "Продающий эксперт",
    label: "Мастер",
    list: [
      "хочу сам закрывать много сделок",
      "хочу автоматизировать обработку чатов",
    ],
    note: "Разработаем стратегию, напишем скрипты продаж, проведем тренинги, подключим и обучим AI-ассистента"
  },
  {
    id: 2,
    icon: "images/briefcase_2_line.svg",
    title: "Молодая компания",
    label: "Новичок",
    list: [
      "хочу делегировать продажи",
      "хочу систематизировать процессы",
      "нужна помощь в управлении отделом продаж"
    ],
    note: "Построим систему продаж под ключ, внедрим CRM, наймем сильных продавцов, а вас обучим техникам эффективного управления либо предоставим своего РОПа в аренду"
  },
  {
    id: 3,
    icon: "images/building_5_line.svg",
    title: "Зрелая компания с отделом продаж",
    label: "Босс",
    list: [
      "хочу увидеть точки роста продаж",
      "нужна автоматизация процессов",
      "нужно быстро масштабировать продажи"
    ],
    note: "Проведем комплексный аудит и усилим систему продаж, добавим или заменим сотрудников, проведем тренинги и автоматизируем процессы"
  },
  {
    id: 4,
    icon: "images/building_5_line.svg",
    title: "Нужна экстренная помощь!",
    label: "ЧП",
    list: [
      "компания выходит на новый рынок",
      "языковой барьер мешает масштабироваться",
      "команда уходит на удаленку",
      "экстренно изменился продукт"
    ],
    note: "",
    emergency: true
  }
];

const IntroSection = () => {
  // Основные состояния
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [visibleCards, setVisibleCards] = useState(4);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Ссылки для работы с DOM и состояниями
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const wheelDeltaRef = useRef(0);
  const lastWheelTimeRef = useRef(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Константы для настройки поведения
  const WHEEL_THRESHOLD = 50; // мс для предотвращения множественных срабатываний
  const WHEEL_DISTANCE = 40; // расстояние прокрутки для смены слайда
  const SWIPE_THRESHOLD = 50; // минимальное расстояние свайпа
  const AUTO_SCROLL_INTERVAL = 5000; // интервал автопрокрутки в мс
  
  // Все карточки (дублируем для бесконечной карусели)
  const allCards = [...CARD_DATA, ...CARD_DATA];
  
  // Инициализация и определение размеров
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const updateDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      // Устанавливаем количество видимых карточек в зависимости от ширины экрана
      if (width < 768) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(2);
      else if (width < 1400) setVisibleCards(3);
      else setVisibleCards(4);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Логика для бесконечной карусели
  useEffect(() => {
    if (currentIndex >= CARD_DATA.length) {
      const timer = setTimeout(() => {
        setTransition(false);
        setCurrentIndex(currentIndex - CARD_DATA.length);
      }, 300);
      return () => clearTimeout(timer);
    }
    
    if (currentIndex < 0) {
      const timer = setTimeout(() => {
        setTransition(false);
        setCurrentIndex(currentIndex + CARD_DATA.length);
      }, 300);
      return () => clearTimeout(timer);
    }
    
    // Включаем анимацию после смены позиции
    if (!transition) {
      const timer = setTimeout(() => setTransition(true), 10);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, transition]);
  
  // Основные функции навигации
  const nextCard = () => setCurrentIndex(prev => prev + 1);
  const prevCard = () => setCurrentIndex(prev => prev - 1);
  
  // Функция для определения типа устройства ввода
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };
  
  // Обработка wheel событий (только для тачпадов, исключаем обычные мыши)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Проверяем, что это тачпад, а не обычная мышь
      // Тачпады обычно генерируют более плавные значения deltaY и deltaX
      const isTouchpad = Math.abs(e.deltaY) < 50 && Math.abs(e.deltaX) > 0;
      
      // Также проверяем наличие горизонтальной прокрутки (характерно для тачпадов)
      const hasHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      
      // Если это не тачпад, не обрабатываем событие
      if (!isTouchpad && !hasHorizontalScroll) {
        return;
      }
      
      e.preventDefault(); // Предотвращаем стандартную прокрутку страницы
      
      const now = Date.now();
      // Накапливаем дельту прокрутки для плавности (используем deltaX для горизонтальной прокрутки)
      wheelDeltaRef.current += e.deltaX || e.deltaY;
      
      // Проверяем, достаточно ли времени прошло с последнего переключения
      // и достаточное ли расстояние прокрутки накоплено
      if (Math.abs(wheelDeltaRef.current) > WHEEL_DISTANCE && 
          now - lastWheelTimeRef.current > WHEEL_THRESHOLD) {
        
        if (wheelDeltaRef.current > 0) {
          nextCard();
        } else {
          prevCard();
        }
        
        // Сбрасываем значения после переключения
        wheelDeltaRef.current = 0;
        lastWheelTimeRef.current = now;
      }
      
      // Сбрасываем накопленную дельту, если прошло много времени без действий
      if (now - lastWheelTimeRef.current > 500) {
        wheelDeltaRef.current = 0;
      }
    };
    
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);
  
  // Обработчики touch-событий для мобильных устройств
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    
    // Останавливаем автопрокрутку при взаимодействии пользователя
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    
    // Если свайп достаточно сильный, меняем слайд
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        nextCard();
      } else {
        prevCard();
      }
      touchStartRef.current = null;
    }
  };
  
  // Автопрокрутка
  useEffect(() => {
    // Запускаем автопрокрутку
    autoScrollIntervalRef.current = setInterval(() => {
      nextCard();
    }, AUTO_SCROLL_INTERVAL);
    
    // Останавливаем при взаимодействии пользователя
    const carousel = carouselRef.current;
    const stopAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
    
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoScroll);
      carousel.addEventListener('touchstart', stopAutoScroll);
    }
    
    // Очищаем интервал при размонтировании
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      
      if (carousel) {
        carousel.removeEventListener('mouseenter', stopAutoScroll);
        carousel.removeEventListener('touchstart', stopAutoScroll);
      }
    };
  }, []);
  
  // Обработка кнопок клавиатуры
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevCard();
      else if (e.key === 'ArrowRight') nextCard();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <section className={styles.section} id="intro-section">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>ДАВАЙТЕ ПОЗНАКОМИМСЯ</h2>
          <p className={styles.subtitle}>Какое утверждение больше подходит вашей компании?</p>
        </div>
        
        <div 
          className={styles.carouselContainer}
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: windowWidth <= 480
                ? `translateX(-${currentIndex * 100}%)`
                : `translateX(-${currentIndex * 460}px)`,
              transition: transition ? 'transform 0.3s ease' : 'none'
            }}
          >
            {allCards.map((card, index) => (
              <div 
                key={`card-${card.id}-${index}`} 
                className={styles.carouselItem}
              >
                <div className={`${styles.card} ${card.emergency ? styles.emergencyCard : ''}`}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardLabel}>{card.label}</span>
                    <div className={styles.iconContainer}>
                      <Image 
                        src={card.icon} 
                        alt={card.title} 
                        width={24} 
                        height={24} 
                        className={styles.icon}
                      />
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <ul className={styles.cardList}>
                    {card.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {card.note && <p className={styles.cardNote}>{card.note}</p>}
                  <button 
                    className={`${styles.cardButton} ${card.emergency ? styles.emergencyButton : ''}`}
                  >
                    Это про нас
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Навигация */}
        <div className={styles.navigation}>
          <button 
            className={styles.navButton} 
            onClick={prevCard}
            aria-label="Предыдущая карточка"
          >
            &lt;
          </button>
          
          <div className={styles.dots}>
            {CARD_DATA.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentIndex % CARD_DATA.length === index ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Перейти к карточке ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className={styles.navButton} 
            onClick={nextCard}
            aria-label="Следующая карточка"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;