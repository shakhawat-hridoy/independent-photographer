import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExtraLogin from "../ExtraLogin/ExtraLogin";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

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

  const [sendPasswordResetEmail, sending, errorPasswordReset] =
    useSendPasswordResetEmail(auth);

  const navigateRegister = () => {
    navigate("/register");
  };
  let errorMessage = "";

  if (loadingEmailSignIn) {
    return <Loading></Loading>;
  }
  if (errorEmailSignIn) {
    errorMessage = (
      <div>
        <p className="text-danger">Error: {errorEmailSignIn.message}</p>
      </div>
    );
  }

  if (userEmailSignIn) {
    navigate(from, { replace: true });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("email sent");
  };

  return (
    <div className="container w-50 mx-auto my-5">
      <h2 className="text-center">Please Login</h2>
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
        {errorMessage}
        <Button variant="dark" type="submit">
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
      <p>
        Forgot password?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-primary"
          onClick={handleResetPassword}
        >
          Reset password
        </span>
      </p>

      {/* extra login option('s) */}
      <ExtraLogin></ExtraLogin>

      {/* For reseting password with toast toast */}
      <ToastContainer />
    </div>
  );
};

export default Login;
