import React, { useState } from "react";
// CSS
import "./AddCustomer.css";
// Data
import data from "../../data.json";

const AddCustomer = ({ addCustomerHandler }) => {
  const [formData, setFormData] = useState({
    tracking_id: "",
    product_img: "",
    product_name: "",
    customer: "",
    date: "",
    amount: "",
    payment_mode: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData };
    newData.tracking_id = `#${Date.now()}`;
    addCustomerHandler(newData);
    setFormData({
      tracking_id: "",
      product_img: "",
      product_name: "",
      customer: "",
      date: "",
      amount: "",
      payment_mode: "",
      status: "",
    });
  };

  return (
    <div className="AddCustomer">
      <h1>Add Customer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product">
          Select Product
          <input id="product" type="text" name="product_name" value={formData.product_name} onChange={handleChange} />
        </label>
        <label>
          Customer Name:
          <input type="text" name="customer" value={formData.customer} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <label>
          Amount:
          <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
        </label>
        <label>
          Payment Mode:
          <input type="text" name="payment_mode" value={formData.payment_mode} onChange={handleChange} />
        </label>
        <label>
          Status:
          <input type="text" name="status" value={formData.status} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddCustomer;
