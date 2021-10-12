import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = (props) => {
  const { products, addToCart } = props;
  return (
    <div>
      <h2>This is shop</h2>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          addToCart={addToCart}
        ></Product>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
