import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions";

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

  return (
    <div>
      {products.map((ele) => {
        return (
          <div>
            <img src={ele.Poster} alt="" />
            <p>Runtime: <span>{ele.Runtime}</span></p>
            <p>Title: <span>{ele.Title}</span></p>
            <p>Year: <span>{ele.Year}</span></p>
          </div>
        );
      })}
    </div>
  );
};
