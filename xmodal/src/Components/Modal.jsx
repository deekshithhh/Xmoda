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

  function handlesubmit() {}

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
          contentLabel="Example Modal"
        >
          <h2>Fill Details</h2>

          <form onClick={handlesubmit}>
            <div style={{ display: "flex", flexDirection: "column", textAlign:'center' }}>
          
              <label>
                Username:
                <input type="text" id="username" required />
              </label>
              <label>
                Email Address:
                <input
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="text"
                  id="phone"
                  pattern="[1-9]{1}[0-9]{9}"
                  required
                />
              </label>
              <label htmlFor="dob">
                Date of Birth:
                <input
                  type="date"
                  id="dob"
                  max='DateTime.Now.ToString("yyyy-MM-dd")'
                  required
                />
              </label>
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
