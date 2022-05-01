import React, { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // load items from server
  useEffect(() => {
    fetch("http://localhost:5000/cars/home")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section>
      {/* banner here */}
      <div className="h-banner container-fluid d-flex justify-content-center align-items-center ">
        <h1 className="h-banner-title display-3 text-uppercase text-center text-light">
          the autostarts wearhouse <br /> limited{" "}
        </h1>
      </div>
      {/* inventoy items here */}
      <div className="container my-5">
        <h3 className="my-5">Recently Listed Vehicles</h3>
        <div className="inventory-items ">
          {items.map((item) => {
            const { name, img, des, price, quantity, supplier, _id } = item;
            return (
              <div className="row mb-5 item" key={_id}>
                <div className="col-lg-4 col-md-4 col-12">
                  {/* item img here */}
                  <img src={img} alt={name} className="img-fluid" />
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                  {/* item ino here */}
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                      <h4 className="item-name bg-light">{name}</h4>
                      <p className="item-des">{des}</p>
                      <p>
                        <b>Supplier : {supplier}</b>
                      </p>
                      <p className="item-quantity">Stocks : {quantity}</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <h4 className="item-price">${price}</h4>
                      <button
                        onClick={() => navigate(`/inventory/${_id}`)}
                        className="update-btn px-3  py-2"
                      >
                        <GrUpdate className="text-light" />
                        <span>Update</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate("/inventory")}
          className="h-navigate-btn p-2"
        >
          Manage Inventories
        </button>
      </div>
    </section>
  );
};

export default Home;
