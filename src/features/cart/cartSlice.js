import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 1,
      name: "Margherita",
      quantity: 1,
      unitPrice: 10,
      totalPrice: 10,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //payload = newItem
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incrementItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decrementItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.unitPrice * item.quantity;
      } else if (item && item.quantity === 1) {
        // If quantity is 1, we can remove the item from the cart
        state.cart = state.cart.filter(
          (cartItem) => cartItem.pizzaId !== action.payload
        );
      }
    },
    clearCart(state) {
      // This action clears the cart
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
