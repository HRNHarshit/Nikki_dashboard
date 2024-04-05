import React, { useState, useEffect } from "react";
import "./AddCustomer.css";
import data from "../../data.json";
import { IoAdd } from "react-icons/io5";

const AddCustomer = () => {
  const addCustomerHandler = () => {
    const updatedData = [...jsonData, formData];
    console.log(updatedData);
  };

  const [formData, setFormData] = useState({
    tracking_id: "",
    product_img: "",
    product_name: "",
    customer: "",
    date: "",
    amount: "",
    payment_mode: "Cash on Delivery",
    status: "Canceled",
  });

  const { tracking_id, product_img, product_name, customer, date, amount, payment_mode, status } = formData;

  const productOptions = data.map((item) => item.product_name);
  const uniqueProducts = [...new Set(productOptions)];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomerHandler(formData);
    setFormData({
      tracking_id: "",
      product_name: "",
      customer: "",
      date: "",
      amount: "",
      payment_mode: "Cash on Delivery",
      status: "Canceled",
    });
  };

  return (
    <div className="AddCustomer">
      <h1>Add Customer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product_name">Select Product</label>
          <select id="product_name" name="product_name" value={product_name} onChange={handleInputChange}>
            <option value="">Select Product</option>
            {uniqueProducts.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="customer">Customer Name</label>
          <input type="text" id="customer" name="customer" value={customer} onChange={handleInputChange} required placeholder="Enter Customer Name" />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" value={date} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <div className="amount-input">
            <span>$</span>
            <input type="text" id="amount" name="amount" value={amount} onChange={handleInputChange} required />
          </div>
        </div>

        <div>
          <label htmlFor="payment_mode">Payment Mode</label>
          <select id="payment_mode" name="payment_mode" value={payment_mode} onChange={handleInputChange}>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Transfer Bank">Transfer Bank</option>
          </select>
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select id="status" name="status" value={status} onChange={handleInputChange}>
            <option value="Delivered">Delivered</option>
            <option value="Process">Process</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>

        <button type="submit">
          <IoAdd size={20} /> Add
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
