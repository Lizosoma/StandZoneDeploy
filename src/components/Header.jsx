import React from 'react';
import logo from './Standzone.svg';
import styles from './header.module.css';
import PinkButton from './ui/pinkButton/PinkButton';
import favorites from '../components/pages/main/standCard/liked.svg';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, user, onSignOut }) => {
  return (
    <div className={styles.header}>
      <Link to={'/'} className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.right}>
        <input type="text" placeholder="Search" className={styles.search} />
        {isLoggedIn ? (
          <div className={styles.user}>
            <Link to={'/favorites'}>
              <img src={favorites} alt="favorites" />
            </Link>
            <p className={styles.username}>{user?.username}</p>
            <Link to={'/'} className={styles.button}>
              <PinkButton text={'Sign out'} onClick={onSignOut} />
            </Link>
          </div>
        ) : (
          <Link to={'/signin'} className={styles.button}>
            <PinkButton text={'Sign in'} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
