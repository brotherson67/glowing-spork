import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT, QUERY_DONATIONS } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";

import "./Donations.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function DonationModal() {
  const [getCheckout, { checkoutData }] = useLazyQuery(QUERY_CHECKOUT);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [donationIdsArray, setDonationIdsArray] = useState([]);
  const [getDonations, { donationData }] = useQuery(QUERY_DONATIONS);

  useEffect(() => {
    if (checkoutData) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: checkoutData.checkout.session });
      });
    }
  }, [checkoutData]);

  function submitCheckout(donationIdsArray) {
    getCheckout({
      variables: { donations: donationIdsArray },
    });
  }

  function addOneDollar() {
    setTotalAmount(totalAmount + 1);
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
          <button className="amount">$1.00</button>
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
          <button id="confirmAmount">Donate</button>
          <button id="cancelDonation" onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
