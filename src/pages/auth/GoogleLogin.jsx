import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { provider, auth } from "../../config/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/");
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app w-screen h-screen flex justify-center items-center">
          <h6 className="head_text mb-5">Sign In With Google</h6>
          <button className="black_btn" onClick={signInWithGoogle}>
            <FontAwesomeIcon icon={faGoogle} className="mr-3 text-lg" />
            <span className="text-lg">Sign In</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default GoogleLogin;
