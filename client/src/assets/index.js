import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT, QUERY_DONATIONS } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { Stripe } from "stripe";

import "./Donations.css";

const stripePromise = new Stripe(
  "pk_test_51KWTWeECvfLj7U3sTBof5piniDzDiC7Zsf7pi3sxpo4CYLByJMdbPhvhhJXZSRntcWH0QsVCp5YnE1jmQNrMN7kc00Bq7Q7ycC"
);

export default function DonationModal() {
  const [getCheckout, { loading, data }] = useLazyQuery(QUERY_CHECKOUT);
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

  // function submitCheckout(donationIdsArray) {
  //   getCheckout({
  //     variables: { donations: donationIdsArray },
  //   });
  // }

  function TEST() {
    setDonationIdsArray.push("6212f2ad0c9dfb6c34e58356");
    console.Console(donationIdsArray);
    console.log(getCheckout);
    getCheckout({
      variables: { donations: donationIdsArray },
    });
  }

  function addOneDollar() {
    setDonationIdsArray.push("6212f2ad0c9dfb6c34e58356");
    setTotalAmount(totalAmount + 1);
  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>donate</button>
      <Modal isOpen={modalIsOpen} id="donationModal">
        <button className="exitX" onClick={() => setModalIsOpen(false)}>
          x
        </button>
        <h1>Thanks for Donating!!</h1>

        <div>
          <button className="amount" onClick={TEST()}>
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
