import {
  GET_DATA,
  REQ_DATA,
  ERR_DATA,
  SORT_DATA,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_RESET,
  FILTER_DATA
} from "../actiontype/actionType";
import axios from "axios";
const URL = 'https://fakestoreapi.com';

export const getData = (dispatch) => {
  dispatch(req_data());
  axios
    .get(`${URL}/products`)
    .then((res) =>
      dispatch({
        type: GET_DATA,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(error_data(err.message));
    });
};

export const req_data = () => ({
  type: REQ_DATA,
});

export const error_data = (err) => ({
  type: ERR_DATA,
  payload: err,
});


// export const getProductDetails = (id) => async (dispatch) =>{
//     export const getProductDetails =(dispatch,id) => {
//         dispatch(req_data());
//         axios.get(`https://fakestoreapi.com/products/${id}`)
//         .then((res)=>{
//             dispatch({
//                 type: GET_DATA,
//                 payload: res.data
//             })
//         })
//         .catch((err)=>{
//             dispatch(error_data(err.message))
//         })
// }

export const getProductDetails = (id) => async (dispatch) => {
  try {
      dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
      const { data } = await axios.get(`${URL}/product/${id}`);
      //console.log(data);

      dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });

  } catch (error) {
      dispatch({ type: GET_PRODUCT_DETAILS_FAIL, payload: error.response});

  }
};

// export const getProductDetails = (id) => async (dispatch) =>{
//     try {
//         dispatch({type: REQ_DATA});

//         const data = await axios.get(`https://fakestoreapi.com/products/product/${id}`);

//         dispatch({
//             type: GET_DATA,
//             payload: data})
//     } catch (error) {
//         dispatch({type: ERR_DATA, payload: error.message})
//     }
// }


export const sortProducts=(payload)=>({
  type: SORT_DATA,
  payload
})

export const filterProducts=(payload)=>({
  type: FILTER_DATA,
  payload
})

