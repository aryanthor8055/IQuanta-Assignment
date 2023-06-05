import React, { useState } from "react";
import "../styles/Main.css";
import Modal from "./Modal";
import ImageHover from "./ImageHover";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="container">
      <div className="sections-container">
        <div className="main-container">
          <div className="head">
            <div className="heading-1">
              <span>
                Hi! <span className="sub-heading-1">I AM</span>
              </span>
              <button className="ui-btn">UI/UX</button>
            </div>
            <div className="heading-2">
              <span>Gafarillo</span>
            </div>
          </div>
          <div className="all-details">
            <p className="para">
              UI/UX Designer with over 3 years of experience
              <br />
              with great product designing skills.
            </p>

            <div>
              <button className="hire-btn">Hire Me</button>
              <span className="email" onClick={handleOpenModal}>
                Email Me
              </span>
              <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <h1>Modal Content</h1>
                <p>This is the content of the modal.</p>
              </Modal>
            </div>
            <div className="detail">
              <h3>3 Years</h3>
              <p className="sub-detail">Experience</p>
            </div>
            <div className="detail-2">
              <div>
                <h3>40+</h3>
                <p className="sub-detail">Projects</p>
              </div>
              <div>
                <h3>Los Angeles</h3>
                <p className="sub-detail">Living Place</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-content">
            <h2>Projects Case Studies</h2>
            <button className="footer-btn">View Behance</button>
          </div>
          <div className="footer-inputs">
            <input type="text" placeholder="Sneaker Store" className="input" />
            <input type="text" placeholder="Flames Fitness" className="input" />
            <input type="text" placeholder="Thenx Store" className="input" />
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          src="./assets/Image.jpg"
          className="img"
          alt=""
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        {isHovered && <ImageHover />}
      </div>
    </div>
  );
};

export default Main;
