import React from 'react';
import styles from './pinkButton.module.css';

const PinkButton = ({ text }) => {
  return (
    <button className={styles.button}>
      <p>{text}</p>
    </button>
  );
};

export default PinkButton;
