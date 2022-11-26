import React from "react";
import Navbar from "../Components/Navbar";
import { BsToggleOn } from "react-icons/bs";
import Free_text from "../Assets/Free_text.svg";
import "../styles/Navbar.css";
import PriceTag from "../Components/PriceTag";
import { FiChevronDown } from "react-icons/fi";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mid-sect">
        <h1 className="first-mid-sect"> Plans & Pricing</h1>
        <p className="mid-sect-text">MONTHLY</p>
        <BsToggleOn className="Toggle-icon" />
        <p className="mid-sect-text-one">YEARLY</p>
        <img src={Free_text} alt="free_text" className="free-text" />
      </div>
      <PriceTag />
      <div className="tips">
        <div>
          <p className="tips-text">
            It’s <bold> your </bold>business.
          </p>
          <p className="tips-text"> We’re here to help it grow.</p>
        </div>
        <button className="tips-text-btn"> Free</button>
      </div>
      <div className="Faq">
        <h2 className="first-faq"> Frequently Asked Questions</h2>
        <p>
          {" "}
          How does the free trial work? <FiChevronDown />{" "}
        </p>
        <p>
          {" "}
          Can i change plans anytime? <FiChevronDown />
        </p>
        <p>
          {" "}
          How do i pause my Bonsai subscription? <FiChevronDown />
        </p>
        <p>
          {" "}
          What is your refund policy? <FiChevronDown />
        </p>
      </div>
    </div>
  );
};
export default HomePage;
