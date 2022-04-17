import React from "react";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";

const Blogs = () => {
  return (
    <div className="container">
      <div className="row mb-5 g-5 gx-lg-5 py-5 px-2">
        <div className="col-12 col-md-6 col-lg-4 p-3 border border-dark rounded-3 shadow-lg">
          <Q1></Q1>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-3 border border-dark rounded-3 shadow-lg">
          <Q2></Q2>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-3 border border-dark rounded-3 shadow-lg">
          <Q3></Q3>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
