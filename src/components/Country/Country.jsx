import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // if (visited === true) {
    //   setVisited(false);
    // } else setVisited(true);
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name: {country.name.common}</h3>
      <img src={country.flags.png} alt="" />
      <p>Population: {country.population}</p>
      <p>Independence: {country.independent ? "Free" : "Not Free"}</p>
      <button
        className={visited ? "visited" : "not-visiteded"}
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

<h3>Name: </h3>;
export default Country;
