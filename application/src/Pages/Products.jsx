import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import style from "./../Home/Home.module.css";
export const Products = ({ products }) => {
  const {id}= useParams()
  console.log(id);
  const navigate = useNavigate();
  return (
    <>
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
