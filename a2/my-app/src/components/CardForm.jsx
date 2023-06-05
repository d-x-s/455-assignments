function CardForm() {
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

  return (
    <div style={formContainerStyle}>
      <button style={buttonStyle} id="clear">Clear Input</button>
      <button style={buttonStyle} type="submit" id="submit">Add Card</button>

      <form>
        <div style={inputContainerStyle}>
        <label style={labelStyle} htmlFor="inputName">Item Name:</label>
        <input type="text" id="inputName" name="iname" />

        <label style={labelStyle} htmlFor="inputDescription">Description:</label>
        <input type="text" id="inputDescription" name="description" />

        <label style={labelStyle} htmlFor="inputPrice">Price:</label>
        <input type="text" id="inputPrice" name="price" />

        <label style={labelStyle} htmlFor="inputQuantity">Quantity:</label>
        <input type="text" id="inputQuantity" name="quantity" />
        </div>

      </form>
    </div>
  );
}

export default CardForm;
