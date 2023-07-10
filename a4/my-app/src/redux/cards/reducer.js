import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addCardAsync, getCardsAsync, deleteCardAsync } from './thunks';

const INITIAL_STATE = {
    list: [],
    getCards: REQUEST_STATE.IDLE,
    addCard: REQUEST_STATE.IDLE,
    deleteCard: REQUEST_STATE.IDLE,
    error: null
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCardsAsync.pending, (state) => {
                state.getCards = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getCardsAsync.fulfilled, (state, action) => {
                state.getCards = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getCardsAsync.rejected, (state, action) => {
                state.getCards = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            .addCase(addCardAsync.pending, (state) => {
                state.addCard = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addCardAsync.fulfilled, (state, action) => {
                state.addCard = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(addCardAsync.rejected, (state, action) => {
                state.addCard = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            .addCase(deleteCardAsync.pending, (state) => {
                state.deleteCard = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteCardAsync.fulfilled, (state, action) => {
                state.deleteCard = REQUEST_STATE.FULFILLED;
                state.list = state.list.filter(card => card._id !== action.payload._id);
            })
            .addCase(deleteCardAsync.rejected, (state, action) => {
                state.deleteCard = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default cardsSlice.reducer;