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
    <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="container flex flex-col items-center justify-center mt-10 gap-3">
        <div className="my-5 bg-white py-20 px-10 rounded-md flex flex-col items-center">
          <label className="text-xl">Sign in with Google to Continue</label>
          <button
            onClick={signIn}
            className="w-full text-center py-3 my-3 px-3 border flex space-x-2 items-center justify-center border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-8 h-8"
              alt=""
            />
            <span className="text-xl">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
