import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions/dataaction";
import style from "./Home.module.css"

export const Home = () => {
  const [data, setData] = useState();
  const { products, isloading, isError } = useSelector(
    (state) => state.getProduct
  );
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getData)
    getData(dispatch);
  }, [dispatch]);

  const addToCart=()=>{
    
  }

  return (
    <div className={style.mainContainer}>
      {products.map((ele,index) => {
        return (
          <div className={style.innerContainer} key={index}> 
            <img src={ele.image} alt="" />
            <p>Runtime: <span>{ele.title}</span></p>
            <p>Title: <span>{ele.category}</span></p>
            <p>Year: <span>{ele.price}</span></p>
            <button onClick={addToCart}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};
