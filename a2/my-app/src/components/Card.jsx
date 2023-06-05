import React from 'react';

const imageStyle = {
    width: 100,
    height: 100,
    borderColor: '#61dbfb',
    borderStyle: 'solid',
    borderRadius: 7.5,
    borderWidth: 5,
}

const cardStyle = {
    paddingLeft: 20,
    paddingRight: 20,
}

function Card({ itemName, imageUrl, onClick }) {
    return (
        <div style={cardStyle} onClick={onClick}>
            <h3>{itemName}</h3>
            <img src={imageUrl} alt={itemName} style={imageStyle}/>
      </div>
    )
}

export default Card;