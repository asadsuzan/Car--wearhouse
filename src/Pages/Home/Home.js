import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  // load items from server
  useEffect(() => {
    fetch("http://localhost:5000/cars/home")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section>
      {/* banner here */}
      <div className="h-banner d-flex justify-content-center align-items-center ">
        <h1 className="h-banner-title display-3 text-uppercase text-center text-light">
          the autostarts wearhouse <br /> limited{" "}
        </h1>
      </div>
      {/* inventoy items here */}
    </section>
  );
};

export default Home;
