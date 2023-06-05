export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addItem = (itemName, description, price, quantity) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            itemName,
            description,
            price,
            quantity
        }
    }
}