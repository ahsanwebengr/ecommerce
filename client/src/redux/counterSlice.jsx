import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productData: [],
    userInfo: null,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.productData = action.payload;
        }
    },
});

export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;