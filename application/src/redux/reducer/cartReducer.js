import { ADD_TO_CART, REMOVE_CART, CART_RESET, ADD_TOCART_ERROR} from "../actiontype/cartActionType";

const initicart={
  isloading:false,
  isError:false,
  cartData:[]
}

export const cartDatareducer= (state = initicart, {type, payload})=>{
    switch(type){
    case ADD_TOCART_ERROR:
      return {
        ...state,
        isloading: false,
        isError: true,
        cartData: [],
      };
    case ADD_TO_CART:
      return {
        ...state,
        isloading: false,
        isError: false,
        cartData: payload,
      };
    default:
      return state;
  }
  }

  // export const cartDatareducer= (state = initicart, {type, payload})=>{
//   switch(type){
//     case REQ_DATA:
//       return{
//         ...state,
//         isloading:true,
//         isError:false,
//         cartData:[]
//       }
//   case ERR_DATA:
//     return {
//       ...state,
//       isloading: false,
//       isError: true,
//       filterData: [],
//       cartData: [],
//     };
//   case GET_DATA:
//     return {
//       ...state,
//       isloading: false,
//       isError: false,
//       filterData: [],
//       cartData: payload,
//     };
//   default:
//     return state;
// }
// }