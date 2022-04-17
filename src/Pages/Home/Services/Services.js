import React, { useEffect, useState } from "react";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => console.log(data)),
    []
  );

  return (
    <div>
      <h2>Services</h2>
    </div>
  );
};

export default Services;
