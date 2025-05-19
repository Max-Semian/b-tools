'use client';

import React from 'react';
import styles from './TextBlock.module.css';

interface TextBlockProps {
  title: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  title,
  content,
  buttonText,
  onButtonClick,
  className = '',
}) => {
  return (
    <section className={`${styles.textBlock} ${className}`}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        
        {content && (
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
        )}
        
        {buttonText && (
          <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={onButtonClick}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TextBlock;