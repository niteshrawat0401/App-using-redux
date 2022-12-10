import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from "react-redux" 
import { getData } from '../redux/actions'

export const Home = () => {
  const [data, setData]= useState()
  const productData= useSelector(((state)=> state.getProduct.products))
  console.log(productData);
const dispatch= useDispatch(); 

useEffect(()=>{
  // dispatch(getData)
  getData(dispatch)
},[dispatch])

  return (
    <div>
      {
        productData.map((ele)=>{
          
        })
      }
    </div>
  )
}
