import {
    GET_DATA,
    ERR_DATA,
    REQ_DATA,
    Add_TO_CART,
    REMOVE_CART,
    GET_PRODUCT_DETAILS_RESET
  } from "../actiontype/actionType";

  export const getProductdetailreducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case REQ_DATA:
        return {
          loading: true,
        };
      case GET_DATA:
        return {
          loading: false,
          product: action.payload,
        };
      case ERR_DATA:
        return {
          loading: false,
          error: action.payload,
        };
      case GET_PRODUCT_DETAILS_RESET:
        return {
          product: {},
        };
        default:
          return state
    }
  };