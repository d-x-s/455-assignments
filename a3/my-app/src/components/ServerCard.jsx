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

function ServerCard({ itemName, imageUrl, price, description, key }) {

    const [isPopupVisible, setPopupVisible] = useState(false);

    const onClick = (e) => {
        // look up the id and render the popup component
        console.log(price, description);
        setPopupVisible(!isPopupVisible);
      }

    return (
        <div style={cardStyle} onClick={(e) => onClick(e)}>
            <h3>{itemName}</h3>
            <h3>{key}</h3>
            <img src={imageUrl} alt={itemName} style={imageStyle}/>
            {isPopupVisible 
                && 
            <ServerPopup itemName={itemName} itemPrice={price}/>}
      </div>
    )
}

export default ServerCard;