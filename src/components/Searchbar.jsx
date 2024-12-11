import React from "react";

const Searchbar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onSetInStockOnly,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search here"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onSetInStockOnly(e.target.checked)}
        />{" "}
        Only Show the products available in stock.
      </label>
    </form>
  );
};

export default Searchbar;
