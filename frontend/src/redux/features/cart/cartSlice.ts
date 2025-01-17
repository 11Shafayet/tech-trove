import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
