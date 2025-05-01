import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../test_products";

const InitialCart = [
  // {
  //   id: 1,
  //   name: "Wireless Headphones",
  //   quantity: 1,
  //   image: '/src/assets/camera.jpg', 
  //   price: 59.99
  // }
  {
    id: products[1]._id, 
    name: products[1].name, 
    quantity: 2, 
    options: products[1].options, 
    optionNum: 1, 
    image: products[1].images[products[1].main_image_option], 
    price: products[1].options[1].price,
  }
];

const initialState = {
  cart: [...InitialCart], 
}

const Cart = createSlice({
  name: 'cart', 
  initialState, 
  reducers: {
    addToCart:(state, {payload}) => {
      for ( let i = 0; i < state.cart.length; i++ ){
        if ( state.cart[i].productId === payload.item.productId){
          if ( state.cart[i].optionNum === payload.item.optionNum ){
            state.cart[i] = {...payload.item};
            return;
          }
        }
      }
      state.cart.push(payload.item);
    }, 
    incrementQuantity: (state, {payload}) => {
      const item = state.cart.find((item) => item.productId === payload.productId);
      if ( item.quantity >= item.options[item.optionNum].quantity){
        item.quantity = item.options[item.optionNum].quantity;
        return;
      } else {
        item.quantity += 1;
      }
    }, 
    decrementQuantity: (state, {payload}) => {
      const item = state.cart.find((item) => item.productId === payload.productId);
      if ( item.quantity === 0){
        state.cart = state.cart.filter((item) => item.productId !== payload.productId);
      } else {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, {payload}) => {
      state.cart = state.cart.filter((item) => item.productId !== payload.productId);
    }, 
    changeOption: (state, {payload}) => {
      const {productId, optionNum} = payload;
      const item = state.cart.find((item) => item.productId === productId);
      if ( item ){
        item.optionNum = optionNum;
        item.price = item.options[item.optionNum].price;
        
        if ( item.quantity > item.options[optionNum].quantity){
          item.quantity = item.options[optionNum].quantity;
        }
      }
    }, 
    clearCart: (state) => {
      state.cart = [];
    }
  }
})

export const {addToCart, removeFromCart, incrementQuantity, changeOption, decrementQuantity, clearCart} = Cart.actions;

export default Cart.reducer