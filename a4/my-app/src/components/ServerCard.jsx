import React, { useState } from 'react';
import ServerPopup from './ServerPopup';

const imageStyle = {
    width: 100,
    height: 100,
    borderColor: '#61dbfb',
    borderStyle: 'solid',
    borderRadius: 7.5,
    borderWidth: 5,
}

const cardStyle = {
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20,
}

function ServerCard({ id, itemName, imageURL, price, description, rating }) {

    const [isPopupVisible, setPopupVisible] = useState(false);

    const onClick = (e) => {
        // look up the id and render the popup component
        console.log(id, price, description, imageURL);
        setPopupVisible(!isPopupVisible);
      }

    return (
        <div style={cardStyle} onClick={(e) => onClick(e)}>
            <h3>{itemName}</h3>
            <img src={imageURL} alt={itemName} style={imageStyle}/>
            {isPopupVisible 
                && 
            <ServerPopup 
                id={id}
                itemName={itemName} 
                itemPrice={price}
                rating={rating}
            />}
      </div>
    )
}

export default ServerCard;