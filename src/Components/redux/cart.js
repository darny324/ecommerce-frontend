import { createSlice } from "@reduxjs/toolkit";

const InitialCart = [
  {
    id: 1,
    name: "Wireless Headphones",
    color: "Black",
    quantity: 1,
    image: '/src/assets/camera.jpg', 
    price: 59.99
  },
  {
    id: 2,
    name: "Smartphone Case",
    color: "Black",
    quantity: 2,
    image: '/src/assets/camera.jpg', 
    price: 12.99
  },
  {
    id: 3,
    name: "Laptop Stand",
    color: "Silver",
    quantity: 1,
    image: '/src/assets/camera.jpg', 
    price: 34.99
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    color: "RGB",  // Assuming "RGB" is the color choice here
    quantity: 1,
    image: '/src/assets/camera.jpg', 
    price: 89.99
  },
  {
    id: 5,
    name: "Gaming Mouse",
    color: "Wireless Black", // Including wireless option in color for clarity
    quantity: 1,
    image: '/src/assets/camera.jpg', 
    price: 49.99
  },
  {
    id: 6,
    name: "USB-C Charging Cable",
    color: "White",
    quantity: 3,
    image: '/src/assets/camera.jpg', 
    price: 9.99
  },
  {
    id: 7,
    name: "Water Bottle",
    color: "Blue",
    quantity: 1,
    image: '/src/assets/camera.jpg', 
    price: 15.99
  },
  {
    id: 8,
    name: "Backpack",
    color: "Green",
    quantity: 1,
    image: '/src/assets/camera.jpg', 
    price: 39.99
  },
  {
    id: 9,
    name: "Smartwatch",
    color: "Black",
    quantity: 1,
    image: '/src/assets/camera.jpg', 
    price: 129.99
  },
  {
    id: 10,
    name: "LED Desk Lamp",
    color: "White",
    quantity: 1,
    image: '/src/assets/camera.jpg', 
    price: 24.99
  }
];

const initialState = {
  cart: [...InitialCart], 
  totalPrice: 468.9, 
  totalItems: 13, 
}

const Cart = createSlice({
  name: 'cart', 
  initialState, 
  reducers: {
    addToCart:(state, {payload}) => {
      state.cart.push(payload.item);
      state.totalPrice += payload.item.price;
    }, 
    removeFromCart: (state, {payload}) => {
      state.cart = state.cart.filter((item) => item.id !== payload.itemId);
    }, 
    
  }
})

export const {addToCart, removeFromCart} = Cart.actions;

export default Cart.reducer