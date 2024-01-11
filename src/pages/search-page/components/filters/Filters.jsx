import React, { useEffect, useState } from 'react';
import styles from './filters.module.css';
import FilterReset from '../filters-by/FilterReset';
import FilterResult from '../filters-by/FilterResult';
import { useSearchParams } from 'react-router-dom';
import FilterBy from '../filters-by/FilterBy';

const Filters = ({ data, setFilteredItems, filteredItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredItemsCount, setFilteredItemsCount] = useState(0);
  const [filterParams, setFilterParams] = useState({
    chapter: 'all',
    abilityType: 'all',
    formType: 'all',
    tentativeType: 'all',
    battlecry: 'all',
  });

  const updateFilter = (filterName, value) => {
    setFilterParams((prevParams) => ({
      ...prevParams,
      [filterName]: value,
    }));
  };

  const shouldFilter = (value, filter) => filter === 'all' || value.includes(filter);

  const applyFilters = () => {
    const newFilteredItems = data?.filter((item) => {
      const battlecryCondition =
        filterParams.battlecry === 'Exists'
          ? item.battlecry !== 'none'
          : filterParams.battlecry === 'None'
            ? item.battlecry === 'none'
            : true;

      return (
        shouldFilter(item.chapter, filterParams.chapter) &&
        shouldFilter(item.type, filterParams.abilityType) &&
        shouldFilter(item.type, filterParams.formType) &&
        shouldFilter(item.type, filterParams.tentativeType) &&
        battlecryCondition
      );
    });

    setFilteredItems(newFilteredItems);
    setFilteredItemsCount(newFilteredItems.length);
  };

  const handleApplyFilters = () => {
    applyFilters();
  };

  useEffect(() => {
    setSearchParams({
      chapter: filterParams.chapter,
      abilityType: filterParams.abilityType,
      formType: filterParams.formType,
      tentativeType: filterParams.tentativeType,
      battlecry: filterParams.battlecry,
    });
  }, [filterParams, setSearchParams]);

  const handleSetSearchParams = (params) => {
    Object.entries(filterParams).forEach(([key, value]) => {
      if (value !== 'all') {
        params[key] = value;
      }
    });

    setSearchParams(searchParams);
  };

  return (
    <>
      <div className={styles.filters}>
        <FilterBy filterParams={filterParams} setFilterParam={updateFilter} />
        <div className={styles.buttons}>
          <FilterResult
            onApplyFilters={handleApplyFilters}
            filterParams={filterParams}
            filteredItemsCount={filteredItemsCount}
            setSearchParams={handleSetSearchParams}
          />
          <FilterReset setFilterParams={setFilterParams} onApplyFilters={handleApplyFilters} />
        </div>
      </div>
      {filteredItems.length === 0 && (
        <div className="noMessage">No stands found for the selected filters</div>
      )}
    </>
  );
};

export default Filters;
