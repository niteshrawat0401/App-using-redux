import {
  Add_TO_CART,
  GET_DATA,
  REMOVE_CART,
  REQ_DATA,
  ERR_DATA,
} from "../actiontype/actionType";
import axios from "axios";

export const getData = (dispatch) => {
  dispatch(req_data());
  axios
    .get(`https://fakestoreapi.com/products`)
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
    export const getProductDetails =(id)=> (dispatch) => {
        dispatch(req_data());
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            dispatch({
                type: GET_DATA,
                payload: res.data
            })
        })
        .catch((err)=>{
            dispatch(error_data(err.message))
        })
}
