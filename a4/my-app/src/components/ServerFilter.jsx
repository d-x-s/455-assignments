import React, { useState, useEffect } from 'react';
import ServerCard from './ServerCard';

const ServerFilter = () => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [sortingCriteria, setSortingCriteria] = useState('lessThan');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const fetchFilteredCards = async () => {
      try {
        //const url = `http://localhost:4000/cards/filter?${sortingCriteria}=${filterValue}`;
        const url = `http://localhost:4000/database/filter?${sortingCriteria}=${filterValue}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFilteredCards(data);
      } catch (error) {
        console.error('Error fetching filtered cards:', error);
      }
    };

    fetchFilteredCards();
  }, [sortingCriteria, filterValue]);

  const handleSortingCriteriaChange = (e) => {
    setSortingCriteria(e.target.value);
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <h2>Filtered Cards:</h2>
      <form>
        <label>
          Sort By:
          <select value={sortingCriteria} onChange={handleSortingCriteriaChange}>
            <option value="lessThan">Less Than</option>
            <option value="greaterThan">Greater Than</option>
          </select>
        </label>
        <label>
          Filter Value:
          <input type="number" value={filterValue} onChange={handleFilterValueChange} />
        </label>
      </form>
      {filteredCards.map(card => (
        <ServerCard
          key={card._id}
          itemName={card.name}
          price={card.price}
          description={card.description}
          imageURL={card.imageURL}
          rating={card.rating}
        />
      ))}
    </div>
  );
};

export default ServerFilter;