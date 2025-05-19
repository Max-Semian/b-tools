import React from 'react';
import Image from 'next/image';
import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection} id="контакты">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h2 className={styles.title}>КОНТАКТЫ</h2>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img 
                    src="/images/phone.svg"
                    alt="Инструменты"
                    width={15}
                    height={18}
                    className={styles.icon}
                />
              </div>
              <a href="tel:+48786598214" className={styles.contactText}>+48 786 598 214</a>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img 
                    src="/images/mail.svg"
                    alt="Инструменты"
                    width={20}
                    height={13}
                    className={styles.icon}
                />
              </div>
              <a href="mailto:info@b-tools.pl" className={styles.contactText}>info@b-tools.pl</a>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <img 
                    src="/images/insta.svg"
                    alt="Инструменты"
                    width={60}
                    height={60}
                    className={styles.icon}
                />
              </a>
              <a href="#" className={styles.socialLink}>
                <img 
                    src="/images/telega.svg"
                    alt="Инструменты"
                    width={60}
                    height={60}
                    className={styles.icon}
                />
              </a>
              <a href="#" className={styles.socialLink}>
                <img 
                    src="/images/whatsup.svg"
                    alt="Инструменты"
                    width={60}
                    height={60}
                    className={styles.icon}
                />
              </a>
              <a href="#" className={styles.socialLink}>
                <img 
                    src="/images/email.svg"
                    alt="Инструменты"
                    width={60}
                    height={60}
                    className={styles.icon}
                />
              </a>
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>
              Свяжитесь с нами, заполнив<br />
              форму по кнопке ниже
            </h3>
            <button className={styles.contactButton}>
              Связаться
            </button>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img 
                    src="/images/location.svg"
                    alt="Инструменты"
                    width={60}
                    height={60}
                    className={styles.icon}
                />
              </div>
              <span className={styles.contactText}>Адрес</span>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img 
                    src="/images/clock.svg"
                    alt="Инструменты"
                    width={60}
                    height={60}
                    className={styles.icon}
                />
              </div>
              <span className={styles.contactText}>pn-pt 09:00-18:00</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;