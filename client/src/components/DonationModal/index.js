import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";

import "./Donations.css";

const stripePromise = loadStripe(
  "sk_test_51KWTWeECvfLj7U3sUDWHhAEbb1Nhp7U3cGsISXgF2v7hRbAQPbfTP76U1GxMHkVRlTHZRMuvTV5eFAwENWEWTIKk00DEyp6YCE"
);

export default function DonationModal() {
  const [checkout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [donationIdsArray, setDonationIdsArray] = useState([]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function TEST() {
    setDonationIdsArray("6212f2ad0c9dfb6c34e58356");
    console.log(donationIdsArray);
    // console.log(getCheckout);
    checkout({
      variables: { donations: donationIdsArray },
    });
    console.log(data);
  }

  return (
    <div>
      <script src="https://js.stripe.com/v3" async></script>
      <button onClick={() => setModalIsOpen(true)}>donate</button>
      <Modal isOpen={modalIsOpen} id="donationModal">
        <button className="exitX" onClick={() => setModalIsOpen(false)}>
          x
        </button>
        <h1>Thanks for Donating!!</h1>

        <div>
          <button
            className="amount"
            onClick={() => {
              TEST();
            }}
          >
            <h3>$1.00</h3>
          </button>
          <button
            onClick={() => setTotalAmount(totalAmount + 5)}
            className="amount"
          >
            <h3>$5.00</h3>
          </button>
          <button
            onClick={() => setTotalAmount(totalAmount + 10)}
            className="amount"
          >
            <h3>$10.00</h3>
          </button>
        </div>
        <div id="donationControls">
          <button id="cancelDonation" onClick={() => setModalIsOpen(false)}>
            <h5>Cancel</h5>
          </button>
        </div>
      </Modal>
    </div>
  );
}
