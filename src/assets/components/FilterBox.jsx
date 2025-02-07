import React from "react";

const FilterBox = ({ SetQuery }) => {
  return (
    <div className="filter-box">
      <label>Name / Model</label>
      <input
        className="filter-box-input"
        type="text"
        placeholder="Name / Model"
        onChange={(e) => SetQuery(e.target.value)}
      ></input>
      <button className="filter-button">Filter</button>
    </div>
  );
};

export default FilterBox;
