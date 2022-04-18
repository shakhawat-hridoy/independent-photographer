import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const Login = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let errorMessage = "";

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorMessage = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container w-50 mx-auto my-5">
      <h2 className=" text-center">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorMessage}
        <Button variant="dark" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-primary"
          onClick={navigateLogin}
        >
          Please Login
        </span>
      </p>
    </div>
  );
};

export default Login;
