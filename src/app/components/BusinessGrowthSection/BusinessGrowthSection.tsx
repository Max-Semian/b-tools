import React from 'react';
import Image from 'next/image';
import styles from './BusinessGrowthSection.module.css';

const BusinessGrowthSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            Помогаем бизнесу зарабатывать
            <br />
            <span className={styles.highlight}>больше и расти быстрее!</span>
          </h2>
        </div>
        
        {/* Добавлен белый фоновый элемент с закругленными краями */}
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.textColumn}>
              <div className={styles.logo}>
                  <span className={styles.logoText}>B-tools</span>
              </div>
              
              <p className={styles.description}>
                Представьте себе стабильный рост продаж и команду, которая 
                работает как часы.
                <br /><br />
                С B-TOOLS это не мечта, а реальность. Мы поможем вам построить 
                отдел продаж с нуля или вывести существующий на новый уровень. 
                Наши специалисты систематизируют ваши процессы, оптимизируют их 
                и создадут эффективные команды. Благодаря нашим проверенным 
                стратегиям, можно достичь таких же результатов? Мы знаем, как это 
                сделать быстро и без лишних затрат.
              </p>
              
              <div className={styles.callToAction}>
                  <p className={styles.urgentText}>
                      Не ждите, пока ваши конкуренты обгонят вас.
                      <br />
                      Оставьте заявку прямо сейчас, и мы
                      <br />
                      разработаем для вас индивидуальный 
                      <br />
                      план роста продаж!
                  </p>
                  
                  <button className={styles.ctaButton}>
                      Оставить заявку
                      <span className={styles.arrowIcon}>→</span>
                  </button>
                </div>
              </div>
            
            <div className={styles.imagesContainer}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/image.jpg" 
                  alt="Специалист работает за ноутбуком" 
                  width={280} 
                  height={450} 
                  className={styles.roundedImage}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/image2.jpg" 
                  alt="Консультация по продажам" 
                  width={280} 
                  height={450} 
                  className={styles.roundedImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowthSection;