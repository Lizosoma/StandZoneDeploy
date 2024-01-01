import React from 'react';
import logo from './Standzone.svg';
import styles from './header.module.css';
import PinkButton from './ui/pinkButton/PinkButton';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <PinkButton text={'Sign in'} />
    </div>
  );
};

export default Header;
