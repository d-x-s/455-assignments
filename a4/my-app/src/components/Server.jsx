import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getCardsAsync } from '../redux/cards/thunks';
import ServerCard from './ServerCard';

const galleryStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginLeft: '-10px', // Negative margin on the left
    marginRight: '-10px', // Negative margin on the right
};

export const Server = () => {
    const cards = useSelector(state => state.cards.list);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCardsAsync());
    }, [dispatch]);
  
    console.log(cards); // Log the value of `cards` to inspect its structure
  
    if (!Array.isArray(cards)) {
      return <div>Loading...</div>; // Display a loading message while waiting for the cards to be fetched
    }
  
    return (
      <div style={galleryStyle}>
        {cards.map((card) => (
          <ServerCard
          key={card._id}
          id={card._id}
          price={card.price} // Make sure to provide a unique key prop for each item
          description={card.description}
          itemName={card.name}
          imageURL={card.imageURL}
          rating={card.rating}
        />
        ))}
      </div>
    );
  };

  export default Server;
