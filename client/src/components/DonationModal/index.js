import React, { useState } from "react";
import Modal from "react-modal";
import "./Donations.css";

export default function DonationModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>donate</button>
      <Modal isOpen={modalIsOpen} id="donationModal">
        <h2>Thanks for Donating!!</h2>
        <input type="text"></input>
        <div>
          <button onClick={() => setModalIsOpen(false)}> Close</button>
        </div>
      </Modal>
    </div>
  );
}
