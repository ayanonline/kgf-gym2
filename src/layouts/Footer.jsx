import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <hr />
      <div className="footer-container">
        <div className="left">
          <img
            className="footer-logo"
            src="https://res.cloudinary.com/dj1umpbbs/image/upload/v1683716192/kgf_hyexpe.png"
            alt="logo"
          />
        </div>
        <div className="middle">
          <h4>Programs</h4>
          <h4>Membership</h4>
          <h4>Testimonials</h4>
          <h4>Community</h4>
          <h4>Blog</h4>
          <h4>Contact Us</h4>
          <h4>FAQ</h4>
        </div>
        <div className="right">
          <div className="bar"></div>
          <div className="inner-right">
            <h1>gain your change now!</h1>
            <p>
              Stay motivated and engaged with a little help from a supportive
              commutnity of other members
            </p>
            <button className="btn">JOIN NOW</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          COPYRIGHT © 2023 KGF-GYM ALL RIGHT RESERVED. <br /> TERMS OF USE
          PRIVACY POLICY
        </p>
        <div className="social-media">
          <img src="" alt="insta" />
          <img src="" alt="fb" />
        </div>
      </div>
    </>
  );
}

export default Footer;
