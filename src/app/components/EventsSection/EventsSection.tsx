'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './EventsSection.module.css';
import Image from 'next/image';

const EventsSection: React.FC = () => {
  // Используем null для начального состояния ширины окна
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  // Вычисляем isMobile только если windowWidth доступен
  const isMobile = windowWidth !== null && windowWidth <= 320;

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
    }
  ];

  // Создаем дублированный список событий для бесконечной прокрутки
  const allItems = [...events, ...events];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Эффект для установки ширины окна после монтирования компонента
  useEffect(() => {
    // Устанавливаем размер окна только на клиенте
    setWindowWidth(window.innerWidth);
    
    const handleResizeWindow = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  
  // Функция для расчета смещения
  const updateOffset = (index: number) => {
    // Не выполняем расчеты, если размер окна не определен или это мобильное устройство
    if (windowWidth === null || isMobile) return;
    
    if (!carouselRef.current || !trackRef.current) return;
    
    const cards = trackRef.current.querySelectorAll(`.${styles.eventCard}`);
    if (!cards || cards.length === 0) return;
    
    // Получаем ширину контейнера
    const containerWidth = carouselRef.current.clientWidth;
    
    // Находим карточку, которую нужно отобразить
    const card = cards[index] as HTMLElement;
    if (!card) return;
    
    // Рассчитываем смещение, чтобы центрировать карточку
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const centerOffset = cardLeft - (containerWidth / 2) + (cardWidth / 2);
    
    setOffset(centerOffset);
  };
  
  // Обновляем размеры при монтировании и изменении окна
  useEffect(() => {
    // Выполняем только после определения размера окна
    if (windowWidth === null) return;
    
    if (!carouselRef.current) return;
    
    const handleResize = () => {
      updateOffset(currentIndex);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Используем setTimeout для первого расчета, чтобы дать DOM время на рендеринг
    const timeoutId = setTimeout(() => {
      updateOffset(currentIndex);
    }, 0);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [currentIndex, windowWidth]); // Добавляем windowWidth в зависимости
  
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
  
  // Используем стабильную структуру DOM для гидратации
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
          {/* Всегда рендерим кнопку, но скрываем через CSS для мобильных */}
          <button 
            className={`${styles.navButton} ${styles.prevButton} ${isMobile ? styles.hiddenButton : ''}`} 
            onClick={prevSlide}
            aria-label="Предыдущие события"
          >
            &lt;
          </button>

          <div className={styles.carousel} ref={carouselRef}>
            <div 
              className={styles.carouselTrack} 
              ref={trackRef}
              style={{
                transform: windowWidth === null || isMobile ? 'none' : `translateX(-${offset}px)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {/* Показываем все карточки независимо от устройства для стабильной гидратации */}
              {/* Потом скрываем лишние через CSS */}
              {allItems.map((event, index) => (
                <div 
                  key={`${event.id}-${index}`} 
                  className={`${styles.eventCard} ${currentIndex === index ? styles.activeCard : ''} ${isMobile && index >= 3 ? styles.hiddenCard : ''}`}
                  style={{
                    width: windowWidth === null ? undefined : isMobile ? '100%' : `${event.width}px`,
                    flexShrink: 0,
                    flexGrow: 0
                  }}
                >
                  <div 
                    className={styles.imageContainer}
                    style={{
                      aspectRatio: windowWidth === null ? undefined : isMobile ? '16/9' : event.aspectRatio
                    }}
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

          {/* Всегда рендерим кнопку, но скрываем через CSS для мобильных */}
          <button 
            className={`${styles.navButton} ${styles.nextButton} ${isMobile ? styles.hiddenButton : ''}`} 
            onClick={nextSlide}
            aria-label="Следующие события"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;