import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const galleryStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginLeft: '-10px', // Negative margin on the left
    marginRight: '-10px', // Negative margin on the right
};

function Gallery({ cards }) {
    return (
        <div style={galleryStyle}>
        {/* Render cards based on the items array */}
        {cards.map(card => (
          <Card
            // key={card.id} // Make sure to provide a unique key prop for each item
            itemName={card.name}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    )
}

// Map the state from Redux store to component props
const mapStateToProps = state => ({
    cards: state.form.items // Assuming `items` is the property name in your Redux store
  });
  
// Connect the Gallery component to the Redux store
export default connect(mapStateToProps)(Gallery);