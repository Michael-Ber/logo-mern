import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../../service/fetchData";

const initialState = {
    user: null,
    token: null,
    message: null,
    status: 'idle'
};

const url = 'http://localhost:3006/api/auth'

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async(data) => {
        try {
            return await fetchData(`${url}/register`, {
                method: 'POST',
                body: JSON.stringify(data)
            })

        } catch (error) {
            console.log(error)
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRegister.pending, state => {state.status = 'loading'})
            .addCase(fetchRegister.fulfilled, (state, action) => { 
                state.status = 'fulfilled'; 
                state.user = action.payload.user; 
                state.token = action.payload.token; 
                state.message = action.payload.message; 
            })
            .addCase(fetchRegister.rejected, state => state.status = 'error')
    }
});

const { reducer, actions } = authSlice;
export default reducer;
