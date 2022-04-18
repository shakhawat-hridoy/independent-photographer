import React from "react";
import error404 from "../../images/notfound.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <img className="rounded-circle" src={error404} alt="" />
      </div>
      <p className="text-center text-danger">Opss!! Page not found</p>
    </div>
  );
};

export default NotFound;
