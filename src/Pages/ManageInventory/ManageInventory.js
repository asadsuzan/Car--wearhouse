import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  let x = 0;
  // load all items
  useEffect(() => {
    fetch("http://localhost:5000/cars/all")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section className="manage-inventory">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-5">
          <div className="fs-3 ">All The Items You Are Managing</div>
          <div
            className="bg-orangered text-light shadow-lg p-2"
            style={{ cursor: "pointer" }}
          >
            <BsPlusLg />
            <span className="pe-1 "> ADD NEW ITEM</span>
          </div>
        </div>

        {/* all items here */}

        <Table hover bordered className="my-5">
          <thead className="shadow-lg">
            <tr>
              <th>Item</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const { name, img, supplier, quantity, price } = item;
              return (
                <tr>
                  <td>
                    <img src={img} alt="pd" width={"50px"} />
                    <span className="pe-2"> {name}</span>
                  </td>
                  <td>{supplier}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td title="REMOVE ITEM">
                    <button className="text-danger border-0 delet-btn">
                      {" "}
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default ManageInventory;
