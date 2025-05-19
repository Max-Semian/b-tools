'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './GuaranteesSection.module.css';

const GuaranteesSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={styles.guaranteesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>НАШИ ГАРАНТИИ</h2>
          <p className={styles.subtitle}>
            Мы готовы отвечать за результат — вот что об этом говорят основатели
          </p>
        </div>
        
        <div className={styles.videoContainer}>
          <video 
            ref={videoRef}
            className={styles.video}
            poster="/images/video-poster.jpg" // Изображение для предпросмотра видео (замените на своё)
            preload="metadata"
          >
            <source src="/videos/guarantees-video.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
          
          <button 
            className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}
            onClick={handlePlayClick}
            aria-label={isPlaying ? "Пауза" : "Воспроизвести видео"}
          >
            <div className={styles.playIcon}>
              {!isPlaying && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66667 4.16675V15.8334L15.8333 10.0001L6.66667 4.16675Z" fill="white"/>
                </svg>
              )}
              {isPlaying && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="4" width="3.33333" height="12" rx="1" fill="white"/>
                  <rect x="11.6667" y="4" width="3.33333" height="12" rx="1" fill="white"/>
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;