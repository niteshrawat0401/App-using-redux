import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import style from "./../Home/Home.module.css";
import { useEffect } from "react";
import { getProductDetails } from "../redux/actions/dataaction";
export const Products = () => {
  // const {product, isloading, isError}= useSelector((state)=> state.getProductDetails.product)
  // console.log(product);
  const {id}= useParams()
  // console.log(id);
  const navigate = useNavigate();
  const dispatch= useDispatch();
  // useEffect(() => {
  //   if (product && id !== product.id)
  //    dispatch(getProductDetails(id));
  // }, [dispatch, id]);

  // useEffect(()=>{
  //       getProductDetails(dispatch(id))
  // })
  return (
    <>
    Produt
      {/* {products.map((ele) => (
        <div className={style.innerContainer} key={ele.id} > 
        <Link to={`product/${ele.id}`}>
          <img src={ele.image} alt="" />
          <p>
            Runtime: <span>{ele.title}</span>
          </p>
          <p>
            Title: <span>{ele.category}</span>
          </p>
          <p>
            Year: <span>{ele.price}</span>
          </p>
        </Link>
        </div>
      ))} */}
    </>
  );
};
