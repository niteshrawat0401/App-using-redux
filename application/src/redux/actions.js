import { Add_TO_CART,  GET_DATA, REMOVE_CART, REQ_DATA, ERR_DATA } from "./actiontype/actionType";
import axios from "axios"

function getData(dispatch){
    dispatch(req_data());
    axios.get(`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`)
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

export const req_data= ()=>({
    type: REQ_DATA
})

export const  error_data= ()=>({
    type: ERR_DATA
})