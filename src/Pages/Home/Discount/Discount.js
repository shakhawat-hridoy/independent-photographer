import React from "react";
import { Button, Form } from "react-bootstrap";
import "./discount.css";

const Discount = () => {
  return (
    <div className="discount my-4">
      <div
        className="px-5 py-3 d-flex flex-sm-column flex-lg-row align-items-ceter justify-content-around
      border
        rounded"
      >
        <img
          className="my-4"
          height={300}
          src="https://sermondo.com/wp-content/uploads/2020/12/Amazon-Product-Photography.svg"
          alt=""
        />
        <div className="my-4">
          <h3>
            <b>THIS EID!!</b>
          </h3>
          <h6>Flat 20% discount for first 10 customers.</h6>
          <p>
            Don't Miss it,
            <span> Register Now</span>
          </p>
          <p>Register Now</p>
          <Form>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <div>
              <Button className="discount-button" type="submit">
                Prebook
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Discount;
