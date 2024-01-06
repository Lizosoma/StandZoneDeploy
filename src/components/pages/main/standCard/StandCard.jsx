import React from 'react';
import like from './like.svg';
import liked from './liked.svg';
import styles from './standCard.module.css';
import { Link } from 'react-router-dom';

const StandCard = ({ stand, toggleFavorite, isFavorite }) => {
  const log = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        {log && (
          <img
            className={styles.like}
            src={isFavorite ? liked : like}
            alt="like"
            onClick={() => toggleFavorite(stand.id)}
          />
        )}
        <Link to={`/stands/${stand.id}`}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                stand.stand_images && stand.stand_images.length > 0
                  ? `url(${stand.stand_images[0]})`
                  : 'none',
            }}
          />
        </Link>
        <div className={styles.name}>
          <span>{stand.name}</span>
        </div>
      </div>
    </div>
  );
};

export default StandCard;
