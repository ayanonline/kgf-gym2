import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="flex justify-between contact-container">
      <div className="form-group ">
        <h3>Contact Us</h3>
        <p>We usually respond before 24 hours</p>
        <form action="" className="flex flex-col">
          <input type="text" name="name" id="" placeholder="Name" />
          <input type="text" name="email" id="" placeholder="Emal" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
      <div className="address">
        <h2>KGF GYM</h2>
        <p>Address</p>
        <p className="address-item">Email Address</p>
        <p>sample@gmail.com</p>
        <p className="address-item">Phone Number</p>
        <p>+91 23232323243</p>
      </div>
    </section>
  );
};

export default Contact;
