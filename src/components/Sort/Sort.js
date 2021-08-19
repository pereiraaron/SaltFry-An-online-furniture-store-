import React, { useEffect } from "react";
import "./Sort.css";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import {
  setGridView,
  setListView,
  sortProducts,
} from "../../actions/productScreenActions";

import {
  SORT_HIGHEST_PRICE,
  SORT_LOWEST_PRICE,
  SORT_NAME_A_Z,
  SORT_NAME_Z_A,
} from "../../constants/productScreenConstants";

const Sort = (props) => {
  const unsortedProducts = props.products;

  // const view = useSelector((state) => state.view);
  // const { gridView } = view;

  const productScreen = useSelector((state) => state.productScreen);
  const { filteredProducts, sorttype, gridView } = productScreen;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortProducts(SORT_LOWEST_PRICE, unsortedProducts));
  }, [dispatch, unsortedProducts]);

  return (
    <section className="sort">
      <div className="btn-container">
        <button
          onClick={() => dispatch(setGridView())}
          className={`${gridView ? "active" : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => dispatch(setListView())}
          className={`${!gridView ? "active" : null}`}
        >
          <BsList />
        </button>
      </div>
      <p>{filteredProducts.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          value={sorttype}
          className="sort-input"
          onChange={(e) => {
            dispatch(sortProducts(e.target.value, filteredProducts));
          }}
        >
          <option value={SORT_LOWEST_PRICE}>price (lowest)</option>
          <option value={SORT_HIGHEST_PRICE}>price (highest)</option>
          <option value={SORT_NAME_A_Z}>name (a - z)</option>
          <option value={SORT_NAME_Z_A}>name (z - a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
