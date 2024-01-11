import React from 'react';
import filters from './filtersList.js';
import PinkSelect from '../../../../ui/pink-select/PinkSelect.jsx';

const FilterBy = ({ filterParams, setFilterParam }) => {
  return (
    <>
      {filters.map((filter) => (
        <PinkSelect
          key={filter.filterKey}
          text={filter.text}
          options={filter.options}
          value={filterParams[filter.filterKey]}
          onChange={(e) => setFilterParam(filter.filterKey, e.target.value)}
        />
      ))}
    </>
  );
};

export default FilterBy;
