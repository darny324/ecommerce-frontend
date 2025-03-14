import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cart'

const store = configureStore( {
  reducer: {
    cart: CartReducer,
  }
})

export default store