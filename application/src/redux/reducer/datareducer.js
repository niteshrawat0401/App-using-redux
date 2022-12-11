import {
  GET_DATA,
  ERR_DATA,
  REQ_DATA,
  Add_TO_CART,
  REMOVE_CART,
  GET_PRODUCT_DETAILS_RESET
} from "../actiontype/actionType";

const initialstate = {
  data: [],
  isloading: false,
  isError: false,
  filterData: [],
  products: [],
};

export const getProductreducer = (state = initialstate, { type, payload }) => {
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
        products: payload,
      };
    default:
      return state;
  }
};

const initial = {
  // isloading: false,
  // isError: false,
  // filterData: [],
  // product: {},
};

// export const getProductdetailreducer = (state = { productdetails: {} }, { type, payload }) => {
//   switch (type) {
//     case REQ_DATA:
//       return {
//         ...state,
//         isloading: true,
//         isError: false,

//         productdetails: [],
//       };
//     case ERR_DATA:
//       return {
//         ...state,
//         isloading: false,
//         isError: true,

//         productdetails: [],
//       };
//     case GET_DATA:
//       return {
//         ...state,
//         isloading: false,
//         isError: false,
//         productdetails: payload,
//       };
//     case GET_PRODUCT_DETAILS_RESET:
//       return {
//         product: {},
//       };
//     default:
//       return state;
//   }
// };
