import React from 'react';
import styles from './paginationButton.module.css';

const PaginatoinButton = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.pageItem}>
      {children}
    </button>
  );
};

export default PaginatoinButton;
