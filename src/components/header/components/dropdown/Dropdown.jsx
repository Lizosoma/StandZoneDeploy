import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../header.module.css';

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <Link to={'/history'} className={styles.dropdownLink}>
        History
      </Link>
    </div>
  );
};

export default Dropdown;
