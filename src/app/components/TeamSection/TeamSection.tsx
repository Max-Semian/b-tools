'use client';

import React from 'react';
import Image from 'next/image';
import styles from './TeamSection.module.css';

const TeamSection: React.FC = () => {
  // Данные о членах команды
  const teamMembers = [
    {
      id: 1,
      name: 'Павел Адамович',
      position: 'Со-основатель B-Tools',
      image: '/images/Pavel.jpg',
      isQuoteAuthor: true
    },
    {
      id: 2,
      name: 'Анна Корчака',
      position: 'Со-основатель B-Tools',
        image: '/images/Anna.jpg',
      isQuoteAuthor: false
    },
    {
      id: 3,
      name: 'Витольд Ануш',
      position: 'Бизнес-тренер',
      image: '/images/Vitold.jpg',
      isQuoteAuthor: false
    },
    {
      id: 4,
      name: '10+',
      position: 'Сотрудники',
      image: '',
      isCounter: true,
      subtitle: 'Команда'
    }
  ];

  return (
    <section className={styles.teamSection} id="team">
      <div className={styles.container}>
        <h2 className={styles.title}>А ЭТО НАША КОМАНДА</h2>
        
        <div className={styles.quote}>
          <p className={styles.quoteText}>
            “Мы 3 года собирали вокруг себя не просто опытных экспертов, а людей, которые живут потребностями клиентов и их бизнеса. Это наш капитал”
          </p>
          <div className={styles.quoteAuthor}>
            <div className={styles.authorAvatar}>
              <Image 
                src="/images/image12.jpg"
                alt="Павел Адамович"
                width={40}
                height={40}
                className={styles.avatarImage}
              />
            </div>
            <p className={styles.authorInfo}>
              — Павел Адамович <span className={styles.authorPosition}>  со-основатель B-Tools</span>
            </p>
          </div>
        </div>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamMember}>
              {member.isCounter ? (
                <div className={styles.counterCard}>
                  <h3 className={styles.counterText}>{member.name}</h3>
                  <p className={styles.counterSubtitle}>{member.subtitle}</p>
                  <p className={styles.memberPosition}>{member.position}</p>
                </div>
              ) : (
                <>
                  <div className={styles.memberImage}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={220}
                      height={220}
                      className={styles.memberPhoto}
                    />
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberPosition}>{member.position}</p>
                </>
              )}
            </div>
          ))}
        </div>
        
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>Больше о нас</button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;