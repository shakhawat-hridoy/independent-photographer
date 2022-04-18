import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="g-4 col-sm-12 col-md-6 col-lg-4 mb-5">
      <div className="card shadow-lg">
        <img height={250} src={img} className=" card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">{price}</h5>
          <p className="card-text">{description}</p>
          <button
            onClick={() => navigateServiceDetail(id)}
            className="btn btn-danger"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
