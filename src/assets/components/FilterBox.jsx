import React from "react";

const FilterBox = () => {
  return (
    <div className="filter-box">
      <label>Name / Model</label>
      <input placeholder="Name / Model"></input>
      <button>Filter</button>
    </div>
  );
};

export default FilterBox;
