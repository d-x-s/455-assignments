import { createSlice } from '@reduxjs/toolkit';
import { getUsersAsync } from './thunks';

const INITIAL_STATE = {
  list: [
    { id: 1, name: 'Stephanie'},
    { id: 2, name: 'Danya' },
    { id: 3, name: 'Ian' }
  ]
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.list = action.payload
      });
  }
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
