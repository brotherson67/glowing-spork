import React, { useState } from "react";
import Modal from "react-modal";
import { useQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";

import "./Donations.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function DonationModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0.0);
  function submitCheckout() {
    const donationIds = [];
  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>donate</button>
      <Modal isOpen={modalIsOpen} id="donationModal">
        <button className="exitX" onClick={() => setModalIsOpen(false)}>
          x
        </button>
        <h2>Thanks for Donating!!</h2>
        <h3>${totalAmount}</h3>
        <div>
          <button
            onClick={() => setTotalAmount(totalAmount + 1)}
            className="amount"
          >
            $1.00
          </button>
          <button
            onClick={() => setTotalAmount(totalAmount + 5)}
            className="amount"
          >
            $5.00
          </button>
          <button
            onClick={() => setTotalAmount(totalAmount + 10)}
            className="amount"
          >
            $10.00
          </button>
        </div>
        <div id="donationControls">
          <button id="confirmAmount" onClick={submitCheckout}>
            Donate
          </button>
          <button id="cancelDonation" onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
