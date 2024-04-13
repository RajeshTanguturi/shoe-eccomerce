import React from "react";
import { Link } from "react-router-dom";
import "../styles/Carousel.scss";

const Shoecard = (props) => {
  return (
    <div className="card shoecard">
      <img src="shoe.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3>
          <span style={{ fontWeight: "lighter" }}>₹</span>
          {props.price}
        </h3>
        <br />
        <h5 className="card-title">
          {props.brand} {props.style}
        </h5>
        <p className="card-text">{props.shoe_description}</p>
      </div>
    </div>
  );
};

export default Shoecard;
