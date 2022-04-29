import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  //   load items by id
  useEffect(() => {
    const url = `http://localhost:5000/cars/home/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  return (
    <section className="singl-item">
      <div className="container">
        {/* for item img */}
        <div>
          <img src={item.img} alt={item.name} />
        </div>
        {/* for item info */}
      </div>
    </section>
  );
};

export default Inventory;
