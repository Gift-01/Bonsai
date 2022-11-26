import React from "react";
import { NavLink } from "react-router-dom";
import Bonsai_logo from "../Assets/Bonsai_logo.svg";
import { FiChevronDown } from "react-icons/fi";
import "../styles/Navbar.css";
import Button from "./Button";

export default function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <img src={Bonsai_logo} alt="Logo" className="logo" />
        <div className="main-nav-bar">
          <p>
            Product
            <FiChevronDown />
          </p>
          <p>
            Templates <FiChevronDown />
          </p>
          <NavLink>Pricing</NavLink>
          <NavLink>Reviews</NavLink>
        </div>
        <Button as={"a"} target="_blank" href="https://twitter.com/Adaokoro10" className="button-one">
          LOG IN
        </Button>
        <Button as={"a"} target="_blank" href="https://twitter.com/Adaokoro10">
          START FREE
        </Button>
      </nav>
    </div>
  );
}
