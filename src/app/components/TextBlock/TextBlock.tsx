'use client';

import React, { useState } from 'react';
import styles from './TextBlock.module.css';

interface TextBlockProps {
  title: string;
  content: string;
  buttonText?: string;
  maxHeight?: number;
  className?: string;
  onButtonClick?: () => void;
}

const TextBlock: React.FC<TextBlockProps> = ({
  title,
  content,
  buttonText = 'Подробнее',
  maxHeight = 120,
  className = '',
  onButtonClick,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (onButtonClick) {
      onButtonClick();
    }
    setExpanded(!expanded);
  };

  return (
    <section className={`${styles.textBlock} ${className}`}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        
        <div className={styles.contentWrapper}>
          <div 
            className={`${styles.content} ${!expanded ? styles.collapsed : ''}`} 
            style={!expanded ? { maxHeight: `${maxHeight}px` } : {}}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {!expanded && <div className={styles.fadeOverlay}></div>}
        </div>
        
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={handleToggle}>
            {expanded ? 'Скрыть' : buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TextBlock;