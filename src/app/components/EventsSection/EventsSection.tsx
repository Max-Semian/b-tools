'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './EventsSection.module.css';
import Image from 'next/image';

const EventsSection: React.FC = () => {
  // Добавляем состояние для отслеживания ширины окна
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const isMobile = windowWidth <= 320;

  // Данные о событиях с разными размерами
  const events = [
    {
      id: 1,
      image: 'images/eventSection-1.jpg',
      alt: 'Аудитория слушает презентацию',
      text: 'Lorem ipsum is simply dummy text',
      aspectRatio: '4/3',
      width: 450
    },
    {
      id: 2,
      image: 'images/eventSection-2.jpg',
      alt: 'Группа людей за столом обсуждает проект',
      text: 'Lorem ipsum is simply dummy text',
      aspectRatio: '16/9',
      width: 400
    },
    {
      id: 3,
      image: 'images/eventSection-3.jpg',
      alt: 'Выступление на бизнес-семинаре',
      text: 'Lorem ipsum is simply dummy text',
      aspectRatio: '1/1',
      width: 350
    },
    {
      id: 4,
      image: 'images/eventSection-1.jpg',
      alt: 'Деловая встреча',
      text: 'Lorem ipsum is simply dummy text',
      aspectRatio: '3/4',
      width: 300
    },
    {
      id: 5,
      image: 'images/eventSection-2.jpg', 
      alt: 'Корпоративное обучение',
      text: 'Lorem ipsum is simply dummy text',
      aspectRatio: '16/10',
      width: 420
    }
  ];

  // Создаем дублированный список событий для бесконечной прокрутки
  const allItems = [...events, ...events];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Эффект для отслеживания изменения ширины окна
  useEffect(() => {
    const handleResizeWindow = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  
  // Модифицируйте функцию updateOffset в компоненте
  const updateOffset = (index: number) => {
    // На мобильных устройствах отключаем расчет offset
    if (isMobile) return;
    
    if (!carouselRef.current || !trackRef.current) return;
    
    const cards = trackRef.current.querySelectorAll(`.${styles.eventCard}`);
    if (!cards || cards.length === 0) return;
    
    // Получаем ширину контейнера
    const containerWidth = carouselRef.current.clientWidth;
    
    // Стандартный расчет для десктопа
    const card = cards[index] as HTMLElement;
    if (!card) return;
    
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const centerOffset = cardLeft - (containerWidth / 2) + (cardWidth / 2);
    
    setOffset(centerOffset);
  };
  
  // Рассчитываем начальные размеры и устанавливаем обработчики
  useEffect(() => {
    if (!carouselRef.current) return;
    
    // Следим за изменением размера окна
    const handleResize = () => {
      updateOffset(currentIndex);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Первоначальный расчет
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex]); // Добавляем currentIndex в зависимости
  
  // Обновляем отступ при изменении текущего индекса
  useEffect(() => {
    updateOffset(currentIndex);
  }, [currentIndex]);
  
  // Обработчик для перемещения влево
  const prevSlide = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : allItems.length - 1;
    setCurrentIndex(newIndex);
  };
  
  // Обработчик для перемещения вправо
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % allItems.length;
    setCurrentIndex(newIndex);
    
    // Особая логика для бесконечной прокрутки
    if (currentIndex === events.length - 1) {
      // Когда достигаем конца оригинального набора, перезагружаем индекс
      setTimeout(() => {
        if (!trackRef.current) return;
        
        // Отключаем анимацию
        trackRef.current.style.transition = 'none';
        setCurrentIndex(0);
        updateOffset(0);
        
        // Возвращаем анимацию
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.5s ease-in-out';
          }
        }, 50);
      }, 500); // Подождем завершения анимации
    }
  };
  
  // Обработчик для перехода к конкретному слайду
  const goToSlide = (index: number) => {
    // Используем индекс в пределах оригинального набора
    setCurrentIndex(index);
  };
  
  return (
    <section className={styles.eventsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>НАШИ СОБЫТИЯ</h2>
          <img 
            src="images/event-Icon.svg" 
            alt="События" 
            className={styles.eventIcon}
          />
        </div>

        <div className={styles.carouselContainer}>
          {!isMobile && (
            <button 
              className={`${styles.navButton} ${styles.prevButton}`} 
              onClick={prevSlide}
              aria-label="Предыдущие события"
            >
              &lt;
            </button>
          )}

          <div className={styles.carousel} ref={carouselRef}>
            <div 
              className={styles.carouselTrack} 
              ref={trackRef}
              style={isMobile ? {} : { 
                transform: `translateX(-${offset}px)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {/* На мобильных показываем только первые 3 события */}
              {(isMobile ? events.slice(0, 3) : allItems).map((event, index) => (
                <div 
                  key={`${event.id}-${index}`} 
                  className={`${styles.eventCard} ${currentIndex === index ? styles.activeCard : ''}`}
                  style={isMobile ? {} : {
                    width: `${event.width}px`,
                    flexShrink: 0,
                    flexGrow: 0
                  }}
                >
                  <div 
                    className={styles.imageContainer}
                    style={isMobile ? { aspectRatio: '16/9' } : { aspectRatio: event.aspectRatio }}
                  >
                    <Image
                      src={event.image}
                      alt={event.alt}
                      fill
                      className={styles.eventImage}
                    />
                  </div>
                  <p className={styles.eventText}>{event.text}</p>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <button 
              className={`${styles.navButton} ${styles.nextButton}`} 
              onClick={nextSlide}
              aria-label="Следующие события"
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;