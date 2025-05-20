'use client';

import React, { useState } from 'react';
import styles from './ServicesSection.module.css';

const ServicesSection: React.FC = () => {
  // Состояние для отслеживания активной услуги, null значит все свернуты
  const [activeService, setActiveService] = useState<number | null>(1);

  // Массив данных услуг
  const services = [
    {
      id: 1,
      icon: '01',
      title: 'Аудит и усиление отдела продаж',
      description: 'Научим вашу команду выявлять потребности клиента, задавать вопросы и закрывать сделки.  16 часов опыта от нашего лучшего тренера с 27 летним опытом - Витольда Ануша.',
    },
    {
      id: 2,
      icon: '02',
      title: 'Отдел продаж под ключ',
      description: 'Создаем для вас полноценный отдел продаж с нуля: найдем и обучим сотрудников, настроим процессы и внедрим CRM-систему под ваш бизнес.',
    },
    {
      id: 3,
      icon: '03',
      title: 'Удаленное управление продажами',
      description: 'Берем на себя оперативное управление вашим отделом продаж и повышаем его эффективность без необходимости найма руководителя.',
    },
    {
      id: 4,
      icon: '04',
      title: 'Найм команды продаж',
      description: 'Предоставляем готовые команды опытных менеджеров по продажам для вашего бизнеса без необходимости поиска и обучения персонала.',
    },
    {
      id: 5,
      icon: '05',
      title: 'Внедрение CRM и IP-телефонии',
      description: 'Настраиваем CRM-системы и IP-телефонию под особенности вашего бизнеса для автоматизации и контроля процессов продаж.',
    },
    {
      id: 6,
      icon: '06',
      title: 'Тренинги по продажам и переговорам',
      description: 'Проводим практические обучающие программы для менеджеров и руководителей по технологиям продаж и ведению переговоров.',
    },
    {
      id: 7,
      icon: '07',
      title: 'Экспресс-консультации',
      description: 'Оперативно решаем конкретные задачи и вопросы по оптимизации продаж в рамках короткой целевой консультации.',
    },
    {
      id: 8,
      icon: '08',
      title: 'AI-ассистент для продаж B-Sales',
      description: 'Внедряем искусственный интеллект в ваши процессы продаж для автоматизации рутинных задач и увеличения конверсии.',
    }
  ];

  // Обработчик клика по услуге
  const handleServiceClick = (id: number) => {
    // Если кликнули на активную услугу, сворачиваем её
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>НАШИ КОМПЛЕКСНЫЕ УСЛУГИ</h2>
        
        <div className={styles.servicesList}>
          {services.map((service) => {
            const isActive = activeService === service.id;
            
            return (
              <div 
                key={service.id} 
                className={`${styles.serviceItem} ${isActive ? styles.active : ''}`}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className={styles.serviceHeader}>
                  <div className={`${styles.serviceIcon} ${!isActive ? styles.inactiveIcon : ''}`}>
                    <span className={styles.iconNumber}>{service.icon}</span>
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <button className={styles.expandButton}>
                    {isActive ? '−' : '+'}
                  </button>
                </div>
                
                {isActive && (
                  <div className={styles.serviceContent}>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <button className={styles.detailButton}>Подробнее</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;