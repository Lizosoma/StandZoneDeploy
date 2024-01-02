import React, { useState, useEffect } from 'react';
import StandCard from './standCard/StandCard';
import styles from '../main/standCard/standCard.module.css';
import { StandsService } from '../../../services/card.service';
import Pagination from './pagination/Pagination';

const Main = () => {
  const [stands, setStands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Количество элементов на странице
  const [totalItems, setTotalItems] = useState(0); // Общее количество элементов

  useEffect(() => {
    const fetchData = async (page) => {
      const data = await StandsService.getByPage(page, itemsPerPage);
      setStands(data.stands);
      setTotalItems(data.totalItems);
    };

    fetchData(currentPage);
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="container">
      <div className={styles.cards}>
        {stands.map((stand) => (
          <StandCard key={stand.id} stand={stand} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Main;
