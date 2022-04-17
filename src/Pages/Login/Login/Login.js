import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    userEmailSignIn,
    loadingEmailSignIn,
    errorEmailSignIn,
  ] = useSignInWithEmailAndPassword(auth);
  const [
    signInWithGoogle,
    userGoogleSignIn,
    loadingGoogleSignIn,
    errorGoogleSignIn,
  ] = useSignInWithGoogle(auth);

  const navigateRegister = () => {
    navigate("/register");
  };

  if (errorEmailSignIn || errorGoogleSignIn) {
    <div>
      <p className="text-danger">Error: {errorGoogleSignIn.message}</p>
    </div>;
  }

  if (userEmailSignIn || userGoogleSignIn) {
    navigate(from, { replace: true });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div className="container w-50 mx-auto my-5">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleLogin}>
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
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <p>
        New to Photographer?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-primary"
          onClick={navigateRegister}
        >
          Please Register
        </span>
      </p>

      {/* extra login option('s) */}
      <div className="d-flex align-items-center my-4">
        <div
          style={{ border: "1px solid black", width: "50%", height: "0.1px" }}
        ></div>
        <span className="mx-2">
          <b>or</b>
        </span>
        <div
          style={{ border: "1px solid black", width: "50%", height: "0.1px" }}
        ></div>
      </div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-dark border border-dark p-2"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
