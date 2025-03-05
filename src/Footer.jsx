import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div style={{ backgroundColor: "#cce5ff", padding: "20px" }} className="d-flex flex-wrap justify-content-around mt-5">
      <div>
        <ul className="list-unstyled">
          <h5>Company</h5>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Privacy Policy</li>
          <li>Affiliate Program</li>
        </ul>
      </div>

      <div>
        <ul className="list-unstyled">
          <h5>Get Help</h5>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Order Status</li>
          <li>Payment Options</li>
        </ul>
      </div>

      <div>
        <ul className="list-unstyled">
          <h5>Online Shop</h5>
          <li>Sweaters</li>
          <li>Bag</li>
          <li>Jewellery</li>
          <li>Dress</li>
        </ul>
      </div>

      <div className="text-center">
        <h5>Follow Us</h5>
        <ul className="list-unstyled d-flex gap-3 justify-content-center">
          <li><FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#4267B2" }} /></li>
          <li><FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "#1DA1F2" }} /></li>
          <li><FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#C13584" }} /></li>
          <li><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#0077B5" }} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
