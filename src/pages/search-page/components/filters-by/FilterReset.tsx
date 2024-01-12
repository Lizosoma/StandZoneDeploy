import React from 'react';
import styles from '../filters/filters.module.css';

interface FilterResetProps {
  setFilterParams: (filterParams: {
    chapter: string;
    abilityType: string;
    formType: string;
    tentativeType: string;
    battlecry: string;
  }) => void;
  onApplyFilters: () => void;
}

const FilterReset: React.FC<FilterResetProps> = ({ setFilterParams, onApplyFilters }) => {
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
