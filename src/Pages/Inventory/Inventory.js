import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrView } from "react-icons/gr";
import "./Inventory.css";

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
    <section className="singl-item my-5">
      <div className="container">
        {/* for item img */}
        <div>
          <img src={item.img} alt={item.name} />
        </div>
        {/* for item info */}
        <div className="row mt-5">
          <div className="col-lg-8 col-md-8 col-12">
            <h4 className="item-name">{item.name}</h4>
            <h4 className="item-price">${item.price}</h4>
            <p className="item-id">
              <GrView />
              {item._id}
            </p>
            <p>
              <b>Supplier: {item.supplier}</b>
            </p>
            <p className="item-des">{item.des}</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <h3>
              <i>Stokes: {item.quantity}</i>
            </h3>
            <button className="deleverd-btn">Deleverd</button>
            <form className="d-flex flex-column mt-3" style={{ gap: "10px" }}>
              <div>
                <label htmlFor="quantity" className="text-capitalize">
                  restock the item
                </label>
                <input
                  type="number"
                  name="quantity"
                  required
                  className="form-control"
                />
              </div>
              <button type="submit" className="deleverd-btn">
                Restock
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
