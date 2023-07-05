import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';

import { addCardAsync } from '../redux/cards/thunks';

function ServerForm() {

  // STYLES
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: '20px',
    borderRadius: '10px',
  };
  
  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '15px',
  };
  
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const [isHovered, setIsHovered] = useState(false);
  
  const hoverButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#45a049',
  };
  
  // Merge the styles based on the hover state
  const getButtonStyle = (isHovered) => {
    return isHovered ? hoverButtonStyle : buttonStyle;
  };
  
  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
    marginBottom: '5px',
  };




  // INITIALIZE FORM STATE
  const [name, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setQuantity] = useState('');



  // DISPATCH AND SUBMISSION
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the addItem action with the form data 
    const card = { name, description, price, imageUrl };
    dispatch(addCardAsync(card));
  };



  // CLEAR INPUTS
  const handleClear = (e) => {
    // Clear the form fields
    setItemName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  }

  return (
    <div style={formContainerStyle}>
      <button onClick={handleClear} 
              id="clear"
              style={getButtonStyle(isHovered)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
      >
                Clear Input
      </button>

      <form onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
        <label style={labelStyle} htmlFor="inputName">Item Name:</label>
        <input 
          type="text" 
          id="inputName" 
          name="iname" 
          value={name}
          onChange={(e) => setItemName(e.target.value)}
        />

        <label style={labelStyle} htmlFor="inputDescription">Description:</label>
        <input 
          type="text" 
          id="inputDescription" 
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label style={labelStyle} htmlFor="inputPrice">Price:</label>
        <input 
          type="text" 
          id="inputPrice" 
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label style={labelStyle} htmlFor="inputQuantity">Image URL:</label>
        <input 
          type="text" 
          id="inputQuantity" 
          name="quantity"
          value={imageUrl}
          onChange={(e) => setQuantity(e.target.value)}
        />
        </div>

        <button 
          type="submit" 
          id="submit"
          style={getButtonStyle(isHovered)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Add Card
        </button>

      </form>
    </div>
  );
}

export default ServerForm;
