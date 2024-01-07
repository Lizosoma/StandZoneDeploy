import React, { useState, useEffect } from 'react';
import StandCard from './standCard/StandCard';
import styles from '../main/standCard/standCard.module.css';
import { StandsService } from '../../../services/card.service';
import Pagination from './pagination/Pagination';

const Main = () => {
  const [stands, setStands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);
  const [totalItems, setTotalItems] = useState(0);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites') || '[]'));
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((currentFavorites) => {
      const isFavorite = currentFavorites.includes(id);
      if (isFavorite) {
        return currentFavorites.filter((favoriteId) => favoriteId !== id);
      } else {
        return [...currentFavorites, id];
      }
    });
  };

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const data = await StandsService.getByPage(page, itemsPerPage);
        setStands(data.stands);
        setTotalItems(data.totalItems);
        setError(null);
      } catch (err) {
        setError('Something wrong with the server. Please try again later.');
      }
    };

    fetchData(currentPage);
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      {error && <div>{error}</div>}
      <div className={styles.cards}>
        {stands.map((stand) => (
          <StandCard
            key={stand.id}
            stand={stand}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(stand.id)}
          />
        ))}
      </div>
      {!error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Main;
