import React, { useState, useEffect } from 'react';
//import { stands } from '../../../../database/db.js';
import like from './like.svg';
import liked from './liked.svg';
import PinkButton from '../../../ui/pinkButton/PinkButton.jsx';
import styles from './standCard.module.css';
import { Link } from 'react-router-dom';

const StandCard = ({ stand }) => {
  const [stands, setStands] = useState([]);
  const log = localStorage.getItem('isLoggedIn') === 'true';
  // const [favorites, setFavorites] = useState(() => {
  //   const savedFavorites = localStorage.getItem('favorites');
  //   return savedFavorites ? JSON.parse(savedFavorites) : [];
  // });

  // const toggleFavorite = (standId) => {
  //   const isFavorite = favorites.includes(standId);
  //   const updatedFavorites = isFavorite
  //     ? favorites.filter((id) => id !== standId)
  //     : [...favorites, standId];
  //   setFavorites(updatedFavorites);
  // };

  // useEffect(() => {
  //   localStorage.setItem('favorites', JSON.stringify(favorites));
  // }, [favorites]);

  return (
    <div className={styles.cards}>
      <div key={stand.id} className={styles.card}>
        {log && (
          <img
            className={styles.like}
            //src={favorites.includes(stand.id) ? liked : like}
            alt="like"
            //onClick={() => toggleFavorite(stand.id)}
          />
        )}
        <div
          className={styles.image}
          style={{
            backgroundImage:
              stand.stand_images && stand.stand_images.length > 0
                ? `url(${stand.stand_images[0]})`
                : 'none',
          }}
        />
        <div className={styles.info}>
          <h2>{stand.name}</h2>
          <Link to={`/stands/${stand.id}`}>
            <PinkButton text={'Read more'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StandCard;
