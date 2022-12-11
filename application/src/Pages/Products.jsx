import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css/Product.module.css";
import { useEffect } from "react";
// import { getProductDetails } from "../redux/actions/dataaction";
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
    <div className={style.product_main_container}>
      <img src={data.image} alt="" />
      <div className={style.product_inner_container}>
      <p>
        Title: <span>{data.title}</span>
      </p>
      <p>
        Category: <span>{data.category}</span>
      </p>
      <p>
        Description: <span>{data.description}</span>
      </p>
      <p>
        Price: <span>{data.price}</span>
      </p>
      <button>Add to Cart</button>
      </div>
    </div>
  );
};
