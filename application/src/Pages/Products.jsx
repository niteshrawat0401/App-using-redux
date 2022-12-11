import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./../Home/Home.module.css";
import { useEffect } from "react";
import { getProductDetails } from "../redux/actions/dataaction";
import axios from "axios";
import { useState } from "react";
export const Products = () => {
  const [data, setData] = useState([]);
  // const {product, isloading, isError}= useSelector((state)=> state.getProductDetails.product)
  // console.log(product);
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  // const dispatch= useDispatch();
  // useEffect(() => {
  //   if (product && id !== product.id)
  //    dispatch(getProductDetails(id));
  // }, [dispatch, id]);

  // useEffect(()=>{
  //       getProductDetails(dispatch(id))
  // })

  useEffect(() => {
    getproductdet();
  }, []);

  function getproductdet() {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <img src={data.image} alt="" />
      <p>
        Title: <span>{data.title}</span>
      </p>
      <p>
        Category: <span>{data.category}</span>
      </p>
      <p>
        Price: <span>{data.price}</span>
      </p>
    </div>
  );
};
