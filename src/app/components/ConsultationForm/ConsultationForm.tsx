'use client';

import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './ConsultationForm.module.css';

const ConsultationForm: React.FC = () => {
  const features = [
    { id: 1, text: 'Lorem Ipsum is simply' },
    { id: 2, text: 'Lorem Ipsum is simply' },
    { id: 3, text: 'Lorem Ipsum' },
    { id: 4, text: 'Lorem Ipsum' },
    { id: 5, text: 'Lorem Ipsum is simply' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Форма отправлена');
  };

  return (
    <section className={styles.consultationSection}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>
              ОСТАВЬ ЗАЯВКУ И ПОЛУЧИ
              <br />БЕСПЛАТНУЮ
              <br />КОНСУЛЬТАЦИЮ
            </h2>
            
            <div className={styles.arrow}>
              <Image 
                src="/images/FormIcon.png"
                alt="Стрелка"
                width={80}
                height={60}
              />
            </div>
            
            <div className={styles.featuresBlock}>
              <p className={styles.featuresTitle}>
                <Image 
                    src="/images/skrepka.svg"
                    alt="Скрепка"
                    width={20}
                    height={20}
                    className={styles.checkIcon}
                />
                Что включает
              </p>
              
              <div className={styles.featuresList}>
                {features.map((feature) => (
                  <div key={feature.id} className={styles.featureItem}>
                    {feature.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.rightContent}>
            <div className={styles.imagesContainer}>
              <div className={styles.personImage}>
                <Image 
                  src="/images/zayavka.png"
                  alt="Команда консультантов"
                  width={256}
                  height={391}
                  className={styles.peopleImg}
                />
              </div>
              
              <div className={styles.documentImage}>
                <Image 
                  src="/images/zayavka1.png"
                  alt="Документ"
                  width={235}
                  height={304}
                  className={styles.docImg}
                />
              </div>
            </div>
            
            <button className={styles.submitButton} onClick={handleSubmit}>
              Связаться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;