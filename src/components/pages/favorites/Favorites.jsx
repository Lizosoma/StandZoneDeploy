import React, { useState, useEffect } from 'react';
import styles from '../main/standCard/standCard.module.css';
import { StandsService } from '../../../services/card.service';
import StandCard from '../main/standCard/StandCard';

const Favorites = () => {
  const [favoriteStands, setFavoriteStands] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');

    const fetchFavoriteStands = async () => {
      const standsData = await Promise.all(favoriteIds.map((id) => StandsService.getById(id)));
      setFavoriteStands(standsData);
    };

    fetchFavoriteStands();
  }, []);

  const deleteFromFavorites = (id) => {
    const updatedFavorites = favoriteStands.filter((stand) => stand.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites.map((stand) => stand.id)));
    setFavoriteStands(updatedFavorites);
  };

  return (
    <div className={styles.cards}>
      {favoriteStands.map((stand) => (
        <StandCard
          key={stand.id}
          stand={stand}
          toggleFavorite={deleteFromFavorites}
          isFavorite={true}
        />
      ))}
    </div>
  );
};

export default Favorites;
