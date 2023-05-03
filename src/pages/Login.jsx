import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogged }) {
  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isLogged", true);
      setIsLogged(true);
      navigate("/");
    });
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-3">
      <p>Sign in with Google</p>
      <button
        onClick={signIn}
        className="btn text-white bg-blue-500 py-1 px-3 text-xl cursor-pointer"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
