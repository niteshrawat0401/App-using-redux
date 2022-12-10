import {
  GET_DATA,
  Add_TO_CART,
  REMOVE_CART,
  ERR_DATA,
  REQ_DATA,
} from "../actiontype/actionType";

const initialstate = {
  data: [],
  isloading: false,
  isError: false,
  filterData: [],
  products: [],
};

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case REQ_DATA:
      return {
        ...state,
        isloading: true,
        isError: false,
        filterData: [],
        products: [],
      };
    case ERR_DATA:
      return {
        ...state,
        isloading: false,
        isError: true,
        filterData: [],
        products: [],
      };
    case GET_DATA:
      return {
        ...state,
        isloading: false,
        isError: false,
        filterData: [],
        products: [],
        products: payload,
      };
  }
};
