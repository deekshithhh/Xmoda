
import React, { useState } from "react";
 import "./modal.module.css";

const User = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.phone.value.toString().length !== 10)
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    if(new Date(e.target.dob.value).getTime()>Date.now())
        alert("Invalid date of birth. Date of birth cannot be in future date");
    else{
      e.target.dob.value=" ";
      e.target.phone.value="";
      e.target.email.value="";
      e.target.username.value=""
    }
    
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function FormModel () {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal} className="submit-button">
        Open Form
      </button>
      {isOpen && <User closeModal={closeModal} />}
    </div>
  );
};

