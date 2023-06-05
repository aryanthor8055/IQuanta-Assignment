import React from "react";
import "../styles/ImageHover.css";

const ImageHover = () => {
  return (
    <div className="image-details">
      <div>
        <h2 className="i-detail-heading">
          Bring Real Life Ideas Into DESIGN Is My Passion
        </h2>
      </div>
      <div className="image-content">
        <div>
          <h3>24 Years</h3>
          <p>Age</p>
        </div>
        <div className="sub-content">
          <div>
            <h3>Harvard</h3>
            <p>University</p>
          </div>
          <div>
            <h3>Photography</h3>
            <p>Hobby</p>
          </div>
        </div>
        <div className="sub-content">
          <div>
            <h3>Los Angeles</h3>
            <p>Living Place</p>
          </div>
          <div>
            <h3>4.0</h3>
            <p>GPA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHover;
