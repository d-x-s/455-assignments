import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from './cards/reducer';
import deprecatedReducer from '../reducers/index';

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        items: deprecatedReducer
    },
    devTools: true
});