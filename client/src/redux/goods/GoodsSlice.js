import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../../service/fetchData";

const url = 'http://localhost:3006/goods'

const initialState = {
    goods: null,
    cart: [],
    totalOrder: [],
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

export const addToCart = createAsyncThunk(
    'goods/addToCart',
    async({goodId, additional = {amount: 1}}) => { 
        try {
            return await fetchData(`${url}/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token")
                },
                body: JSON.stringify({goodId, additional})
            })
        } catch (error) {
            console.log(error)
        }
    }
);

export const removeFromCart = createAsyncThunk(
    'goods/removeFromCart',
    async({goodId}) => {
        try {
            return await fetchData(`${url}/cart`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token")
                },
                body: JSON.stringify({goodId})
            })
        } catch (error) {
            console.log(error)
        }
    }
);

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        changeTotalOrder: (state, action) => { 
            if(state.totalOrder.filter(item => item.id === action.payload.id).length>0) {
                state.totalOrder.map(item => {
                    if(item.id === action.payload.id) {
                        return ({...item, total: action.payload.total})
                    }
                    return item
                })
            }else {
                state.totalOrder.push(action.payload);
            }
        } 
    },
    extraReducers: builder => {
        builder 
            //GETTING GOODS
            .addCase(gettingGoods.pending, state => { state.status = 'loading' })
            .addCase(gettingGoods.fulfilled, (state, action) => { 
                state.status = 'idle';  
                state.goods = action.payload.goods;
            })
            .addCase(gettingGoods.rejected, (state, action) => { state.status = 'error' })

            //ADD_TO_CART
            .addCase(addToCart.pending, state => { state.status = 'loading' })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.status = 'idle';  
                state.cart = action.payload.item;
            })
            .addCase(addToCart.rejected, (state, action) => { state.status = 'error' })
    }
});

const { reducer, actions } = goodsSlice;
export default reducer;

export const { changeTotalOrder } = actions;