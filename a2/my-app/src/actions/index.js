import { v4 as uuidv4 } from 'uuid';

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

export const addItem = (name, description, price, imageUrl) => {
    const key = uuidv4(); // Generate a unique ID

    return {
        type: 'ADD_ITEM',
        payload: {
            key,
            name,
            description,
            price,
            imageUrl
        }
    }
}