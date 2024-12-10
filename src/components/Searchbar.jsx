import React from "react";

const Searchbar = () => {
  return (
    <form>
      <input type="text" placeholder="Search here" />
      <br />
      <label>
        <input type="checkbox" /> Only Show the products available in stock.
      </label>
    </form>
  );
};

export default Searchbar;
