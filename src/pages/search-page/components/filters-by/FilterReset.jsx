import React from 'react';
import styles from '../filters/filters.module.css';

const FilterReset = ({ setFilterParams, onApplyFilters }) => {
  const handleReset = () => {
    setFilterParams({
      chapter: 'all',
      abilityType: 'all',
      formType: 'all',
      tentativeType: 'all',
      battlecry: 'all',
    });
    onApplyFilters();
    // Костыль КАК ПЕРЕДЕЛАТЬ?!?!?!
    window.location.reload();
  };

  return (
    <button className={styles.reset} onClick={handleReset}>
      &#10006;
    </button>
  );
};

export default FilterReset;
