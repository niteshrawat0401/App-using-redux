import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, getData, sortProducts } from "../redux/actions/productaction";
import style from "./Home.module.css";
import { useNavigate, Link } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { products,filterData } = useSelector(
    (state) => state.getProduct
  );
  // console.log(filterData);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getData)
    getData(dispatch);
  }, [dispatch]);

  const addToCart = () => {};
  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value))
  };
  const handleFilter = (e) => {
    dispatch(filterProducts(filterData))
  };


  return (
    <>
    <div className={style.sort_filter_div}>
      <div><select  onChange={handleSort}>
        <option value="">Sort By Price</option>
        <option value="asc">Low to High</option>
        <option value="dec">High to Low</option>
      </select>
      </div>
      <div>
      <select onChange={(e)=>handleFilter(e.target.value)}>
        <option value="">Filter By Category</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Jewelery">Jewelery</option>
        <option value="Electronic">Electronic</option>
      </select>
      </div>
    </div>
      <div className={style.mainContainer}>
        {products.map((ele) => {
          return (
            <div className={style.innerContainer} key={ele.id}>
              <Link to={`product/${ele.id}`}>
                <img src={ele.image} alt="" />
                <p>
                  Title: <span>{ele.title}</span>
                </p>
                <p>
                  Category: <span>{ele.category}</span>
                </p>
                <p>
                  Price: <span>{ele.price}</span>
                </p>
                {/* <button onClick={addToCart}>Add to cart</button> */}
              </Link>
            </div>
          );
        })}
        {/* <div className={style.mainContainer}> */}
        {/* <Products products={products} /> */}
        {/* </div> */}
      </div>
    </>
  );
};
