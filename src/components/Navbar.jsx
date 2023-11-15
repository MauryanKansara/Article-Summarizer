import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const BackButton = () => {
  return (
    <>
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      <span>Back</span>
    </>
  );
};

const Navbar = ({ buttonName, buttonLink }) => {
  const navigate = useNavigate();
  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // <></>
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <Link to={`/${buttonLink}`} className="black_btn">
        {buttonName === "Back" ? <BackButton /> : buttonName}
      </Link>
      <button className="black_btn" onClick={signUserOut}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
