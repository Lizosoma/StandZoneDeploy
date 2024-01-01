import React, { useState, useEffect } from 'react';
import { stands } from '../../../../database/db.js';
import like from './like.svg';
import liked from './liked.svg';
import PinkButton from '../../../ui/pinkButton/PinkButton.jsx';
import styles from './standCard.module.css';

const StandCard = () => {
  // Load favorites from localStorage, or initialize to an empty array if none
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Function to toggle a stand as favorite
  const toggleFavorite = (standId) => {
    const isFavorite = favorites.includes(standId);
    const updatedFavorites = isFavorite
      ? favorites.filter((id) => id !== standId)
      : [...favorites, standId];
    setFavorites(updatedFavorites);
  };

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className={styles.cards}>
      {stands.map((stand) => (
        <div key={stand.id} className={styles.card}>
          <img
            className={styles.like}
            src={favorites.includes(stand.id) ? liked : like}
            alt="like"
            onClick={() => toggleFavorite(stand.id)}
          />
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${stand.stand_images[0]}` }}
          />
          <div className={styles.info}>
            <h2>{stand.name}</h2>
            <PinkButton text={'Read more'} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandCard;
