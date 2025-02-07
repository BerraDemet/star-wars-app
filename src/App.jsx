import { useState } from "react";
import Header from "./assets/components/Header";
import FilterBox from "./assets/components/FilterBox";
import ShipLists from "./assets/components/ShipLists";

function App() {
  return (
    <>
      <div className="header-container">
        <Header />
        <FilterBox />
      </div>
      <ShipLists />
    </>
  );
}

export default App;
