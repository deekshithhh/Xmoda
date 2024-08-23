import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";
import "../Components/modal.module.css";

export default function FormModel() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (e.target.phoneNo.value.toString().length !== 10)
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    if(new Date(e.target.dob.value).getTime()>Date.now())
        alert("Invalid date of birth. Date of birth cannot be in future date");
    else{
      e.target.dob.value=" ";
      e.target.phoneNo.value="";
      e.target.email.value="";
      e.target.username.value=""
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal">
      <h2>User Details Modal</h2>
      <button variant="contained" onClick={openModal}>
        Open Modal
      </button>
      <div className="modal-content">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Form Modal"
        >
          <h2>Fill Details</h2>

          <form onSubmit={handlesubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username" required />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div>
              <label htmlFor="phoneNo">Phone Number:</label>
              <input type="number" name="phoneNo" id="phone" required />
            </div>
            <div>
              <label htmlFor="dob">Username:</label>
              <input type="Date" name="dob" id="dob" required />
            </div>

            <button variant="contained" type="submit">
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
}
