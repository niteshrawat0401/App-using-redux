import {
  GET_DATA,
  ERR_DATA,
  REQ_DATA,
  GET_PRODUCT_DETAILS_RESET,
} from "../actiontype/actionType";

// export const Productdetreducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case REQ_DATA:
//       return {
//         loading: true,
//       };
//     case GET_DATA:
//       return {
//         loading: false,
//         product: action.payload,
//       };
//     case ERR_DATA:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     // case GET_PRODUCT_DETAILS_RESET:
//     //   return {
//     //     product: {},
//     //   };
//     default:
//       return state;
//   }
// };

const initialpro={
  isloading:false,
  isError:false,
  product:[]
}

export const Productdetreducer= (state =initialpro, {type, payload})=>{
  switch(type){
  case REQ_DATA:
    return {
      ...state,
      isloading: true,
      isError: false,
      product: [],
    };
  case ERR_DATA:
    return {
      ...state,
      isloading: false,
      isError: true,
      product: [],
    };
  case GET_DATA:
    return {
      ...state,
      isloading: false,
      isError: false,
      product: payload,
    };
  default:
    return state;
}
}