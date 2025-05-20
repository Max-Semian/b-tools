'use client';

import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import Image from 'next/image';
import styles from './IntroSection.module.css';

const IntroSection: React.FC = () => {
  // Массив карточек
  const cards = [
    {
      id: 1,
      icon: "images/news_line.svg",
      title: "Продающий эксперт",
      label: "Новичок",
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
      label: "Босс",
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
      label: "ЧП",
      list: [
        "хочу увидеть точки роста продаж",
        "хочу усилить команду продаж",
        "нужно повысить конверсии лидов",
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

  // Дублируем карточки для бесконечной карусели
  const allCards = [...cards, ...cards];
  
  // Состояние для текущей карточки
  const [currentIndex, setCurrentIndex] = useState(0);
  // Состояние для плавного перехода в CSS
  const [transition, setTransition] = useState(true);
  // Состояние для количества видимых карточек
  const [visibleCards, setVisibleCards] = useState(4);
  // Состояние для обработки свайпа
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  // Для обработки прокрутки колесом и тачпадом
  const [lastWheelTime, setLastWheelTime] = useState(0);
  const wheelThreshold = 100; // Время в мс для предотвращения многократного срабатывания
  const wheelDistance = 60; // Необходимое расстояние прокрутки для смены слайда
  const wheelDeltaTotal = useRef(0); // Сохраняем общее расстояние прокрутки
  // Минимальное расстояние свайпа для перелистывания карточки
  const minSwipeDistance = 50;
  
  // Ссылка на контейнер карусели
  const carouselRef = useRef<HTMLDivElement | null>(null);
  
  // Обновляем размеры при монтировании и изменении окна
  useEffect(() => {
    const updateDimensions = () => {
      // Определяем количество видимых карточек в зависимости от ширины
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1400) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Логика для бесконечной карусели
  useEffect(() => {
    // Если дошли до конца, перепрыгиваем к началу
    if (currentIndex >= cards.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(currentIndex - cards.length);
      }, 300);
    }
    
    // Если дошли до начала, перепрыгиваем к концу
    if (currentIndex < 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(currentIndex + cards.length);
      }, 300);
    }
  }, [currentIndex, cards.length]);
  
  // Включаем анимацию после смены позиции
  useEffect(() => {
    if (!transition) {
      const timeout = setTimeout(() => {
        setTransition(true);
      }, 10);
      
      return () => clearTimeout(timeout);
    }
  }, [transition]);
  
  // Перемещение карусели
  const nextCard = () => {
    setCurrentIndex(prev => prev + 1);
  };
  
  const prevCard = () => {
    setCurrentIndex(prev => prev - 1);
  };
  
// Создаем ссылку на функцию-обработчик
const handleWheelRef = useRef<EventListener | null>(null);

// В эффекте сохраняем ссылку на функцию
useEffect(() => {
  const currentCarousel = carouselRef.current;
  
  if (!currentCarousel) return;
  
  // Сохраняем значения в переменные
  const threshold = wheelThreshold;
  const distance = wheelDistance;
  const deltaRef = wheelDeltaTotal;
  
  // Создаем и сохраняем функцию обработчика
  const handleWheel = ((e: WheelEvent) => {
    const now = new Date().getTime();
    
    // Накапливаем дельту прокрутки
    deltaRef.current += e.deltaX;
    
    if (Math.abs(deltaRef.current) > distance && 
        now - lastWheelTime > threshold) {
      
      if (deltaRef.current > 0) {
        nextCard();
      } else {
        prevCard();
      }
      
      deltaRef.current = 0;
      setLastWheelTime(now);
    }
    
    if (now - lastWheelTime > 500) {
      deltaRef.current = 0;
    }
  }) as EventListener;
  
  // Сохраняем ссылку для использования при удалении
  handleWheelRef.current = handleWheel;
  
  // Добавляем обработчик с одинарным приведением типа
currentCarousel.addEventListener('wheel', handleWheel, { passive: false });
  
  return () => {
    if (currentCarousel && handleWheelRef.current) {
      currentCarousel.removeEventListener('wheel', handleWheelRef.current, {
        passive: false
      } as AddEventListenerOptions);
    }
  };
}, [lastWheelTime, nextCard, prevCard]);
  
  // Обработчики свайпа на тачскрине
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // Сбросим позицию конца свайпа
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    // Если был достаточно сильный свайп влево, переходим к следующей карточке
    if (isLeftSwipe) {
      nextCard();
    }
    // Если был достаточно сильный свайп вправо, переходим к предыдущей карточке
    if (isRightSwipe) {
      prevCard();
    }
  };
  
  // Авто-прокрутка каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);
    
    // Остановим автоматическую прокрутку при взаимодействии пользователя
    const carouselElement = carouselRef.current;
    
    const stopAutoScroll = () => {
      clearInterval(interval);
    };
    
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', stopAutoScroll);
      carouselElement.addEventListener('touchstart', stopAutoScroll);
      carouselElement.addEventListener('wheel', stopAutoScroll);
    }
    
    return () => {
      clearInterval(interval);
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', stopAutoScroll);
        carouselElement.removeEventListener('touchstart', stopAutoScroll);
        carouselElement.removeEventListener('wheel', stopAutoScroll);
      }
    };
  }, [currentIndex]);
  
  // Добавляем ключевые обработчики на уровне окна для надежности
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevCard();
      } else if (e.key === 'ArrowRight') {
        nextCard();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
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
          id="intro-carousel"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: `translateX(-${currentIndex * 460}px)`,
              transition: transition ? 'transform 0.3s ease' : 'none'
            }}
          >
            {allCards.map((card, index) => (
              <div 
                key={`${card.id}-${index}`} 
                className={styles.carouselItem}
                id={`card-${card.id}-${index}`}
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
                    id={`card-button-${card.id}`}
                  >
                    Это про нас
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default IntroSection;