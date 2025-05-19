'use client';

import React, { useState } from 'react';
import { getImagePath } from '@/app/utils/paths.js';
import styles from './ServicesSection.module.css';

const ServicesSection: React.FC = () => {
  // Состояние для отслеживания активной услуги
  const [activeService, setActiveService] = useState<number>(1);

  // Массив данных услуг
  const services = [
    {
      id: 1,
      icon: '01',
      title: 'Аудит и усиление отдела продаж',
      description: 'Поможем вашу команду выполнять поставленность процесса, поднимать конверсию и затрачивать меньше. Из часов работы от одного рабочего процесса = 27 часам работы. Выгорание падает.',
      isActive: true
    },
    {
      id: 2,
      icon: '02',
      title: 'Отдел продаж под ключ',
      description: 'Создаем для вас полноценный отдел продаж с нуля: найдем и обучим сотрудников, настроим процессы и внедрим CRM-систему под ваш бизнес.',
      isActive: false
    },
    {
      id: 3,
      icon: '03',
      title: 'Удаленное управление продажами',
      description: 'Берем на себя оперативное управление вашим отделом продаж и повышаем его эффективность без необходимости найма руководителя.',
      isActive: false
    },
    {
      id: 4,
      icon: '04',
      title: 'Найм команды продаж',
      description: 'Предоставляем готовые команды опытных менеджеров по продажам для вашего бизнеса без необходимости поиска и обучения персонала.',
      isActive: false
    },
    {
      id: 5,
      icon: '05',
      title: 'Внедрение CRM и IP-телефонии',
      description: 'Настраиваем CRM-системы и IP-телефонию под особенности вашего бизнеса для автоматизации и контроля процессов продаж.',
      isActive: false
    },
    {
      id: 6,
      icon: '06',
      title: 'Тренинги по продажам и переговорам',
      description: 'Проводим практические обучающие программы для менеджеров и руководителей по технологиям продаж и ведению переговоров.',
      isActive: false
    },
    {
      id: 7,
      icon: '07',
      title: 'Экспресс-консультации',
      description: 'Оперативно решаем конкретные задачи и вопросы по оптимизации продаж в рамках короткой целевой консультации.',
      isActive: false
    },
    {
      id: 8,
      icon: '08',
      title: 'AI-ассистент для продаж B-Sales',
      description: 'Внедряем искусственный интеллект в ваши процессы продаж для автоматизации рутинных задач и увеличения конверсии.',
      isActive: false
    }
  ];

  // Обработчик клика по услуге
  const handleServiceClick = (id: number) => {
    setActiveService(id);
  };

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>НАШИ КОМПЛЕКСНЫЕ УСЛУГИ</h2>
        
        <div className={styles.servicesList}>
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`${styles.serviceItem} ${activeService === service.id ? styles.active : ''}`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>
                  <span className={styles.iconNumber}>{service.icon}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <button className={styles.expandButton}>
                  {activeService === service.id ? '−' : '+'}
                </button>
              </div>
              
              {activeService === service.id && (
                <div className={styles.serviceContent}>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <button className={styles.detailButton}>Подробнее</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;