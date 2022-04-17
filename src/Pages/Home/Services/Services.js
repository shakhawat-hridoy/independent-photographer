import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  console.log("services2222");

  return (
    <div className="container">
      <h2 className="text-primary text-center mt-5" id="services">
        Our Experts
      </h2>
      <div className="">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
