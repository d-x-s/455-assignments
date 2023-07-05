// REDUCER -> based on the action, modifies the store
// we can have multiple reducers depending on what we want to do
const counterReducer = (state = 0, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return state + action.payload;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
  export default counterReducer;