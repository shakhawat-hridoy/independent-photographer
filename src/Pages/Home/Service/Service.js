import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 mb-5">
      <div className="card shadow-lg">
        <img src={img} className=" card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">{price}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-danger">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
