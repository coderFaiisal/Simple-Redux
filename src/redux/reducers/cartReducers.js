import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

export const initialState = {
  cart: [],
  products: [
    { name: "HP", id: 1 },
    { name: "Apple", id: 2 },
    { name: "Dell", id: 3 },
    { name: "Asus", id: 4 },
    { name: "Lenovo", id: 5 },
  ],
};

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        productId: action.id,
        cartId: state.cart.length + 1,
        name: action.name,
      };
      const newCart = [...state.cart, newItem];
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_FROM_CART:
      const remainingCart = state.cart.filter(
        (item) => item.cartId !== action.id
      );
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};
