import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterBox from "./FilterBox";

const Ship = () => {
  const [ships, setShips] = useState([]);
  const [query, setQuery] = useState("");

  const address = "https://swapi.dev/api/starships/";

  useEffect(() => {
    fetch(address)
      .then((res) => res.json())
      .then((data) => setShips(data.results))
      .catch((error) => console.error("API HATASI", error));
  }),
    [];

  const filteredShips = query
    ? ships.filter((ship) =>
        ship.name.toLowerCase().includes(query.toLowerCase())
      )
    : ships;

  return (
    <div className="ships-page">
      <FilterBox SetQuery={setQuery} />

      <div className="ship-container">
        {filteredShips.map((ship, index) => (
          <Link
            key={index}
            to={`/ships/${encodeURIComponent(ship.name)}`}
            className="ship-card"
          >
            <img className="ship-img" src="./public/ship.png"></img>
            <h3>{ship.name}</h3>
            <p>Model: {ship.model}</p>
            <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Ship;
