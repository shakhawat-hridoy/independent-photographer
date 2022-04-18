import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const Checkout = () => {
  const { serviceId } = useParams();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let grettings = "";
  const [user, loading, error] = useAuthState(auth);

  console.log(user);
  if (loading) {
    return <Loading></Loading>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    return alert("Thankyou for the booking");
  };
  return (
    <div>
      <div className="w-50 mx-auto my-5">
        <div className="mb-4 text-center">
          <h2>Wanna Check Out?</h2>
          <small>Please provide the information below</small>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              value={user.email}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAdress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="text"
              placeholder="Address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="number"
              placeholder="Phone No."
              required
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Confirm
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
