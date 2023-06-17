import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";
import Logo from "./images/mit.png";

const Loader = () => {
  return (
    <div className="loader_main">
      <div>
        <img
          src={Logo}
          alt="Logo"
          style={{ marginBottom: "10px", width: "100px", height: "50px" }}
        />
      </div>
      <div className="loader_main_shield">
        <Spinner animation="border" variant="light" size="md" />
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        Sikker forbindelse til MitID
      </div>
      <div>Vent venligst ...</div>
    </div>
  );
};

export default Loader;
