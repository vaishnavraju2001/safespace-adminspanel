import React from "react";
import Logo from "../../assets/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Life Boat" />
        <div className="title">
          <h4>SAFE SPACE</h4>
          <p>Rediscover Yourself</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
