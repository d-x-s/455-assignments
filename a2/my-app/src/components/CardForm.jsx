import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';

function CardForm() {

  // STYLES
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const buttonStyle = {
    // Button styles
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
  };

  const labelStyle = {
    // Label styles
    fontWeight: 'bold',
    marginRight: '5px',
  };



  // INITIALIZE FORM STATE
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');



  // DISPATCH AND SUBMISSION
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the addItem action with the form data
    dispatch(addItem(itemName, description, price, quantity));
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
      <button onClick={handleClear} style={buttonStyle} id="clear">Clear Input</button>

      <form onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
        <label style={labelStyle} htmlFor="inputName">Item Name:</label>
        <input 
          type="text" 
          id="inputName" 
          name="iname" 
          value={itemName}
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

        <label style={labelStyle} htmlFor="inputQuantity">Quantity:</label>
        <input 
          type="text" 
          id="inputQuantity" 
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        </div>

        <button style={buttonStyle} type="submit" id="submit">Add Card</button>

      </form>
    </div>
  );
}

export default CardForm;
