import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { deleteItem } from '../actions';

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

function Popup({ selectedItem }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("trying to delete: " + selectedItem.name);
    dispatch(deleteItem(selectedItem.name))
  };

  return (
    <div style={popupStyle}>
      <p>Description: {selectedItem.description}</p>
      <p>Price: {selectedItem.price}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

// Map the state from Redux store to component props
const mapStateToProps = (state, { itemName }) => ({
    selectedItem: state.items.form.items.find(item => item.name === itemName), // Assuming `items` is the property name in your Redux store
  });

const mapDispatchToProps = {
  deleteItem, // Assuming you have an action creator called deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);