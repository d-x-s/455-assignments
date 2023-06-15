import { createAsyncThunk, createaAsyncThunk } from '@reduxjs/toolkit'
import UserService from './service';

export const getUsersAsync = createAsyncThunk(
    'GET_USERS',
    async () => {
        return await UserService.getUsers();
    }
);