import React from "react";
import "./Footer.css";
import ic1 from "../../assets/sc1.png";
import ic2 from "../../assets/sc2.png";
import ic3 from "../../assets/sc3.png";
import ic4 from "../../assets/sc4.png";
import logo from "../../assets/logo.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-div">
        <img src={logo} alt="logo" />
        <div className="desc-div">
          <h4>SAFE SPACE</h4>
          <p>Rediscover Yourself</p>
          <div className="social">
            <a href="">
              <img src={ic1} alt="" />
            </a>
            <a href="">
              <img src={ic2} alt="" />
            </a>
            <a href="">
              <img src={ic3} alt="" />
            </a>
            <a href="">
              <img src={ic4} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="privacy">
        <h3>PRIVACY POLICY</h3>
        <h3>TERMS OF USE</h3>
      </div>
    </div>
  );
};

export default Footer;
