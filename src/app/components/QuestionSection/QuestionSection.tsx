'use client';

import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './QuestionSection.module.css';

const QuestionBlock: React.FC = () => {
  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Форма отправлена');
  };

  return (
    <section className={styles.questionBlock} id="question-block">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.iconContainer}>
              <div className={styles.questionIcon}>?</div>
            </div>
            <h2 className={styles.title}>
              Не нашли для себя
              <br />
              идеальное решение?
            </h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <div className={styles.avatar}>
                    <Image 
                        src="/images/questionIcon.png"
                        alt="Консультант"
                        width={36}
                        height={36}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    </div>
                    <div className={styles.inputContent}>
                      <div className={styles.formInput}>
                          Давайте обсудим ваш запрос индивидуально
                      </div>
                    </div>
                    <div className={styles.menuDots}>
                        <span className={styles.dotItem}></span>
                        <span className={styles.dotItem}></span>
                        <span className={styles.dotItem}></span>
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Связаться
                </button>
            </form>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageCircle1}>
                <Image 
                  src="/images/question1.png"
                  alt="Консультант"
                  width={500}
                  height={500}
                  className={styles.circleImage}
                />
              </div>
              <div className={styles.imageCircle2}>
                <Image 
                  src="/images/question2.png"
                  alt="Команда"
                  width={500}
                  height={500}
                  className={styles.circleImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionBlock;