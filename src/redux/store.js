import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cart'
import userReducer from './user'

const store = configureStore( {
  reducer: {
    cart: CartReducer,
    user: userReducer,
  }
})

export default store