import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const ExtraLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [
    signInWithGoogle,
    userGoogleSignIn,
    loadingGoogleSignIn,
    errorGoogleSignIn,
  ] = useSignInWithGoogle(auth);
  let errorMessage = "";

  let from = location.state?.from?.pathname || "/";

  if (loadingGoogleSignIn) {
    return <Loading></Loading>;
  }
  if (errorGoogleSignIn) {
    errorMessage = (
      <div>
        <p className="text-danger">Error: {errorGoogleSignIn.message}</p>
      </div>
    );
  }

  if (userGoogleSignIn) {
    navigate(from, { replace: true });
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div>
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
      {errorMessage}
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

export default ExtraLogin;
