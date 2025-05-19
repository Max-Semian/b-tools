'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './TestimonialsCarousel.module.css';

// Интерфейс для данных отзыва
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  videoUrl: string;
  posterUrl: string;
}

const TestimonialsCarousel: React.FC = () => {
  // Данные отзывов
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Алексей Сидоров',
      position: 'Руководитель компании',
      company: 'PRODUCT PRO',
      text: 'Я очень доволен результатами: продажи увеличились примерно в четыре раза за месяц, и теперь у меня есть четкое понимание, как обучать новых сотрудников. Рекомендую компанию B-Tools как профессионалов в области настройки и оптимизации отделов продаж.',
      videoUrl: 'videos/testimonial-1.mp4',
      posterUrl: 'images/reviews.jpg'
    },
    {
      id: 2,
      name: 'Алексей Сидоров',
      position: 'Руководитель компании',
      company: 'PRODUCT PRO',
      text: 'Я очень доволен результатами: продажи увеличились примерно в четыре раза за месяц, и теперь у меня есть четкое понимание, как обучать новых сотрудников. Рекомендую компанию B-Tools как профессионалов в области настройки и оптимизации отделов продаж.',
      videoUrl: 'videos/testimonial-2.mp4',
      posterUrl: 'images/reviews.jpg'
    },
    {
      id: 3,
      name: 'Алексей Одеров',
      position: 'Руководитель компании',
      company: 'WORKEIN',
      text: 'Я очень доволен результатами: продажи увеличились примерно в четыре раза за месяц, и теперь у меня есть четкое понимание, как обучать новых сотрудников. Рекомендую компанию B-Tools как профессионалов в области настройки и оптимизации отделов продаж.',
      videoUrl: 'videos/testimonial-3.mp4',
      posterUrl: 'images/reviews.jpg'
    },
    {
      id: 4,
      name: 'Алексей Сидоров',
      position: 'Руководитель компании',
      company: 'PRODUCT PRO',
      text: 'Я очень доволен результатами: продажи увеличились примерно в четыре раза за месяц, и теперь у меня есть четкое понимание, как обучать новых сотрудников. Рекомендую компанию B-Tools как профессионалов в области настройки и оптимизации отделов продаж.',
      videoUrl: 'videos/testimonial-4.mp4',
      posterUrl: 'images/reviews.jpg'
    }
  ];

  // Количество слайдов для показа одновременно
  const slidesToShow = 3;
  
  // Состояние для активного слайда
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Состояние для отображаемых слайдов
  const [visibleSlides, setVisibleSlides] = useState<Testimonial[]>([]);
  
  // Массив рефов для видео элементов
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Состояние для отслеживания воспроизведения видео
  const [isPlaying, setIsPlaying] = useState<boolean[]>(testimonials.map(() => false));

  // Обновление видимых слайдов при изменении активного индекса
  useEffect(() => {
    // Инициализируем массив рефов один раз
    if (videoRefs.current.length === 0) {
      videoRefs.current = Array(testimonials.length).fill(null);
    }
    
    // Вычисляем видимые слайды с учетом циклического поведения
    updateVisibleSlides();
  }, [activeIndex]);

  // Функция для обновления видимых слайдов
  const updateVisibleSlides = () => {
    const slides: Testimonial[] = [];
    const totalSlides = testimonials.length;
    
    // Получаем индексы для видимых слайдов
    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (activeIndex + i) % totalSlides;
      slides.push(testimonials[slideIndex]);
    }
    
    setVisibleSlides(slides);
  };

  // Обработчик перехода к следующему слайду
  const nextSlide = () => {
    // Останавливаем текущее видео, если оно воспроизводится
    pauseCurrentVideo();
    
    // Переключаемся на следующий слайд
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Обработчик перехода к предыдущему слайду
  const prevSlide = () => {
    // Останавливаем текущее видео, если оно воспроизводится
    pauseCurrentVideo();
    
    // Переключаемся на предыдущий слайд
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Обработчик выбора конкретного слайда
  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    
    // Останавливаем текущее видео, если оно воспроизводится
    pauseCurrentVideo();
    
    // Переходим к выбранному слайду
    setActiveIndex(index);
  };

  // Функция для остановки текущего видео
  const pauseCurrentVideo = () => {
    // Останавливаем все видимые видео
    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (activeIndex + i) % testimonials.length;
      if (videoRefs.current[slideIndex] && isPlaying[slideIndex]) {
        videoRefs.current[slideIndex]?.pause();
        
        // Обновляем состояние воспроизведения
        const newIsPlaying = [...isPlaying];
        newIsPlaying[slideIndex] = false;
        setIsPlaying(newIsPlaying);
      }
    }
  };

  // Обработчик клика по кнопке воспроизведения
  const handlePlayClick = (index: number) => {
    const video = videoRefs.current[index];
    const newIsPlaying = [...isPlaying];
    
    if (video) {
      if (isPlaying[index]) {
        video.pause();
        newIsPlaying[index] = false;
      } else {
        // Останавливаем все другие активные видео
        pauseCurrentVideo();
        
        video.play();
        newIsPlaying[index] = true;
      }
      
      setIsPlaying(newIsPlaying);
    }
  };

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ЧТО КЛИЕНТЫ ГОВОРЯТ О НАС</h2>
          <div className={styles.redIcon}>
            <Image 
              src="images/reviews.png"
              alt="Отзывы"
              width={102}
              height={56}
            />
          </div>
        </div>
        
        <div className={styles.carouselContainer}>
          {/* Каруселька для трех карточек */}
          <div className={styles.carousel}>
            <div className={styles.track}>
              {visibleSlides.map((testimonial, index) => {
                // Вычисляем реальный индекс в общем массиве
                const realIndex = (activeIndex + index) % testimonials.length;
                
                return (
                  <div key={testimonial.id} className={styles.slide}>
                    <div className={styles.testimonialCard}>
                      <div className={styles.quoteIcon}>
                        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.8 0H8L0 12V24H12V12H4L12.8 0ZM32 0H27.2L19.2 12V24H31.2V12H23.2L32 0Z" fill="#E4002B"/>
                        </svg>
                      </div>
                      
                      <div className={styles.testimonialContent}>
                        <p className={styles.testimonialText}>{testimonial.text}</p>
                        
                        <div className={styles.videoWrapper}>
                          <video 
                            key={`video-${testimonial.id}`}
                            ref={(element) => {
                              if (videoRefs.current) {
                                videoRefs.current[realIndex] = element;
                              }
                            }}
                            className={styles.testimonialVideo}
                            poster={testimonial.posterUrl}
                            preload="metadata"
                          >
                            <source src={testimonial.videoUrl} type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                          </video>
                          
                          <button 
                            className={`${styles.videoPlayButton} ${isPlaying[realIndex] ? styles.playing : ''}`}
                            onClick={() => handlePlayClick(realIndex)}
                            aria-label={isPlaying[realIndex] ? "Пауза" : "Воспроизвести видео"}
                          >
                            <div className={styles.videoPlayIcon}>
                              {!isPlaying[realIndex] && (
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.66667 4.16675V15.8334L15.8333 10.0001L6.66667 4.16675Z" fill="white"/>
                                </svg>
                              )}
                              {isPlaying[realIndex] && (
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="5" y="4" width="3.33333" height="12" rx="1" fill="white"/>
                                  <rect x="11.6667" y="4" width="3.33333" height="12" rx="1" fill="white"/>
                                </svg>
                              )}
                            </div>
                          </button>
                        </div>
                        
                        <div className={styles.testimonialAuthor}>
                          <h3 className={styles.authorName}>{testimonial.name}</h3>
                          <p className={styles.authorPosition}>{testimonial.position}</p>
                          <p className={styles.authorCompany}>{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Кнопки навигации */}
          <div className={styles.carouselNavigation}>
            <button className={styles.navButton} onClick={prevSlide} aria-label="Предыдущий отзыв">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={styles.carouselDots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.carouselDot} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>
            
            <button className={styles.navButton} onClick={nextSlide} aria-label="Следующий отзыв">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;