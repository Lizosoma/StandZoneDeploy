import React from 'react';
import styles from './standItem.module.css';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();

  return (
    <a className={styles.back} href="#" onClick={() => navigate(-1)}>
      <span> &larr; Back</span>
    </a>
  );
};

export default Back;
