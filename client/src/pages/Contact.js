import FooterLink from "../components/footer";
import React, { useState } from "react";
import { validateEmail } from "../utils/eamilAuth";
import {FaGithub, FaLinkedinIn, FaMailBulk, FaInstagram } from 'react-icons/fa';
import "../App.css";
import { List, ListItem } from "@mui/material";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  //define handle change to sync the component formstate with user input
  function handleChange(e) {
    //use set form state to update the form state value for the name property
    //the attribute value matches the property names and allows us to use [] to create dynamic property names
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <>
    <h1 data-testid="contact-header" class="contact-header">Contact Us</h1>
    <section id="contact-section">
      <div id='contact-info'> 
      <ul>
          <li id="listLink"> <FaMailBulk /> routes@gmail.com</li>
          <li> <FaGithub /> Plaindemon </li>
          <li id="listLink"> <FaGithub/> bridgetvon</li>
          <li> <FaGithub /> Colawrr </li>
          <li> <FaGithub /> Brotherson67 </li>
          <li> <FaInstagram /> @routes </li>

      </ul>
       </div>
        <div id="contact-div">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                defaultValue={email}
                onBlur={handleChange}
                name="email"
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
        </section>
    </>
  );
}

export default ContactForm;

// function Contact() {
//   return (<div>

// <FooterLink href="https://github.com/Plaindemon">
// <i className="fab fa-github">
//     <span style={{ marginLeft: "10px" }}>
//     Plaindemon- Ben
//     </span>
// </i>
// </FooterLink>
// <FooterLink href="https://github.com/bridgetvon">
// <i className="fab fa-github">
//     <span style={{ marginLeft: "10px" }}>
//     Bridgetvon- Bridget
//     </span>
// </i>
// </FooterLink>
// <FooterLink href="https://github.com/brotherson67">
// <i className="fab fa-github">
//     <span style={{ marginLeft: "10px" }}>
//     Brotherson67- Mitch
//     </span>
// </i>
// </FooterLink>
// <FooterLink href="https://github.com/colawrr">
// <i className="fab fa-github">
//     <span style={{ marginLeft: "10px" }}>
//     Colawrr- Connor
//     </span>
// </i>
// </FooterLink>
// </div>
//   );
// }

// export default Contact;



