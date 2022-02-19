import React, { useState } from "react";
import Modal from "react-modal";
import "./Donations.css";

export default function DonationModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const startDonation = () => {};
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>donate</button>
      <Modal isOpen={modalIsOpen} id="donationModal">
        <h2>Thanks for Donating!!</h2>
        <input type="text" placeholder="Enter Donation Amount here"></input>
        <div id="donationControls">
          <button id="confirmAmount">Donate</button>
          <button id="cancelDonation" onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
