import React, { useState, useEffect } from 'react';
import { stands } from '../../../database/db';
import PinkButton from '../../ui/pinkButton/PinkButton';
import styles from '../main/standCard/standCard.module.css';
import like from '../main/standCard/like.svg';
import liked from '../main/standCard/liked.svg';

const Favorites = () => {
  // Используем useState для хранения избранных стендов
  const [favoriteStands, setFavoriteStands] = useState([]); // Используем useEffect для установки изначального состояния из localStorage

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];
    const filteredStands = stands.filter((stand) => parsedFavorites.includes(stand.id));
    setFavoriteStands(filteredStands);
  }, []);

  const deleteFromFavorites = (id) => {
    const newFavorites = favoriteStands.filter((stand) => stand.id !== id);
    setFavoriteStands(newFavorites); // Обновляем состояние без перезагрузки страницы
    const newFavoritesIds = newFavorites.map((stand) => stand.id);
    localStorage.setItem('favorites', JSON.stringify(newFavoritesIds)); // Обновляем localStorage
  };

  return (
    <div className={styles.cards}>
      {favoriteStands.map((stand) => (
        <div key={stand.id} className={styles.card}>
          <img
            className={styles.like}
            src={favoriteStands.some((favStand) => favStand.id === stand.id) ? liked : like}
            alt="like"
            onClick={() => deleteFromFavorites(stand.id)}
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

export default Favorites;
