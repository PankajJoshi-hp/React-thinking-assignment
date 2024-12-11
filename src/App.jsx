import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ProductTable from "./components/ProductTable";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <Searchbar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onSetInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

const App = () => {
  // const ProductIs = PRODUCTS.map((product) => (
  //   <li key={product.name}>{product.category}</li>
  // ));

  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
      {/* <ul>{ProductIs}</ul> */}
    </div>
  );
};

export default App;
