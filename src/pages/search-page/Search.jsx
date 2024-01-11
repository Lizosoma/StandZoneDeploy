import React, { useState, useEffect } from 'react';
import Filters from './components/filters/Filters';
import SearchInput from './components/search-field/SearchInput';
import { StandsService } from '../../services/card.service';
import StandCard from '../../components/stand-card/StandCard';
import useIsFavorite from '../../hooks/useIsFavorite';

const Search = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const favorites = useIsFavorite();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await StandsService.getAll();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch stands:', error);
        setItems([]);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    if (searchResults.length > 0) {
      setFilteredItems(searchResults);
    } else {
      setFilteredItems(items);
    }
  }, [searchResults, items]);

  return (
    <>
      <SearchInput data={items} setSearchResults={setSearchResults} searchResults={searchResults} />
      <Filters data={items} setFilteredItems={setFilteredItems} filteredItems={filteredItems} />

      <div className="cards">
        {filteredItems.map((stand) => (
          <StandCard key={stand.id} stand={stand} isFavorite={favorites.isFavorite(stand)} />
        ))}
      </div>
    </>
  );
};

export default Search;
