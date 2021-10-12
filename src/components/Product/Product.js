import React from "react";

const Product = (props) => {
  const { addToCart } = props;
  const { name, id } = props.product;
  return (
    <div>
      <h3>Laptop name: {name}</h3>
      <button onClick={() => addToCart(id, name)}>add to cart</button>
    </div>
  );
};

export default Product;
