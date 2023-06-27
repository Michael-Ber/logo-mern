import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../../service/fetchData";

const url = 'http://localhost:3006/goods'

const initialState = {
    goods: null,
    status: 'idle',
    error: null
};

export const gettingGoods = createAsyncThunk(
    'goods/gettingGoods',
    async() => {
        try {
            return await fetchData(url, {});
        } catch (error) {
            console.log(error)
        }
    }
);

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder 
            .addCase(gettingGoods.pending, state => { state.status = 'loading' })
            .addCase(gettingGoods.fulfilled, (state, action) => { 
                state.status = 'fulfilled';  
                state.goods = action.payload.goods;
            })
            .addCase(gettingGoods.rejected, (state, action) => { state.status = 'error' })
    }
});

const { reducer } = goodsSlice;
export default reducer;