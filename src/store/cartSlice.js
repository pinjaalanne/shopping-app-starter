import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    // reducers is used for internal applicatio logic
    reducers: {
        addToCart: (state, action) => {
            //previous implementation
            // state.cart = [...state.cart, action.payload];
            // New implementation
            const index = state.cart.findIndex(
                (item) => item.id === action.payload.id); // action.payload is === product // if doesn't exist, index = -1
            if (index !== -1) { // the product exists in the cart and the index was returened
                state.cart[index].quantity += 1;
            } else { // if the product was not found, -1 was returned from index, and the whole product will be added to the array with a quantity
                state.cart.push({ ...action.payload, quantity: 1 }); // takes the product object and creates a new object with same properties and the quantity property with value 1
            }
        },
        removeFromCart: (state, action) => {
            const product = action.payload;
            // remove product from cart if it exists
            const index = state.cart.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },
        reducerQuantityByOne: (state, action) => {
            const product = action.payload;
            const index = state.cart.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                state.cart[index].quantity -= 1;
            } else {
                state.cart.splice(index, 1);
            }
        }
    },
    // extraReducers is used for external logic like API calls (getting and posting data)
    extraReducers: (builder) => {

    },
});

// This should be used for reducers NOT extraReducers
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;