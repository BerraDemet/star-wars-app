import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ShipDetails = () => {
  const { name } = useParams();
  const [ship, setShip] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/?search=${encodeURIComponent(name)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setShip(data.results[0]);
        }
      })
      .catch((error) => console.error("API Hatası:", error));
  }, [name]);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <div className="details-wrapper">
        <div className="details">
          <div className="details-container">
            {ship ? (
              <div>
                <h2>{ship.name}</h2>
                <div className="line"></div>
                <img className="ship-img" src="/ship.png"></img>
                <p>Model: {ship.model}</p>
                <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
                <p>Passangers: {ship.passengers}</p>
                <p>Max Atmosphering Speed: {ship.max_atmosphering_speed} </p>
                <p> Manufacturer: {ship.manufacturer} </p>
                <p> Crew: {ship.crew} </p>
                <p> Cargo Capacity: {ship.cargo_capacity} </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipDetails;
