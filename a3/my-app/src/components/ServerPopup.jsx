import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCardAsync } from '../redux/cards/thunks';

const popupStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  width: 100,
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
  borderRadius: 10,
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  };

function ServerPopup({ itemName, itemPrice }) {
  const dispatch = useDispatch();
  console.log("selected item is " + itemName);

  const handleDelete = () => {
    console.log("trying to delete card with name: " + itemName);
    dispatch(deleteCardAsync(itemName))
  };

  return (
    <div style={popupStyle}>
        <p>${ itemPrice }</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}


export default ServerPopup;