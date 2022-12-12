import {
  ADD_TOCART_ERROR,
  CART_RESET,
  ADD_TO_CART,
  REMOVE_CART,
} from "./../actiontype/cartActionType";
import axios from "axios";


export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/product/${id}`);

    dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: ADD_TOCART_ERROR, payload: error.message });
  }
};
