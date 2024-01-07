import React from 'react';
import logo from './Standzone.svg';
import search from './loupe.svg';
import styles from './header.module.css';
import PinkButton from './ui/pinkButton/PinkButton';
import { Link } from 'react-router-dom';
import FavoritesIcon from './pages/favorites/FavoritesIcon';

const Header = ({ isLoggedIn, user, onSignOut }) => {
  return (
    <div className={styles.header}>
      <Link to={'/'} className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.right}>
        <Link to={'/search'} className={styles.search}>
          <img src={search} alt="search" />
        </Link>
        {isLoggedIn ? (
          <>
            <Link to={'/favorites'}>
              <FavoritesIcon />
            </Link>
            <p className={styles.username}>{user?.username}</p>
            <Link to={'/'}>
              <PinkButton text={'Sign out'} onClick={onSignOut} />
            </Link>
          </>
        ) : (
          <Link to={'/signin'}>
            <PinkButton text={'Sign in'} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
