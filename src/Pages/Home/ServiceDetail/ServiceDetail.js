import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Welcome to service Detail {serviceId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-dark">Confirm Booking</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
