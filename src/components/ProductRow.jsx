import React from "react";

const ProductRow = ({ product }) => {
  const name = !product.stocked ? (
    <span style={{ color: "red" }}>{product.name}</span>
  ) : (
    product.name
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
