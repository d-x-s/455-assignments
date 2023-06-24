import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import CardService from "./service";

export const getCardsAsync = createAsyncThunk(
  actionTypes.GET_CARDS,
  async () => {
    return await CardService.getCards();
  }
);

export const addCardAsync = createAsyncThunk(
  actionTypes.ADD_CARD,
  async (card) => {
    return await CardService.addCard(card);
  }
);

export const deleteCardAsync = createAsyncThunk(
  actionTypes.DELETE_CARD_CARD,
  async (cardName) => {
    return await CardService.deleteCard(cardName);
  }
);